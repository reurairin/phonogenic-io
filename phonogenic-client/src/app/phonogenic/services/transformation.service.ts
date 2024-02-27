import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TransformationService {
  constructor() {}

  public generateInitialGeneration(phonemes: string, populationSize: number) {
    const result: string[] = [];

    console.log('generateInitialGeneration', result, populationSize);
    for (let i = 0; i < populationSize; i++) {
      console.log('phonemes', phonemes);
      result.push(phonemes);
    }

    return result;
  }
}
