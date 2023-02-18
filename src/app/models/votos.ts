export interface IVoto {
	nombre: string;
	codigo: string;
	seeVoto: boolean;
	estado: boolean;
	concepto: string;
	opciones: IOpcion[];
	$key: string;
	id: string;
}
export interface IOpcion {
	nombre: string;
	quorumRespectivo: number;
	codigo: string;
	checked?: boolean;
	votoId: string;
	$key: string;
	cantidadVotos: number;
	acomulado: number;
}

export interface IOpcionesVotadas {
	coeficiente: number;
	inmueble: string;
	nombreOpcion: string;
	numeroVotos: number;
	opcionId: string;
	votoId: string;
}
