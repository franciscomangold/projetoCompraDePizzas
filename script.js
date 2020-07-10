/*
* Passo 1 - importar as pitzzas do arquivo pizzas.js, aonde estão os modelos de pizzas com todos os dados(array) de cada pizza.
* Mapear a lista, fazendo uma cópia do models, preencher e jogar na tela.
*
*
*
*
*
*/

// Passo 1, mapeando a lista

// Criando uma função (const c e cs), que vai receber um elemento(el) para substituir document.querySelector/SelectorALL()
const c = (el)=>document.querySelector(el);      //Retorna um item
const cs = (el)=>document.querySelectorAll(el);  //Retorna todo o array

pizzaJson.map((item, index)=>{  // recebendo item(cada pizza, começando do zero), e o index(posição, começando do zero).
    
    let pizzaItem = c('.models .pizza-item').cloneNode(true);
    // preencher as informações em pizzasitem

    c('.pizza-area').append(pizzaItem);
});

