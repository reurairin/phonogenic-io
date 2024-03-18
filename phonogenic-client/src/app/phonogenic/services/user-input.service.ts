import { Injectable, WritableSignal, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserInputService {
  private currentPhonemes: WritableSignal<string>;

  constructor() {
    this.currentPhonemes = signal('');
  }

  public appendCharacter(char: string) {
    this.currentPhonemes.update((val: string) => val + char);
  }

  public getCurrentPhonemes() {
    return this.currentPhonemes;
  }
}
