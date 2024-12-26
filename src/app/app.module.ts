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
import { CarroselComponent } from './components/carrosel/carrosel.component';
import { ModalOnInitComponent } from './shared/modal-on-init/modal-on-init.component';
import { FooterComponent } from './components/footer/footer.component';
import { PagesGroupComponent } from './components/pages-group/pages-group.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    CarroselComponent,
    ModalOnInitComponent,
    FooterComponent,
    PagesGroupComponent
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
