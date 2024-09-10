import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCommentItemComponent } from './admin-comment-item.component';

describe('AdminCommentItemComponent', () => {
  let component: AdminCommentItemComponent;
  let fixture: ComponentFixture<AdminCommentItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminCommentItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminCommentItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
