import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUsersLogsComponent } from './admin-users-logs.component';

describe('AdminUsersLogsComponent', () => {
  let component: AdminUsersLogsComponent;
  let fixture: ComponentFixture<AdminUsersLogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminUsersLogsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminUsersLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
