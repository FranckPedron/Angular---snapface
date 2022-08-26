import {Component, Input, OnInit} from '@angular/core';
import {FaceSnap} from '../models/face-snap.model';
import {FaceSnapsService} from "../services/face-snaps.service";

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  constructor(private faceSnapsService: FaceSnapsService) {

  }

  @Input() faceSnap!: FaceSnap;
  snapped!: boolean;
  buttonText!: string;

  ngOnInit() {
    this.snapped = false;
    this.buttonText = 'Snap !';
  }

  onClickSnap() {
    if (this.snapped === false) {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap');
      this.buttonText = 'Oops, un Snap!';
      this.snapped = true;
    } else {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
      this.buttonText = 'Snap!';
      this.snapped = false;
    }
  }
}
