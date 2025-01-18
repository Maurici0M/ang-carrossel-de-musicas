import { Component, inject, ViewEncapsulation } from '@angular/core';

//imports do modal
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';

@Component({
  selector: 'app-modal-info-site-version',
  templateUrl: './modal-info-site-version.component.html',
  styleUrl: './modal-info-site-version.component.scss',

  //Para conseguir aplicar os estilos ao modal
    encapsulation: ViewEncapsulation.None,
})
export class ModalInfoSiteVersionComponent {
  textPrimary: string = 'Versão 1.2.3 - Aprimoramos o Carregamento do Site!';
  textSecondary: string = `Com a nova atualização, o site está mais rápido e eficiente! Mesmo em conexões mais lentas, você notará que as páginas carregam com mais agilidade. Aproveite a navegação melhorada! `;

  props: any = {
    textPrimary: this.textPrimary,
    textSecondary: this.textSecondary,
  }

  readonly dialogRef = inject(MatDialogRef<ModalInfoSiteVersionComponent>);

  closeModal() {
    this.dialogRef.close;
    console.log('modal fechado');
  }


}
