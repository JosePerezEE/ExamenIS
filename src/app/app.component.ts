import { Component, OnInit } from '@angular/core';
import {Fotos} from './fotos'
import {AlbumService} from './album.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'EXAMEN';
  FotoNueva : Fotos;
  Foto: Fotos[]=[];

  constructor(private ExamenService: AlbumService) { 
    this.FotoNueva = new Fotos('','');
  }

  ngOnInit(){
    this.Foto.push(new Fotos('Imagen de logo de Instagram','https://cdn2.iconfinder.com/data/icons/harmonicons-04/64/instagram-512.png'));
    this.Foto.push(new Fotos('Imagen de logo de Python','https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png'));
    this.Foto.push(new Fotos('Imagen de campo agricultor','https://concepto.de/wp-content/uploads/2014/09/agricultura-e1551193452226.jpg'));
    this.Foto.push(new Fotos('Imagen de agricultor cultivando','https://m.elmostrador.cl/media/2019/02/Captura-de-pantalla-2019-02-13-a-las-17.44.32.png'));
    this.Foto.push(new Fotos('Imagen de logo de Facebook','http://smartbitchestrashybooks.com/images/uploads/facebook.jpg'));
  }
  
  fotosguardar(){
    this.ExamenService.postFotos(this.FotoNueva).subscribe(
    (res) => {
      this.Foto.unshift(this.FotoNueva);
      this.Foto.push(new Fotos('Hola','Hola'));
      window.alert("La foto ha sido agregada exitosamente");
    },
    (error) => {
      window.alert('Error al agregar la foto');
    }
    );
  }
}
