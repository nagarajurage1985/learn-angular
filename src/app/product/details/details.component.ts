import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) {

    this.route.params.subscribe(params => {
      let id = params['title'];
      
      console.log(id);
      });
  }


  ngOnInit() {
  }


}
