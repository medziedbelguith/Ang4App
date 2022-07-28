import { Injectable } from "@angular/core";

@Injectable()
export class AboutService{
    info={
        name:"med",
        email:"med@gmail.com",
        tel:"123456"
      }
      comments=[
        {date:new Date(),message:"A"},
        {date:new Date(),message:"B"},
        {date:new Date(),message:"C"},
      ]
      commentaire={date:new Date(),message:""};
    
      constructor() { }
    
      ngOnInit(): void {
      }
    
      addComment(c:any){
      c.date=new Date();
      this.comments.push(c)    
      }
      getAllComments(){
          return this.comments;
      }
      getInfo(){
          return  this.info;
      }
}