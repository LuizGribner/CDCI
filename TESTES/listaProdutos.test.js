const ListaProdutos = require('../listaProdutos'); // Caminho corrigido para o módulo

describe('ListaProdutos', () => {
    test('Deve abrir a página inicial', () => {
        expect(ListaProdutos.abrirPaginaHome()).toBe("Abrir home");
    });

    test('Deve listar os produtos', () => {
        expect(ListaProdutos.listarProdutos()).toBe("Lista produtos");
    });

    test('Deve retornar os detalhes do produto', () => {
        expect(ListaProdutos.getProduto()).toBe("Retorna detalhes do produto + categoria");
    });
    

    test('Deve retornar produtos similares', () => {
        expect(ListaProdutos.getProdutoSimilar()).toBe("Desenvolve produtos similares");
    });
});
