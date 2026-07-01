import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonButton, IonTextarea } from '@ionic/angular/standalone';
import {Preferences} from '@capacitor/preferences';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.page.html',
  styleUrls: ['./contacto.page.scss'],
  standalone: true,
  imports: [IonTextarea, IonButton, IonItem, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ContactoPage implements OnInit {

correo: string="";
mensaje: string="";

  constructor() { }

  ngOnInit() {
  }

  async enviar() {
      await Preferences.set({
      key: 'ultimoMensaje',
      value: JSON.stringify({
      correo:this.correo,
      mensaje:this.mensaje
})
});
}

}
