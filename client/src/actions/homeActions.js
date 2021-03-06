import { SET_RESPONDER_QUIZ, SET_VER_RESULTADOS } from "./types";

export const responderQuiz = () => dispatch => {
  dispatch({ type: SET_RESPONDER_QUIZ });
};

export const verResultados = () => dispatch => {
  dispatch({ type: SET_VER_RESULTADOS });
};

export const mudaAba = novaAba => dispatch => {
  if (novaAba === "quiz") {
    dispatch(responderQuiz());
  } else if (novaAba === "resultados") {
    dispatch(verResultados());
  }
}
