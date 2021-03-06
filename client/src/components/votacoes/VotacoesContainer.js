import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Votacao from "./Votacao";
import CopiaUrl from "../questionario/CopiaUrl";

import {
  getDadosVotacoes,
  setVotacoesCarregando
} from "../../actions/votacoesActions";

import { salvaRespostasUsuario } from "../../actions/usuarioActions";

import {
  calculaScore,
  calculaScorePorTema
} from "../../actions/candidatosActions";

import {
  passaPergunta,
  escolheTema,
  exibePerguntas,
  escondePerguntas
} from "../../actions/questionarioActions";

import isEmpty from "../../validation/is-empty";
import FlipMove from "react-flip-move";
import { Collapse } from "reactstrap";

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

class VotacoesContainer extends Component {
  constructor(props) {
    super(props);

    this.passaPergunta = this.passaPergunta.bind(this);
    this.togglePerguntaContainer = this.togglePerguntaContainer.bind(this);
  }

  registraResposta(novaResposta) {
    const { respostasUsuario } = this.props.usuario;

    const respostaAnterior = respostasUsuario.votacoes[novaResposta.id];

    respostasUsuario.votacoes[novaResposta.id] = novaResposta.resposta;
    this.props.salvaRespostasUsuario(respostasUsuario, novaResposta.id);

    this.props.calculaScore({
      idPergunta: novaResposta.id,
      respostaAnterior: respostaAnterior
    });
    this.passaPergunta();
  }

  async passaPergunta() {
    await delay(400);
    this.props.passaPergunta();

    const { indexPergunta, dadosVotacoes, TAM_PERGUNTAS } = this.props.votacoes;

    if (indexPergunta <= TAM_PERGUNTAS) {
      this.props.escolheTema(dadosVotacoes[indexPergunta].tema);
    }
  }

  render() {
    const { dadosVotacoes, indexPergunta } = this.props.votacoes;

    const { isExibeGavetaPerguntas } = this.props.questionario;

    let votacao;
    let exibeVotacao;

    if (!isEmpty(dadosVotacoes)) {
      const dadosVotacao = dadosVotacoes[indexPergunta];

      const { respostasUsuario } = this.props.usuario;

      votacao = (
        <Votacao
          id={dadosVotacao.id}
          projLei={dadosVotacao.numero_proj_lei}
          idVotacao={dadosVotacao.id_votacao}
          titulo={dadosVotacao.titulo}
          descricao={dadosVotacao.descricao}
          tema={dadosVotacao.tema}
          voto={respostasUsuario.votacoes[dadosVotacao.id_votacao]}
          onVota={novaResposta => this.registraResposta(novaResposta)}
        />
      );

      exibeVotacao = (
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
            {votacao}
            <CopiaUrl />
          </div>
        </div>
      );
    }

    return (
      <div className="votacao-container">
        <div>
          <Collapse isOpen={isExibeGavetaPerguntas}>
            <FlipMove>{exibeVotacao}</FlipMove>
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

VotacoesContainer.propTypes = {
  calculaScore: PropTypes.func.isRequired,
  calculaScorePorTema: PropTypes.func.isRequired,
  getDadosVotacoes: PropTypes.func.isRequired,
  setVotacoesCarregando: PropTypes.func.isRequired,
  salvaRespostasUsuario: PropTypes.func.isRequired,
  passaPergunta: PropTypes.func.isRequired,
  escolheTema: PropTypes.func.isRequired,
  escondePerguntas: PropTypes.func.isRequired,
  exibePerguntas: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  votacoes: state.votacoesReducer,
  usuario: state.usuarioReducer,
  questionario: state.questionarioReducer,
  candidatos: state.candidatosReducer
});

export default connect(
  mapStateToProps,
  {
    calculaScore,
    calculaScorePorTema,
    getDadosVotacoes,
    setVotacoesCarregando,
    salvaRespostasUsuario,
    passaPergunta,
    escolheTema,
    escondePerguntas,
    exibePerguntas
  }
)(VotacoesContainer);
