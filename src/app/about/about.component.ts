import { Component, OnInit } from '@angular/core';
import { AboutService } from 'src/services/about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  infos:any;
  comments:any;
  commentaire={date:new Date(),message:""};
  
  constructor(private aboutService:AboutService) {
   this.infos=this.aboutService.getInfo();
   this.comments=this.aboutService.getAllComments();
   }

  ngOnInit(): void {
  }
  onAddCommentaire(c:any){
    this.aboutService.addComment(c);
   // c.date=new Date();
 // this.comments.push(c);
  this.commentaire.message="";
  this.comments=this.aboutService.getAllComments();
  }
}
