import { Injectable, WritableSignal, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserInputService {
  private currentPhonemes: WritableSignal<string>;
  public isPhonemeTableOpen: WritableSignal<boolean>;

  constructor() {
    this.currentPhonemes = signal('');
    this.isPhonemeTableOpen = signal(false);
  }

  public appendCharacter(char: string) {
    this.currentPhonemes.update((val: string) => val + char);
  }

  public clearPhonemes() {
    this.currentPhonemes.set('');
  }

  public getCurrentPhonemes() {
    return this.currentPhonemes;
  }

  public openPhonemeTable() {
    this.isPhonemeTableOpen.set(true);
  }
}
