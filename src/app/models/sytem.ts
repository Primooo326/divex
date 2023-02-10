export enum RQ_STATE {
	SOLICITADA,
	CONCEDIDA,
	DENEGADA,
	TERMINADA,
	FINALIZADA,
}

export enum resultType {
	SUCCESS,
	WARNING,
	ERROR,
	INFO,
}

export interface IResult {
	message: string;
	result: boolean;
	type: resultType;
	data?: any;
}
