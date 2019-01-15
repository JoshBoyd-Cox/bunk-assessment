import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.css']
})
export class JumbotronComponent implements OnInit {
  title = 'Bunk assessment';
  text = 'Test Test Test';
  content = 'tech challenges are fun';

  constructor() { }

  ngOnInit() {

  }

}
