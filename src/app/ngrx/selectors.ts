import { AppState } from "./app.state";

export const asambleaConfigSelect = (state: AppState) => state.asambleaConfig;
export const asambleaSelect = (state: AppState) => state.asamblea;
export const inmuebleSelect = (state: AppState) => state.inmueble;
export const asistentesSelect = (state: AppState) => state.asistentes;
export const quorumTotal = (state: AppState) => {
	let quorum = 0;
	state.asistentes.forEach((asist) => {
		quorum = +asist.asistentes;
	});
	return quorum;
};
