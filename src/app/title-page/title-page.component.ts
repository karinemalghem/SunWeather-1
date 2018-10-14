import { Component, OnInit } from '@angular/core';

import { ApodService } from '../../apod.service';
import { Apod } from '../../apod';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-title-page',
  templateUrl: './title-page.component.html',
  styleUrls: ['./title-page.component.css']
})
export class TitlePageComponent implements OnInit {

  private apodService : ApodService;
  public apods : Apod[];
  public today : Apod;

  constructor(param : ApodService) 
  { 
    this.apodService = param;
    this.apods = [];
    //this.today = new Apod("https://cms.qz.com/wp-content/uploads/2017/10/clock.gif?w=1600&h=900&crop=1&strip=all&quality=75", "1995-06-26", "Diaporama en cours de chargement", "Les données n'ont pas encore été récupérés");
    this.today = new Apod("https://apod.nasa.gov/apod/image/1505/Looming67P_Rosetta_960.jpg", "1995-06-26", "Page vide", "Les données n'ont pas encore été récupérés");
  }

  ngOnInit() 
  {
    let date = new Date();
    //date.setDate(date.getDate()-1);
    //date.setFullYear(2015);
    //date.setMonth(1);
    //date.setDate(20);
    //date.setMonth(3);

    let tmp : Observable<Apod>[] = this.apodService.getWeekImages(date);

    for (let i=0 ; i < tmp.length ; i++)
    {
      tmp[i].subscribe(
        (param : Apod) => {

          if (param.mediaType == "image")
            this.apods.push(param);
          else
            this.apods.push(new Apod("https://apod.nasa.gov/apod/image/1505/Looming67P_Rosetta_960.jpg", "1995-06-26", "Problème", "Problème de récupération car le type d'image ne correspond pas", "unknown"));

          this.apods.sort(function compare(a : Apod, b : Apod) {
            return (new Date(b.date).getTime() - new Date(a.date).getTime());
          });

          if (this.apods.length == 7)
          {
            this.today = this.apods[0];
            this.apods.shift();

            for (let i=0 ; i < this.apods.length ; i++)
              this.apods[i].setId(i + 1);
          }
        }
      );
    }
  }

  public setDisplay() : void
  {
    $(".carousel-caption").toggleClass("d-md-block");
  }

}
