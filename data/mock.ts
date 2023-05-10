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
}

export interface IText{
  textPrincipal: string;
  textSecondary?: string;
  textLeft?: string;
  textRight?: string;
}

export interface IArticle {
    id: number;
    head:IHead;
    image:IImage;
    video:IVideo;
    text:IText;
  }

  export const articleMock: IArticle[] = [
    {
    id: 1,
    head:{
      title: 'É inviável a censura na internet: a importância da educação digital',
      description: 'Neste artigo, discuto a questão da regulamentação da internet, a proliferação de fake news e o vício em internet. É importante que cada indivíduo assuma a responsabilidade...',
      thumbNail:"https://images.unsplash.com/photo-1585995603666-5bd6b348de9d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZmFrZW5ld3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=6do",
    },
    text:{
      textPrincipal: `A internet é um lugar vasto e livre, onde as pessoas podem expressar suas opiniões e compartilhar informações. No entanto, essa liberdade tem suas consequências, e uma delas é a proliferação de conteúdos falsos e enganosos, as chamadas fake news.
      Embora muitas pessoas acreditem que a solução para esse problema seja a censura, essa ideia é inviável. Afinal, o regulamentador teria total poder em cima disso, podendo até mesmo censurar coisas que não são mentiras. Por isso, é importante que cada indivíduo assuma a responsabilidade de filtrar o que é verdadeiro e o que é falso.
      A educação digital é uma das formas mais eficazes de combater as fake news e outros males das redes sociais, como a dependência da dopamina, golpes na internet, aumento da depressão, entre outros. Nas escolas, deveria ser adicionada uma disciplina específica para ensinar os alunos a discernir o que é certo e o que é errado na internet, a verificar a fonte das informações, a encontrar conteúdos úteis e confiáveis, além de alertá-los sobre os riscos de um uso excessivo da internet.
      A dopamina é um neurotransmissor responsável pelo prazer e recompensa. A internet, em especial as redes sociais, ativam o sistema de recompensa do cérebro, liberando dopamina e criando uma sensação de satisfação. Isso pode levar à dependência da internet, assim como acontece com as drogas, o álcool e o jogo. Um estudo da Universidade de Harvard comparou o vício em redes sociais com o vício em jogos de azar, argumentando que ambos ativam os mesmos centros de prazer no cérebro.
      De acordo com um relatório da Common Sense Media, uma organização sem fins lucrativos que estuda o impacto da tecnologia na vida das crianças e adolescentes, os jovens passam em média nove horas por dia online, seja assistindo a vídeos, navegando nas redes sociais ou jogando jogos online. Esse uso excessivo pode levar ao isolamento social, ansiedade, depressão e até mesmo ao suicídio.
      Além disso, a internet também é um terreno fértil para golpes e fraudes. Todos os dias, pessoas caem em armadilhas criadas por criminosos que usam a internet para roubar informações pessoais e financeiras. É importante que as pessoas tenham consciência dos riscos e aprendam a se proteger.
      `,
      textSecondary:`Por fim, é importante destacar que não se pode proibir o acesso à internet, assim como não se pode proibir o acesso aos carros, mesmo sabendo que eles podem matar pessoas por acidente. A solução para os males da internet está na educação digital, na capacitação das pessoas para que elas saibam como usar a internet de forma segura e responsável.`,
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
  }
  ]
