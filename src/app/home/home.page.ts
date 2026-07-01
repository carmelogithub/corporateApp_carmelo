import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonSegmentButton, IonSegment, IonLabel } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonSegment, IonSegmentButton, IonHeader, IonToolbar, IonTitle, IonContent, IonLabel, RouterLink],
})
export class HomePage {
  constructor() {}
}
