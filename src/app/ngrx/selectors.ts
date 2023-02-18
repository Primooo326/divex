import { AppState } from "./app.state";

export const asambleaConfigSelect = (state: AppState) => state.asambleaConfig;
export const asambleaSelect = (state: AppState) => state.asamblea;
export const inmuebleSelect = (state: AppState) => state.inmueble;
export const asistentesSelect = (state: AppState) => state.asistentes;
export const quorumTotal = (state: AppState) => state.quorumTotal;
export const votoActual = (state: AppState) => state.votoActual;
