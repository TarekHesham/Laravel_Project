import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommentsComponent } from "../comments/comments.component";

@Component({
  selector: 'app-card-details',
  standalone: true,
  imports: [RouterLink, CommentsComponent],
  templateUrl: './card-details.component.html',
  styleUrl: './card-details.component.css'
})
export class CardDetailsComponent {

}
