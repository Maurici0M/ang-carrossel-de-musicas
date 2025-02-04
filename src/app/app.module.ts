import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltip } from '@angular/material/tooltip';


import { SwiperModule } from 'swiper/angular';
// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

import axios from 'axios';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './shared/toolbar/toolbar.component';
import { ModalOnInitComponent } from './shared/modal-on-init/modal-on-init.component';
import { FooterComponent } from './components/footer/footer.component';
import { PagesGroupComponent } from './components/pages-group/pages-group.component';
import { CarrosselComponent } from './components/carrossel/carrossel.component';
import { SwiperDeTestesComponent } from './components/testes/swiper-de-testes/swiper-de-testes.component';
import { CloneSwiperClassicoComponent } from './components/testes/clone-swiper-classico/clone-swiper-classico.component';
import { ModalInfoSiteVersionComponent } from './shared/modal-info-site-version/modal-info-site-version.component';
import { DateTimeDisplayComponentComponent } from './shared/date-time-display-component/date-time-display-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    CarrosselComponent,
    ModalOnInitComponent,
    FooterComponent,
    PagesGroupComponent,
    SwiperDeTestesComponent,
    CloneSwiperClassicoComponent,
    ModalInfoSiteVersionComponent,
    DateTimeDisplayComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    SwiperModule,
    MatTooltip

  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
