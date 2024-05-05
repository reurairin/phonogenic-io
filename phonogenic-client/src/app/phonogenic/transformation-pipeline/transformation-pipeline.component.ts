import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { TransformationGroup } from '../../models/transformation-group.type';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-transformation-pipeline',
  standalone: true,
  templateUrl: './transformation-pipeline.component.html',
  styleUrl: './transformation-pipeline.component.css',
  imports: [ButtonModule, TooltipModule, CommonModule],
})
export class TransformationPipelineComponent {
  public transformationFunctions: TransformationGroup[] = [];

  public addTransformationFunction() {
    this.transformationFunctions.push({
      name: 'New Transformation',
      transformations: [],
    });
  }

  public removeTransformationFunction(index: number) {
    this.transformationFunctions.splice(index, 1);
  }
}
