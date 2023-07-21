



  const url = "http://127.0.0.1:5500/server-itens.JSON"

  fetch(url)
    .then((dados) => { return dados.json() })
    .then((data) =>  { montarHTML(data) })


function montarHTML(itensMenu) {
    const divInitial = document.getElementById("div-menuItens")
    var textHtml = ""

    itensMenu.items.forEach(function(item) {
        textHtml += 
        `<div class="span4 itens-menu" data-category="${item.categoria}">
        <h2>${item.nome}</h2>
        <p>${item.descricao}</p>
        <img src="assets/${item.imagem}" style="margin-bottom: 8px; width: 55px; border-radius: 10px">
        <div><p>Valor: R$ ${item.valor.replace(".", ",")}</p></div>
        <div><input type="number" name="qtd-${item.id}" style="width: 88px;"></div>
        <p><a class="btn" href="#" onclick='fazerPedido(${JSON.stringify(item)})'>Fazer Pedido</a></p>
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
