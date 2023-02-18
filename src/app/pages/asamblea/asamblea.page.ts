import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { ChatComponent } from "../../components/chat/chat.component";
import { ChartData, ChartEvent, ChartType } from "chart.js";
import { VotosComponent } from "../../components/votos/votos.component";
import { Store } from "@ngrx/store";
import { quorumTotal } from "src/app/ngrx/selectors";
import { ToolsService } from "../../services/tools.service";
@Component({
  selector: 'app-asamblea',
  templateUrl: './asamblea.page.html',
  styleUrls: ['./asamblea.page.scss'],
})
export class AsambleaPage implements OnInit {
	quorum = 0;

	constructor(
		private modalCtrl: ModalController,
		private store: Store<any>,
		private _toolsSrvc: ToolsService,
	) {
		const asamblea = JSON.parse(localStorage.getItem("asamblea")!);
		const inmueble = JSON.parse(localStorage.getItem("inmueble")!);

		if (asamblea != null) {
			if (asamblea.key !== "") {
				this._toolsSrvc.startSubscriber(asamblea, inmueble);

				this.store.select(quorumTotal).subscribe((data) => {
					this.quorum = data;
					console.log(data);
				});
			}
		}
	}
	user = {
		img: "https://ionicframework.com/docs/img/demos/avatar.svg",
		nombre: "juan morales",
		email: "juan@example.com",
	};
	ngOnInit() {
		return;
	}
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
			case "votos":
				modal = await this.modalCtrl.create({
					component: VotosComponent,
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

	public doughnutChartLabels: string[] = ["Asistentes", "No Asistentes"];
	public doughnutChartData: ChartData<"doughnut"> = {
		labels: this.doughnutChartLabels,
		datasets: [{ data: [this.quorum, 70] }],
	};
	public doughnutChartType: ChartType = "doughnut";

	// events
	public chartClicked({
		event,
		active,
	}: { event: ChartEvent; active: {}[] }): void {
		console.log(event, active);
	}

	public chartHovered({
		event,
		active,
	}: { event: ChartEvent; active: {}[] }): void {
		console.log(event, active);
	}
}
