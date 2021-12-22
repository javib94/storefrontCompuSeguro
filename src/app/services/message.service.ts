
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 


@Injectable()
export class MessageService {
  
  constructor(private _http: HttpClient) { }

  sendMessage(body: object) {
    
    return this._http.post('https://www.compuseguro.net/formulario', body, {responseType: 'text'});
  }
  getBannerImages(){
    return this._http.get('https://www.compuseguro.net/banner');  
  }
}