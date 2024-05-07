import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';
import { UserInputService } from '../services/user-input.service';

@Component({
  selector: 'app-algorithm-params',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, InputNumberModule],
  templateUrl: './algorithm-params.component.html',
  styleUrl: './algorithm-params.component.css',
})
export class AlgorithmParamsComponent {
  constructor(private userInputService: UserInputService) {}

  public epochNumber = this.userInputService.epochNumber;
  public populationSize = this.userInputService.populationSize;
}
