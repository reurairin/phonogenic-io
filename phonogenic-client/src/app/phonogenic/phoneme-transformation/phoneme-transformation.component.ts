import { ButtonModule } from 'primeng/button';
import { Component, OnInit, forwardRef, signal } from '@angular/core';
import { DropdownModule } from 'primeng/dropdown';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { debounceTime, map } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ChipsModule } from 'primeng/chips';
import { PhonemeTransformationConditions } from '../../models/phoneme-transformation-conditions.type';
import { PhonemePosition } from '../../models/enums/phoneme-position.enum';
import { PhonemeStressing } from '../../models/enums/phoneme-stressing.enum';
import { PhonemeNeighbor } from '../../models/enums/phoneme-neighbor.enum';

@UntilDestroy()
@Component({
  selector: 'app-phoneme-transformation',
  standalone: true,
  imports: [
    ButtonModule,
    ChipsModule,
    CommonModule,
    DropdownModule,
    FormsModule,
    InputTextModule,
    ReactiveFormsModule,
  ],
  templateUrl: './phoneme-transformation.component.html',
  styleUrl: './phoneme-transformation.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PhonemeTransformationComponent),
      multi: true,
    },
  ],
})
export class PhonemeTransformationComponent
  implements ControlValueAccessor, OnInit
{
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form.valueChanges
      .pipe(debounceTime(500), untilDestroyed(this))
      .subscribe((val) => {
        this.onChange(val);
      });
  }

  form = this.fb.group({
    initialPhoneme: this.fb.control(''),
    resultingPhoneme: this.fb.control(''),
    transformationLikelihood: this.fb.control(10),
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

  getConditionsGroup() {
    return this.form.get('conditions') as FormGroup;
  }

  isLeftNeighborVisible$ = this.form
    .get('conditions')
    ?.get('leftNeighborType')
    ?.valueChanges.pipe(
      map(
        (val) =>
          !!(
            val === PhonemeNeighbor.IN_LIST ||
            val === PhonemeNeighbor.NOT_IN_LIST
          )
      )
    );

  isRightNeighborVisible$ = this.form
    .get('conditions')
    ?.get('rightNeighborType')
    ?.valueChanges.pipe(map((val) => !!val));

  /*
  -------------
  ControlValueAccessor methods
  -------------
  */

  private onChange(value: any) {}

  private onTouched() {}

  writeValue(obj: any): void {
    this.form.patchValue({
      initialPhoneme: obj.initialPhoneme,
      resultingPhoneme: obj.resultingPhoneme,
      transformationLikelihood: obj.transformationLikelihood,
      conditions: {
        position: obj?.conditions?.position,
        stressing: obj?.conditions?.stressing,
      },
    });
  }

  registerOnChange(fn: (_: any) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {}

  /*
  -------------
  Dropdown Options
  -------------
  */

  positionOptions = [
    {
      label: 'Starting',
      value: PhonemePosition.STARTING,
    },
    {
      label: 'Ending',
      value: PhonemePosition.ENDING,
    },
  ];
  stressingOptions = [
    {
      label: 'Stressed',
      value: PhonemeStressing.STRESSED,
    },
    {
      label: 'Not stressed',
      value: PhonemeStressing.UNSTRESSED,
    },
  ];
  neighborOptions = [
    {
      label: 'Is in',
      value: 'IS',
    },
    {
      label: 'Is not in',
      value: 'IS_NOT',
    },
  ];

  neighborTypeOptions = [
    {
      label: 'Vowel',
      value: PhonemeNeighbor.VOWEL,
    },
    {
      label: 'Consonant',
      value: PhonemeNeighbor.CONSONANT,
    },
    {
      label: 'In character list',
      value: PhonemeNeighbor.IN_LIST,
    },
    {
      label: 'Not in character list',
      value: PhonemeNeighbor.NOT_IN_LIST,
    },
  ];

  syllableOptions = [
    {
      label: 'Stressed',
      value: PhonemeStressing.STRESSED,
    },
    {
      label: 'Not stressed',
      value: PhonemeStressing.UNSTRESSED,
    },
  ];
}
