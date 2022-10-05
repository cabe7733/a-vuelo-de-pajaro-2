import { Component, OnInit } from '@angular/core';
import { BucketService } from 'src/app/services/bucket.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public imgPatrocinadores:any;

  constructor(private BucketService:BucketService) { }

  ngOnInit(): void {
    this.padrocinadores();
  }

  padrocinadores(){
    let url="logos";
    this.BucketService.imagenes(url).then(data=>{
      this.imgPatrocinadores = data;
    });
  }

}
