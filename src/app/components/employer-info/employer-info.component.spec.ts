import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerInfoComponent } from './employer-info.component';

describe('EmployerInfoComponent', () => {
  let component: EmployerInfoComponent;
  let fixture: ComponentFixture<EmployerInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployerInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmployerInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
