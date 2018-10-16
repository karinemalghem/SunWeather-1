import { Component, OnInit } from '@angular/core';

/* Import temporaire */
import { Evenement } from '../evenement';

@Component({
  selector: 'app-evenement',
  templateUrl: './evenement.component.html',
  styleUrls: ['./evenement.component.css']
})
export class EvenementComponent implements OnInit {
  evenements: Evenement[];

  constructor() {
    this.evenements = new Array<Evenement>();
  }

  ngOnInit() {
    this.evenements.push(new Evenement('CME', '2018-10-16'));
    this.evenements.push(new Evenement('GST', '2018-10-05'));
    this.evenements.push(new Evenement('FLR', '2016-05-24', 'Evénement inconnu'));
    this.evenements.push(new Evenement('SEP', '2018-10-05'));
    this.evenements.push(new Evenement('MPC', '2018-10-05'));
    this.evenements.push(new Evenement('HSS', '2018-10-05'));


    this.evenements[0].setDetails(this.getLoremIpsum());
    this.evenements[1].setDetails(this.getLoremIpsum());
    this.evenements[4].setDetails(this.getLoremIpsum());
  }

  public getLoremIpsum(): string {
    return 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. \
    Pellentesque quis eros tristique, varius nisi quis, hendrerit sem. In hac habitasse platea dictumst. \
    Nulla egestas risus sed erat commodo, sit amet finibus nibh aliquet.\
     Ut blandit eget elit rhoncus maximus. Ut in hendrerit dui. \
    Mauris quis pellentesque ligula. Sed euismod dictum aliquam. Mauris massa nulla,\
     posuere non semper sit amet, dictum non felis. In aliquam justo lectus, \
     ut sagittis nisl mattis eget. In sapien tellus, rhoncus congue mi sed, viverra \
     blandit lectus. Aliquam bibendum massa nisi, non blandit elit consectetur \
     a. Nunc ultricies magna augue, vitae faucibus arcu faucibus a. \
    Vivamus nec augue a tellus viverra porta. Proin justo est, elementum ac mollis at, egestas eu metus.';
  }

}
