import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { MultiSelectComponent } from '../multi-select/multi-select.component';
import { GlobalService } from '../../services/global.service';
import { FormGroup, FormControl, ReactiveFormsModule, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';


@Component({
  selector: 'app-job-form',
  standalone: true,
  imports: [MultiSelectComponent, ReactiveFormsModule],
  templateUrl: './job-form.component.html',
  styleUrl: './job-form.component.css'
})
export class JobFormComponent implements OnInit {
  @Input() page = '';
  @Output() formSubmit = new EventEmitter<any>();  
  locations: any[] = [];
  selectedFiles: File[] = [];
  jobForm !: FormGroup;

  constructor(private globalService: GlobalService){
    this.jobForm = new FormGroup({
      job_title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      benefits: new FormControl([]),
      deadline: new FormControl(''),
      work_type: new FormControl(''),
      location_id: new FormControl(''),
      skills: new FormControl([]),
      categories: new FormControl([]),
      salary_from: new FormControl(''),
      salary_to: new FormControl(''),
      experience_level: new FormControl('', [Validators.required]),
      images: new FormControl([]),
    });
  }

  ngOnInit(): void {
    this.globalService.locations().subscribe({
      next: (response: any) => {
        this.locations = response;        
      },
      error: (error) => {
        console.error('Error loading locations', error);
      }
  });
  }

  

  // Getter methods for each form control
  get job_title() {
    return this.jobForm.get('job_title');
  }

  get description() {
    return this.jobForm.get('description');
  }

  get benefits() {
    return this.jobForm.get('benefits');
  }

  get deadline() {
    return this.jobForm.get('deadline');
  }

  get work_type() {
    return this.jobForm.get('work_type');
  }

  get location_id() {
    return this.jobForm.get('location_id');
  }

  get skills() {
    return this.jobForm.get('skills');
  }

  get categories() {
    return this.jobForm.get('categories');
  }

  get salary_from() {
    return this.jobForm.get('salary_from');
  }

  get salary_to() {
    return this.jobForm.get('salary_to');
  }

  get experience_level() {
    return this.jobForm.get('experience_level');
  }

  get images() {
    return this.jobForm.get('images');
  }


  // Handler for updating form controls when options are selected
  onSelectedOptionsChange(controlName: string, selectedValues: any[]) {
    this.jobForm.get(controlName)?.setValue(selectedValues);
  }

  
  submit(){
    this.jobForm.markAllAsTouched();
    if (this.jobForm.invalid) {
      return;
    }
    // Emit form data to parent component
    this.formSubmit.emit(this.jobForm.value);
  }

}
