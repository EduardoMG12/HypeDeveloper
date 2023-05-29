export interface ISingleArticle{
  article:IArticle
}

export interface IParagraph{
  title?:string
  text:string
}

export interface IImage{
  imageSrc?: string;
  widthImage?:number;
  heightImage?:number;
}

export interface IVideo{
  srcVideo?:string;
  dateVideo?:string;
  heightVideo?:string;
  descriptionVideo?:string;
  titleVideo?:string;
  widthVideo?:string;
}
export interface IHead{
  title: string;
  description: string;
  thumbNail:string
  type:IType
}

export interface IText{
  textPrincipal: IParagraph;
  textSecondary?: IParagraph;
  textTertiary?: IParagraph
  textLeft?: string;
  textRight?: string;
}

export interface IType{
  template: "firstArticle" | "withSubtitleArticle";
}

export interface IArticle {
    id: number;
    head:IHead;
    image:IImage;
    video?:IVideo;
    text:IText;
  }

  export const articleMock: IArticle[] = [
    {
    id: 1,
    head:{
      title: 'É inviável a censura na internet: a importância da educação digital',
      description: 'Neste artigo, discuto a questão da regulamentação da internet, a proliferação de fake news e o vício em internet. É importante que cada indivíduo assuma a responsabilidade...',
      thumbNail:"https://images.unsplash.com/photo-1585995603666-5bd6b348de9d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZmFrZW5ld3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=6do",
      type:{
        template:"firstArticle",
      }
    },
    text:{
      textPrincipal: {
        text:`A internet é um lugar vasto e livre, onde as pessoas podem expressar suas opiniões e compartilhar informações. No entanto, essa liberdade tem suas consequências, e uma delas é a proliferação de conteúdos falsos e enganosos, as chamadas fake news.
      Embora muitas pessoas acreditem que a solução para esse problema seja a censura, essa ideia é inviável. Afinal, o regulamentador teria total poder em cima disso, podendo até mesmo censurar coisas que não são mentiras. Por isso, é importante que cada indivíduo assuma a responsabilidade de filtrar o que é verdadeiro e o que é falso.
      A educação digital é uma das formas mais eficazes de combater as fake news e outros males das redes sociais, como a dependência da dopamina, golpes na internet, aumento da depressão, entre outros. Nas escolas, deveria ser adicionada uma disciplina específica para ensinar os alunos a discernir o que é certo e o que é errado na internet, a verificar a fonte das informações, a encontrar conteúdos úteis e confiáveis, além de alertá-los sobre os riscos de um uso excessivo da internet.
      A dopamina é um neurotransmissor responsável pelo prazer e recompensa. A internet, em especial as redes sociais, ativam o sistema de recompensa do cérebro, liberando dopamina e criando uma sensação de satisfação. Isso pode levar à dependência da internet, assim como acontece com as drogas, o álcool e o jogo. Um estudo da Universidade de Harvard comparou o vício em redes sociais com o vício em jogos de azar, argumentando que ambos ativam os mesmos centros de prazer no cérebro.
      De acordo com um relatório da Common Sense Media, uma organização sem fins lucrativos que estuda o impacto da tecnologia na vida das crianças e adolescentes, os jovens passam em média nove horas por dia online, seja assistindo a vídeos, navegando nas redes sociais ou jogando jogos online. Esse uso excessivo pode levar ao isolamento social, ansiedade, depressão e até mesmo ao suicídio.
      Além disso, a internet também é um terreno fértil para golpes e fraudes. Todos os dias, pessoas caem em armadilhas criadas por criminosos que usam a internet para roubar informações pessoais e financeiras. É importante que as pessoas tenham consciência dos riscos e aprendam a se proteger.
      `},
      textSecondary:{
        text:`Por fim, é importante destacar que não se pode proibir o acesso à internet, assim como não se pode proibir o acesso aos carros, mesmo sabendo que eles podem matar pessoas por acidente. A solução para os males da internet está na educação digital, na capacitação das pessoas para que elas saibam como usar a internet de forma segura e responsável.`}
    },
    image:{
      imageSrc:"https://plus.unsplash.com/premium_photo-1681248156422-c01a2c803588?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGVhcm5pbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    },
    video:{
      srcVideo:"https://www.youtube.com/embed/417DHVfxvao",
      titleVideo:"Você (não) pode acreditar no que quiser.",
      descriptionVideo:"provavelmente nem todo mundo irá concordar com esse video, mas o mesmo fala sobre um tema parecido, até aborda as fakeNews olhando pelo lado da filosofia.",
      dateVideo:"03/05/2023",

    }
  },
    {
    id: 2,
    head:{
      title: 'A importância da perseverança na jornada de aprendizado em programação',
      description: 'Neste artigo, discuto a questão da regulamentação da internet, a proliferação de fake news e o vício em internet. É importante que cada indivíduo assuma a responsabilidade...',
      thumbNail:"https://images.unsplash.com/photo-1609588481435-bbec53a6e471?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      type:{
        template:"withSubtitleArticle",
      }
    },
    text:{
      textPrincipal: {
        text:`Olá novamente! Hoje venho conversar com vocês sobre meu estudo em programação, que já dura cerca de um ano e meio. Até agora não tem sido fácil. Há muitas barreiras, muitos vendedores de sonhos e muitas pessoas reclamando sem correr atrás. Essa semana, estava caminhando e conversando com um amigo na faculdade. Ele estava falando que está "frustrado" porque não sobra mais tempo para ele. A faculdade está consumindo-o demais, junto com o trabalho, e por fim, não sobra tempo para ele mesmo. Ele está pensando em desistir da faculdade. Cada um tem sua vida, e não estou aqui para criticar ou achar certo ou errado. Cada um tem ciência de suas opções e escolhas. Mas vim aqui para dar o meu ponto de vista e contar um pouco sobre minha caminhada.        Aos 15 anos, comecei a trabalhar em um posto de combustível. Estudava de manhã, trabalhava de tarde e de noite, nos finais de semana, saía. Gastava todo o dinheiro que ganhava com coisas supérfluas que não acrescentavam nada em minha vida. Este ano, reprovei e fui para outra escola, onde minha vida deu a primeira virada. "Ah, mas a gente não sabe o dia de amanhã." Sim, porém, com esse pensamento, nunca sairíamos do lugar. Ficaríamos estagnados para sempre, sem mover um dedo, sem correr atrás dos sonhos. Se algo é muito difícil de fazer, muitos desistem antes mesmo de tentar. Mas tem uma frase que eu gosto muito e desde que a ouvi, estou levando para minha vida: "Se você tentar algo, talvez consiga, mas se não tentar, certeza não conseguirá." E é isso, simplesmente. Se você não nasceu herdeiro, é você por você mesmo. E se você nasceu herdeiro, boa sorte, porque vai precisar. No meu ponto de vista, uma pessoa que já nasce rica não consegue valorizar as coisas. Se hoje em dia, com o tanto de dopamina que o mundo já nos larga de mão beijadas, já é difícil viver sem virar um escravo da dopamina, imagina quando se nasce rico. Você pode comprar qualquer coisa, qualquer pessoa, fazer o que quiser. É como usar hack no GTA. Uma hora cansa, já que você tem qualquer carro do jogo, pode fazer qualquer missão, já explorou tudo. Acaba os objetivos. Mas enfim, fugi um pouco do assunto.`},
      textSecondary:{
        title:"A história de uma pessoa que encontrou sua verdadeira paixão depois de muitas tentativas.",
        text:`Demorei alguns anos para descobrir o que eu queria fazer. Após terminar o ensino médio, pensei em ser advogado, médico, engenheiro, criador de jogos, entre outros, mas nenhum me agradava de verdade. Até que comecei a estudar mesmo. Primeiro, estudei um pouco de marketing, um curso inteiro pela Bradesco. Não consegui tirar o certificado do mesmo, mas vendo aquilo, percebi que éramos manipulados e nem sabíamos. Mas entendi que não era isso que eu queria. Um bom tempo depois, mais ou menos um ano, ironicamente, caí em um anúncio do Instagram que prometia me deixar milíonario facilmente com pouco tempo de estudo, caí no bait, ainda bem pois se não não estaria aqui. Depois de um tempo, eu percebi que estudar programação era a minha verdadeira paixão. Eu me dedicava horas e horas por dia a aprender sobre programação, e com o tempo, fui me aprofundando cada vez mais nessa área. Aprendi a linguagem de programação Python, a criar sites e aplicativos, e aos poucos, comecei a perceber que tudo aquilo estava fazendo sentido e que eu estava evoluindo cada vez mais. 
        `},
      textTertiary:{
        title:``,
        text:`Claro, nem tudo foram flores. Houve momentos em que eu me senti frustrado, quando um código não funcionava como eu queria ou quando eu não conseguia entender um conceito mais complexo. Mas ao invés de desistir, eu persisti e continuei estudando, buscando novas formas de entender aquilo que estava me causando dificuldade. E aqui estou eu, mais de um ano e meio depois, ainda estudando e aprendendo sobre programação. Ainda há muito a aprender, mas eu sinto que já evolui bastante. Eu não estou dizendo que a programação é para todo mundo, mas se você está em busca de uma carreira desafiadora e em constante evolução, talvez seja uma opção a considerar.  E aqui estou eu, mais de um ano e meio depois, ainda estudando e aprendendo sobre programação. Ainda há muito a aprender, mas eu sinto que já evolui bastante. Eu não estou dizendo que a programação é para todo mundo, mas se você está em busca de uma carreira desafiadora e em constante evolução, talvez seja uma opção a considerar.`
      },textLeft:`Então, se você está passando por dificuldades na faculdade, no trabalho ou em qualquer outra área da sua vida, eu te encorajo a continuar lutando. Não desista dos seus sonhos por causa das dificuldades. Com esforço, dedicação e perseverança, você pode superar qualquer obstáculo e alcançar seus objetivos.
        Compreendo a sua preocupação, mas é importante lembrar que, embora possa ser difícil e desafiador, também é possível crescer e aprender com essas experiências difíceis. Podem ser 3 anos da sua vida que serão um "inferno", mas depois disso, você pode emergir mais forte e mais resiliente do que antes. Às vezes, as dificuldades que enfrentamos são as que nos tornam mais fortes e mais capazes de lidar com os desafios que a vida nos apresenta. Então, não desanime. Encontre suporte e ajuda se precisar, e lembre-se de que isso também passará.`
      },
    image:{
      // imageSrc:"https://images.unsplash.com/photo-1551033406-611cf9a28f67?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8amF2YSUyMGNvZGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    },
    video:{
      srcVideo:"https://www.youtube.com/embed/D3L8IOncLkg",
      titleVideo:"Não Terceirize suas Decisões! | A Lição MAIS Importante da sua Vida.",
      descriptionVideo:"este vídeo abriu meus olhos quando eu estava no inicio, o vídeo é um tapa na cara, mas necessário.",
      dateVideo:"09/10/2019",

    }
  },
    {
      id: 3,
      head:{
        title: 'Em busca da liberdade financeira: Minha jornada rumo ao empreendedorismo',
        description: 'Hoje, gostaria de compartilhar com vocês um sentimento que tem me acompanhado intensamente nos últimos tempos: a busca pela liberdade financeira. Como muitos...',
        thumbNail:"https://images.unsplash.com/photo-1579517882497-4d855bb995cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&q=80",
        type:{
          template:"withSubtitleArticle",
        }
      },
      text:{
        textPrincipal: {
          text:`Hoje, gostaria de compartilhar com vocês um sentimento que tem me acompanhado intensamente nos últimos tempos: a busca pela liberdade financeira. Como muitos de vocês, desejo encontrar um caminho que me permita alcançar independência financeira, sem depender exclusivamente de um emprego convencional. E aqui está o dilema: nunca tive uma experiência profissional séria na minha vida.
                Enquanto muitos amigos e colegas já construíram uma carreira estável e segura, eu me vejo em uma posição diferente. Estou determinado a explorar oportunidades que me levem a um futuro financeiramente próspero. Acredito que a criação de um site ou um aplicativo pode ser um passo importante nessa direção. Não apenas para ganhar dinheiro, mas também para construir um portfólio sólido que demonstre minhas habilidades e potencial.
                Tenho várias ideias em mente e pretendo começar com três projetos: dois sites e um aplicativo. Embora eu os mencione como "pequenos", não se enganem, eles exigirão muito trabalho e dedicação. Afinal, grandes resultados demandam esforços proporcionais. Planejo investir tempo e energia nesses projetos para que eles se tornem bem-sucedidos.`
          },
        textSecondary:{
          text:`Após a conclusão desses projetos iniciais, pretendo dedicar-me ao marketing desses sites e do aplicativo, com a esperança de que eles alcancem o sucesso esperado. E se tudo der certo, pretendo dar o próximo passo e criar uma aplicação maior. Já tenho algumas ideias em mente, mas reconheço que tomar decisões na vida, desde as mais simples até as mais complexas, pode ser um desafio e tanto.
                No entanto, estou disposto a enfrentar esses desafios, aprender com os erros e aproveitar as oportunidades que surgirem no meu caminho. Acredito que o verdadeiro crescimento ocorre quando saímos da nossa zona de conforto e nos arriscamos em busca dos nossos sonhos.
                Ao longo desta jornada, pretendo compartilhar com vocês as minhas experiências, aprendizados e reflexões. Espero que esse relato seja inspirador para aqueles que também estão em busca da liberdade financeira e do empreendedorismo.
                Junte-se a mim nessa jornada de descobertas e desafios. Vamos construir nosso próprio caminho rumo ao sucesso financeiro e pessoal.         `
          },
        textTertiary:{
            text:`Ao mesmo tempo em que estou empolgado com a perspectiva de criar sites e aplicativos, devo admitir que tenho um receio em relação a isso. Tenho medo de que, ao trabalhar intensamente com programação, eu possa acabar me cansando e perdendo o entusiasmo pela área.
                  Não quero que algo que comecei com paixão se torne uma fonte de desgaste. Portanto, estou ciente da importância de diversificar minhas experiências e explorar diferentes campos dentro do mundo do empreendedorismo. Então, se você está passando por dificuldades na faculdade, no trabalho ou em qualquer outra área da sua vida, eu te encorajo a continuar lutando. Não desista dos seus sonhos por causa das dificuldades. Com esforço, dedicação e perseverança, você pode superar qualquer obstáculo e alcançar seus objetivos. Compreendo a sua preocupação, mas é importante lembrar que, embora possa ser difícil e desafiador, também é possível crescer e aprender com essas experiências difíceis. Podem ser 3 anos da sua vida que serão um "inferno", mas depois disso, você pode emergir mais forte e mais resiliente do que antes. Às vezes, as dificuldades que enfrentamos são as que nos tornam mais fortes e mais capazes de lidar com os desafios que a vida nos apresenta. Então, não desanime. Encontre suporte e ajuda se precisar, e lembre-se de que isso também passará.`
        },
      },
      
    image:{
      imageSrc:"https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
    },
  },
  ]