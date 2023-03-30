const valorDigitado = document.querySelector('#quantidade-pecas');
const btnConfirma = document.querySelector('#confirma');
const resultado = document.querySelector('#res');

const table = document.createElement('table');
table.classList.add('minha-tabela');

const headerRow = document.createElement('tr');

const nameHeader = document.createElement('th');
nameHeader.textContent = 'Nome da Loja';
headerRow.appendChild(nameHeader);

const enderecoHeader = document.createElement('th');
enderecoHeader.textContent = 'Porcentagem';
headerRow.appendChild(enderecoHeader);

const totalHeader = document.createElement('th');
totalHeader.textContent = 'total';
headerRow.appendChild(totalHeader);

table.appendChild(headerRow);

const lojas = [
  { nome: 'Bangu', porc: 4 , total: ''},
  { nome: 'Barra', porc: 6 ,total: ''},
  { nome: 'Cabo Frio', porc: 5 ,total: ''},
  { nome: 'Campo Grande', porc: 6 ,total: ''},
  { nome: 'Icarai', porc: 5 ,total: ''},
  { nome: 'Macae', porc: 6 ,total: ''},
  { nome: 'Nova Iguaçu rua', porc: 5 ,total: ''},
  { nome: 'Nova Iguaçu shopping', porc: 7 ,total: ''},
  { nome: 'Nilopolis', porc: 7, total: ''},
  { nome: 'Nova America', porc: 7, total: ''},
  { nome: 'Tijuca', porc: 7, total: ''},
  { nome: 'Vilar', porc: 5, total: ''},
  { nome: 'Vinte e cinco', porc: 7, total: ''},
  { nome: 'Caxias', porc: 9, total: ''},
  { nome: 'Alcantara', porc: 5, total: ''},
  { nome: 'Bangu Shopping', porc: 5, total: ''},
  { nome: 'Madureira', porc: 4, total: ''},
];

btnConfirma.addEventListener('click', () => {
  resultado.innerHTML = '';

  for (let loja of lojas) {
    const row = document.createElement('tr');

    const nomeLoja = document.createElement('td');
    nomeLoja.textContent = loja.nome;
    row.appendChild(nomeLoja);

    const enderecoLoja = document.createElement('td');
    enderecoLoja.textContent = loja.porc;
    row.appendChild(enderecoLoja);

    const total = document.createElement('td');
    loja.total =  valorDigitado.value * (loja.porc/100);
    total.textContent = loja.total.toFixed(0);
    row.appendChild(total);

    table.appendChild(row);
  }

  resultado.appendChild(table);
});
