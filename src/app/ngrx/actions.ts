import { createActionGroup, props } from "@ngrx/store";
import { IAsambleaModo, IAsambleaConfig } from "../models/asambleaSys";



export const asambleaActions = createActionGroup({
  source:"asamblea",
  events:{
    "Set Modo":props<{modo:IAsambleaModo}>(),
    "Set Config":props<{config:IAsambleaConfig}>()
  }
})
