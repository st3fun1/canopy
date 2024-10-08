import { ChangeDetectionStrategy, Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import {
  UntypedFormControl,
  UntypedFormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { By } from '@angular/platform-browser';
import { anything, instance, mock, when } from '@typestrong/ts-mockito';

import { LgErrorStateMatcher } from '../validation';

import { LgSelectDirective } from './select.directive';

@Component({
  template: `
    <form (ngSubmit)="login()" [formGroup]="form">
      <select lgSelect formControlName="name">
        <option value="red">Red</option>
        <option value="green">Green</option>
      </select>
    </form>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [ FormsModule, ReactiveFormsModule, LgSelectDirective ],
})
class TestSelectComponent {
  form = new UntypedFormGroup({
    name: new UntypedFormControl('', [ Validators.required ]),
  });
}

describe('LgSelectDirective', () => {
  let fixture: ComponentFixture<TestSelectComponent>;
  let component: TestSelectComponent;
  let selectDebugElement: DebugElement;
  const errorStateMatcherMock = mock(LgErrorStateMatcher);

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, ReactiveFormsModule, LgSelectDirective, TestSelectComponent ],
      providers: [
        {
          provide: LgErrorStateMatcher,
          useFactory: () => instance(errorStateMatcherMock),
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(TestSelectComponent);
    component = fixture.componentInstance;

    selectDebugElement = fixture.debugElement.query(By.directive(LgSelectDirective));
  }));

  it('adds a unique name', () => {
    fixture.detectChanges();

    expect(selectDebugElement.nativeElement.name).toContain('lg-select-');
  });

  it('adds a unique id', () => {
    fixture.detectChanges();

    expect(selectDebugElement.nativeElement.id).toContain('lg-select-');
  });

  it('adds an error class when the field has a validation error', () => {
    when(errorStateMatcherMock.isControlInvalid(anything(), anything())).thenReturn(true);
    fixture.detectChanges();

    expect(selectDebugElement.nativeElement.className).toContain('lg-select--error');
  });

  it('removes the error class when the field is valid', () => {
    component.form.get('name').setValue('test');
    component.form.get('name').markAsTouched();

    expect(selectDebugElement.nativeElement.className).not.toContain('lg-input--error');
  });
});
