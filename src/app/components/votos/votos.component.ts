import { Component, OnInit } from "@angular/core";
import { Sort } from "@angular/material/sort";
import { ModalController } from "@ionic/angular";
import { ChartConfiguration, ChartData, ChartType } from "chart.js";
import DatalabelsPlugin from "chartjs-plugin-datalabels";
import { IVoto } from "src/app/models/votos";

@Component({
  selector: 'app-votos',
  templateUrl: './votos.component.html',
  styleUrls: ['./votos.component.scss'],
})
export class VotosComponent implements OnInit {
	votos$: IVoto[] = [];
	votosVotados: string[] = [];
	miInmueble: any;
	asamblea: any;
	noVotantes: any;
	votoActivo: any;
	constructor(private modalCtrl: ModalController) {}

	ngOnInit() {
		this.miInmueble = { representado: "no" };
		this.asamblea = {
			quorumTotal: 45,
		};

		// this.sortData({ active: "activo", direction: "desc" }, [
		// 	{
		// 		nombre: "voto 1",
		// 		id: "1",
		// 		activo: true,
		// 		seeVoto: true,
		// 		descripcion: "hola mundo",
		// 		opciones: [
		// 			{
		// 				nombre: "opcion 1",
		// 				quorumRespectivo: 0,
		// 			},
		// 			{
		// 				nombre: "opcion 2",
		// 				quorumRespectivo: 0,
		// 			},
		// 		],
		// 	},
		// 	{
		// 		nombre: "voto 2",
		// 		id: "2",
		// 		activo: false,
		// 		seeVoto: false,
		// 		descripcion: "hola mundo",
		// 		opciones: [
		// 			{
		// 				nombre: "opcion 1",
		// 				quorumRespectivo: 34,
		// 			},
		// 			{
		// 				nombre: "opcion 2",
		// 				quorumRespectivo: 66,
		// 			},
		// 		],
		// 	},
		// 	{
		// 		nombre: "voto 2",
		// 		id: "3",
		// 		activo: false,
		// 		seeVoto: false,
		// 		descripcion: "hola mundo",
		// 		opciones: [
		// 			{
		// 				nombre: "opcion 1",
		// 				quorumRespectivo: 34,
		// 			},
		// 			{
		// 				nombre: "opcion 2",
		// 				quorumRespectivo: 66,
		// 			},
		// 		],
		// 	},
		// 	{
		// 		nombre: "voto 2",
		// 		id: "4",
		// 		activo: false,
		// 		seeVoto: false,
		// 		descripcion: "hola mundo",
		// 		opciones: [
		// 			{
		// 				nombre: "opcion 1",
		// 				quorumRespectivo: 34,
		// 			},
		// 			{
		// 				nombre: "opcion 2",
		// 				quorumRespectivo: 66,
		// 			},
		// 		],
		// 	},
		// 	{
		// 		nombre: "voto 2",
		// 		id: "5",
		// 		activo: false,
		// 		seeVoto: false,
		// 		descripcion: "hola mundo",
		// 		opciones: [
		// 			{
		// 				nombre: "opcion 1",
		// 				quorumRespectivo: 34,
		// 			},
		// 			{
		// 				nombre: "opcion 2",
		// 				quorumRespectivo: 66,
		// 			},
		// 		],
		// 	},
		// 	{
		// 		nombre: "voto 7",
		// 		id: "6",
		// 		activo: true,
		// 		seeVoto: true,
		// 		descripcion: "hola mundo",
		// 		opciones: [
		// 			{
		// 				nombre: "opcion 1",
		// 				quorumRespectivo: 34,
		// 			},
		// 			{
		// 				nombre: "opcion 2",
		// 				quorumRespectivo: 66,
		// 			},
		// 		],
		// 	},
		// 	{
		// 		nombre: "voto 2",
		// 		id: "7",
		// 		activo: false,
		// 		seeVoto: false,
		// 		descripcion: "hola mundo",
		// 		opciones: [
		// 			{
		// 				nombre: "opcion 1",
		// 				quorumRespectivo: 34,
		// 			},
		// 			{
		// 				nombre: "opcion 2",
		// 				quorumRespectivo: 66,
		// 			},
		// 		],
		// 	},
		// 	{
		// 		nombre: "voto 2",
		// 		id: "8",
		// 		activo: false,
		// 		seeVoto: false,
		// 		descripcion: "hola mundo",
		// 		opciones: [
		// 			{
		// 				nombre: "opcion 1",
		// 				quorumRespectivo: 34,
		// 			},
		// 			{
		// 				nombre: "opcion 2",
		// 				quorumRespectivo: 66,
		// 			},
		// 		],
		// 	},
		// ]);
	}
	changeViewVoto(voto: any) {
		if (!voto.activo) {
			// voto.seeVoto = !voto.seeVoto;
			let idx = this.votos$.findIndex((v) => v.id === voto.id);
			this.votos$[idx].seeVoto = !voto.seeVoto;
			// this.sortData({ active: "activo", direction: "desc" }, this.votos$);
		}
	}
	chartData(voto: any): ChartData<"pie", number[], string | string[]> {
		const labels: string[] = [];
		const data: number[] = [];
		let noVotantes = 0;
		let votantes = 0;
		voto.opciones.forEach((opcion: any) => {
			labels.push(`${opcion.nombre}(${opcion.quorumRespectivo})`);
			data.push(opcion.quorumRespectivo);
		});
		data.forEach((n) => (votantes += n));

		noVotantes = this.asamblea.quorumTotal - votantes;
		labels.push(`abstiene (${noVotantes})`);
		data.push(noVotantes);
		this.noVotantes = noVotantes;

		return {
			labels: labels,
			datasets: [
				{
					data: data,
				},
			],
		};
	}
	votar(opcion: any) {
		console.log(opcion);
		const sendOpcion: any = {
			opcion: opcion,
			nombre: this.miInmueble.nombre,
			coeficiente: this.miInmueble.coeficiente,
			apto: this.miInmueble.apto,
			totalCoeficiente: this.miInmueble.totalCoeficiente,
			representa: this.miInmueble.representa,
			id: this.miInmueble.id,
		};
		console.log(this.votoActivo);
		console.log(this.votosVotados.includes(this.votoActivo!.id));
		// this._fireSrvc.inmuebleVotar(sendOpcion,this.votoActivo!.id).then((votados)=>{
		//   console.log(votados);
		//   this.store.dispatch(votosActions.saveVoto({votados:votados}))
		// })
	}
	atras() {
		return this.modalCtrl.dismiss(null, "cancel");
	}

	selectOption() {}

	sortData(sort: Sort, votos: any[]) {
		const data = votos.slice();
		if (!sort.active || sort.direction === "") {
			this.votos$ = data;
			return;
		}

		this.votos$ = data.sort((a, b) => {
			const isAsc = sort.direction === "asc";
			switch (sort.active) {
				case "activo":
					return this.compare(`${a.activo}`, `${b.activo}`, isAsc);
				default:
					return 0;
			}
		});
	}

	compare(a: number | string, b: number | string, isAsc: boolean) {
		return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
	}

	// Pie
	public pieChartOptions: ChartConfiguration["options"] = {
		responsive: true,
		plugins: {
			legend: {
				display: true,
				position: "top",
			},
			datalabels: {
				formatter: (_value: any, ctx: any) => {
					if (ctx.chart.data.labels) {
						return ctx.chart.data.labels[ctx.dataIndex];
					}
				},
			},
		},
	};
	public pieChartData: ChartData<"pie", number[], string | string[]> = {
		labels: [["Download", "Sales"], ["In", "Store", "Sales"], "Mail Sales"],
		datasets: [
			{
				data: [300, 500, 100],
			},
		],
	};
	public pieChartType: ChartType = "pie";
	public pieChartPlugins = [DatalabelsPlugin];
}
