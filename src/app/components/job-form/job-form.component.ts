import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { MultiSelectComponent } from '../multi-select/multi-select.component';
import { GlobalService } from '../../services/global.service';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';


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
  selectedFiles: File[] = []; // مصفوفة للملفات المختارة
  jobForm !: FormGroup;

  constructor(private globalService: GlobalService) {}

  ngOnInit(): void {
    this.jobForm = new FormGroup({
      job_title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      benefits: new FormControl([]),
      deadline: new FormControl('', Validators.required),
      work_type: new FormControl('', Validators.required),
      location_id: new FormControl('', Validators.required),
      skills: new FormControl([]),
      categories: new FormControl([]),
      salary_from: new FormControl('', Validators.required),
      salary_to: new FormControl('', Validators.required),
      experience_level: new FormControl('', [Validators.required]),
      images: new FormControl([])
    });

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
  
  onFileChange(event: any) {
    const files: FileList = event.target.files;
    this.selectedFiles = Array.from(files);  // تحويل الملفات المختارة إلى مصفوفة
  }
  onSelectedOptionsChange(controlName: string, selectedValues: any[]) {
    this.jobForm.get(controlName)?.setValue(selectedValues);
  }
  submit() {
    this.jobForm.markAllAsTouched();
    if (this.jobForm.invalid) {
      console.log('Form is invalid');
      return;
    }
  
    const formData = new FormData();
  
    formData.append('job_title', this.jobForm.get('job_title')?.value);
    formData.append('description', this.jobForm.get('description')?.value);
    formData.append('deadline', this.jobForm.get('deadline')?.value);
    formData.append('work_type', this.jobForm.get('work_type')?.value);
    formData.append('location_id', this.jobForm.get('location_id')?.value);
    formData.append('salary_from', this.jobForm.get('salary_from')?.value);
    formData.append('salary_to', this.jobForm.get('salary_to')?.value);
    formData.append('experience_level', this.jobForm.get('experience_level')?.value);
  
    const skills = this.jobForm.get('skills')?.value;
    if (Array.isArray(skills)) {
      skills.forEach((skill, index) => {
        formData.append(`skills[${index}]`, skill);
      });
    }

    const benefits = this.jobForm.get('benefits')?.value;
    if (Array.isArray(benefits)) {
      benefits.forEach((benefit, index) => {
        formData.append(`benefits[${index}]`, benefit);
      });
    }
  
    const categories = this.jobForm.get('categories')?.value;
    if (Array.isArray(categories)) {
      categories.forEach((category, index) => {
        formData.append(`categories[${index}]`, category);
      });
    }
  
    this.selectedFiles.forEach((file, i) => {
      formData.append(`images[${i}]`, file, file.name);
    });
    
    this.formSubmit.emit(formData);
  }
  
}
