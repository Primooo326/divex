import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { ChatComponent } from "../../components/chat/chat.component";

@Component({
  selector: 'app-asamblea',
  templateUrl: './asamblea.page.html',
  styleUrls: ['./asamblea.page.scss'],
})
export class AsambleaPage implements OnInit {
	constructor(private modalCtrl: ModalController) {}

	ngOnInit() {}
	async openModal(modalEvent: string) {
		let modal;
		switch (modalEvent) {
			case "chat":
				modal = await this.modalCtrl.create({
					component: ChatComponent,
					breakpoints: [0.5, 0.7],
					canDismiss: true,
				});
				break;

			default:
				modal = await this.modalCtrl.create({
					component: ChatComponent,
				});
				break;
		}

		modal.present();
	}
}
