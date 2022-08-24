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
        video: "https://cdn-cf-east.streamable.com/video/mp4/ibym56.mp4?Expires=1661567760&Signature=GW1PXgg3y1OO2WtEkBQKcVe09vKGOg3e869kUHGtyqSMDCLvszJ3V8QOTimYRDVARNU2DascqcXbVJwe2gjDdL5iIK9TOLg-vCgVKYlr4mIhlVOG4DffgRdZG05UnGHughM6U-liuvT7wkWnk0iFjwMHvFKvK3FCC9Q6BmCPfs6HptH323fuDooWS-U07QFIE4rG2Nwm~pHbYaRL-xljT~EZPNfW-ck4o6MXY6Wv4i01CBKbw3ET9aG8nmg63jZWGB4dnar5DFzhvoFbTR6LGkmyQp2KrpFNE7UxsBPjenR5uNb4niaGNSecWIWcQ9sxggNodinkOLVWXcI4qGBU2g__&Key-Pair-Id=APKAIEYUVEN4EVB2OKEQ",
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
        video: "https:////cdn-cf-east.streamable.com/video/mp4/66icum.mp4?Expires=1661568120&Signature=g50S7UKm7DPPgZZ5wwftzmKMmGrozHg7LzGFC425AHYGfpkFRkV~dV0sdffae546dfEpvg9r~B2gCmvd96YAr7NavYqW0mW1Lk4o2uZhpnHGfGQYbroRpnrlPMV7x1QQ8XHRTsrbtFEkbHaDkolwbt2rE5N7Y1chkJkkzIhUnE0yGmExQST42waf5YPVuENFB-WR1nUb3qWv3IOesyiYtpLDgEJ4cDLCdikvlk2lN9n2OTNABOiGbmcd1dsYdLnuMHZqSk7efR4PZWf2-2~gbgEyGS1uDPj18EbrNcfx3gxGXDlneFcBWKy1Za99C7~6TC~bVGVt5Lj3oLcxLL0cow__&Key-Pair-Id=APKAIEYUVEN4EVB2OKEQ",
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
        nome: "Aplicação full stack Helpr",
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
        video: "https://cdn-cf-east.streamable.com/video/mp4/o4cmgl.mp4?Expires=1661569080&Signature=Ce21K9oSD~9WQrrWO-TRF~9pOAEXLHVS4eUc98VFZAWfuNvD8B~nRscsFu5AgFTZwqEtk0SBSjFAIFfUgOdiPe0bzTekQoZoYyLCN-YjSLPYxuPjJz9CWim6iPg~XmQZdMIghKZMDK5~bdUeuwltKv7FN1MvSeQx2Rir3fB436mR8k8UtIX-hAjt8F1~kvChnEMjaOeSIMgPxQmEoi1vVzM~hZF42kRAvbDBhKe9QgIfeFr4S5cNp-UPBsliGKxrg5tztOyVi1URqhy3Nk3REHDqQWcEoOQ7DvV9k83~f1TM8BSwaaxLBTtgL2yb~5Nmss72M-TfBXPQBjZYXGHiow__&Key-Pair-Id=APKAIEYUVEN4EVB2OKEQ",
        nome: "Aplicaçao Front-end Soulgames",
        descricao: "Aplicação Front-end, desenvolvida no bootcamp da SoulCode Academy com intuito de melhorar e aprimorar o conhecimento na framework angular. Tecnologias ultilizadas: TypeScript como a linguagem principal, nas estilização foi ultilizado o Bootstrap e Scss.",
        repFront:"https://github.com/Danrley-dev/e-commerce-"
      }
    },
    {
      imagem: "assets/imagens/goodpay.jpeg",
      texto: "Goodpay",
      detalhes: {
        video: "https://cdn-cf-east.streamable.com/video/mp4/xd9tay.mp4?Expires=1661569020&Signature=BgwVYrfI~S0Ji73CuqRaYJMiHNQ4Ouke5Gz5QlX3A--sLmAjp8fHPAHhr9D-xXDXEqZVKEKmt-DKGP1DhVbl8CceOy50xVVa3G-amg4yirxo3s6N8q-Kn3Pbok48rMbjbEOuR1kErm1OOtGuLypmLuZOASu2Kb9wCj3DQ2p1UjW46VkOjtWgRZyHjCJdejSFpPGj1HAc0aF~FTUWcvPiPHIcuzLz4XHuLSTrxOfkrh~jvbpwa59u~ofEXZCJeyEdnyY1zZR--JPFiy5~Rm-yeP8c6HLkr-kkrly-6a8ymMv8e4U3oeFIj~SFIR1bsrCnWv7iPWekrCo0YZhRdWL8pg__&Key-Pair-Id=APKAIEYUVEN4EVB2OKEQ",
        nome: "Aplicação Front-end Goodpay",
        descricao: "Goodpay é uma plataforma de pagamento, que foi desenvolvida no bootcamp da soulcode com intuito de aprimorar e colocar em prática todos os conhecimentos adquiridos de HTML5 e CSS3 durante as primeiras aulas. Foi ultilizado também o bootstrap para validação de formulário e demais estilização necessárias na plataforma.",
        repFront:"https://github.com/Danrley-dev/GoodPay"
      }
    },
    {
      imagem: "assets/imagens/gsw.jpeg",
      texto: "Warriors",
      detalhes: {
        video: "https://cdn-cf-east.streamable.com/video/mp4/kw7nnp.mp4?Expires=1661569020&Signature=b0AnOSZROnOEo4Pizlq~rdtN265zXA1cum8FvseOUNB1cBNZppieyPkqGsvGs4OWtn9Dr~atDYf6lpHtoe7B9DUpoaiK27SEPVC7ATM5QH62c4FT1EKbrlTNd8yiuzDXV8U1A8LoGi58-hlXVEAZDkjWmiquSZNzl-OqLTJfdDI3HdngCNWqftPb5K7qiaDsRc~ozXYBxNpZdRou-X~7Y-WZ6H2PPyFH9DDqDnfcI1I2XDTJLMAY8TdGv-tHRLSeW0kOSYsRhSCPeGg2wTPZHYKWz8i7RhuwUA6MQVEHQJhscNcXoQMzyegNjUuxowe5feEdlvIiNv12fVs1FXfNJA__&Key-Pair-Id=APKAIEYUVEN4EVB2OKEQ",
        nome: "Aplicação Front-end Warriors",
        descricao: "Aplicação desenvolvida para melhorar minha prática em HTML5 e CSS3, mostrando toda a história do meu time de basquete favorito (Golden State Warriors) e seu elenco atual.",
        repFront:"https://github.com/Danrley-dev/Site-GoldenState"
      }
    },
    {
      imagem: "assets/imagens/link.jpeg",
      texto: "Links",
      detalhes: {
        video: "https://cdn-cf-east.streamable.com/video/mp4/kws84h.mp4?Expires=1661569080&Signature=eCMpmghQ~jdAWcSPn0gfm1cNJ7LzU2l7bY9Tt6tgaLgfDIuczSQdvg5hnO7h82yPOKZlSlAxfT4phEi8CZZxjIbkAO-9pjERw7NEqE1bqL2N~cUraIQrzbNhISlj-2DI2wvw6ugu8gNQ2kWQ~nZy0lrc0Euh4u-IyuEwaK5AqrRF7QnXDzly4ozJzSyV8Y3xEfqrcsZSzc~sPwJsJHXkU~IwufueOYgYhPrVy8VOLeW1jTs1AOI9s7W9gj00Jxexmxa5S09rt29HLM-5~FlQtcbdhi4Et-muJlNzrOqyUlIGu3GIdEH1Uj22Vr7YeNTr2j5JaEy8LgmJMkOI~G1bLw__&Key-Pair-Id=APKAIEYUVEN4EVB2OKEQ",
        nome: "Aplicação Front-end My Links",
        descricao: "Projeto pessoal com intuito de facilitar o acesso a todos os links das minhas respectivas redes sociais",
        repFront:"https://github.com/Danrley-dev/meus-links"
      }
    },
    {
      imagem: "assets/imagens/captura.jpeg",
      texto: "Captura",
      detalhes: {
        video: "https://cdn-cf-east.streamable.com/video/mp4/7or8m1.mp4?Expires=1661568900&Signature=jOZxWFvBJdonyEqjKgcaoeK30dpzIY2RG0AQtDKiIMBw2sUmJd6LNaiqY04XyIMlL9bEFwufrSevT0j5w8AITulzbYEVgdc-~CxZlAyVluElCsBMK1ksfLAUrevOSJMLcQWStLf10tkOv6r4Kr~d0xxFAW8Ghdw0dPOL~AOBf5nF0cyOTaTod9WDKJ1LS9crHY7hLFq0B9ULTn10da9k2KMm~yM7fDce3ku52JFV5ZrXtMskkKiS6q7gOcLgaaXLHz-qg7rwopmjAy7yDAV5vCxr91Kl1yeDuV4Jv52fmw7joxXWckzZBXkptn91NDW~OsKM7SCTb0oa~p3b-fw5rw__&Key-Pair-Id=APKAIEYUVEN4EVB2OKEQ",
        nome: "Aplicação front-end página de captura",
        descricao: "Projeto desenvolvido no curso do Programador BR, ultilizando HTML5 e CSS3 seguindo o mesmo intuito de aperfeiçoar meus conhecimentos nessas duas tecnologias e ganhar experiência no mundo do desenvolvimento.",
        repFront:"https://github.com/Danrley-dev/Pagina-de-captura"
      }
    },
    {
      imagem: "assets/imagens/cordel.jpeg",
      texto: "Cordel",
      detalhes: {
        video: "https://cdn-cf-east.streamable.com/video/mp4/giuuhn.mp4?Expires=1661568960&Signature=bnDZMH6Mw3eAi2xaVf58XxM68q0EMM4Uf8OIMnOTDx7xdn68b99XJflMwDGlOXiScDZGPC30Run4F3hba0u26Co5aF70WXvEpm6YAVerzGPiUlWZ21sMh4nxqpVaUfsIZsWcxfcbnTJkwB2lvRL5dhrhE8Whbp62EKSs2t~N7QsvpZV1aFy7-0YwgHVJkYcPjOhYdUcffrL7HvY1081tUtcxRif4ol5NrWL50S2sFU0p6~WE1rFbZYcshxai4LRmPaTgUo471Xk9OB5SnJuv2maj4TtvQ6EhYxcjudjYJO0fcgJGfSvSeZPIDrRQnX7VFZPV5odrbz6Ui4R0Dg~3jQ__&Key-Pair-Id=APKAIEYUVEN4EVB2OKEQ",
        nome: "Aplicação Front-end cordel",
        descricao: "Aplicação desenvolvida no curso em vídeo, bem no inicio da minha caminhada no desenvolvimento web, tecnologias ultilizadas são HTML5 e CSS3.",
        repFront:"https://github.com/Danrley-dev/projeto-cordel"
      }
    },
    {
      imagem: "assets/imagens/android.jpeg",
      texto: "Android",
      detalhes: {
        video: "https://cdn-cf-east.streamable.com/video/mp4/8eb8ep.mp4?Expires=1661568300&Signature=Ru-DPnOx44pyhTcqYYOioDxsdVZnw2HbVdNmJXNdBs08-Gwvan8QFJvQeGQp8t7vmA87UXjV8BuWrGxDnEuOwkry~XzPrluWms7oXj2H3eBxrfoOhn6zFtXhF~Jnmmhgjo5SZdFd3zUtj6cKP4ELOg-twA3L7UsmBomrdFzbHOIqHa15eo-aU57hs0Ty8p81xaN1aS3EK3UlXN3oDYhptSzIMwfqtLpWYtT8p3BTN83kAl94lCxrbWtgYFoiXnutq52MwK-VJ47qXHsr4AULSNMGd1BiI8fx-5R7tVKTw8NpA-bwTsh2DSs65Oww4tB1aRXHfxwvJByXWoQxe1WZvg__&Key-Pair-Id=APKAIEYUVEN4EVB2OKEQ",
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
