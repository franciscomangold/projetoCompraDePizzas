/*
* Passo 1 - importar as pitzzas do arquivo pizzas.js, aonde estão os modelos de pizzas com todos os dados(array) de cada pizza.
* Mapear a lista, fazendo uma cópia do models, preencher e jogar na tela.
*
*
*
*
*
*/

/*      Passo 1, mapeando a lista
* 
*
* Criando uma função (const c e cs), que vai receber um elemento(el) para substituir document.querySelector/SelectorALL()
* append() - Função para adicionar.
* O innerHTML não adiciona e sim substitui o item, por isso está sendo usado o append(). 
*/

const c = (el)=>document.querySelector(el);      //Retorna um item
const cs = (el)=>document.querySelectorAll(el);  //Retorna todo o array

pizzaJson.map((item, index)=>{  // recebendo item(cada pizza), e o index(posição, começando do zero(id:1 é o zero, id:2 é um ...)).
    
    let pizzaItem = c('.models .pizza-item').cloneNode(true); // Clonando o item(pizza-item) e salvando na variável pizzaItem.

    // preenchendo as informações em pizzasitem


    // Adicionando o nome das pizzas
    pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name;

    c('.pizza-area').append(pizzaItem); // Adicionando elemento(el)
});

