import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FaceSnap} from "../../core/models/face-snap.model";
import {FaceSnapsService} from "../../core/services/face-snaps.service";
import {Observable, tap} from "rxjs";

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {
  faceSnap$!: Observable<FaceSnap>;
  snapped!: boolean;
  buttonText!: string;

  constructor(private faceSnapsService: FaceSnapsService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    const faceSnapId = +this.route.snapshot.params['id'];
    this.faceSnap$ = this.faceSnapsService.getFaceSnapById(faceSnapId);
    this.snapped = false;
    this.buttonText = 'Snap !';
  }

  onClickSnap(faceSnapId: number) {
    if (this.snapped === false) {
      this.faceSnap$ = this.faceSnapsService.snapFaceSnapById(faceSnapId, 'snap').pipe(
        tap(() => {
          this.buttonText = 'Oops, un Snap!';
          this.snapped = true;
        })
      );
    } else {
      this.faceSnap$ = this.faceSnapsService.snapFaceSnapById(faceSnapId, 'unsnap').pipe(
        tap(() => {
          this.buttonText = 'Snap!';
          this.snapped = false;
        })
      );
    }
  }
}
