



  const url = "https://64ba853e5e0670a501d65019.mockapi.io/api-itens/v1/items"

  fetch(url)
    .then((dados) => { return dados.json() })
    .then((data) =>  { montarHTML(data) })


function montarHTML(itensMenu) {
    const divInitial = document.getElementById("div-menuItens")
    var textHtml = ""

    itensMenu.map(function(item) {//usando map para percorrer o array de itens
        textHtml += 
        `<div class="col-4 itens-menu" data-category="${item.categoria}">
        <h2>${item.nome}</h2>
        <p>${item.descricao}</p>
        <img src="assets/${item.imagem}" class="w-25 rounded-lg">
        <div><p><strong>Valor: R$ ${item.valor.replace(".", ",")}</strong></p></div>
        <div><input type="number" name="qtd-${item.id}" class="form-control mb-2 w-50"></div>
        <p><a class="btn btn-primary w-50" href="#" onclick='fazerPedido(${JSON.stringify(item)})'>Fazer Pedido</a></p>
        </div><!--/span-->`
    })

    // Exibir na página os items
    divInitial.innerHTML = textHtml
}

function fazerPedido(item) {
  const qtdItemByName = document.getElementsByName(`qtd-${item.id}`)
  const qtdItem = qtdItemByName[0].value
  //cria um atributo quatidade 
  item['quantidade'] = qtdItem

  // enviar pedido via web



  salvarUltimoPedido(item)
  salvarHistoricoPedidos(item)
  atualizarValorTotal(item)
}

function salvarUltimoPedido(pedido) {
  localStorage.setItem("lastOrder", JSON.stringify(pedido))

}

function salvarHistoricoPedidos(pedido) {
  //se o hitórico estiver vazio
  if (localStorage.getItem("orderHistory") === null){
    historicoPedidos = {items: []}
  } else {
    historicoPedidos = JSON.parse(localStorage.getItem("orderHistory"))
  }
  
  //adicionar o pedido no array
  historicoPedidos.items.push(pedido)

  // salvar no localStorage
  localStorage.setItem("orderHistory", JSON.stringify(historicoPedidos))

}

function filtrarItensMenu(elemento, categoria) {
  removerClasseAtivo(elemento) 
  const itensMenu = document.getElementsByClassName("itens-menu")

  for (itemMenu of itensMenu) {
    // remover as categorias que não são as que eu cliquei
    if (itemMenu.getAttribute("data-category") === categoria) {
      itemMenu.classList.remove("inactive")
    } else {
      itemMenu.classList.add("inactive")
    }
  }
  removerClasseAtivo(elemento) 
}

function selecionarTodosItems(elemento) {
  removerClasseAtivo(elemento) 
  const itensMenu = document.getElementsByClassName("itens-menu")

  for (itemMenu of itensMenu) {
    itemMenu.classList.remove("inactive")
  } 
  removerClasseAtivo(elemento) 
}

function removerClasseAtivo(elemento) {
  const elementosAtivos = document.getElementsByClassName("active")

  for (elementoAtivo of elementosAtivos) {
    elementoAtivo.classList.remove("active")
  }
  
  elemento.parentNode.classList.add("active")//pegar o elemento pai no caso o li adicionar a classe "active"
}


function atualizarValorTotal(pedido) {
  const htmlValorTotal = document.getElementById("valor-total");
  var valorTotal = 0;
  
  if (htmlValorTotal.textContent !== "") {
    valorTotal = Number(htmlValorTotal.textContent.replace(",", "."));
  }

  htmlValorTotal.textContent = (valorTotal + (pedido.quantidade * pedido.valor)).toFixed(2).replace(".", ",")
}
