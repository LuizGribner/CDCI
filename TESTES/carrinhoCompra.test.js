const CarrinhoCompra = require('../carrinhodeCompra'); // Caminho corrigido para o módulo

describe('CarrinhoCompra', () => {
    test('Deve abrir o carrinho', () => {
        const carrinho = new CarrinhoCompra();
        expect(carrinho.abrirCarrinho()).toBe("Abrir carrinho");
    });

    test('Deve adicionar produtos', () => {
        const carrinho = new CarrinhoCompra();
        expect(carrinho.addProdutos()).toBe("Adiciona produtos");
    });

    test('Deve deletar produtos', () => {
        const carrinho = new CarrinhoCompra();
        expect(carrinho.deletaProdutos()).toBe("Remove produtos");
    });

    test('Deve finalizar a compra', () => {
        const carrinho = new CarrinhoCompra();
        expect(carrinho.checkout()).toBe("Finaliza");
    });
});
