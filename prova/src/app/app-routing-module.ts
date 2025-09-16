import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CalculadoraMedia } from './calculadora-media/calculadora-media';
import { Apolice } from './apolice/apolice';
import { CalculadoraIMC } from './calculadora-imc/calculadora-imc';
import { ConversorTemperatura } from './conversor-temperatura/conversor-temperatura';

const routes: Routes = [
  { path: '', redirectTo: 'calculadora-media', pathMatch: 'full' },
  {path: 'calculadora-media', component: CalculadoraMedia},
  {path: 'apolice', component: Apolice},
  {path: 'calculadora-imc', component: CalculadoraIMC},
  {path: 'conversor-temperatura', component: ConversorTemperatura}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
