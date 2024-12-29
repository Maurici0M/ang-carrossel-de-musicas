<h1 align='center'>Bem vindos ao Carrossel de Músicas 2.0!</h1>

Essa versão tem o objetivo de promover mudanças significativas de uso da aplicação.

O site foi totalmente refeito, e passou a utilizar a estrutura do framework Angular.

Antes, toda adição e manutenção de conteúdos, era realizada através do Html, Css e JavaScript.

Com a migração para o Angular, ficará mais fácil promover a adição de novos conteúdos, melhorias gerais e correções de bugs.

Nosso projeto inicial continuará ativo por enquanto, e você poderá acessá-lo através do link abaixo:

<a target="_blank" href='https://carrosel-de-musicas.vercel.app/'>Versão HTML CSS e JS</a>

Muito obrigado por visitar a página do <b>Carrossel de Músicas</b>!

---

<details>

<summary> <b> Versão 1.2.2 -> Atualizada em 27/12/2024 </b>: </summary>

<br>

O que foi feito?

* <b>Melhorias visuais nos botões de "Modo SoundCloud X Youtube"; </b>
* <b>Atualização de conteúdos para os iFrames do modo Youtube; </b>
* <b>Melhorias na identação dos estilos do carrossel; </b>

</details>


---

<details>

<summary> <b> Versão 1.2.1 -> Atualizada em 26/12/2024 </b>: </summary>

<br>

O que foi feito?

 <details>
  <summary> <b>Adição de Modo SoundCloud X Youtube: </b> </summary>
  
  <br>
  
  * Agora temos um botão de interação para mudar a rota do carrossel entre iframes vindos do Youtube e do SoundCloud <b>(funcionalidade atualmente em teste)</b>.
</details>

 <details>
  <summary> <b>Melhorias de lógica: </b> </summary>
  
  <br>
  
* Mudanças na estrutura do site foram realizadas para ser possível adicionar as novas funcionaliades do <b>"Modo SounCloud X Youtube"</b>. Também, foi realizado uma melhor estruturação lógica dos arquivos .ts dos componentes, a ponto de facilitar a manutenção e leitura da lógica do site. 
</details>

</details>

---

<details>

<summary> <b>Versão 1.2.0 -> Atualizada em 22/12/2024</b>: </summary>

<br>

O que foi feito?

 <details>
  <summary> <b>Deploy do projeto no GitHub: </b> </summary>
  
  <br>
  
  * Agora o código fonte do site está disponível para visualização, e se juntará aos outros aqui disponíveis! 🙂
</details>

<details>
   <summary> <b>Mudança na forma de alimentação do carrossel: </b> </summary>
  
  <br>
  
  * Agora, o site está recebendo os iframes via servidor "Gist do GitHub", utilizando o Axios para fazer a comunicação. Dessa forma, não será preciso ficar se preocupando com o a alimentação de iframes via arquivos mockados no próprio site, facitando a adição e remoção de conteúdos.
</details>

<details>
  <summary> <b>Ambiente de Produção (Local) VS Ambiente de Servidor: </b> </summary>
  
  <br>

- Graças ao tópico anterior, foi possível criar duas novas funções: <b>getIframesFromGist</b> e <b>getIframesFromDatabaseLocal</b>. Isso faz com que, o modo de alimentação do carrossel se alterne entre os dados disponíveis no servidor e os disponíveis no próprio site (dados mockados). Para os acessantes, não haverá alteração alguma, mas, na parte de desenvolvimento, isso gerará um grande ganho de organização e facilitará testes de novas aplicações de iframes diferentes (como os do YouTube, por exemplo), sem contar que, utilizando dados vindos do servidor Gist, facilita muito na adição de novos conteúdos ou mesmo exclusão, sem que haja a necessidade de ficar subindo atualizações somente para adicionar ou remover os iframes. :)
</details>

 <details>
   <summary> <b>Fisher-Yates: </b> </summary>
  
  <br>
  
  * Assim como temos na versão do Carrossel de Músicas desenvolvido com HTML + CSS + JavaScript, o embaralhamento dos iframes foi adicionado. Isso causa uma mudança na organização das músicas no swiper, para emitir a sensação de que o site foi atualizado quando houver um acesso recorrente. Na versão 1.1.3 já havia sido implementado o embaralhamento das músicas, porém, somente com os dados mockados, agora foi aplicado tanto com os dados do servidor, quando os estáticos.
</details>

<details>
  <summary> <b>Responsividade: </b> </summary>
  
  <br>
  
  * Melhorias aplicadas na adaptabilidade do site em telas menores.
</details>

</details>

---

<details>

<summary> <b> Versão 1.1.3 -> Atualizada em 17/12/2024 </b>: </summary>

<br>

O que foi feito?

- Criação do modal de introdução ao iniciar o site;
- Adição de embaralhamento das músicas do carrossel;
- Novas músicas adicionadas;

</details>

---

<details>

<summary><b>Versão 1.1.2 Patch de Melhorias e Correções de Bugs -> Atualizada em 11/11/2024</b>:</summary>

<br>

O que foi feito?

- Utilização de rotas para renderização dos conteúdos;
- Substituição do local de alimentação (database) das músicas, de um array JS para um JSON;
- Funcionamento automático do carrossel percorrendo o array;

</details>

---

<details>

<summary> <b>Versão 1.1 -> Atualizada em 07/11/2024</b>: </summary>

<br>

O que foi feito?

- Adição de novos estilos;
- Melhorias aplicadas na barra de menu;
- Adição de buscador dinâmico na barra de menu;
- Melhorias de usabilidade do carrossel (swiper);
- Algumas outras pequenas automações de textos sendo adicionados por interpolação;

</details>

---

🗂️ <b>File lib</b>:

- Box-shadows: https://getcssscan.com/css-box-shadow-examples

- Fonts: https://fonts.google.com/

- Swiper Documentation: https://v8.swiperjs.com/angular

- Icons list: https://www.angularjswiki.com/angular/angular-material-icons-list-mat-icon-list/

- Bootstrap Icons: https://icons.getbootstrap.com/

---

📖 <b>For studies (content that helped me with setting up the website)</b>:

- Channel to help with Angular studies: https://www.youtube.com/@devepro9385 | https://www.youtube.com/@netbugstech

- How to install Swiper: https://www.youtube.com/watch?v=OoT3CKVEYXo&ab_channel=DevePro

- How to Create Responsive Card Slider in HTML CSS & JavaScript | Step-by-Step Tutorial: https://youtu.be/VUtJ7FWCfZA?feature=shared

- How To Read Data From JSON File: https://www.youtube.com/watch?v=k6h1I73vpzQ

- Como personalizar o seu perfil no Github (Readme): https://youtu.be/TsaLQAetPLU?si=TsIw1GU3dVzeeoba

- Responsive Footer Design using Html & Css: https://youtu.be/YOb67OKw62s?feature=shared

---
