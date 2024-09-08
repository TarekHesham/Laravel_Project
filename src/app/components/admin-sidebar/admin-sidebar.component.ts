import { Component, EventEmitter, Output } from '@angular/core';
import { AdminPostTableComponent } from '../admin-post-table/admin-post-table.component';
import { AdminHomeComponent } from '../admin-home/admin-home.component';
import { AdminCommentsComponent } from '../admin-comments/admin-comments.component';
import { AdminUsersLogsComponent } from '../admin-users-logs/admin-users-logs.component';


@Component({
  selector: 'app-admin-sidebar',
  standalone: true,
  imports: [AdminPostTableComponent, AdminHomeComponent, AdminCommentsComponent, AdminUsersLogsComponent],
  templateUrl: './admin-sidebar.component.html',
  styleUrl: './admin-sidebar.component.css'
})
export class AdminSidebarComponent {
  home = AdminHomeComponent;
  posts = AdminPostTableComponent;
  comments = AdminCommentsComponent;
  logs = AdminUsersLogsComponent;
  @Output() componentEmiiter: EventEmitter<any> = new EventEmitter();
  changeComponent(component: any) {
    this.componentEmiiter.emit(component);
  }
}
