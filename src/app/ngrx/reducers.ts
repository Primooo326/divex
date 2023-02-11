import { createReducer, on } from "@ngrx/store";
import {
	AsambleaModo,
	AsambleaStatus,
	IAsambleaConfig,
	IAsambleaModo,
	INuevaAsamblea,
} from "../models/asambleaSys";
import {
	asambleaActions,
	asambleaConfigActions,
	asistentesActions,
	inmuebleActions,
} from "./actions";
import { IInmueble, IInmuebleQuorum, profile } from "../models/inmueble";

export const asambleaConfig: IAsambleaConfig = {
	video: true,
	chat: true,
	votos: true,
	setings: true,
	files: true,
	asistentes: true,
	modo: IAsambleaModo.virtual,
};

export const AsambleaConfigReducer = createReducer(
	asambleaConfig,
	on(asambleaConfigActions.setConfig, (state, { config }) => ({ ...config })),
	on(asambleaConfigActions.setModo, (state, { modo }) => ({
		...state,
		modo: modo,
	})),
);

export const asamblea: INuevaAsamblea = {
	$key: "",
	key: "",
	activa: true,
	emailSender: "",
	estado: "",
	status: AsambleaStatus.iniciada,
	fechaFin: "",
	fechaInicio: "",
	logo: {},
	nombreAsamblea: "",
	onApiList: 0,
	preregistroActivo: true,
	resultsPanelActive: true,
	senderName: "",
	tokenRoom: 0,
	urlLogo: "",
	videoPanelActive: true,
	videoPanelName: "",
	videoRoomName: "",
	votingPanelActive: true,
	ytbLiveStream: "",
	ytbLiveStreamBack: "",
	factor: "",
	modo: AsambleaModo.virtual,
};
export const AsambleaReducer = createReducer(
	asamblea,
	on(asambleaActions.setAsamblea, (state, { asamblea }) => ({ ...asamblea })),
);

export const inmueble: IInmueble = {
	activaCamara: true,
	apto: "",
	codigo: "",
	coeficiente: 0,
	coeficienteVoto: 0,
	coeficientePropio: 0,
	cedePoder: true,
	hasPower: true,
	representa: [],
	documento: "",
	profile: profile.PARTICIPANT,
	propietario: "",
	puedeVotar: true,
	reenvio: "",
	token: "",
	tknGen: "",
	torre: "",
	totalCoeficiente: "",
	totalCoeficienteVoto: "",
	estado: "",
	email: "",
};

export const InmuebleReducer = createReducer(
	inmueble,
	on(inmuebleActions.setInmueble, (state, { inmueble }) => ({ ...inmueble })),
);

export const asistentes: IInmuebleQuorum[] = [];

export const AsistentesReducer = createReducer(
	asistentes,
	on(asistentesActions.setAsistentes, (state, { asistentes }) => [
		...asistentes,
	]),
);
