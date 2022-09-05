import {NgModule} from "@angular/core";
import {FaceSnapListComponent} from "./components/face-snap-list/face-snap-list.component";
import {SingleFaceSnapComponent} from "./components/single-face-snap/single-face-snap.component";
import {NewFaceSnapComponent} from "./components/new-face-snap/new-face-snap.component";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {path: 'create', component: NewFaceSnapComponent},
  {path: '', component: FaceSnapListComponent},
  {path: ':id', component: SingleFaceSnapComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class FaceSnapsRoutingModule {

}
