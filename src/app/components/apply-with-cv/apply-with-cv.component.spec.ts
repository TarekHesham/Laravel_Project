import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyWithCvComponent } from './apply-with-cv.component';

describe('ApplyWithCvComponent', () => {
  let component: ApplyWithCvComponent;
  let fixture: ComponentFixture<ApplyWithCvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApplyWithCvComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplyWithCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
