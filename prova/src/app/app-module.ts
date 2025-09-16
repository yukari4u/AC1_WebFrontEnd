import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { CalculadoraMedia } from './calculadora-media/calculadora-media';
import { Apolice } from './apolice/apolice';
import { ConversorTemperatura } from './conversor-temperatura/conversor-temperatura';
import { CalculadoraIMC } from './calculadora-imc/calculadora-imc';
import { Menu } from './menu/menu';

@NgModule({
  declarations: [
    App,
    CalculadoraMedia,
    Apolice,
    ConversorTemperatura,
    CalculadoraIMC,
    Menu
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
