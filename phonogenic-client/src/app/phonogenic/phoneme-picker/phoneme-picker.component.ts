import { Component } from '@angular/core';
import { PhonemeButtonComponent } from '../phoneme-button/phoneme-button.component';

@Component({
  selector: 'app-phoneme-picker',
  standalone: true,
  imports: [PhonemeButtonComponent],
  templateUrl: './phoneme-picker.component.html',
  styleUrl: './phoneme-picker.component.css',
})
export class PhonemePickerComponent {}
