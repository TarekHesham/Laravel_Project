import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyForJobComponent } from './apply-for-job.component';

describe('ApplyForJobComponent', () => {
  let component: ApplyForJobComponent;
  let fixture: ComponentFixture<ApplyForJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApplyForJobComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplyForJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
