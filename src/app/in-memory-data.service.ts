import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 12, name: 'Dr. Mice' },
      { id: 13, name: 'Mr. Rats' },
      { id: 14, name: 'Miss Demeanor' },
      { id: 15, name: 'A. Salt' },
      { id: 16, name: '"Bat" Terry' },
      { id: 17, name: 'Agent Sparkle' },
      { id: 18, name: 'El Machismo' },
      { id: 19, name: 'Hero McHeroface' },
      { id: 20, name: 'Harold' },
    ]
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}