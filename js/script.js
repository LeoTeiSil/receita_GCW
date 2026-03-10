// O JSON de produtos
const produtos = [
    { id: 1, nome: "Picolé de Morango", desc: "Artesanal com pedaços da fruta.", preco: "R$ 7,00", img: "img/morango.png", cat: "salmon" },
    { id: 2, nome: "Picolé Chocolate", desc: "Cacau 70% com cobertura crocante.", preco: "R$ 8,00", img: "img/chocolate.png", cat: "salmon" },
    { id: 3, nome: "Picolé de Limão", desc: "Refrescante e 100% natural.", preco: "R$ 6,00", img: "img/limao.png", cat: "salmon" },
    { id: 4, nome: "Pote Napolitano", desc: "2 litros de pura cremosidade.", preco: "R$ 25,00", img: "img/napolitano.png", cat: "orange" },
    { id: 5, nome: "Pote Baunilha", desc: "Favas de baunilha Bourbon.", preco: "R$ 22,00", img: "img/baunilha.png", cat: "orange" },
    { id: 6, nome: "Pote Chocolate", desc: "O favorito da casa.", preco: "R$ 24,00", img: "img/chocolatepote.png", cat: "orange" }
];

const grid = document.getElementById('grid-produtos');
const modal = document.getElementById('modal-sorvete');

// Renderizar o Grid
function renderizarProdutos() {
    grid.innerHTML = produtos.map(p => `
        <div class="card-item ${p.cat}" onclick="abrirModal(${p.id})">
            <img src="${p.img}" alt="${p.nome}">
        </div>
    `).join('');
}

// Lógica do Modal
function abrirModal(id) {
    const p = produtos.find(item => item.id === id);
    if(p) {
        document.getElementById('modal-img').src = p.img;
        document.getElementById('modal-titulo').innerText = p.nome;
        document.getElementById('modal-descricao').innerText = p.desc;
        document.getElementById('modal-preco').innerText = p.preco;
        modal.style.display = 'flex';
    }
}

document.getElementById('close-modal').onclick = () => modal.style.display = 'none';

// Fechar se clicar fora do modal
window.onclick = (e) => { if(e.target == modal) modal.style.display = 'none'; }

// Iniciar o site
renderizarProdutos();