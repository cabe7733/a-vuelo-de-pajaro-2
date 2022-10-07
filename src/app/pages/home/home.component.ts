import { Component, OnInit } from '@angular/core';
import { BucketService } from 'src/app/services/bucket.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public imgAliados:any;
  public imagesGeneral:any;

  constructor(private BucketService:BucketService) { }

  ngOnInit(): void {
    this.aliados();
    this.imgGeneral();
  }

  aliados(){
    let url="logos";
    this.BucketService.imagenes(url).then(data=>{
      this.imgAliados = data;
    });
  }

  imgGeneral(){
    let url="Img";
    this.BucketService.imagenes(url).then(data=>{
      this.imagesGeneral = data;
    });
  }

}
