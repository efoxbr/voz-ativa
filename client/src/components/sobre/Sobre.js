import React, { Component } from "react";

class Sobre extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <section className="intro">
            <h2 className="intro-title text-center">
              Voz ativa quer te ajudar a acompanhar o posicionamento da{" "}
              <strong className="strong">Câmara dos Deputados</strong> a partir
              de temas de fundamental importância para o Brasil.
            </h2>
          </section>
          <section className="section">
            <div className="row">
              <div className="col-md-6">
                <h4 className="footer-title">Quem somos?</h4>
                <p>
                  A Voz Ativa é desenvolvida pela{" "}
                  <strong className="strong">Rede Advocacy</strong>, um coletivo
                  de <strong className="strong">30</strong> Organizações da
                  Sociedade Civil que atuam nos temas de direitos humanos,
                  integridade e transparência, meio-ambiente/clima e negócios de
                  impacto para uma nova economia.
                </p>
              </div>
              <div className="col-md-6">
                <h4 className="footer-title">O que é uma Rede Advocacy?</h4>
                <p>
                  Somos uma rede de 30 organizações da sociedade civil que atuam
                  de forma colaborativa para inovar a participação da sociedade
                  no processo de elaboração de políticas públicas no Brasil.
                </p>
              </div>
            </div>
          </section>
          <section className="section">
            <h4 className="footer-title">Como funciona?</h4>
            <div className="row">
              <div className="col-md-6 howto-text">
                <div>
                  <p>
                    <strong className="strong2">1.</strong> Coletamos as votações dos/as deputados/as em proposições
                  </p>
                  <p><strong className="strong2">2.</strong> Pedimos para que você responda essas proposições</p>
                </div>
              </div>
              <div className="col-md-4">
                <img
                  src={require("../../data/img/howto01.jpg")}
                  alt="Como funciona"
                  width="100%"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 howto-text">
                <div>
                  <p><strong className="strong2">3.</strong> Comparamos seu posicionamento com os da Câmara</p>
                  <p>
                  <strong className="strong2">4.</strong> Mostramos quais deputados/as mais se alinham com você
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <img
                  src={require("../../data/img/howto02.jpg")}
                  alt="Como funciona"
                  width="100%"
                />
              </div>
            </div>
          </section>
          <section className="section">
            <h4 className="footer-title">Como ajudar neste projeto?</h4>
            <p>
              Nosso código é aberto! Para saber mais sobre como funcionamos você
              pode consulta-lo em {"   "}
              <a href="https://github.com/analytics-ufcg/voz-ativa">
                {" "}
                github.com/analytics-ufcg/voz-ativa
              </a>
            </p>
          </section>
        </div>
        <div className="section-inverse">
          <div className="container">
            <div className="d-flex justify-content-center">
              <h4 className="footer-title float-title">
                Porque somos importantes?
              </h4>
            </div>
            <div className="row no-gutters">
              <div className="col-md-4">
                <p className="featured-box">
                  As redes sociais estão inundadas de fake news.
                </p>
              </div>
              <div className="col-md-4">
                <p className="featured-box">
                  São 513 deputados/as para se acompanhar.
                </p>
              </div>
              <div className="col-md-4">
                <p className="featured-box">
                  É dificil acompanhar as votações importantes na Câmara
                </p>
              </div>
              {/* <div className="col-lg-6">
                <div className="featured">
                  <div className="row no-gutters">
                    <div className="col-md-6">
                      <img
                        src={require("../../data/img/people.png")}
                        alt="Ícones representando candidatos destacando nove entre dez"
                        width="100%"
                      />
                    </div>
                    <div className="col-md-6">
                      <p className="highlight-box">
                        Nove em cada 10 deputados querem permanecer no
                        Legislativo.
                      </p>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
        <section className="intro">
          <div className="container">
            <div className="d-flex justify-content-center">
              <h4 className="footer-title">Parceiros</h4>
            </div>

            <div className="row">
              <div className="col-md-4">
                <ul className="ul">
                  <li>Cidade Escola Aprendiz</li>
                  <li>ClimaInfo</li>
                  <li>Conectas</li>
                  <li>Engajamundo</li>
                  <li>Fundación Avina</li>
                  <li>GIFE</li>
                </ul>
              </div>
              <div className="col-md-4">
                <ul className="ul">
                  <li>ICE</li>
                  <li>Idesam</li>
                  <li>Impact Hub</li>
                  <li>Inesc</li>
                  <li>InPacto</li>
                  <li>Instituto Clima e Sociedade</li>
                </ul>
              </div>
              <div className="col-md-4">
                <ul className="ul">
                  <li>Instituto Ethos</li>
                  <li>Instituto Terroá </li>
                  <li>Observatório do Clima</li>
                  <li>Sistema B</li>
                  <li>Transparência Internacional </li>
                  <li>Update Politics </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Sobre;
