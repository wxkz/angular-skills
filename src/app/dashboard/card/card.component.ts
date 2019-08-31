import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { FakeApiService } from '../../fake-api.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  likeIcon: String = "like";

  @Input() card;
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
  }

  onLike(card: any){
    this.card.likes += 1;
    var where = "/api/skills/"+this.card.id+"/likes/";
    this.httpClient.post(where, {likes:this.card.likes}).subscribe(
      // res => {
      //     // console.log(res.valueOf())
      // }
  );
    // this.httpClient.get('/api/skills').subscribe((ret: Array<any>) => console.log(ret));
    if(this.card.likes == 5){
      this.likeIcon = "like_blue"
    }
    if(this.card.likes == 10){
      this.likeIcon = "like_purple"
    }
  }

  onShare(card: any){
    window.open("https://www.linkedin.com/in/marcelo-rodrigues-campos-5b338418a", "_blank");
  }

}
