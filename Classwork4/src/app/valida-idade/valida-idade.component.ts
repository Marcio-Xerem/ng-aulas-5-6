import { Component, signal } from '@angular/core';
import { MostraCervejariasComponent } from '../mostra-cervejarias/mostra-cervejarias.component';
import { MostraMensagemMenorIdadeComponent } from '../mostra-mensagem-menor-idade/mostra-mensagem-menor-idade.component';

@Component({
  selector: 'app-valida-idade',
  imports: [MostraCervejariasComponent, MostraMensagemMenorIdadeComponent],
  templateUrl: './valida-idade.component.html',
  styleUrl: './valida-idade.component.css'
})
export class ValidaIdadeComponent {
  ehMenor = true;

  idadeConsumidor = signal(0);

  setIdadeUsuario(){
    let vIdade = document.getElementById('idade_usuario') as HTMLInputElement;
    this.idadeConsumidor.set(Number(vIdade.value));
    if (this.idadeConsumidor() < 18 ) {
      this.ehMenor = true
    }
    else {
      this.ehMenor = false
    }
  }   
}
