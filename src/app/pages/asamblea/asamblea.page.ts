import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { ChatComponent } from "../../components/chat/chat.component";
import { ChartData, ChartEvent, ChartType } from "chart.js";
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

	public doughnutChartLabels: string[] = ["Asistentes", "No Asistentes"];
	public doughnutChartData: ChartData<"doughnut"> = {
		labels: this.doughnutChartLabels,
		datasets: [{ data: [130, 70] }],
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
