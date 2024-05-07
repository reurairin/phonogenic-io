import { Injectable, WritableSignal, signal } from '@angular/core';
import { TransformationGroup } from '../../models/transformation-group.type';
import { BehaviorSubject, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UserInputService } from './user-input.service';
import { AlgorithmEpoch } from '../../models/algorithm-epoch.type';

@Injectable({
  providedIn: 'root',
})
export class TransformationService {
  private transformationGroups = new BehaviorSubject<TransformationGroup[]>([]);
  public transformationGroups$ = this.transformationGroups.asObservable();

  constructor(private userInputService: UserInputService) {}

  public generateInitialGeneration(phonemes: string, populationSize: number) {
    const result: AlgorithmEpoch[] = [];

    console.log();
    console.log('generateInitialGeneration', phonemes, this.userInputService.populationSize());
    for (let i = 0; i < this.userInputService.epochNumber(); i++) {
      const epoch: AlgorithmEpoch = { index: i, words: [] };
      for (let j = 0; j < this.userInputService.populationSize(); j++) {
        console.log('phonemes', phonemes);
        epoch.words.push(phonemes);
      }
      result.push(epoch);
    }
    console.log('generateInitialGeneration result', result);
    return result;
  }

  public updateTransformationGroups(data: any[]) {
    this.transformationGroups.next(data);
  }
}
