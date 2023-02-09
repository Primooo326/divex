import { createReducer, on } from "@ngrx/store";
import { IAsambleaConfig, IAsambleaModo } from "../models/asambleaSys";
import { asambleaActions } from "./actions";


export const initialState:IAsambleaConfig = {

  video: true,
  chat:true,
  votos:true,
  setings:true,
  files:true,
  asistentes:true,
  modo:IAsambleaModo.virtual


}

export const AsambleaReducer = createReducer(
  initialState,
  on(asambleaActions.setConfig,(state,{config})=>({...config})),
  on(asambleaActions.setModo,(state,{modo})=>({...state,modo:modo})),
)
