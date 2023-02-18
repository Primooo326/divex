import { Injectable } from "@angular/core";
import { Subscription } from "rxjs";
import {
	Firestore,
	collection,
	collectionData,
	doc,
	docData,
} from "@angular/fire/firestore";
import { INuevaAsamblea } from "../models/asambleaSys";
import { IInmueble, IInmuebleQuorum } from "../models/inmueble";
import { Store } from "@ngrx/store";
import { votoActualActions } from "../ngrx/actions";
import { IVoto } from "../models/votos";
import {
	asambleaActions,
	inmuebleActions,
	quorumActions,
} from "../ngrx/actions";

@Injectable({
  providedIn: 'root'
})
export class ToolsService {
	private asamblea$!: Subscription;
	private inmueble$!: Subscription;
	private asistentes$!: Subscription;
	private votoActual$!: Subscription;
	constructor(private _fire: Firestore, private store: Store) {}

	startSubscriber(asamblea: INuevaAsamblea, inmueble: IInmueble) {
		const pathUser = `${asamblea.key}/Inmueble/Lista/${inmueble.codigo}`;
		const userFire = doc(this._fire, pathUser);
		this.inmueble$ = docData(userFire).subscribe((inmueble: any) => {
			console.log("user:::", inmueble);
			this.store.dispatch(inmuebleActions.setInmueble({ inmueble: inmueble }));
			localStorage.setItem("inmueble", JSON.stringify(inmueble));
		});

		const pathAsamblea = `${asamblea.key}/AsambleaActiva`;
		const asambleaFire = doc(this._fire, pathAsamblea);
		this.asamblea$ = docData(asambleaFire).subscribe((data: any) => {
			console.log("asamblea:::", data);
			this.store.dispatch(
				asambleaActions.setAsamblea({
					asamblea: data,
				}),
			);
			localStorage.setItem("asamblea", JSON.stringify(data));
		});

		const pathAsistentes = `${asamblea.key}/QuorumActual/RegistroQuorum`;
		const asistentesFire = collection(this._fire, pathAsistentes);

		this.asistentes$ = collectionData(asistentesFire).subscribe(
			(asistentes: any[]) => {
				console.log("asistentes:::", asistentes);
				asistentes.forEach((asis: IInmuebleQuorum) => {
					this.store.dispatch(
						quorumActions.setQuorum({ coeficiente: asis.coeficiente }),
					);
				});
			},
		);

		const votoActualFire = doc(this._fire, `${asamblea.key}/VotoActual`);

		this.votoActual$ = docData(votoActualFire).subscribe((votacion: any) => {
			console.log("votacion:::", votacion);
			this.store.dispatch(votoActualActions.setVoto({ voto: votacion }));
		});
	}
	stopSubscriber() {
		this.inmueble$.unsubscribe();
		this.asamblea$.unsubscribe();
		this.asistentes$.unsubscribe();
	}
}
