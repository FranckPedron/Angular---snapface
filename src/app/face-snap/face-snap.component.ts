import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  title!: string;
  description!: string;
  createDate!: Date;
  snaps!: number;
  imageUrl!: string;
  snapped!: boolean;
  buttonText!: string;

  ngOnInit() {
    this.title = 'Demo';
    this.description = 'Petite démo';
    this.createDate = new Date();
    this.snaps = 5;
    this.imageUrl = 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg';
    this.snapped = false;
    this.buttonText = 'Snap !';
  }

  onClickSnap() {
    if (this.snapped === false) {
      this.snaps++;
      this.buttonText = 'Oops, un Snap!';
      this.snapped = true;
    }
    else {
      this.snaps--;
      this.buttonText = 'Snap!';
      this.snapped = false;
    }
  }
}
