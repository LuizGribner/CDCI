import ListaProdutos from "./listaProdutos"

export default class carrinhoCompra{

    abrirCarrinho(){
        console.log("Abrir carrinho")
    }
    
    addProdutos(){
        let dadosProduto = ListaProdutos.getProduto()
        console.log("Adiciona produtos")
    }
    
    deletaProdutos(){
        let dadosProduto = ListaProdutos.getProduto()
        console.log("Remove produtos")
    }
    
    checkout(){
        let dadosProduto = ListaProdutos.getProduto()
        console.log("Finaliza")
    }

}

