export interface IChat {
	fecha: string;
	from: string;
	message: string;
	to: IChatTo;
}
export enum IChatTo {
	junta = "junta",
}
