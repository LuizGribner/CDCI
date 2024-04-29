const ListaProdutos = require("./listaProdutos")

export default class CarrinhoCompra {

    abrirCarrinho() {
        console.log("Abrir carrinho");
        return "Abrir carrinho";
    }

    addProdutos() {
        let dadosProduto = ListaProdutos.getProduto();
        console.log("Adiciona produtos");
        return "Adiciona produtos";
    }

    deletaProdutos() {
        let dadosProduto = ListaProdutos.getProduto();
        console.log("Remove produtos");
        return "Remove produtos";
    }

    checkout() {
        let dadosProduto = ListaProdutos.getProduto();
        console.log("Finaliza");
        return "Finaliza";
    }

}
module.exports = CarrinhoCompra