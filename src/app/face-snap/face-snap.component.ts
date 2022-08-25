import {Component, Input, OnInit} from '@angular/core';
import {FaceSnap} from '../models/face-snap.model';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;
  snapped!: boolean;
  buttonText!: string;

  ngOnInit() {
    this.snapped = false;
    this.buttonText = 'Snap !';
  }

  onClickSnap() {
    if (this.snapped === false) {
      this.faceSnap.snaps++;
      this.buttonText = 'Oops, un Snap!';
      this.snapped = true;
    } else {
      this.faceSnap.snaps--;
      this.buttonText = 'Snap!';
      this.snapped = false;
    }
  }
}
