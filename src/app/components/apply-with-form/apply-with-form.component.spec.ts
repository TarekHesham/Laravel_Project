import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyWithFormComponent } from './apply-with-form.component';

describe('ApplyWithFormComponent', () => {
  let component: ApplyWithFormComponent;
  let fixture: ComponentFixture<ApplyWithFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApplyWithFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplyWithFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
