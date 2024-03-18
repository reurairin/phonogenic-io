import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhonemeButtonComponent } from './phoneme-button.component';

describe('PhonemeButtonComponent', () => {
  let component: PhonemeButtonComponent;
  let fixture: ComponentFixture<PhonemeButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhonemeButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PhonemeButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
