import { Component } from '@angular/core';
import { AdminSidebarComponent } from "../../components/admin-sidebar/admin-sidebar.component";
import { AdminHomeComponent } from '../../components/admin-home/admin-home.component';
import { NgComponentOutlet } from '@angular/common';

@Component({
  selector: 'app-admin-dashboard-page',
  standalone: true,
  imports: [AdminSidebarComponent, NgComponentOutlet],
  templateUrl: './admin-dashboard-page.component.html',
  styleUrl: './admin-dashboard-page.component.css'
})

export class AdminDashboardPageComponent {
  currentComponent: any = AdminHomeComponent;
  getCurrentComponent() {
    return this.currentComponent;
  }
  changeComponent(component: any) {
    this.currentComponent = component;
  }
}
