import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit {
  lastVersionUpdate: string = 'V1.2.2';
  lastUpdate: string = 'Atualizada em 27/12/2024';

  ngOnInit(): void {
    console.log("Versão atual: ", this.lastVersionUpdate, this.lastUpdate)
  }

}
