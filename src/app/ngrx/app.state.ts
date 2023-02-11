import { ActionReducerMap } from "@ngrx/store";
import { IAsambleaConfig, INuevaAsamblea } from "../models/asambleaSys";
import {
	AsambleaConfigReducer,
	AsambleaReducer,
	AsistentesReducer,
	InmuebleReducer,
} from "./reducers";
import { IInmueble, IInmuebleQuorum } from "../models/inmueble";

export interface AppState {
	asambleaConfig: IAsambleaConfig;
	asamblea: INuevaAsamblea;
	inmueble: IInmueble;
	asistentes: IInmuebleQuorum[];
}
export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
	asambleaConfig: AsambleaConfigReducer,
	asamblea: AsambleaReducer,
	inmueble: InmuebleReducer,
	asistentes: AsistentesReducer,
};
