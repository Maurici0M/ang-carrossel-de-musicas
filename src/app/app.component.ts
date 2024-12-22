import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ang-carrosel-de-musicas';

  textPrimary: string = 'Seja feliz, e escute as músicas que preparei para você. 🎧';
  textSecondary: string = 'Use as setinhas para ver mais músicas, é só clicar e ouvir! 😉';

  props: any = {
    textPrimary: this.textPrimary,
    textSecondary: this.textSecondary
  }
}
