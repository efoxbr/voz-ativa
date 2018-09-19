//https://github.com/reduxjs/redux/blob/master/docs/recipes/WritingTests.md

import React from "react";
import {
  calculaScore,
  calculaScorePorTema,
  buscaPorCPF,
  getTopNCandidatos,
  getDadosCandidatos,
  getDadosCandidato
} from "../client/src/actions/candidatosActions";
import {
  SET_DADOS_CANDIDATOS,
  SET_SCORE_CANDIDATOS,
  SET_SCORE_CANDIDATO_POR_TEMA,
  CANDIDATOS_CARREGANDO,
  CANDIDATOS_CARREGADOS
} from "../client/src/actions/types";
import { TestRenderer, renderer } from "react-test-renderer";

let respostasUsuario = {
  0: 1,
  1: 1,
  2: -1,
  3: -1,
  4: 1,
  5: 1,
  6: -1,
  7: 1,
  8: -1,
  9: 1,
  10: -1,
  11: 1,
  12: -1,
  13: 1,
  14: -2,
  15: -1,
  16: 1,
  17: -1,
  18: 1,
  19: 1,
  20: -1,
  21: 1,
  22: -1,
  23: 1,
  24: -1,
  25: 1,
  26: 1,
  27: -1,
  28: 1,
  29: 1,
  30: -1,
  31: 1,
  32: 1,
  33: -1,
  34: 1,
  35: 1,
  36: -1,
  37: -1,
  38: -1,
  39: -1,
  40: 1,
  41: -1,
  42: 1,
  43: -1,
  44: 1,
  45: 1
};
let arrayRespostasUsuario = [
  1,
  1,
  -1,
  -1,
  1,
  1,
  -1,
  1,
  -1,
  1,
  -1,
  1,
  -1,
  1,
  -2,
  -1,
  1,
  -1,
  1,
  1,
  -1,
  1,
  -1,
  1,
  -1,
  1,
  1,
  -1,
  1,
  1,
  -1,
  1,
  1,
  -1,
  1,
  1,
  -1,
  -1,
  -1,
  -1,
  1,
  -1,
  1,
  -1,
  1,
  1
];

test("Testes para Candidatos", () => {
  expect(calculaScorePorTema).toBe();
});

//calcula score: match 100%, match randomico, match 0, candidato sem resposta

//calcula score por tema: match 100%, match randomico, match 0, candidato sem resposta

//buscaporCPF:
