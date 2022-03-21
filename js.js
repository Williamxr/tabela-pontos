var willx = { nome: "Willx", vitorias: 2, empates: 1, derrotas: 1, pontos: 0 };
var renata = {
  nome: "Renata",
  vitorias: 3,
  empates: 2,
  derrotas: 4,
  pontos: 0,
};
var isadora = {
  nome: "Isadora",
  vitorias: 1,
  empates: 4,
  derrotas: 2,
  pontos: 0,
};

function calculaPontos(jogador) {
  var pontos = jogador.vitorias * 3 + jogador.empates;
  return pontos;
}

willx.pontos = calculaPontos(willx);
renata.pontos = calculaPontos(renata);
isadora.pontos = calculaPontos(isadora);

var jogadores = [willx, renata, isadora];

function exibeJogadoresNaTela(jogadores) {
  var elemento = "";

  for (var i = 0; i < jogadores.length; i++) {
    elemento += "<tr><td>" + jogadores[i].nome + "</td>"
    elemento += "<td>" + jogadores[i].vitorias + "</td>"
    elemento += "<td>" + jogadores[i].empates + "</td>"
    elemento += "<td>" + jogadores[i].derrotas + "</td>"
    elemento += "<td>" + jogadores[i].pontos + "</td>"
    elemento += "<td><button onClick='adicionarVitoria()'>Vitória</button></td>"
    elemento += "<td><button onClick='adicionarEmpate()'>Empate</button></td>"
    elemento += "<td><button onClick='adicionarDerrota()'>Derrota</button></td>"
    elemento += "</tr>"
  }

  var tabelaJogadores = document.getElementById("tabelaJogadores");
  tabelaJogadores.innerHTML = elemento
}
