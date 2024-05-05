import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransformationPipelineComponent } from './transformation-pipeline.component';

describe('TransformationPipelineComponent', () => {
  let component: TransformationPipelineComponent;
  let fixture: ComponentFixture<TransformationPipelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransformationPipelineComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TransformationPipelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
