import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InterfaceFiliere } from '../models/interface-filiere';

@Injectable({
  providedIn: 'root'
})
export class EditFiliereService {
API = "http://localhost:8088/filiere";
  constructor(private httpclient : HttpClient) { }


  MethodeUpdate(filiere : any){
    return this.httpclient.put<InterfaceFiliere>(`${this.API}/${filiere.id_Filiere}`,filiere);
  }

}
