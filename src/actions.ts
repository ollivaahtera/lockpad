import { ADD_CODE, CLEAR_CODE, SET_LOCKED } from "./constants";

export function addCode(payload: string) {
  return { type: ADD_CODE, payload }
}

export function clearCode() {
  return { type: CLEAR_CODE, payload: {} }
}

export function setLocked(payload: boolean) {
  return { type: SET_LOCKED, payload }
}