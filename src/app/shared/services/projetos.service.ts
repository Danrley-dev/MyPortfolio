import { Injectable } from '@angular/core';
import { DialogProjetos, Projetos } from 'src/app/models/projetos';

@Injectable({
  providedIn: 'root'
})
export class ProjetosService {
  private projetoDestaque: DialogProjetos[] =
    [{
      imagem: "assets/imagens/portfolio.jpeg",
      texto: "Inforclick",
      detalhes: {
        video: "//cdn-cf-east.streamable.com/video/mp4/ibym56.mp4?Expires=1664830500&Signature=Q5g8jBjRzQJ~pVxBps~Wk-E4A3r~gjjLqIhbYdZ51VkWPIWBYa9QeBNp590dLh5DbWzZyAx4XCKfXCOlBi1VQoUZQag-1SYz3xAlY49lhYiTeRdFmaGOMh1WAY2g43RNItrsIeVrfY0zOTzxw1icXw9NtXzGzUbTJZtS6Rf3nabc8nr2pfhvCeYDd54UMr9BaZdgTbQ0rh8vZbInGUR8B5JhhYNvJGWRJRLFMR-pQFPtvEBLcqbBwVpgyXUsPB9aV4D0oZG0XqdHDPzLoCOVdvcTMLWgQclDrqaFTtf8dUxzHglVuw7HsGZcXhO~24FF4bJB-ZIjjKDNF4d389CVkw__&Key-Pair-Id=APKAIEYUVEN4EVB2OKEQ",
        nome: "Aplicação full stack InfoClick",
        descricao: "E-commerce Full Stack no modelo B2C, fazendo o consumo de uma REST API JAVA, desenvolvida no projeto final do Bootcamp da SoulCode Academy. Foram ultilizadas as frameworks Angular no front-end e Spring boot no back-end. A principal linguagem no front-end foi o TypeScript, mas também ultilizamos outras tecnologias como: Firebase para o armazenamento das imagens, Scss e CSS3 foram ultilizadas para a estilização da aplicação, bem como as bíbliotecas do Angular Material e Bootstrap. A liguagem principal do back-end foi o java, porém tambem foram ultilizadas outras tecnologias como o MySQL para o armazenamento dos dados, ferramentas do Spring como: JPA, Hibernate, Spring-Security, dentre outras.",
        repBack:"https://github.com/Danrley-dev/REST-API-e-commerce-infoclick",
        repFront:"https://github.com/Danrley-dev/Front-end-Angular-infoClick"
      }
    },
    {
      imagem: "assets/imagens/diarios.jpeg",
      texto: "Diários",
      detalhes: {
        video: "//cdn-cf-east.streamable.com/video/mp4/66icum.mp4?Expires=1664830740&Signature=LGbn3ooVhDzdwV0yrfeZWESKJ-xN6aa1BpKM0NS~YD~fpWt52Gb0DQPFM437E487Q~r61fT7m1CO6J~4MkptujRwbRUM4KtmAIMNkaiD8KqC71n~VFOfhAW-lwKj3smiEkkMBcJ9HDxyqAKV2kvKTB0ljakrYI2uVNNsEAYwhE1cT076BBvWMJ3DDW2hPkTlRKZfaRTufSQcakXd~U--fyUbXMChlOmsEjUNDyCfQ1lQyXBhr1XyC5quTmO0PBWffy5Nj2oJBKF4VzBjA8KqZljpY7ZW0hrKwS3GXgjmRQ7D7FLOQHXVGhAqbn1H5fI1-15widgLWinkoDx4Oa-jAw__&Key-Pair-Id=APKAIEYUVEN4EVB2OKEQ",
        nome: "Rede social Diários",
        descricao: "Rede social voltada para o registro de viagens ultilizando o Firebase para a armazenagem de dados, por se tratar de um banco não relacional. A framework usada nessa aplicação foi o Angular e o TypeScript como linguagem principal, mas tambem foi ultilizado Node.JS para algumas funções necessárias. Na estilização foi ultilizado o Angular Material e um pouco de Scss. ",
        repFront:"https://github.com/Danrley-dev/Diarios-App"
      }
    },
    {
      imagem: "assets/imagens/helpr.jpeg",
      texto: "Helpr",
      detalhes: {
        video: "#",
        nome: "Aplicação full stack Helpr (Sem vídeo)",
        descricao: "Help Desk Full Stack, fazendo o consumo de uma REST API JAVA, desenvolvida no Bootcamp da SoulCode Academy. Foram ultilizadas as frameworks Angular no front-end e Spring boot no back-end. A principal linguagem no front-end foi o TypeScript, mas também ultilizamos outras tecnologias como: Firebase para o armazenamento das imagens, Scss e CSS3 foram ultilizadas para a estilização da aplicação, bem como as bíbliotecas do Angular Material e Bootstrap. A liguagem principal do back-end foi o java, porém tambem foram ultilizadas outras tecnologias como o MySQL para o armazenamento dos dados, ferramentas do Spring como: JPA, Hibernate, Spring-Security, dentre outras.",
        repBack:"https://github.com/Danrley-dev/helpr-Back",
        repFront:"https://github.com/Danrley-dev/helpr-Front"
      }
    }]

  private TodosProjetos: DialogProjetos[] =
    [{
      imagem: "assets/imagens/soulgames.jpeg",
      texto: "Ecommerce",
      detalhes: {
        video: "//cdn-cf-east.streamable.com/video/mp4/o4cmgl.mp4?Expires=1664830860&Signature=FmHJFIc2P56ON2RyG6ruVH6QdnKjPoX1p0wGXlKnGBP~azLmjfXJfBR7xHTUqQ6qjn-hZiM9-A4khGzytH5x3Mk-zLVtkwBZInW0uk9oMo19DmRACGLnQHjPpd4als9prf1Q6LnrlxNd~jmu1e1X4OUuUlVwyNtgeRHIZFCRcqQboODeu6EbgG2LkLGRDwgTlUwEL4d9esb5b4T3IEoJCjy93JHNY07EABwFbaAxTDh6FT44XaCY7X1HDp7jNPtDRTUv8Aoer6VvTD1yEaT8V60Byd7oRwPDPoBlqldHX0zrL12Eq3kI7AubgQLnjgHvgWl5~56vvIOHzRDj7F4r9A__&Key-Pair-Id=APKAIEYUVEN4EVB2OKEQ",
        nome: "Aplicaçao Front-end Soulgames",
        descricao: "Aplicação Front-end, desenvolvida no bootcamp da SoulCode Academy com intuito de melhorar e aprimorar o conhecimento na framework angular. Tecnologias ultilizadas: TypeScript como a linguagem principal, nas estilização foi ultilizado o Bootstrap e Scss.",
        repFront:"https://github.com/Danrley-dev/e-commerce-"
      }
    },
    {
      imagem: "assets/imagens/goodpay.jpeg",
      texto: "Goodpay",
      detalhes: {
        video: "//cdn-cf-east.streamable.com/video/mp4/xd9tay.mp4?Expires=1664830980&Signature=X-cyDCSPUT7L0hCUWr9iEjqvg0GACY5ujnw4nLPkOj3MZLHsMVUW9Zq-JcXlDkcbion62VbuSbn634RxiNq9QfL1aVYQn99X6MJsAABIauBtmfdHXjSQiy~i-ZL2Oc5xJn9CY88BwYtv0LAiASrtoofWAFo-8QLeVBscRKyd1OKBLyrx4ks~1YAG3MHCNl4ZuymEY~G5HphBenjA5QbSKxeMoBrZwuzMv24yP9mJy-4Mm2qt7Zzpm6lKecZaip1ZQJ5W9x-ckqGaitaGkCJMmGz49-xOJuY8HHTELP7Ze-pk7UDe4dPXwiLPHoFzCK5tiZ2px9pDd-FAskOOzc4h1A__&Key-Pair-Id=APKAIEYUVEN4EVB2OKEQ",
        nome: "Aplicação Front-end Goodpay",
        descricao: "Goodpay é uma plataforma de pagamento, que foi desenvolvida no bootcamp da soulcode com intuito de aprimorar e colocar em prática todos os conhecimentos adquiridos de HTML5 e CSS3 durante as primeiras aulas. Foi ultilizado também o bootstrap para validação de formulário e demais estilização necessárias na plataforma.",
        repFront:"https://github.com/Danrley-dev/GoodPay"
      }
    },
    {
      imagem: "assets/imagens/gsw.jpeg",
      texto: "Warriors",
      detalhes: {
        video: "//cdn-cf-east.streamable.com/video/mp4/kw7nnp.mp4?Expires=1664830980&Signature=CZhuyHhi4XEnWZYswj9nlZqOgoS5-Su9CjtNqn5UYxsv~YRjMunxXht4WOSH4YqrTHqi6bxKZHxbhupqX4EGT2u1f6UrNjd4tCtXUn3nf0710JINKh3TMbmSbc7-Ck59sBP5W~A26l3hVUrMmnmRvar3SsBStvh-C53p8GXKPMb11Gt5CtVbG7I3iDNvPJDF22JnC72quf94QXER0Hd3AJwm4owljo3hZMJkahBXK4ObmuEegvyzzYc3JFokI23trsaOPsQ3fA5TohJOBk2UbEi-LcNiHR4-b6xR3uXInURSyNNvnyS25hvaaF4gz1mssRoDOwxY5DRMW6D-nZ84tA__&Key-Pair-Id=APKAIEYUVEN4EVB2OKEQ",
        nome: "Aplicação Front-end Warriors",
        descricao: "Aplicação desenvolvida para melhorar minha prática em HTML5 e CSS3, mostrando toda a história do meu time de basquete favorito (Golden State Warriors) e seu elenco atual.",
        repFront:"https://github.com/Danrley-dev/Site-GoldenState"
      }
    },
    {
      imagem: "assets/imagens/link.jpeg",
      texto: "Links",
      detalhes: {
        video: "//cdn-cf-east.streamable.com/video/mp4/kws84h.mp4?Expires=1664831040&Signature=X8OyvCk1vZb1n0t~M6JQVPamEfZ0XmOgUr459RueNOYFcjtYOYzbtX-DvcYRtkMwtk9Sr8QGjqYA7E3gPzzr8SHprxc9dAeJLh0QcZEJ9GDvn-reGfGudUpumj4PtTeM7DK6~xBO7z6Pdnl-vHDAbRWwKIkpM1Yy1YnynAvMZEWvu3LRH5xUGrOueqaq1zx-x0fkzmS40mMsHYH1QWGKCJv0oPN~UHskMkuNPRliR0k6owEuw6GqzQWFWJaYqryRBcjMj-OFmqBItVp2y0uYDSHtl-Wgi~Ua9AhLt7rweCDLLV~bQAzztqRkOOAXXYMyvs0z7or3KcFQIfkGjwoJYQ__&Key-Pair-Id=APKAIEYUVEN4EVB2OKEQ",
        nome: "Aplicação Front-end My Links",
        descricao: "Projeto pessoal com intuito de facilitar o acesso a todos os links das minhas respectivas redes sociais",
        repFront:"https://github.com/Danrley-dev/meus-links"
      }
    },
    {
      imagem: "assets/imagens/captura.jpeg",
      texto: "Captura",
      detalhes: {
        video: "//cdn-cf-east.streamable.com/video/mp4/7or8m1.mp4?Expires=1664831100&Signature=HMZRn8ewc1WU7kbQgXNjOHbIPpJqqxzwCu1grvGsZPe4sWB1~Guh193F998YksN7IGrJN6hiSfKOFkf1mc3u~1FmiTv5uwsrRX~lgFLwoyshhtVQpdAexhIHcigEhZAKcIdZXPlKugwJMS-lq9Wdy-o39~uv~wYINKzayL4x4v365W6a8tjyjngRTgj8dp-p5y~D-JsHsd~ElFp1ZZpHZZtYBn3yRYWsDvDwl8Tl1h3QBqUDhq0os0N2vU412VJGRCWOE3bSyvzU6J9seDHndu2s~vigkmj5HlhENcDKBLmYiPVwfNJeisGzmp7xVw-xcbpFAK4E1Mv1HG~H2Sblnw__&Key-Pair-Id=APKAIEYUVEN4EVB2OKEQ",
        nome: "Aplicação front-end página de captura",
        descricao: "Projeto desenvolvido no curso do Programador BR, ultilizando HTML5 e CSS3 seguindo o mesmo intuito de aperfeiçoar meus conhecimentos nessas duas tecnologias e ganhar experiência no mundo do desenvolvimento.",
        repFront:"https://github.com/Danrley-dev/Pagina-de-captura"
      }
    },
    {
      imagem: "assets/imagens/cordel.jpeg",
      texto: "Cordel",
      detalhes: {
        video: "//cdn-cf-east.streamable.com/video/mp4/giuuhn.mp4?Expires=1664831160&Signature=jCRBRdflmCR0awM18PjUmm9Ez39qv07Lofaw10KMpl8EohabE1hv23nHEglvtKW6-PVoDpq4xVgjY4v2qljKjOjjFXwBzXfKEJjlZOQD6FkP29Z1BCOGC2AvhfjRq8Avm5nq24eSbv~CvjGIVJtWSXjLzfJNeZxMSTMWdh86iDF8Sd73mQIfY97xUKDO6jv8pXO5bV1SpftuAQh9u0HsiR1UjqVc9ZiXSZz-JFazyWkIDJRhsmnEFDWshEKGCJ5pjRF1VqA1HRqkc-F~FTRnoAjlXbYW6-47TaLSfW1I036fX9PYDYs8Ap8yECcQABwNp4-JjpK6y~sXTbAemIxpDg__&Key-Pair-Id=APKAIEYUVEN4EVB2OKEQ",
        nome: "Aplicação Front-end cordel",
        descricao: "Aplicação desenvolvida no curso em vídeo, bem no inicio da minha caminhada no desenvolvimento web, tecnologias ultilizadas são HTML5 e CSS3.",
        repFront:"https://github.com/Danrley-dev/projeto-cordel"
      }
    },
    {
      imagem: "assets/imagens/android.jpeg",
      texto: "Android",
      detalhes: {
        video: "//cdn-cf-east.streamable.com/video/mp4/8eb8ep.mp4?Expires=1664831220&Signature=isvd-PHjktLfp5q2I~B6Cd0bonjkPO9CkRsmmQTS~zojHEcEa~skDuZq-G7DkU9OoUm5M2bTgBiicXFJe46X7iwTmlb~KruWAS~LLlyiKyLizgNlEDM7nPOXGT0fl41eOKUXT6eNsNY2-h8xtSBA5EjrEq-LZKH8JmXgmoqPQcHcHS5TZTa34euru4~kqv9c9E5caLPrMn~j7g8pWKeZl1P3Y-cWiKCSoyn8p2fZUlmF3VlG~GmVWLdwDs3ZjnSH84pN5h~XNmmJqhGBVnJWC9O-jT4yYyiLY1IFvAT9Iz~I3brWN1Cgnlpx756RLGNGUmtYuy1hjnauOI1LadQ2fQ__&Key-Pair-Id=APKAIEYUVEN4EVB2OKEQ",
        nome: "Aplicação Front-end Android",
        descricao: "Aplicação desenvolvida no curso em vídeo, bem no inicio da minha caminhada no desenvolvimento web, tecnologias ultilizadas são HTML5 e CSS3.",
        repFront:"https://github.com/Danrley-dev/projeto-android"
      }
    }
    ]

  getProjetoDestaque(): DialogProjetos[] {
    return this.projetoDestaque;
  }

  getTodosProjetos(): DialogProjetos[] {
    return this.TodosProjetos;
  }

  constructor() { }
}
