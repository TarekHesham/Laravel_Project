import { Component } from '@angular/core';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-admin-comments',
  standalone: true,
  imports: [],
  templateUrl: './admin-comments.component.html',
  styleUrl: './admin-comments.component.css'
})
export class AdminCommentsComponent {
  comments: any;
  constructor(private adminService: AdminService) {}
  ngOnInit() {
    this.adminService.getComments().subscribe((response)=>{
      this.comments = response.data;
    });
  }
  removeComment(id: number, index: number) {
    this.adminService.deleteComment(id).subscribe((response) => {
      this.comments.splice(index, 1);
    });
  }
}
