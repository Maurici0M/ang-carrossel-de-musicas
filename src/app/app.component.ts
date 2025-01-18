import { Component, Input, Output, EventEmitter, OnInit, inject } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';

import { ModalOnInitComponent } from './shared/modal-on-init/modal-on-init.component';
import { ScreenSizeDetectorService } from './services/screen-size-detector.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  textPrimary: string = 'Seja feliz, e escute as músicas que preparei para você. 🎧';
  textSecondary: string = 'Use as setinhas para ver mais músicas, é só clicar e ouvir! 😉';
  textSecondaryFromMobile: string = 'Use as setinhas para ver mais músicas, clique em "ouvir no navegador" e pronto! 😉'

  props: any = {
    textPrimary: this.textPrimary,
    textSecondary: this.textSecondary,
    textSecondaryFromMobile: this.textSecondaryFromMobile
  }

  @Output() primaryButton = new EventEmitter<any>;
  teste(){
    this.primaryButton.emit()
  }

  //modal
  readonly dialog = inject(MatDialog);

  openModal(
    enterAnimationDuration: string,
    exitAnimationDuration: string
  ): void {
    this.dialog.open(ModalOnInitComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  mobileMode: boolean = false;

  constructor(private screenSize: ScreenSizeDetectorService) { }

  ngOnInit(): void {
    this.mobileMode = this.screenSize.isMobileMode()
    this.openModal('250ms', '150ms');
  }




}
