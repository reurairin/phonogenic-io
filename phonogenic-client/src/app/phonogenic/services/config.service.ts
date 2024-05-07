import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { TransformationGroup } from '../../models/transformation-group.type';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  private transformationGroupsUpload = new BehaviorSubject<
    TransformationGroup[]
  >([]);
  public transformationGroupsUpload$ =
    this.transformationGroupsUpload.asObservable();

  constructor(private http: HttpClient) {
    this.http
      .get('/assets/config/transformation-groups.json')
      .pipe(tap((val: any) => this.transformationGroupsUpload.next(val)))
      .subscribe((res) => console.log('read', res));
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
}
