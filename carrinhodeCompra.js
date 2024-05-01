import ListaProdutos from "./listaProdutos";

class CarrinhoCompra {

    abrirCarrinho() {
        console.log("Abrir carrinho");
        return "Abrir carrinho";
    }

    addProdutos() {
        let dadosProduto = ListaProdutos.getProduto(1);
        console.log("Adiciona produtos");
        return "Adiciona produtos";
    }

    deletaProdutos() {
        let dadosProduto = ListaProdutos.getProduto(1);
        console.log("Remove produtos");
        return "Remove produtos";
    }

    checkout() {
        let dadosProduto = ListaProdutos.getProduto(1);
        console.log("Finaliza");
        return "Finaliza";
    }

}
module.exports = CarrinhoCompra;

