import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit {
  lastVersionUpdate: string = 'V1.2.3';
  lastUpdate: string = 'Atualizada em 05/01/2025';

  ngOnInit(): void {
    console.log("Versão atual: ", this.lastVersionUpdate, this.lastUpdate)
  }

}
