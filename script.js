let prato;
let bebida;
let sobremesa;

function selecionarPrato(classeBotao) {
  const botaoSelecionado = document.querySelector(".prato .selecionado");

  if (botaoSelecionado !== null) {
    botaoSelecionado.classList.remove("selecionado");
  }

  const seletor = "." + classeBotao;
  const botao = document.querySelector(seletor);
  botao.classList.add("selecionado");

  const precoDoPrato = botao.querySelector(".preco");
  const precoFiltrado = precoDoPrato.innerHTML.slice(3).split(",").join(".");

  prato = {
    nome: classeBotao.split("-").join(" "),
    preco: precoFiltrado,
  };

  return habilitaBotaoContinuar();
}

function selecionarBebida(classeBotao) {
  const botaoSelecionado = document.querySelector(".bebida .selecionado");

  if (botaoSelecionado !== null) {
    botaoSelecionado.classList.remove("selecionado");
  }

  const seletor = "." + classeBotao;
  const botao = document.querySelector(seletor);
  botao.classList.add("selecionado");

  const precoDoPrato = botao.querySelector(".preco");
  const precoFiltrado = precoDoPrato.innerHTML.slice(3).split(",").join(".");

  bebida = {
    nome: classeBotao.split("-").join(" "),
    preco: precoFiltrado,
  };

  return habilitaBotaoContinuar();
}

function selecionarSobremesa(classeBotao) {
  const botaoSelecionado = document.querySelector(".sobremesa .selecionado");

  if (botaoSelecionado !== null) {
    botaoSelecionado.classList.remove("selecionado");
  }

  const seletor = "." + classeBotao;
  const botao = document.querySelector(seletor);
  botao.classList.add("selecionado");

  const precoDoPrato = botao.querySelector(".preco");
  const precoFiltrado = precoDoPrato.innerHTML.slice(3).split(",").join(".");

  sobremesa = {
    nome: classeBotao.split("-").join(" "),
    preco: precoFiltrado,
  };

  return habilitaBotaoContinuar();
}

function habilitaBotaoContinuar() {
  if (prato && bebida && sobremesa) {
    const soma =
      Number(prato.preco) + Number(bebida.preco) + Number(sobremesa.preco);

    const foot = document.querySelector(".text-foot");
    foot.classList.add("text-foot-selected");
    foot.innerHTML = "Fechar pedido!";

    foot.addEventListener("click", function (e) {
      const string = `Olá, gostaria de fazer o pedido: 
    - Prato: ${prato.nome} 
    - Bebida: ${bebida.nome} 
    - Sobremesa: ${sobremesa.nome} 
    Total: R$ ${soma.toFixed(2)}`;

      window.location.href = `https://wa.me/5534998144943?text=${encodeURIComponent(
        string
      )}`;
    });
  }

  return;
}
