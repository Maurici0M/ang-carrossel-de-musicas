import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { ScreenSizeDetectorService } from '../../services/screen-size-detector.service';

@Component({
  selector: 'app-pages-group',
  templateUrl: './pages-group.component.html',
  styleUrl: './pages-group.component.scss'
})
export class PagesGroupComponent {
  textPrimary: string = 'Seja feliz, e escute as músicas que preparei para você. 🎧';
  textSecondary: string = 'Use as setinhas para ver mais músicas, é só clicar e ouvir! 😉';
  textSecondaryFromMobile: string = 'Use as setinhas para ver mais músicas, clique em "ouvir no navegador" e pronto! 😉'

  @Output() primaryButton = new EventEmitter<any>;

  props: any = {
    textPrimary: this.textPrimary,
    textSecondary: this.textSecondary,
    textSecondaryFromMobile: this.textSecondaryFromMobile
  }

  mobileMode: boolean = false;

  constructor(private screenSize: ScreenSizeDetectorService) { }

  ngOnInit(): void {
    this.mobileMode = this.screenSize.isMobileMode()
  }

}
