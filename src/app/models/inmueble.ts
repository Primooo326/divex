export interface IInmueble {
	activaCamara: boolean; // Se le permite particiopar directo
	apto: string;
	codigo: string;
	coeficiente: number;
	coeficienteVoto?: number;
	coeficientePropio?: number; // coeficiente de su apartamento
	cedePoder?: boolean; // es o no poderdante
	hasPower?: boolean; // deterimna si tiene poderes a cargo
	representa: [];
	documento: string; // Documento de identificacion del propietario
	profile?: profile; // {SUPER_USER, MANAGER, PARTICIPANT, GUEST}
	propietario: string; //
	puedeVotar?: boolean; //
	reenvio?: string; // bandera de reenvios de correo - posiblemente grupo
	token?: string; // el usuario se logea con token asignado
	tknGen?: string; // token preasignado asignado
	torre: string;
	totalCoeficiente: string;
	totalCoeficienteVoto?: string;
	estado: string; // Activo, no activo
	email?: string;
}
export enum profile {
	SUPER_USER = "SUPER_USER",
	MANAGER = "MANAGER",
	PARTICIPANT = "PARTICIPANT",
	GUEST = "GUEST",
}
export interface IInmuebleV2 {
	inmueble: string;
	coeficiente: number;
	totalCoeficiente: number;
	email: string;
	nombre: string;
	activaCamara: boolean;
	id: string;
	tokenUser: string;
	apoderados: IInmuebleV2[];
}

export interface IInmuebleV2Settings extends IInmuebleV2 {
	perfil: EPerfil;
	puedeVotar: boolean;
	estadoDeCorreo: EStatusEmail;
	estado: boolean;
}
export enum EPerfil {
	super_user = "super_user",
	manager = "manager",
	participant = "participant",
	guest = "guest",
}
export enum EStatusEmail {
	noEnviado = "noEnviado",
	enviado = "enviado",
}
export interface IInmuebleQuorum {
	$key: string;
	key: string;
	asistentes: number;
	torre: string;
	apto: string;
	coeficiente: number;
	fecha: string;
	inmueble: string;
	nombre: string;
	puedeVotar: boolean;
}
