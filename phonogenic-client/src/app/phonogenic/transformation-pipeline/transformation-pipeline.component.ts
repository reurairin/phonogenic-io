import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { TransformationGroup } from '../../models/transformation-group.type';
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';
import { TransformationService } from '../services/transformation.service';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-transformation-pipeline',
  standalone: true,
  templateUrl: './transformation-pipeline.component.html',
  styleUrl: './transformation-pipeline.component.css',
  imports: [
    ButtonModule,
    TooltipModule,
    CommonModule,
    DropdownModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class TransformationPipelineComponent implements OnInit {
  form = this.fb.group({ selector: '' });

  constructor(
    private fb: FormBuilder,
    private transformationService: TransformationService
  ) {}

  ngOnInit(): void {
    this.transformationService.transformationGroups$.subscribe((val) => {
      this.transformationFunctions = val;
      console.log(val);
    });

    this.form.get('selector')?.valueChanges.subscribe((val) => {
      console.log(val);
      if (val) {
        this.selectedTransformations.push(val as any);
        this.form.get('selector')?.setValue('');
      }
    });
  }
  public transformationFunctions: TransformationGroup[] = [];

  public selectedTransformations: TransformationGroup[] = [];

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
