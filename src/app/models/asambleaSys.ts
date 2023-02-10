export interface INuevaAsamblea {
	$key: string;
	key: string;
	activa: boolean;
	emailSender: string;
	estado: string;
	status?: AsambleaStatus;
	fechaFin: string;
	fechaInicio: string;
	logo: any;
	nombreAsamblea: string;
	onApiList: number;
	preregistroActivo: boolean;
	resultsPanelActive: boolean;
	senderName: string;
	tokenRoom: number;
	urlLogo: string;
	videoPanelActive: boolean;
	videoPanelName: string;
	videoRoomName?: string;
	votingPanelActive: boolean;
	ytbLiveStream: string;
	ytbLiveStreamBack: string;
	factor: string;
	modo: AsambleaModo;
}
export interface IAsambleaConfig {
	video: boolean;
	chat: boolean;
	votos: boolean;
	setings: boolean;
	files: boolean;
	asistentes: boolean;
	modo: IAsambleaModo;
}
export enum IAsambleaModo {
	presencial = "presencial",
	virtual = "virtual",
	hibrido = "hibrido",
}
export interface IAsamblea {
	estado: AsambleaStatus;
	nombre: string;
	id: string;
	tokenRoom: string;
	ajustes: IAsambleaAjustes;
	modo: AsambleaModo;
}
export interface IAsambleaAjustes {
	ytbLiveStream: string;
	fechaInicio: string;
	preRegistro: boolean;
	senderName: string;
	senderEmail: string;
}
export enum AsambleaStatus {
	creada = "creada",
	iniciada = "iniciada",
	finalizada = "finalizada",
	suspendida = "suspendida",
	cancelada = "cancelada",
}
export enum AsambleaModo {
	precencial = "precencial",
	virtual = "virtual",
	hibrido = "hibrido",
}
