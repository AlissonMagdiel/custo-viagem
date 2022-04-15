import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  precoDaGasolina: number = 0;
  distanciaDaViagem: number =0;
  consumoDoVeiculo: number =0;
  gastoDaViagem: number =0;

  constructor() {}

    calcularGastoDaViagem(){
      let totalCombustivelParaViagem =  this.distanciaDaViagem / this.consumoDoVeiculo;
      this.gastoDaViagem = totalCombustivelParaViagem * this.precoDaGasolina;
    }
}
