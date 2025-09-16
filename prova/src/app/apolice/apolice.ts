import { Component } from '@angular/core';

@Component({
  selector: 'app-apolice',
  standalone: false,
  templateUrl: './apolice.html',
  styleUrl: './apolice.css'
})
export class Apolice {
  nome: string = '';
  sexo: string = '';
  idade: number = 0;
  valorAutomovel: number = 0;
  apolice: number = 0;

  calcularApolice(): void {
    if (this.sexo === 'M' && this.idade <= 25) {
      this.apolice = this.valorAutomovel * 0.15;
  }
    if (this.sexo === 'M' && this.idade > 25) {
      this.apolice = this.valorAutomovel * 0.10;
  }
    if (this.sexo === 'F') {
      this.apolice = this.valorAutomovel * 0.08;
  }
}
}
