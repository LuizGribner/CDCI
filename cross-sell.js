import ListaProdutos from "./listaProdutos"

export default class crossSell{

    abrirCrossSell(){
        let produto = ListaProdutos.getProduto(1)
        console.log("Com base na categoria aqui estão outros produtos relacionados")
    }

}
