import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { MultiSelectComponent } from '../multi-select/multi-select.component';
import { GlobalService } from '../../services/global.service';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { JobService } from '../../services/job.service';


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
  initialSkills !: any[];
  initialCategories !: any[];
  initialBenefits !: any[];
  selectedFiles: File[] = []; // مصفوفة للملفات المختارة
  jobForm !: FormGroup;
  @Input() jobId!:any;
  @Input () isEdit = false;
  constructor(private globalService: GlobalService,private jobService:JobService) {}

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

        if (this.isEdit){
          this.jobService.getJobById(this.jobId).subscribe((response:any)=>{

            this.initialSkills = response.skills.map((skill:any)=>skill.id);
            this.initialCategories = response.categories.map((category:any)=>category.id);
            this.initialBenefits = response.benefits.map((benefit:any)=>benefit.id);

            this.jobForm.get('job_title')?.setValue(response.job_title);
            this.jobForm.get('description')?.setValue(response.description);
            this.jobForm.get('benefits')?.setValue(response.benefits);
            this.jobForm.get('deadline')?.setValue(response.deadline);
            this.jobForm.get('work_type')?.setValue(response.work_type);
            this.jobForm.get('location_id')?.setValue(this.getMappedLocationId(response.location));
            this.jobForm.get('skills')?.setValue(response.skills);
            this.jobForm.get('categories')?.setValue(response.categories);
            this.jobForm.get('salary_from')?.setValue(response.salary_from);
            this.jobForm.get('salary_to')?.setValue(response.salary_to);
            this.jobForm.get('experience_level')?.setValue(response.experience_level);
          });
        }

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

  getMappedLocationId(location:string){
    return this.locations.find(city=>city.name == location).id;
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

    // console.log("after const formData", formData);


    const skills = this.jobForm.get('skills')?.value;
    if (Array.isArray(skills)) {
      skills.forEach((skill, index) => {
        formData.append(`skills[${index}]`, skill.id ? skill.id : skill);
      });
    }

    const benefits = this.jobForm.get('benefits')?.value;
    if (Array.isArray(benefits)) {
      benefits.forEach((benefit, index) => {
        formData.append(`benefits[${index}]`, benefit.id ? benefit.id : benefit);
      });
    }

    const categories = this.jobForm.get('categories')?.value;
    if (Array.isArray(categories)) {
      categories.forEach((category, index) => {
        formData.append(`categories[${index}]`, category.id ? category.id : category);
      });
    }

    this.selectedFiles.forEach((file, i) => {
      formData.append(`images[${i}]`, file, file.name);
    });

    this.formSubmit.emit(formData);
  }

}
