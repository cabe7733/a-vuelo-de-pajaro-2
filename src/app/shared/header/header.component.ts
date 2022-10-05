import { Component, OnInit } from '@angular/core';
import { BucketService } from 'src/app/services/bucket.service';
import { storage } from '../../firebase.app';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public imageheader:any;

  constructor(private services:BucketService) { }

  ngOnInit(): void {
    this.imageHeader();
  }

  imageHeader(){
    let url:string="Img/portada_avdp.jpeg";
    this.services.oneImg(url).then(data=>{
      this.imageheader=data;
    })
  }
}
