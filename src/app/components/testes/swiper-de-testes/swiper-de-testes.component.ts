import { Component, Renderer2, AfterViewInit } from '@angular/core';
import {
  ChangeDetectionStrategy,
  OnInit,
  ChangeDetectorRef,
  ViewEncapsulation,
} from '@angular/core';
import axios from 'axios';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

interface SwipperData {
  iFrame: any;
}

@Component({
  selector: 'app-swiper-de-testes',
  templateUrl: './swiper-de-testes.component.html',
  styleUrl: './swiper-de-testes.component.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SwiperDeTestesComponent {
  typeview: string = 'soundcloud'; // Inicializa com SoundCloud
  viewModeTxt: string = 'SoundCloud (estável)';

  // Breakpoints para o swiper (responsividade)
  breakpoints = {
    0: { slidesPerView: 1, spaceBetween: 60 },
    660: { slidesPerView: 2, spaceBetween: 60 },
    950: { slidesPerView: 3, spaceBetween: 60 },
  };

  //variáveis que ficarão salvos os iframes retornados do gist
  databaseSoundCloud: SafeHtml[] = [];
  databaseYouTube: SafeHtml[] = [];

  // Controlando os iframes exibidos
  displayedIframes: SafeHtml[] = [];

  constructor(
    private sanitizer: DomSanitizer,
    private changeDetector: ChangeDetectorRef,
    private renderer: Renderer2
  ) {}

  ngOnInit() {
    this.getIAllIframesFromGist();
  }

  // Variáveis para controlar o carregamento
  currentBatchIndex = 0;
  batchSize = 3 + 1;

  // Função para carregar o próximo lote de iframes
  loadNextBatch() {
    const startIndex = this.currentBatchIndex * this.batchSize;
    const endIndex = startIndex + this.batchSize;

    const currentDatabase =
      this.typeview === 'soundcloud'
        ? this.databaseSoundCloud
        : this.databaseYouTube;

    const newBatch = currentDatabase.slice(startIndex, endIndex);
    this.displayedIframes = [...this.displayedIframes, ...newBatch];

    this.currentBatchIndex++;

    // Notifique a detecção de mudanças
    this.changeDetector.detectChanges();
  }

  //função para capturar as setinhas do swiper no DOM, e adicionar funções
  ngAfterViewInit() {
    setTimeout(() => {
      const nextButton = this.renderer.selectRootElement(
        '.swiper-button-next',
        true
      );
      const prevButton = this.renderer.selectRootElement(
        '.swiper-button-prev',
        true
      );

      this.renderer.listen(nextButton, 'click', () => {
        console.log('Próximo slide');
        //this.loadNextBatch();
      });
      this.renderer.listen(prevButton, 'click', () => {
        console.log('Slide anterior');
      });
    }, 2);
  }

  // Função para alternar entre SoundCloud e YouTube
  setTypeView(type: string) {
    this.typeview = type;
    this.viewModeTxt =
      type === 'soundcloud' ? 'SoundCloud (estável)' : 'YouTube (beta)';
    this.currentBatchIndex = 0;
    this.displayedIframes = [];
    this.loadNextBatch(); // Carregar o primeiro lote
    this.changeDetector.detectChanges();
  }

  // Carregar todos os iframes do SoundCloud e YouTube
  getIAllIframesFromGist() {
    this.getIframesFromSoundCloud();
    this.getIframesFromYouTube();
  }

  // Carregar iframes do SoundCloud
  getIframesFromSoundCloud() {
    axios
      .get(
        'https://gist.githubusercontent.com/Maurici0M/19d65c2e42f42d69bd30cf22786377c7/raw/a4d46dd60d029ced9c56b7af1bc1a894a8382014/database.json'
      )
      .then((response) => {
        const swipperDatabase = response.data;
        this.databaseSoundCloud = swipperDatabase.iframes.map(
          (data: SwipperData) =>
            this.sanitizer.bypassSecurityTrustHtml(data.iFrame)
        );
        this.shuffleArray(this.databaseSoundCloud);
        this.loadNextBatch(); // Carregar o primeiro lote de iframes
      })
      .catch((error) => {
        console.error('Erro ao carregar os dados do Gist (SoundCloud):', error);
      });
  }

  // Carregar iframes do YouTube
  getIframesFromYouTube() {
    axios
      .get(
        'https://gist.githubusercontent.com/Maurici0M/19d65c2e42f42d69bd30cf22786377c7/raw/92c2eee7783e83580b6c82b842f83e8a10183412/database-youtube.json'
      )
      .then((response) => {
        const swipperDatabase = response.data;
        this.databaseYouTube = swipperDatabase.iframes.map(
          (data: SwipperData) =>
            this.sanitizer.bypassSecurityTrustHtml(data.iFrame)
        );
        this.shuffleArray(this.databaseYouTube);
        this.loadNextBatch(); // Carregar o primeiro lote de iframes
      })
      .catch((error) => {
        console.error('Erro ao carregar os dados do Gist (YouTube):', error);
      });
  }

  // Função para embaralhar os dados
  shuffleArray(array: any[]) {
    for (let index = array.length - 1; index > 0; index--) {
      const random = Math.floor(Math.random() * (index + 1));
      [array[index], array[random]] = [array[random], array[index]];
    }
  }
}
