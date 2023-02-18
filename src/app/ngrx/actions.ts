import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { IInmueble, IInmuebleQuorum } from "../models/inmueble";
import { IVoto } from "../models/votos";
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

export const quorumActions = createActionGroup({
	source: "quorum",
	events: {
		"Set Quorum": props<{ coeficiente: number }>(),
		"Reset Quorum": emptyProps(),
	},
});
export const votoActualActions = createActionGroup({
	source: "votoActual",
	events: {
		"Set Voto": props<{ voto: IVoto }>(),
		"Votacion Cerrada": emptyProps(),
	},
});
