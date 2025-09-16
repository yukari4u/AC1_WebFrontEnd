import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora-imc',
  standalone: false,
  templateUrl: './calculadora-imc.html',
  styleUrl: './calculadora-imc.css'
})
export class CalculadoraIMC {
  peso: number = 0;
  altura: number = 0;
  imc: number = 0;

  calcularIMC(): void {
    this.imc = this.peso / (this.altura * this.altura);

    if (this.imc < 18.5) {
      alert(`Seu IMC é ${this.imc.toFixed(2)} (Abaixo do peso)`);
    }
    if (this.imc >= 18.5 && this.imc < 24.9) {
      alert(`Seu IMC é ${this.imc.toFixed(2)} (Peso normal)`);
    }
    if (this.imc >= 25 && this.imc < 29.9) {
      alert(`Seu IMC é ${this.imc.toFixed(2)} (Sobrepeso)`);
    }
    if (this.imc >= 30 && this.imc < 34.9) {
      alert(`Seu IMC é ${this.imc.toFixed(2)} (Obesidade grau I)`);
    }
    if (this.imc >= 35 && this.imc < 39.9) {
      alert(`Seu IMC é ${this.imc.toFixed(2)} (Obesidade grau II)`);
    }
    if (this.imc >= 40) {
      alert(`Seu IMC é ${this.imc.toFixed(2)} (Obesidade grau III)`);
    }
  }
}
