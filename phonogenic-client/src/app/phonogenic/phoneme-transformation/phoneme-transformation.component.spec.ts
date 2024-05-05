import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhonemeTransformationComponent } from './phoneme-transformation.component';

describe('PhonemeTransformationComponent', () => {
  let component: PhonemeTransformationComponent;
  let fixture: ComponentFixture<PhonemeTransformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhonemeTransformationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PhonemeTransformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
