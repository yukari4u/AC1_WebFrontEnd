import { Component } from '@angular/core';

@Component({
  selector: 'app-conversor-temperatura',
  standalone: false,
  templateUrl: './conversor-temperatura.html',
  styleUrl: './conversor-temperatura.css'
})
export class ConversorTemperatura {
  celsius: number = 0;
  fahrenheit: number = 0;
  kelvin: number = 0;

  converter(): void{
    this.fahrenheit = (this.celsius * 9/5) + 32;
    this.kelvin = Number(this.celsius) + 273.15;
  }
}
