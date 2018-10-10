import { Component, OnInit } from '@angular/core';
import { GlossaireService } from '../glossaire.service';
import { Glossaire } from '../../glossaire';

@Component({
  selector: 'app-glossaire',
  templateUrl: './glossaire.component.html',
  providers: [ GlossaireService ],
  styleUrls: ['./glossaire.component.css']
})

/*class Glossaire
{
  id : number;
  name : string;
  description : string;
}*/

export class GlossaireComponent implements OnInit {

  public definitions : Glossaire[];
  private glossaireService : GlossaireService;
  
  constructor(glossaire : GlossaireService) { 
    /*this.definitions = [
      {
        id : 0,
        name : "Sun",
        description : "A big star that heat us up"
      },
      {
        id : 1,
        name : "Earth",
        description : "Our planet, the blue planet"
      },
      {
        id : 2,
        name : "Space",
        description : "Infinite space without oxygen"
      },
      {
        id : 3,
        name : "Clément",
        description : "A specimen living on the moon"
      }
    ];*/

    //console.log(glossaire.getJSON());
    //let obj : Glossaire[];
    //let name : string;
    //let definitions : any[] = [];
    /*glossaire.getJSON().subscribe((res : any[])=>
    {
      //obj.push(new Glossaire(res[0]));
      //obj.push(new Glossaire(res[1]));
      //obj.push(new Glossaire(res[2]));
      //console.log(res[0].name);
      //definitions = res;
      //for (let i=0 ; i < res.length ; i++){
        //definitions[i] = new Glossaire(res[i].id, res[i].name, res[i].description);
        //name = res[0].name;
        //obj.push(res);
        //console.log(definitions[i]); 
      //}

      //console.log(definitions);
    });*/
    //console.log(obj);
    //console.log(obj.length);
    //console.log(obj[0].name);
    //console.log(name);
    //console.log(definitions);
    /*console.log(definitions.forEach(function(el)
    {
      console.log(el);
    }));*/

    /*for (let i = 0 ; i < definitions.length ; i++)
    {
      console.log(definitions[i].name);
    }*/

    //console.log(glossaire.getJSON());
    this.glossaireService = glossaire;
    this.definitions = [];
  }

  ngOnInit() 
  { 
    this.glossaireService.getJSON().subscribe(
      (param : Glossaire[]) => {
        this.definitions = param;
      }
    );
  }
}
