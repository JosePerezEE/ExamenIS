import { Injectable } from '@angular/core';
import {Fotos} from './fotos'
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(private httpclient: HttpClient) { }

  getFotos(){
    return this.httpclient.get('https://misalbums.com/api/fotos')
  }

  postFotos(Fotos: Fotos){
    return this.httpclient.post('https://misalbums.com/api/fotos',Fotos)
  }
}
