import React from "react";
import {
  calculaScore,
  calculaScorePorTema,
  buscaPorCPF,
  getTopNCandidatos,
  getDadosCandidatos,
  getDadosCandidato
} from "../client/src/actions/candidatosActions";
import { Candidato } from "../client/src/components/candidatos/Candidato";

import TestRenderer from "react-test-renderer";
