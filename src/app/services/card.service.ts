import { Injectable } from '@angular/core';

export interface Icard {
  title: string;
  content: string;
}

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor() { }

  getCards(): Icard[] {
    return [
      {
        title: 'London',
        content: 'test content 1'
      },
      {
        title: 'Bristol',
        content: 'test content 2'
      },
      {
        title: 'Rome',
        content: 'test content 3'
      }
    ];
  }
}
