import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Input,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';

import { ChangeDetectorRef } from '@angular/core';

// Imports do Angular Material
import { MatDialog } from '@angular/material/dialog';

// Imports dos serviços do Axios
import axios from 'axios';
import { response } from 'express';
import { error } from 'console';

import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { SecurityContext } from '@angular/core'; // Importe SecurityContext de @angular/core

// Imports de componentes do projeto
import { ModalOnInitComponent } from '../../shared/modal-on-init/modal-on-init.component';

// Import dos database mocados
import swipperDbLocalFromSoundCloud from '../../../database/swipper-database.json';
import swipperDbLocalFromYouTube from '../../../database/yt-swipper-database.json';

interface SwipperData {
  iFrame: any;
}

@Component({
  selector: 'app-carrossel',
  templateUrl: './carrossel.component.html',
  styleUrl: './carrossel.component.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class CarrosselComponent {
  typeview: string = 'soundcloud'; // Iniciar com SoundCloud
  viewModeTxt: string = 'SoundCloud (estável)';

  // Notifique a detecção de mudanças
  setTypeView(type: string) {
    this.typeview = type;
    this.viewModeTxt = type === 'soundcloud' ? 'SoundCloud (estável)' : 'YouTube (beta)';
    this.changeDetector.detectChanges();
  }

  //breakpoints do swipper (responsividade)
  breakpoints = {
    0: { slidesPerView: 1, spaceBetween: 60 },
    660: { slidesPerView: 2, spaceBetween: 60 },
    950: { slidesPerView: 3, spaceBetween: 60 },
  };

  constructor(
    private sanitizer: DomSanitizer,
    private changeDetector: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.getIAllIframesFromGist();

    //chamar o database mockado (descomitar a linha abaixo e comitar a de cima)
    //this.getIframesFromDatabaseLocal();
  }

  databaseSoundCloud: SafeHtml[] = [];

  databaseYouTube: SafeHtml[] = [];

  //chamamento dos iframes
  getIframesFromSoundCloud() {
    axios
      .get(
        'https://gist.githubusercontent.com/Maurici0M/19d65c2e42f42d69bd30cf22786377c7/raw/a4d46dd60d029ced9c56b7af1bc1a894a8382014/database.json'
      )
      .then((response) => {
        const swipperDatabase = response.data;
        //console.log('Dados do Gist:', swipperDatabase);
        this.databaseSoundCloud = swipperDatabase.iframes.map(
          (data: SwipperData) => {
            const sanitized = this.sanitizer.bypassSecurityTrustHtml(
              data.iFrame
            );
            //console.log('Sanitized iFrame:', sanitized);
            return sanitized;
          }
        );
        //console.log('Database:', this.database);
        this.shuffleArray(this.databaseSoundCloud);
        // Notifique a detecção de mudanças
        this.changeDetector.detectChanges();
      })
      .catch((error) => {
        console.error('Erro ao carregar os dados do Gist:', error);
      });
  }

  getIframesFromYouTube() {
    axios
      // .get(
      //   'https://gist.githubusercontent.com/Maurici0M/19d65c2e42f42d69bd30cf22786377c7/raw/4e4854defb889ae6a32d4cb7020d46034220bfad/database-youtube.json'
      // )

      .get('https://gist.githubusercontent.com/Maurici0M/19d65c2e42f42d69bd30cf22786377c7/raw/92c2eee7783e83580b6c82b842f83e8a10183412/database-youtube.json')
      .then((response) => {
        const swipperDatabase = response.data;
        //console.log('Dados do Gist:', swipperDatabase);
        this.databaseYouTube = swipperDatabase.iframes.map(
          (data: SwipperData) => {
            const sanitized = this.sanitizer.bypassSecurityTrustHtml(
              data.iFrame
            );
            //console.log('Sanitized iFrame:', sanitized);
            return sanitized;
          }
        );
        //console.log('Database:', this.database);
        this.shuffleArray(this.databaseYouTube);
        // Notifique a detecção de mudanças
        this.changeDetector.detectChanges();
      })
      .catch((error) => {
        console.error('Erro ao carregar os dados do Gist:', error);
      });
  }

  getIAllIframesFromGist() {
    this.getIframesFromSoundCloud();
    this.getIframesFromYouTube();
  }

  //chamamento dos iframes usando os dados locais salvos na pasta database
  getIframesFromDatabaseLocal() {
    //trocar o valor do database para o import que desejar (SoundCloud / YouTube)
    this.databaseSoundCloud = swipperDbLocalFromYouTube.iframes.map(
      (data: SwipperData) => this.sanitizer.bypassSecurityTrustHtml(data.iFrame)
    );

    this.shuffleArray(this.databaseSoundCloud);
  }

  //função de embraralhamento dos iframes
  shuffleArray(array: any[]) {
    for (let index = array.length - 1; index > 0; index--) {
      const randon = Math.floor(Math.random() * (index + 1));
      [array[index], array[randon]] = [array[randon], array[index]];
    }
  }
}
