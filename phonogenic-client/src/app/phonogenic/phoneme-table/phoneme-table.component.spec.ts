import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhonemeTableComponent } from './phoneme-table.component';

describe('PhonemeTableComponent', () => {
  let component: PhonemeTableComponent;
  let fixture: ComponentFixture<PhonemeTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhonemeTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PhonemeTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
