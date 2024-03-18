import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { TransformationService } from '../services/transformation.service';
import { CommonModule } from '@angular/common';
import { ChipModule } from 'primeng/chip';
import { PhonemePickerComponent } from '../phoneme-picker/phoneme-picker.component';
import { UserInputService } from '../services/user-input.service';

const primengComponents = [ButtonModule, InputTextModule, ChipModule];

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    ...primengComponents,
    FormsModule,
    CommonModule,
    PhonemePickerComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
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
  public generationResult: string[] = [];
}
