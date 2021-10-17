import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/app/models/blog.model';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent implements OnInit {
  blog: Blog = {
    title: '',
    description: '',
    category: '',
    published: false
  };
  submitted = false;

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
  }

  saveBlog(): void {
    const data = {
      title: this.blog.title,
      description: this.blog.description,
      category: this.blog.category
    };

    this.blogService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newBlog(): void {
    this.submitted = false;
    this.blog = {
      title: '',
      description: '',
      category: '',
      published: false
    };
  }

}