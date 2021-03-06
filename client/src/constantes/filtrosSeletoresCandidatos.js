import React from "react";

export const estados = () => {
  return [
    "TODOS",
    "AC",
    "AL",
    "AM",
    "AP",
    "BA",
    "CE",
    "DF",
    "ES",
    "GO",
    "MA",
    "MT",
    "MS",
    "MG",
    "PA",
    "PB",
    "PR",
    "PE",
    "PI",
    "RJ",
    "RN",
    "RO",
    "RS",
    "RR",
    "SC",
    "SE",
    "SP",
    "TO"
  ].map(estado => (
    <option key={estado} value={estado}>
      {estado}
    </option>
  ));
};

export const partidos = () => {
  return [
    "TODOS",
    "DC",
    "DEM",
    "MDB",
    "NOVO",
    "PAN",
    "PATRI",
    "PC do B",
    "PCB",
    "PCO",
    "PDT",
    "PEN",
    "PFL",
    "PGT",
    "PHS",
    "PL",
    "PMB",
    "PMDB",
    "PMN",
    "PODE",
    "PP",
    "PPB",
    "PPL",
    "PPS",
    "PR",
    "PRB",
    "PRN",
    "PRONA",
    "PROS",
    "PRP",
    "PRTB",
    "PSB",
    "PSC",
    "PSD",
    "PSDB",
    "PSDC",
    "PSL",
    "PSOL",
    "PST",
    "PSTU",
    "PT",
    "PT do B",
    "PTB",
    "PTC",
    "PTN",
    "PV",
    "REDE",
    "SD"
  ].map(partido => (
    <option key={partido} value={partido}>
      {partido}
    </option>
  ));
};

export const listaEstados = () => {
  return [
    "TODOS",
    "AC",
    "AL",
    "AM",
    "AP",
    "BA",
    "CE",
    "DF",
    "ES",
    "GO",
    "MA",
    "MT",
    "MS",
    "MG",
    "PA",
    "PB",
    "PR",
    "PE",
    "PI",
    "RJ",
    "RN",
    "RO",
    "RS",
    "RR",
    "SC",
    "SE",
    "SP",
    "TO"
  ];
};

export const opcoesFiltroReeleicao = () => {
  return [{ label: "tem atuação na Câmara", value: "1" }];
};

export const opcoesFiltroTemas = () => {
  return [{ tema: "Temas", titulo: "Considerando todos os temas" },
  { tema: "Meio Ambiente", titulo: "Apenas meio ambiente" },
  { tema: "Direitos Humanos", titulo: "Apenas direitos humanos" },
  { tema: "Integridade e Transparência", titulo: "Apenas integridade e transparência" },
  { tema: "Agenda Nacional", titulo: "Apenas agenda nacional" },
  { tema: "Educação", titulo: "Apenas educação" }]

};
