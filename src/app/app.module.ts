import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CardComponent } from './card/card.component';
import { NavComponent } from './nav/nav.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';

import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FootballComponent } from './football/football.component';

const routes = [
  {path: '', component: HomeComponent},
  {path: 'page1', component: HomeComponent},
  {path: 'page2', component: HomeComponent},
  {path: 'page3', component: HomeComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardComponent,
    NavComponent,
    JumbotronComponent,
    FootballComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(
      routes,
      {
        enableTracing: false,
        anchorScrolling: 'enabled'
      }
      )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
