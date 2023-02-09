import { ActionReducerMap } from "@ngrx/store";
import { IAsambleaConfig } from "../models/asambleaSys";
import { AsambleaReducer } from "./reducers";


export interface AppState {
  asambleaConfig:IAsambleaConfig
}
export const ROOT_REDUCERS:ActionReducerMap<AppState> = {
  asambleaConfig:AsambleaReducer
}
