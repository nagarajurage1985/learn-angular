import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: any[];
  pages: number[];

  title: string;
  description: string;
  url: string = 'http://jsonplaceholder.typicode.com/posts';
  
  constructor(private _http: Http) { 

    this._http.get(this.url).subscribe(response => {
      this.posts = response.json();

      if(this.posts.length > 0)
      {
        this.pages= [];
        if(this.posts.length % 10 == 0)
        {
          for(let i = 1 ;i <= this.posts.length/ 10;i++) {
            this.pages.push(i);
         }
        }
        else{
          for(let i = 1 ;i <= (this.posts.length/ 10) + 1;i++) {
            this.pages.push(i);
         }
        }
      }
      this.posts = this.posts.slice(1, 5);
    })

  }


createPost()
{
  let post = {title: this.title, body: this.description };

  this._http.post(this.url, JSON.stringify(post)).subscribe(response => {
    response.json()
      this.posts.push(post);
      this.title = "";
      this.description = "";
  });

}

UpdatePost(post)
{
  post.body = "This text has changed!!!!";
  this._http.patch(this.url + "/" + post.id, JSON.stringify({ body: post.body })).subscribe
  (
    response => {
      console.log(response);
    }
  )
}


DeletePost(post)
{
  this._http.delete(this.url + "/" + post.id).subscribe
  (response =>{
     let index = this.posts.indexOf(post);
     this.posts.splice(index,1);
  }
  )
}


  ngOnInit() {
  }

}
