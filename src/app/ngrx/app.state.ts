import { ActionReducerMap } from "@ngrx/store";
import { IAsambleaConfig, INuevaAsamblea } from "../models/asambleaSys";
import {
	AsambleaConfigReducer,
	AsambleaReducer,
	AsistentesReducer,
	InmuebleReducer,
	quorumReducer,
	votoActualReducer,
} from "./reducers";
import { IInmueble, IInmuebleQuorum } from "../models/inmueble";
import { IVoto } from "../models/votos";

export interface AppState {
	asambleaConfig: IAsambleaConfig;
	asamblea: INuevaAsamblea;
	inmueble: IInmueble;
	asistentes: IInmuebleQuorum[];
	quorumTotal: number;
	votoActual: IVoto;
}
export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
	asambleaConfig: AsambleaConfigReducer,
	asamblea: AsambleaReducer,
	inmueble: InmuebleReducer,
	asistentes: AsistentesReducer,
	quorumTotal: quorumReducer,
	votoActual: votoActualReducer,
};
