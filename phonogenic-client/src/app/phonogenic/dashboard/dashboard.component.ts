import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { TransformationService } from '../services/transformation.service';
import { CommonModule } from '@angular/common';
import { ChipModule } from 'primeng/chip';
import { PhonemeTableComponent } from '../phoneme-table/phoneme-table.component';
import { UserInputService } from '../services/user-input.service';
import { PhonemeFreeInputComponent } from '../phoneme-free-input/phoneme-free-input.component';
import { TransformationPipelineComponent } from '../transformation-pipeline/transformation-pipeline.component';
import { TransformationGroupManagerComponent } from '../transformation-group-manager/transformation-group-manager.component';
import { CardModule } from 'primeng/card';
import { FitnessFunctionManagerComponent } from '../fitness-function-manager/fitness-function-manager.component';
import { InputNumberModule } from 'primeng/inputnumber';
import { AlgorithmParamsComponent } from '../algorithm-params/algorithm-params.component';
import { AlgorithmEpoch } from '../../models/algorithm-epoch.type';

const primengComponents = [ButtonModule, CardModule, ChipModule, InputNumberModule];

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  imports: [
    ...primengComponents,
    PhonemeFreeInputComponent,
    AlgorithmParamsComponent,
    CommonModule,
    FitnessFunctionManagerComponent,
    PhonemeTableComponent,
    TransformationPipelineComponent,
    TransformationGroupManagerComponent,
  ],
})
export class DashboardComponent {
  constructor(
    private transformationService: TransformationService,
    private userInputService: UserInputService
  ) {}

  public onGenerationStart() {
    console.log('onGenerationStart', this.phonemes);
    this.generationResult =
      this.transformationService.generateInitialGeneration(this.phonemes(), 10);
  }

  public phonemes = this.userInputService.getCurrentPhonemes();
  public generationResult: AlgorithmEpoch[] = [];
  public openPhonemeTable() {
    this.userInputService.openPhonemeTable();
  }
}
