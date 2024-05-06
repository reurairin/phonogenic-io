import { Injectable, WritableSignal, signal } from '@angular/core';
import { TransformationGroup } from '../../models/transformation-group.type';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TransformationService {
  private transformationGroups = new BehaviorSubject<TransformationGroup[]>([]);
  public transformationGroups$ = this.transformationGroups.asObservable();

  private transformationGroupsUpload = new BehaviorSubject<
    TransformationGroup[]
  >([]);
  public transformationGroupsUpload$ =
    this.transformationGroupsUpload.asObservable();

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

  public saveTransformationGroupsToJSON(data: any[]) {
    const jsonString = JSON.stringify(data);

    const blob = new Blob([jsonString], { type: 'application/json' });

    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'transformation-groups.json';

    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    URL.revokeObjectURL(a.href);
  }

  public loadTransformationGroupFromJSON(file: any) {
    const fileReader = new FileReader();
    fileReader.onload = (e) => {
      const contents = fileReader.result as string;
      try {
        const json = JSON.parse(contents);
        this.transformationGroupsUpload.next(json as TransformationGroup[]);
      } catch (e) {
        console.error('Error parsing JSON!', e);
      }
    };
    fileReader.readAsText(file);
  }

  public updateTransformationGroups(data: any[]) {
    this.transformationGroups.next(data);
  }
}
