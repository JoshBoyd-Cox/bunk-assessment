import { Component, OnInit } from '@angular/core';
import footballers from '../../assets/footballers.json';

@Component({
  selector: 'app-football',
  templateUrl: './football.component.html',
  styleUrls: ['./football.component.css']
})
export class FootballComponent implements OnInit {

  footballers;
  myTeam = [];

  constructor() {
    this.footballers = footballers;
    console.log('footballers are' + footballers);
  }

  ngOnInit() {
  }

  josh(name, position) {
    this.myTeam.push(name, position);
    console.log('my team is' + this.myTeam);
  }
}
