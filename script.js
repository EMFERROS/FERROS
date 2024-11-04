const categorias = [
    { nome: "Consultoria de TI", imagem: "https://via.placeholder.com/200" },
    { nome: "Locação de Carros", imagem: "https://via.placeholder.com/200" },
    { nome: "Assessoria de Viagens", imagem: "https://via.placeholder.com/200" },
    { nome: "Assessoria de Imagem", imagem: "https://via.placeholder.com/200" },
    // Adicione mais categorias conforme necessário
];

function carregarCategorias() {
    const container = document.getElementById('categoriesContainer');
    categorias.forEach(categoria => {
        const item = document.createElement('div');
        item.classList.add('categoria-item');
        
        item.innerHTML = `
            <img src="${categoria.imagem}" alt="Imagem da categoria ${categoria.nome}" onerror="this.src='https://via.placeholder.com/200';">
            <h3>${categoria.nome}</h3>
        `;
        
        container.appendChild(item);
    });
}

document.addEventListener('DOMContentLoaded', carregarCategorias);
