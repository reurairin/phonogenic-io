import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgorithmParamsComponent } from './algorithm-params.component';

describe('AlgorithmParamsComponent', () => {
  let component: AlgorithmParamsComponent;
  let fixture: ComponentFixture<AlgorithmParamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlgorithmParamsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlgorithmParamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
