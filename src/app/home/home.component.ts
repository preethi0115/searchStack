import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  link:string="https://api.stackexchange.com/2.2/search/excerpts?order=desc&sort=activity&site=stackoverflow&q=";
  http: Http;
  searchResults =[];

  constructor(http: Http) {
      this.http = http;
   }

   ngOnInit() {
   }

  stackExchangeSearch(searchKeyword: HTMLInputElement): void {
      var apiLink = this.link + searchKeyword.value;
      this.http.request(apiLink)
      .subscribe((res: Response) => {
        this.searchResults = res.json();
        console.log(this.searchResults);
       });
   }
}
