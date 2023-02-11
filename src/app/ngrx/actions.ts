import { createActionGroup, props } from "@ngrx/store";
import { IInmueble, IInmuebleQuorum } from "../models/inmueble";
import {
	IAsambleaModo,
	IAsambleaConfig,
	INuevaAsamblea,
} from "../models/asambleaSys";

export const asambleaConfigActions = createActionGroup({
	source: "asambleaConfig",
	events: {
		"Set Modo": props<{ modo: IAsambleaModo }>(),
		"Set Config": props<{ config: IAsambleaConfig }>(),
	},
});
export const asambleaActions = createActionGroup({
	source: "asamblea",
	events: {
		"Set Asamblea": props<{ asamblea: INuevaAsamblea }>(),
	},
});
export const inmuebleActions = createActionGroup({
	source: "inmueble",
	events: {
		"Set Inmueble": props<{ inmueble: IInmueble }>(),
	},
});
export const asistentesActions = createActionGroup({
	source: "asistentes",
	events: {
		"Set Asistentes": props<{ asistentes: IInmuebleQuorum[] }>(),
	},
});
