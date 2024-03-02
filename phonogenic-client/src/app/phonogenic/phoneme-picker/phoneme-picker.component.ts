import { Component, EventEmitter, Output } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-phoneme-picker',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './phoneme-picker.component.html',
  styleUrl: './phoneme-picker.component.css',
})
export class PhonemePickerComponent {
  @Output() phonemeSelectedEvent = new EventEmitter<string>();

  onPhonemeSelected(phoneme: string) {
    this.phonemeSelectedEvent.emit(phoneme);
  }
}
