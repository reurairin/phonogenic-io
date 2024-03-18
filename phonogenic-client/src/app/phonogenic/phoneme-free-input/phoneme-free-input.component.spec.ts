import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhonemeFreeInputComponent } from './phoneme-free-input.component';

describe('PhonemeFreeInputComponent', () => {
  let component: PhonemeFreeInputComponent;
  let fixture: ComponentFixture<PhonemeFreeInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhonemeFreeInputComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PhonemeFreeInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
