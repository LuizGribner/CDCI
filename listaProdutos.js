export default class ListaProdutos {

    static abrirPaginaHome() {
        console.log("Abrir home");
        return "Abrir home";
    }

    static listarProdutos() {
        console.log("Lista produtos");
        return "Lista produtos";
    }

    static getProduto(id) {
        console.log("Retorna detalhes");
        console.log("Retorna detalhes do produto + categoria");
        return "Retorna detalhes do produto + categoria";
    }

    static getProdutoSimilar(categoria) {
        console.log("Desenvolve produtos similares");
        return "Desenvolve produtos similares";
    }

}


