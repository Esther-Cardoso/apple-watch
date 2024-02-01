const imagemVisualizacao = document.getElementById('imagem-visualizacao');

const azulInverno = {
  nome: 'Azul-inverno',
  pasta: 'imagens-azul-inverno',
};
const estelar = {
  nome: 'Estelar',
  pasta: 'imagens-estelar',
};
const meiaNoite = {
  nome: 'Meia-noite',
  pasta: 'imagens-meia-noite',
};
const rosaClaro = {
  nome: 'Rosa-claro',
  pasta: 'imagens-rosa-claro',
};
const verdeCipreste = {
  nome: 'Verde-cipreste',
  pasta: 'imagens-verde-cipreste',
};

const opcoesCores = [azulInverno, estelar, meiaNoite, rosaClaro, verdeCipreste];

let imagemSeleciona = 1;

function trocarImagem() {
  const idOpcaoSelecionada = document.querySelector(
    '[name="opcao-imagem"]:checked',
  ).id;
  imagemSeleciona = idOpcaoSelecionada.charAt(0);
  imagemVisualizacao.src = `./imagens/opcoes-cores/imagens-azul-inverno/imagem-${imagemSeleciona}.jpeg`;
}
