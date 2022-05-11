import { Component } from '@angular/core';
import { CommentComponent } from '../comment/comment.component';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css']
})

export class UserInputComponent {
  public text: string;
  onClick() {
    const comment = new CommentComponent(this.text, Date.now().toString());
    console.log(comment)
  }
}