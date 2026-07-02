import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonButton, IonTextarea, IonInput } from '@ionic/angular/standalone';
import {Preferences} from '@capacitor/preferences';
import { Messages } from 'src/app/services/messages';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.page.html',
  styleUrls: ['./contacto.page.scss'],
  standalone: true,
  imports: [IonTextarea, IonButton, IonItem, IonInput, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ContactoPage implements OnInit {

correo:string="";
mensaje:string="";

 constructor(private servicio:Messages) { }

  ngOnInit() {
  }

  guardar(){
    this.servicio.guardarMensaje(this.correo,this.mensaje);
  }
  leer(){
    this.servicio.leerMensaje();
  }
  consultar(){
    this.servicio.consultarPlataforma();
  }

  async enviar() {
   console.log("Enviando");
  

   this.servicio.guardarMensaje(this.correo,this.mensaje);

}

}
