import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FitnessFunctionManagerComponent } from './fitness-function-manager.component';

describe('FitnessFunctionManagerComponent', () => {
  let component: FitnessFunctionManagerComponent;
  let fixture: ComponentFixture<FitnessFunctionManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FitnessFunctionManagerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FitnessFunctionManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
