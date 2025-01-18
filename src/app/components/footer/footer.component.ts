import { Component, inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalInfoSiteVersionComponent } from '../../shared/modal-info-site-version/modal-info-site-version.component';

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

   //modal
    readonly dialog = inject(MatDialog);

    openModal(
      enterAnimationDuration: string,
      exitAnimationDuration: string
    ): void {
      this.dialog.open(ModalInfoSiteVersionComponent, {
        width: '250px',
        enterAnimationDuration,
        exitAnimationDuration,
      });
    }

}
