import { Component } from '@angular/core';
import { PhonemeButtonComponent } from '../phoneme-button/phoneme-button.component';
import { SidebarModule } from 'primeng/sidebar';
import { UserInputService } from '../services/user-input.service';
import { PhonemeFreeInputComponent } from '../phoneme-free-input/phoneme-free-input.component';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-phoneme-table',
  standalone: true,
  imports: [
    PhonemeButtonComponent,
    SidebarModule,
    PhonemeFreeInputComponent,
    ButtonModule,
    FormsModule,
    InputTextModule,
  ],
  templateUrl: './phoneme-table.component.html',
  styleUrl: './phoneme-table.component.css',
})
export class PhonemeTableComponent {
  constructor(protected userInputService: UserInputService) {}

  public phonemes = this.userInputService.getCurrentPhonemes();

  public isPhonemeTableOpen = false;

  openPhonemeTable() {
    this.isPhonemeTableOpen = true;
  }
}
