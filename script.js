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

    // Adicionando as imagens das pizzas
    pizzaItem.querySelector('.pizza-item--img img').src = item.img; // "('.pizza-item--img img').src = item.img"Selecionando img dentro de pizza-item--img, acessando src e trocando pelo item img, que é o caminho da imagem no json.


    // Adicionando o preço das pizzas
    pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${item.price.toFixed(2)}`; // toFixed(2) é para fixar 2 algarismos depoi da virgula ou ponto, para que os valores fiquem padrão(se não tiver vai ficar dois zeros).


    // Adicionando o nome das pizzas
    pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name;

    // Adicionando a descrição das pizzas
    pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description;


    // Acessando a tag link 'a' para concelar o evento original e adicionar a pizza escolhida

    pizzaItem.querySelector('a').addEventListener('click', (e)=>{

        e.preventDefault();  // Bloqueando a ação padrão do click que é a atualização da página
        //console.log('Clicou em uma pizza'); // Mostrando mensagem a cada clic, só para testar.

        // Modal, janela que mostra uma mensagem de informações da piza escolhida
        c('.pizzaWindowArea').style.opacity = 0;        // Setando efeito opacidade do Modal, colocando em zero para que não apareça.
        c('.pizzaWindowArea').style.display = 'flex';   // Colocando display = 'flex' em Modal "pizzaWindowArea" (tela que aparece quando clicar em alguma pizza).
        setTimeout(()=>{
            c('.pizzaWindowArea').style.opacity = 5;    // Setando efeito opacidade do Modal, colocando em cinco para que demore um pouco para aparecer.
        }, 200); // Esperando esse tempo  200ms, para colocar opacidade = 5;
    })
  

    c('.pizza-area').append(pizzaItem); // Adicionando elemento(el)
});

