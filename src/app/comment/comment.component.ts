import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  content: string;
  createdAt: string;
  constructor(@Inject(String) message: string, @Inject(String) date: string) { 
    this.content = message;
    this.createdAt = date;
  }

  ngOnInit(): void {
  }

}
