import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule, Http, Response } from '@angular/http';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TitlePageComponent } from './title-page/title-page.component';
import { GlossaireComponent } from './glossaire/glossaire.component';
import { MissionsComponent } from './missions/missions.component';

import { GlossaireService } from './glossaire.service';

@NgModule({
  declarations: [
    AppComponent,
    TitlePageComponent,
    GlossaireComponent,
    MissionsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    NgbModule.forRoot()
  ],
  providers: [GlossaireService],
  bootstrap: [AppComponent]
})
export class AppModule { }
