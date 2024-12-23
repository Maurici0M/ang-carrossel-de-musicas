<h1 align='center'>Bem vindos ao Carrosel de Músicas 2.0!</h1>

Essa versão tem o objetivo de promover mudanças significativas de uso da aplicação.

O site foi totalmente refeito, e passou a utilizar a estrutura do framework Angular.

Antes, toda adição e manutenção de conteúdos, era realizada através do Html, Css e JavaScript.

Com a migração para o Angular, ficará mais fácil promover a adição de novos conteúdos, melhorias gerais e correções de bugs.

Nosso projeto inicial continuará ativo por enquanto, e você poderá acessá-lo através do link abaixo:

<a target="_blank" href='https://carrosel-de-musicas.vercel.app/'>Versão HTML CSS e JS</a>

Muito obrigado por visitar a página do <b>Carrosel de Músicas</b>!

---

<b>Versão 1.1 -> Atualizada em 07/11/2024</b>:

O que foi feito?

- Adição de novos estilos;
- Melhorias aplicadas na barra de menu;
- Adição de buscador dinâmico na barra de menu;
- Melhorias de usabilidade do carrosel (swiper);
- Algumas outras pequenas automações de textos sendo adicionados por interpolação;

---

<b>Versão 1.1.2 Patch de Melhorias e Correções de Bugs -> Atualizada em 11/11/2024</b>:

O que foi feito?

- Utilização de rotas para renderização dos conteúdos;
- Substituição do local de alimentação (database) das músicas, de um array JS para um JSON;
- Funcionamento automático do carrosel percorrendo o array;

---

<b>Versão 1.1.3 -> Atualizada em 17/12/2024</b>:

O que foi feito?

- Criação do modal de introdução ao iniciar o site;
- Adição de embaralhamento das músicas do carrosel;
- Novas músicas adicionadas;

---

<b>Versão 1.2.0 -> Atualizada em 22/12/2024</b>:

O que foi feito?

- Mudança na forma de alimentação do carrosel:

  * Agora, o site está recebendo os iframes via servidor "Gist do GitHub", utilizando o Axios para fazer a comunicação. Dessa forma, não será preciso ficar se preocupando com o a alimentação de iframes via arquivos mockados no próprio site, facitando a adição e remoção de conteúdos.

- Ambiente de Produção (Local) VS Ambiente Servidor:

  * Graças a "Mudança na forma de alimentação do carrosel", foi possível criar duas novas funções: getIframesFromGist e getIframesFromDatabaseLocal. Isso faz com que, o modo de alimentação do carrosel se alterne entre os dados disponíveis no servidor e os disponíveis no próprio site (dados mockados). Para os acessantes, não haverá alteração alguma, mas, na parte de desenvolvimento, isso gerará um grande ganho de organização e facilitará testes de novas aplicações de iframes diferentes (como os do YouTube, por exemplo), sem contar que, utilizando dados vindos do servidor Gist, facilita muito na adição de novos conteúdos ou mesmo exclusão, sem que haja a necessidade de ficar subindo atualizações somente para adicionar ou remover os iframes. :)

- Fisher-Yates:
 
  * Assim como temos na versão do Carrosel de Músicas desenvolvido com HTML + CSS + JavaScript, o embaralhamento dos iframes foi adicionado. Isso causa uma mudança na organização das músicas no swiper, para emitir a sensação de que o site foi atualizado quando houver um acesso recorrente. Na versão 1.1.3 já havia sido implementado o embaralhamento das músicas, porém, somente com os dados mockados, agora foi aplicado tanto com os dados do servidor, quando os estáticos.

- Responsividade:
  * Melhorias aplicadas na adaptabilidade do site em telas menores.

---

🗂️ Files lib:

* Box-shadows: https://getcssscan.com/css-box-shadow-examples

* Fonts: https://fonts.google.com/

* Swiper Documentation: https://v8.swiperjs.com/angular

* Icons list: https://www.angularjswiki.com/angular/angular-material-icons-list-mat-icon-list/

---

📖 For studies (content that helped me set up the website):

* Channel to help with Angular studies: https://www.youtube.com/@devepro9385 | https://www.youtube.com/@netbugstech

* How to install Swiper: https://www.youtube.com/watch?v=OoT3CKVEYXo&ab_channel=DevePro

* How to Create Responsive Card Slider in HTML CSS & JavaScript | Step-by-Step Tutorial: https://youtu.be/VUtJ7FWCfZA?feature=shared

* How To Read Data From JSON File: https://www.youtube.com/watch?v=k6h1I73vpzQ

* Como personalizar o seu perfil no Github (Readme): https://youtu.be/TsaLQAetPLU?si=TsIw1GU3dVzeeoba

---
