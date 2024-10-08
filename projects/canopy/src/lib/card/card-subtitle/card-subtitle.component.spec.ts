import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LgCardSubtitleComponent } from './card-subtitle.component';

describe('LgCardSubtitleComponent', () => {
  let component: LgCardSubtitleComponent;
  let fixture: ComponentFixture<LgCardSubtitleComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ LgCardSubtitleComponent ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LgCardSubtitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain the class lg-card-subtitle', () => {
    expect(fixture.nativeElement.getAttribute('class')).toContain('lg-card-subtitle');
  });
});
