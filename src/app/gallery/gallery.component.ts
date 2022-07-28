import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { GalleryService } from 'src/services/gallery.service';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  pagePhotos:any;
  currentPage:number=1;
  size:number=5;
  pages:Array<number>=[];
  totalPages:number=0;
  motCle:string="";
  
  constructor(private http:HttpClient,private galleryService:GalleryService) { }

  ngOnInit(): void {
  }
  onSearch(dataForm:any){
  console.log(dataForm);
  this.galleryService.search(dataForm.motCle,this.size,this.currentPage)  
    .subscribe((data:any)=>{
    console.log(data);
    this.pagePhotos=data;
    this.totalPages=data.totalHits/this.size;
    if(data.totalHits % this.size!=0) ++this.totalPages;
    this.pages=new Array(Math.trunc(this.totalPages));
  },err=>{
    console.log(err);
  })
  }
  goToPage(i:any){
  this.currentPage=i+1;
  this.onSearch({motCle:this.motCle})
}

}
