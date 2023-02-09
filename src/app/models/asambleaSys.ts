export interface IAsambleaConfig  {
  video: boolean;
  chat:boolean
  votos:boolean
  setings:boolean;
  files:boolean;
  asistentes:boolean;
  modo:IAsambleaModo
}
export enum IAsambleaModo{
  presencial = "presencial",
  virtual = "virtual",
  hibrido = "hibrido",
}
