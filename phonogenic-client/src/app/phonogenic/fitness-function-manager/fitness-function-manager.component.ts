import { Component } from '@angular/core';
import { InputNumberModule } from 'primeng/inputnumber';

@Component({
  selector: 'app-fitness-function-manager',
  standalone: true,
  imports: [InputNumberModule],
  templateUrl: './fitness-function-manager.component.html',
  styleUrl: './fitness-function-manager.component.css',
})
export class FitnessFunctionManagerComponent {}
