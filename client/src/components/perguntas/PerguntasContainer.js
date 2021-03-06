import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Pergunta from "./Pergunta";
import FinalPerguntas from "../questionario/FinalPerguntas";
import CopiaUrl from "../questionario/CopiaUrl";

import {
  calculaScore,
  calculaScorePorTema
} from "../../actions/candidatosActions";

import { getDadosPerguntas } from "../../actions/perguntasActions";

import {
  passaPergunta,
  escolheTema,
  exibePerguntas,
  escondePerguntas
} from "../../actions/questionarioActions";

import { salvaRespostasUsuario } from "../../actions/usuarioActions";

import { criaURL } from "../../constantes/tratamentoUrls";

import FlipMove from "react-flip-move";

import { Collapse } from "reactstrap";

import isEmpty from "../../validation/is-empty";

//import { delay } from "../../utils/funcoes";

import "./perguntas.css";

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

class PerguntasContainer extends Component {
  constructor(props) {
    super(props);

    this.passaPergunta = this.passaPergunta.bind(this);
    this.togglePerguntaContainer = this.togglePerguntaContainer.bind(this);
  }

  registraResposta(novaResposta) {
    const { respostasUsuario } = this.props.usuario;

    const respostaAnterior = respostasUsuario.vozAtiva[novaResposta.id];

    respostasUsuario.vozAtiva[novaResposta.id] = novaResposta.resposta;
    //arrayRespostasUsuario[novaResposta.id] = novaResposta.resposta;
    this.props.salvaRespostasUsuario(respostasUsuario, novaResposta.id);

    this.props.calculaScore({
      idPergunta: novaResposta.id,
      respostaAnterior: respostaAnterior
    });
    this.passaPergunta();
  }

  geraUrl() {
    let hostURL = process.env.REACT_APP_FACEBOOK_REDIRECT_URI;
    const url =
      hostURL +
      this.props.candidatos.filtro.estado +
      "/" +
      criaURL(this.props.usuario.respostasUsuario);
    return url;
  }

  async passaPergunta() {
    await delay(400);
    this.props.passaPergunta();
    const { indexPergunta, dadosPerguntas } = this.props.perguntas;

    if (indexPergunta <= 45) {
      this.props.escolheTema(dadosPerguntas[indexPergunta].tema);
    }
  }

  render() {
    const { dadosPerguntas, indexPergunta } = this.props.perguntas;

    const { isExibeGavetaPerguntas } = this.props.questionario;

    let pergunta;
    let exibePerguntas;

    if (!isEmpty(dadosPerguntas)) {
      const dadosPergunta = dadosPerguntas[indexPergunta];

      const {
        vozAtiva: respostasUsuario
      } = this.props.usuario.respostasUsuario;

      pergunta = (
        <Pergunta
          key={dadosPergunta.id}
          id={dadosPergunta.id}
          index={dadosPergunta.id}
          pergunta={dadosPergunta.texto}
          ajuda={dadosPergunta.ajuda}
          voto={respostasUsuario[dadosPergunta.id]}
          onVota={novaResposta => this.registraResposta(novaResposta)}
        />
      );

      exibePerguntas = (
        <div
          id="perguntaContainer"
          className="card"
          aria-labelledby="perguntaContainer"
        >
          <div className="card-body">
            <div className="container">
              <h2 className="question-theme">
                {this.props.questionario.filtroTema}
              </h2>
            </div>

            {pergunta}
            <CopiaUrl />
          </div>
        </div>
      );
    }

    return (
      <div className="pergunta-container">
        <div>
          <Collapse isOpen={isExibeGavetaPerguntas}>
            <FlipMove>{exibePerguntas}</FlipMove>
          </Collapse>
        </div>
      </div>
    );
  }

  togglePerguntaContainer(event) {
    event.preventDefault();
    this.props.questionario.isExibeGavetaPerguntas
      ? this.props.escondePerguntas()
      : this.props.exibePerguntas();
  }
}

PerguntasContainer.propTypes = {
  salvaRespostasUsuario: PropTypes.func.isRequired,
  calculaScore: PropTypes.func.isRequired,
  calculaScorePorTema: PropTypes.func.isRequired,
  getDadosPerguntas: PropTypes.func.isRequired,
  passaPergunta: PropTypes.func.isRequired,
  escolheTema: PropTypes.func.isRequired,
  escondePerguntas: PropTypes.func.isRequired,
  exibePerguntas: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  usuario: state.usuarioReducer,
  candidatos: state.candidatosReducer,
  perguntas: state.perguntasReducer,
  auth: state.auth,
  questionario: state.questionarioReducer
});

export default connect(
  mapStateToProps,
  {
    salvaRespostasUsuario,
    calculaScore,
    calculaScorePorTema,
    getDadosPerguntas,
    passaPergunta,
    escolheTema,
    escondePerguntas,
    exibePerguntas
  }
)(PerguntasContainer);
