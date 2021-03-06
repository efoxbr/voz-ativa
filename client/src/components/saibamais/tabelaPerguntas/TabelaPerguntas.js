import React, { Component } from "react";
import { Table, Pagination, PaginationItem, PaginationLink } from "reactstrap";
import isEmpty from "../../../validation/is-empty";
import { connect } from "react-redux";

import { getDadosPerguntas } from "../../../actions/perguntasActions";

import sanitizeHtml from "sanitize-html";

import PropTypes from "prop-types";

import "./tabelaPerguntas.css";

class TabelaPerguntas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paginaAtual: 1,
      perguntasPorPagina: 10
    };
    this.qntPaginas = 0;
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event, index) {
    event.preventDefault();
    this.setState({
      paginaAtual: index
    });
  }

  componentDidMount() {
    this.props.getDadosPerguntas();
  }

  render() {
    const { paginaAtual, perguntasPorPagina } = this.state;

    const { dadosPerguntas } = this.props.perguntas;
    const arrayRespostasUsuario = this.props.votos;

    const perguntas = [];

    Object.keys(dadosPerguntas).map(p => {
      return perguntas.push({
        key: dadosPerguntas[p].id,
        pergunta: dadosPerguntas[p].texto,
        tema: dadosPerguntas[p].tema
      });
    });

    let votacoesCandidato = this.props.respostas;

    function getValorVotacao(num) {
      switch (num) {
        case 1:
          return "Sim";
        case 0:
          return "--";
        case -1:
          return "Não";
        case -2:
          return "Não sabe";
        default:
          return "--";
      }
    }

    function getClassVotacao(num) {
      switch (num) {
        case 1:
          return "in-favor";
        case 0:
          return "";
        case -1:
          return "against";
        case -2:
          return "dont-know";
        default:
          return "--";
      }
    }

    let rows,
      indicePrimeiro,
      indiceUltimo,
      perguntasExibidas,
      renderNumeroPaginas;

    if (!isEmpty(perguntas)) {
      indiceUltimo = paginaAtual * perguntasPorPagina;
      indicePrimeiro = indiceUltimo - perguntasPorPagina;
      perguntasExibidas = perguntas.slice(indicePrimeiro, indiceUltimo);

      let temaExibido = "";
      let change = false;
      rows = perguntasExibidas.map((elem, index) => {
        if (temaExibido !== elem.tema) {
          temaExibido = elem.tema;
          change = true;
        } else {
          change = false;
        }
        const clean = sanitizeHtml(
          perguntasExibidas[elem.key % perguntasPorPagina].pergunta
        );

        return (
          <tbody key={"tbody" + index}>
            <tr key={"tema" + temaExibido}>
              {change ? (
                <td colSpan="3" className="table-title">
                  {temaExibido}
                </td>
              ) : null}
            </tr>
            <tr key={elem.key}>
              <td dangerouslySetInnerHTML={{ __html: clean }} />
              <td
                className={
                  "text-center table-row-center " +
                  getClassVotacao(votacoesCandidato[elem.key])
                }
              >
                {getValorVotacao(votacoesCandidato[elem.key])}
              </td>
              <td
                className={
                  "text-center table-row-center " +
                  getClassVotacao(arrayRespostasUsuario[elem.key])
                }
              >
                {getValorVotacao(arrayRespostasUsuario[elem.key])}
              </td>
            </tr>
          </tbody>
        );
      });

      const numeroPaginas = [];
      for (
        let i = 1;
        i <= Math.ceil(perguntas.length / perguntasPorPagina);
        i++
      ) {
        numeroPaginas.push(i);
      }

      renderNumeroPaginas = numeroPaginas.map(num => {
        return (
          <PaginationLink
            key={num}
            id={num}
            onClick={e => this.handleClick(e, num)}
          >
            {num}
          </PaginationLink>
        );
      });

      this.qntPaginas = numeroPaginas.length;
    }

    return (
      <div className="table-responsive">
        <Table className="table-bordered" hover pagination={{ pageSize: 5 }}>
          <thead className="thead-dark">
            <tr>
              <th className="table-th-question">Perguntas</th>
              <th className="table-th-candidate">Candidato/a</th>
              <th className="table-th-yours">Você</th>
            </tr>
          </thead>
          {rows}
        </Table>
        <Pagination aria-label="Navegação da tabela" size="sm">
          <PaginationItem disabled={paginaAtual <= 1}>
            <PaginationLink
              previous
              id={paginaAtual - 1}
              onClick={e => this.handleClick(e, paginaAtual - 1)}
            />
          </PaginationItem>

          {renderNumeroPaginas}

          <PaginationItem disabled={paginaAtual >= this.qntPaginas}>
            <PaginationLink
              next
              id={paginaAtual + 1}
              onClick={e => this.handleClick(e, paginaAtual + 1)}
            />
          </PaginationItem>
        </Pagination>
      </div>
    );
  }
}
TabelaPerguntas.propTypes = {
  getDadosPerguntas: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  usuario: state.usuarioReducer,
  perguntas: state.perguntasReducer
});

export default connect(
  mapStateToProps,
  { getDadosPerguntas }
)(TabelaPerguntas);
