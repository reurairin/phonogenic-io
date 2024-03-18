import { Component } from '@angular/core';
import { PhonemeButtonComponent } from '../phoneme-button/phoneme-button.component';
import { SidebarModule } from 'primeng/sidebar';
import { UserInputService } from '../services/user-input.service';
import { PhonemeFreeInputComponent } from '../phoneme-free-input/phoneme-free-input.component';

@Component({
  selector: 'app-phoneme-table',
  standalone: true,
  imports: [PhonemeButtonComponent, SidebarModule, PhonemeFreeInputComponent],
  templateUrl: './phoneme-table.component.html',
  styleUrl: './phoneme-table.component.css',
})
export class PhonemeTableComponent {
  constructor(protected userInputService: UserInputService) {}

  public isPhonemeTableOpen = this.userInputService.isPhonemeTableOpen;
}
