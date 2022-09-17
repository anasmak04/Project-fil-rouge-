import { Component, OnInit } from '@angular/core';
import { EditStagiaireService } from '../services/edit-stagiaire.service';

@Component({
  selector: 'app-editer',
  templateUrl: './editer.component.html',
  styleUrls: ['./editer.component.css']
})
export class EditerComponent implements OnInit {
  List: any = [];
  stagiaire: any = {
    id: '',
    nom: '',
    prenom: '',
    filiere : {
      id_Filiere: '',
  },
    photo: '',
  };
  Condition = false;

  constructor(private dataEdit : EditStagiaireService) { }

  ngOnInit(): void {
  }

  PutMethode(){
    this.dataEdit.Update(this.stagiaire)
    .subscribe((stag) => {
      console.log(stag)
      this.EmptyInput();
    })
  }


  EmptyInput(){
    this.stagiaire = "";
  }

}
