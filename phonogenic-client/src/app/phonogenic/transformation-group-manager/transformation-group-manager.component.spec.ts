import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransformationGroupManagerComponent } from './transformation-group-manager.component';

describe('TransformationGroupManagerComponent', () => {
  let component: TransformationGroupManagerComponent;
  let fixture: ComponentFixture<TransformationGroupManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransformationGroupManagerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TransformationGroupManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
