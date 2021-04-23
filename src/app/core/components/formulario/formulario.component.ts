import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import Swal from 'sweetalert2';
import { MessageService } from '../../../services/message.service';

@Component({
  selector: 'vsf-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormularioComponent implements OnInit {

  constructor(public _MessageService: MessageService) { }

  ngOnInit(): void {

  }

  hello(form: object, formulario:any) {
      
    this._MessageService.sendMessage(form).subscribe(res => {
      if(res == 'OK'){
        Swal.fire('¡Gracias!', 
        'Tu mensaje ha sido recibido, pronto nos contactaremos contigo.', 
        'success'); //3185422822
        formulario.reset();
      }else{
        Swal.fire('Lo sentimos', 
        'A ocurrido un error al procesar la solicitud.', 
        'info');
      }
    });  
  }

}
