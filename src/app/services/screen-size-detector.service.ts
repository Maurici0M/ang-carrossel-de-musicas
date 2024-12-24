import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})

export class ScreenSizeDetectorService {
  private mobileMode = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      this.updateMobileMode(window.innerWidth);
      window.addEventListener('resize', this.onResize.bind(this));
    }
  }

  onResize(event: any) {
    this.updateMobileMode(event.target.innerWidth);
  }

  updateMobileMode(width: number) {
    //somente a partir de 1280px o iframe deixa de aparecer a msg "ouvir no navegador"
    //assim, no restante queremos que ative a opção de texto ngIf mobileMode no app component
    this.mobileMode = width <= 1279;
  }

  isMobileMode() {
    return this.mobileMode;
  }
}
