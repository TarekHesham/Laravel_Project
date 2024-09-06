import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditJobPostComponent } from './edit-job-post.component';

describe('EditJobPostComponent', () => {
  let component: EditJobPostComponent;
  let fixture: ComponentFixture<EditJobPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditJobPostComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditJobPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
