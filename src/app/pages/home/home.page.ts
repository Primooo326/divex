import { Component, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
@ViewChild(IonModal) modal!: IonModal;

  user = {
    img: "https://ionicframework.com/docs/img/demos/avatar.svg",
    nombre:"juan morales",
    email:"juan@example.com"
  }

	asambleas = new Array<any>(4);

	constructor() {}

  token(){
    this.modal.dismiss()
  }

}
