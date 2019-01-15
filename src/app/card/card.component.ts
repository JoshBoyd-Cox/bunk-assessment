import { Component, OnInit, Input } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface IWeather {
  weather: string;
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

    london: Observable<IWeather>;
    bristol: Observable<IWeather>;
    rome: Observable<IWeather>;

    @Input() title;
    @Input() content;


  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.london = this.http.get<IWeather>
    ('https://api.openweathermap.org/data/2.5/weather?id=2643744&appid=f4bbeb8ec1a8fb95591f2cf112aaa575');
    this.bristol = this.http.get<IWeather>
    ('https://api.openweathermap.org/data/2.5/weather?id=4749005&appid=f4bbeb8ec1a8fb95591f2cf112aaa575');
    this.rome = this.http.get<IWeather>
    ('https://api.openweathermap.org/data/2.5/weather?id=4219762&appid=f4bbeb8ec1a8fb95591f2cf112aaa575');
  }

}
