import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable()
export class GalleryService{
    constructor(private http:HttpClient){

    }
    search(motCle:string,size:number,page:number){
       return this.http.get("https://pixabay.com/api/?key=27784669-a7edc5919bb57dbae35cf3076&q="+motCle+"&per_page="+size+"&page="+page)
        .pipe(map((resp:any)=>resp))
        /*.subscribe((data:any)=>{
          console.log(data);
          this.pagePhotos=data;
          this.totalPages=data.totalHits/this.size;
          if(data.totalHits % this.size!=0) ++this.totalPages;
          this.pages=new Array(this.totalPages);
        })*/
        }
}