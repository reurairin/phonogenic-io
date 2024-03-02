import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhonemePickerComponent } from './phoneme-picker.component';

describe('PhonemePickerComponent', () => {
  let component: PhonemePickerComponent;
  let fixture: ComponentFixture<PhonemePickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhonemePickerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PhonemePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
