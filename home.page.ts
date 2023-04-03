import { Component } from '@angular/core';

import { AlertController } from '@ionic/angular';

import { TabelaPreco, TabelaDesconto } from './tabela';

interface IonSel extends Event {
  detail?: {
      value: string;
  };
}

interface IonIn{
  target?: {
      value: string;
  };
}


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  tipo_envio: IonSel | undefined;
  tempo: number = 0
  tempo_final: number = this.tempo
  valor_final?: number;
  ValorComDesconto?: number;
  peso: number = 0
  distancia: number = 0
  desconto: number = 0


  desconto_front = { TabelaPreco, TabelaDesconto }

  constructor(public allertController: AlertController) {

  }

  getValue(event: any , type: 'p' | 'd'){
    if(type === 'p' && event.target?.value != undefined){
      this.peso = parseFloat(event.target?.value)
    }
    else if(type === 'd' && event.target?.value != undefined){
      this.distancia = parseFloat(event.target?.value)
    }
  }

   async Calcular(){
    let tributo: number = 0
    let multiplicador: number = 0
    if (this.tipo_envio?.detail?.value === 'Comum') {tributo = TabelaPreco.Comum.tributo; multiplicador = TabelaPreco.Comum.multiplicador}
    else if (this.tipo_envio?.detail?.value === 'Expressa') {tributo = TabelaPreco.Expresso.tributo; multiplicador = TabelaPreco.Expresso.multiplicador}
    else if (this.tipo_envio?.detail?.value === 'Agendado')  {tributo = TabelaPreco.Agendado.tributo; multiplicador = TabelaPreco.Agendado.multiplicador}


    if(this.peso >= 100){
      this.desconto = TabelaDesconto.kg100
    }
    else if (this.peso >= 50){
      this.desconto = TabelaDesconto.kg50
    }
    else if(this.peso >= 10){
      this.desconto = TabelaDesconto.kg10
    }
    this.desconto = (this.desconto * this.peso) / 100

    this.valor_final = (this.peso * multiplicador + (this.distancia * 0.6)) + tributo

    this.ValorComDesconto = this.valor_final - this.desconto

      return this.valor_final;
   }

}
