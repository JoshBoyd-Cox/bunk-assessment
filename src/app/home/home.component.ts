import { Component, OnInit } from '@angular/core';
import { CardService, Icard} from '../services/card.service';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface IWeather {
  weather: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  london: Observable<IWeather>;
  bristol: Observable<IWeather>;
  rome: Observable<IWeather>;
  answer = false;

 constructor(private http: HttpClient) { }

ngOnInit() {
  this.london = this.http.get<IWeather>
  ('https://api.openweathermap.org/data/2.5/weather?id=2643744&units=metric&appid=f4bbeb8ec1a8fb95591f2cf112aaa575');
  this.bristol = this.http.get<IWeather>
  ('https://api.openweathermap.org/data/2.5/weather?id=4749005&units=metric&appid=f4bbeb8ec1a8fb95591f2cf112aaa575');
  this.rome = this.http.get<IWeather>
  ('https://api.openweathermap.org/data/2.5/weather?id=4219762&units=metric&appid=f4bbeb8ec1a8fb95591f2cf112aaa575');
}

submitAnswer(input) {
  if (input === 4) {
    return this.answer = true;
  }
//   console.log(this.answerQuestion);
 }

}
