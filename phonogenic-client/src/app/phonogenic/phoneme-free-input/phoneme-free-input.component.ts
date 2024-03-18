import { Component } from '@angular/core';
import { UserInputService } from '../services/user-input.service';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-phoneme-free-input',
  standalone: true,
  imports: [ButtonModule, FormsModule, InputTextModule],
  templateUrl: './phoneme-free-input.component.html',
  styleUrl: './phoneme-free-input.component.css',
})
export class PhonemeFreeInputComponent {
  constructor(private userInputService: UserInputService) {}

  public phonemes = this.userInputService.getCurrentPhonemes();

  public clearInput() {
    this.userInputService.clearPhonemes();
  }
}
