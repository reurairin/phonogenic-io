import { Component, OnInit } from '@angular/core';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { AccordionModule } from 'primeng/accordion';
import { CommonModule } from '@angular/common';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { PhonemeTransformationComponent } from '../phoneme-transformation/phoneme-transformation.component';
import { InputTextModule } from 'primeng/inputtext';
import { PhonemeTransformationConditions } from '../../models/phoneme-transformation-conditions.type';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { debounceTime } from 'rxjs';

@UntilDestroy()
@Component({
  selector: 'app-transformation-group-manager',
  standalone: true,
  imports: [
    AccordionModule,
    ButtonModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PhonemeTransformationComponent,
    SidebarModule,
    InputTextModule,
  ],
  templateUrl: './transformation-group-manager.component.html',
  styleUrl: './transformation-group-manager.component.css',
})
export class TransformationGroupManagerComponent implements OnInit {
  form = this.fb.group({
    transformationGroups: this.fb.array<FormGroup>([]),
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form.valueChanges
      .pipe(debounceTime(500), untilDestroyed(this))
      .subscribe((val) => console.log(val));
  }

  /*
  -------------------------
  Sidebar State
  -------------------------
  */
  isOpen: boolean = false;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  /*
  -------------------------
  Config
  -------------------------
  */
  saveConfig() {
    console.log(this.form.controls.transformationGroups.value);
  }

  loadConfig() {}

  /*
  -------------------------
  Transformation Groups
  -------------------------
  */

  get transformationGroups() {
    return this.form.controls['transformationGroups'] as FormArray;
  }

  getFormGroup(index: number): FormGroup {
    return this.transformationGroups.at(index) as FormGroup;
  }

  public addTransformationGroup() {
    const transformationArray = new FormArray([]);

    const newGroup = this.fb.group({
      name: 'New Transformation',
      transformations: transformationArray,
    });

    this.transformationGroups.push(newGroup);
  }

  /*
  -------------------------
  Phoneme Transformation
  -------------------------
  */
  getTransformationArray(indexGroup: number) {
    return this.getFormGroup(indexGroup).get('transformations') as FormArray;
  }

  public removeTransformationGroup(index: number) {
    this.transformationGroups.removeAt(index);
  }

  public addPhonemeTransformation(indexGroup: number) {
    const transformationGroup = this.getFormGroup(indexGroup);
    const transformations = transformationGroup.get(
      'transformations'
    ) as FormArray;

    const newPhonemeTransformation = this.fb.control({
      initialPhoneme: '',
      resultingPhoneme: '',
      transformationLikelihood: 20,
      conditions: this.fb.group<PhonemeTransformationConditions>({
        position: null,
        stressing: null,
        leftNeighborType: null,
        leftNeighborList: null,
        rightNeighborType: null,
        rightNeighborList: null,
        prevSyllable: null,
        nextSyllable: null,
      }),
    });

    transformations.push(newPhonemeTransformation);
  }

  public removePhonemeTransformation(
    indexGroup: number,
    indexTransformation: number
  ) {
    const transformationGroup = this.getFormGroup(indexGroup);
    const transformations = transformationGroup.get(
      'transformations'
    ) as FormArray;
    transformations.removeAt(indexTransformation);
  }

  public stopPropagation(event: KeyboardEvent | MouseEvent) {
    event.stopPropagation();
  }
}
