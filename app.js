<<<<<<< HEAD
//criar array
let amigos = [];
//função para add amigos
function adicionarAmigo() {
  //capturar valor do campo de entrada
  let nomeAmigo = document.getElementById("amigo");
  let nome = nomeAmigo.value.trim();
  //validar entrada
  if (nome === "") {
    alert("Digite o nome do amigo!");
    return;
  }
  //add nome
  amigos.push(nome);
  //atualizar a lista
  atualizarLista();
  //limpar o campo de entrada
  nomeAmigo.value = "";
}

//função para atualizar a lista exibida
function atualizarLista() {
  let listaAmigos = document.getElementById("listaAmigos");
  //limpar lista existente
  listaAmigos.innerHTML = "";
  //add os amigos
  amigos.forEach((amigo) => {
    //lista.para cada elemento da variável nomeAmigo => faça (documentação do JS = array1.forEach((element) =>)
    let listaTotal = document.createElement("li"); //então, listaTotal = ítens em lista
    listaTotal.textContent = amigo;
    listaAmigos.appendChild(listaTotal);
  });
}

//função para sortear amigo
function sortearAmigo() {
  //validar se há amigos disponíveis
  if (amigos.length === 0) {
    //se amigos = 0, então
    alert("Adicione ao menos 3 nomes para sortear o amigo secreto");
    return;
  }
  //validar número necessário de amigos
  if (amigos.length < 3) {
    //se amigos for menor que 3, então
    alert("Adicione ao menos 3 nomes para sortear o amigo secreto");
    return;
  }
  //sortear amigo aleatório
  let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
  //math.floor arredonda para baixo
  //math.ramdom gera um número aleatório
  //amigos.length = tamanho do array

  //exibir nome do amigo sorteado
  let resultado = document.getElementById("resultado");
  resultado.textContent = `O amigo sorteado é ${amigoSorteado}`;
  //textContent = conteúdo de texto
}
=======
//criar array
let amigos = [];
//função para add amigos
function adicionarAmigo() {
  //capturar valor do campo de entrada
  let nomeAmigo = document.getElementById("amigo");
  let nome = nomeAmigo.value.trim();
  //validar entrada
  if (nome === "") {
    alert("Digite o nome do amigo!");
    return;
  }
  //add nome
  amigos.push(nome);
  //atualizar a lista
  atualizarLista();
  //limpar o campo de entrada
  nomeAmigo.value = "";
}

//função para atualizar a lista exibida
function atualizarLista() {
  let listaAmigos = document.getElementById("listaAmigos");
  //limpar lista existente
  listaAmigos.innerHTML = "";
  //add os amigos
  amigos.forEach((amigo) => {
    //lista.para cada elemento da variável nomeAmigo => faça (documentação do JS = array1.forEach((element) =>)
    let listaTotal = document.createElement("li"); //então, listaTotal = ítens em lista
    listaTotal.textContent = amigo;
    listaAmigos.appendChild(listaTotal);
  });
}

//função para sortear amigo
function sortearAmigo() {
  //validar se há amigos disponíveis
  if (amigos.length === 0) {
    //se amigos = 0, então
    alert("Adicione ao menos 3 nomes para sortear o amigo secreto");
    return;
  }
  //validar número necessário de amigos
  if (amigos.length < 3) {
    //se amigos for menor que 3, então
    alert("Adicione ao menos 3 nomes para sortear o amigo secreto");
    return;
  }
  //sortear amigo aleatório
  let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
  //math.floor arredonda para baixo
  //math.ramdom gera um número aleatório
  //amigos.length = tamanho do array

  //exibir nome do amigo sorteado
  let resultado = document.getElementById("resultado");
  resultado.textContent = `O amigo sorteado é ${amigoSorteado}`;
  //textContent = conteúdo de texto
}
>>>>>>> ffcbad0cf8984fbced122ca0d0de206fd2b72424
