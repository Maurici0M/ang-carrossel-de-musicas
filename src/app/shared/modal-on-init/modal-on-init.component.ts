import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';

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
  selector: 'app-modal-on-init',
  templateUrl: './modal-on-init.component.html',
  styleUrl: './modal-on-init.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,

  //Para conseguir aplicar os estilos ao modal
  encapsulation: ViewEncapsulation.None,
})
export class ModalOnInitComponent {
  textPrimary: string = 'Agora o site está mais rápido e eficiente! 🚀';
  textSecondary: string = `Fizemos algumas melhorias para tornar a navegação mais fluida e as atualizações mais rápidas. Tudo isso para oferecer uma experiência ainda melhor para você! Aproveite o Carrossel de Músicas e explore as novidades! 😊`;

  props: any = {
    textPrimary: this.textPrimary,
    textSecondary: this.textSecondary,
  }

  readonly dialogRef = inject(MatDialogRef<ModalOnInitComponent>);

  closeModal() {
    this.dialogRef.close;
    console.log('modal fechado');
  }

  testLog() {
    console.log('Sim, o botão funciona, ele somente está temporariamente desativado! Logo a documentação estará disponível! 📄😉');
  }

  alert(){
    alert('Estamos te levando para a documentação...')
  }

  ngOnInit() { }
}
