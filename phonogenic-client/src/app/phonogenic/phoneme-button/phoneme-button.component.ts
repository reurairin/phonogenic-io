import { Component, Input, input } from '@angular/core';
import { UserInputService } from '../services/user-input.service';

@Component({
  selector: 'app-phoneme-button',
  standalone: true,
  imports: [],
  templateUrl: './phoneme-button.component.html',
  styleUrl: './phoneme-button.component.css',
})
export class PhonemeButtonComponent {
  constructor(private userInputService: UserInputService) {}

  @Input()
  phoneme: string = '';

  public registerInput() {
    this.userInputService.appendCharacter(this.phoneme);
  }
}
