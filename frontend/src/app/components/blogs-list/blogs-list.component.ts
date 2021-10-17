import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/app/models/blog.model';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blogs-list',
  templateUrl: './blogs-list.component.html',
  styleUrls: ['./blogs-list.component.css']
})
export class BlogsListComponent implements OnInit {
  blogs?: Blog[];
  currentBlog?: Blog;
  currentIndex = -1;
  title = '';

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.retrieveBlogs();
  }

  retrieveBlogs(): void {
    this.blogService.getAll()
      .subscribe(
        data => {
          this.blogs = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveBlogs();
    this.currentBlog = undefined;
    this.currentIndex = -1;
  }

  setActiveBlog(blog: Blog, index: number): void {
    this.currentBlog = blog;
    this.currentIndex = index;
  }

  removeAllBlogs(): void {
    this.blogService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.refreshList();
        },
        error => {
          console.log(error);
        });
  }

  searchTitle(): void {
    this.blogService.findByTitle(this.title)
      .subscribe(
        data => {
          this.blogs = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

}