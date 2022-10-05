import { Injectable } from '@angular/core';
import { ref, listAll, getMetadata, list, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase.app";

@Injectable({
  providedIn: 'root'
})
export class BucketService {

  constructor() { }

  async imagenes(url:string){
    const listRef = ref(storage, url);

    let data:any=[];

    listAll(listRef).then((res) => {
        res.items.forEach((itemRef) => {
          const starsRef = ref(storage, itemRef.fullPath);
          getDownloadURL(starsRef)
          .then((url) => {
            data.push(
              {
                name:itemRef.fullPath,
                urlimage:url
              }
            );
          });
        });
      }).catch((error) => {
        console.log(error);
      });

      return data;
  }

  async oneImg(url:string){
    const starsRef = ref(storage,url);
    let imgUrl=getDownloadURL(starsRef).then((url) => {
      return url
    })
    .catch((error) => {
      switch (error.code) {
        case 'storage/object-not-found':
          console.log(error.code)
          break;
        case 'storage/unauthorized':
          console.log(error.code)
          break;
        case 'storage/canceled':
          console.log(error.code)
          break;
        case 'storage/unknown':
          console.log(error.code)
          break;
      }
    });

    return imgUrl;
  }

}
