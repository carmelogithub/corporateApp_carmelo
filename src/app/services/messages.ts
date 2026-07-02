import { Injectable } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import {Directory, Encoding, Filesystem} from '@capacitor/filesystem'

@Injectable({
  providedIn: 'root',
})
export class Messages {
  
   async guardarMensaje(correo:string,mensaje:string){
    console.log("Función guardar mensaje");
    console.log(correo);
    console.log(mensaje);

    if(Capacitor.getPlatform()=="web"){
      console.log("Estás en navegador");
      localStorage.setItem('correo',correo);
      localStorage.setItem('mensaje',mensaje);
    }
    else{
      console.log("Estás en mobile");
      const dato=correo;
      
      const archivo=await Filesystem.readFile({
        path:'mensajes.txt',
        directory:Directory.Documents,
        encoding:Encoding.UTF8
      });
      archivo.data=dato;
      console.log(archivo);
      await Filesystem.writeFile(
        {
        path:'mensajes.txt',
        directory:Directory.Documents,
        encoding:Encoding.UTF8,
        data:dato
      }
      );

    }

  }//cierra método guardarMensaje

   leerMensaje(){
    console.log("Función leer mensaje");
  }

  consultarPlataforma(){
    console.log(Capacitor.getPlatform());
  }

}
