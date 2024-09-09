import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCommentsComponent } from './admin-comments.component';

describe('AdminCommentsComponent', () => {
  let component: AdminCommentsComponent;
  let fixture: ComponentFixture<AdminCommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminCommentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
