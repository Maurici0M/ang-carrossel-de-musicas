import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time-display-component',
  templateUrl: './date-time-display-component.component.html',
  styleUrl: './date-time-display-component.component.scss',
})
export class DateTimeDisplayComponentComponent {
  mensagem!: string;
  horaAtual!: Date | string;
  dataAtual!: Date | string;
  intervalId: any;

  ngOnInit(){
    this.atualizarHora();
    }

  atualizarHora() {
    const now = new Date();
    const horas = now.getHours();

    this.horaAtual = now.toLocaleTimeString('pt-br', {
      hour: '2-digit',
      minute: '2-digit',
    });

    this.dataAtual = now.toLocaleDateString('pt-br', {
      weekday:'long', day: '2-digit', month: 'long' ,year: '2-digit'
    })

    if (horas >= 18) {
      this.mensagem = 'Boa noite!';
    } else if (horas >= 13) {
      this.mensagem = 'Boa tarde!';
    }  else {
      this.mensagem = 'Bom dia!';
    }
  }
}
