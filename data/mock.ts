export interface IArticle {
    id: number;
    title: string;
    description: string;
    thumbNail:string
    image?: string;
    video?: string;
    textPrincipal: string;
    textSecondary?: string;
    textLeft?: string;
    textRight?: string;
  }

  export const articleMock: IArticle[] = [
    {
    id: 1,
    title: 'A internet não é brincadeira: o perigo das fake news e conteúdos enganosos',
    description: 'Este é o meu primeiro artigo sobre Next.js',
    thumbNail:"https://images.unsplash.com/photo-1585995603666-5bd6b348de9d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZmFrZW5ld3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    textPrincipal: `A internet é uma ferramenta poderosa que trouxe muitos benefícios para o mundo. Hoje em dia, é possível acessar uma grande quantidade de informações em segundos. No entanto, essa facilidade também traz riscos, especialmente quando se trata de fake news e conteúdos enganosos.

    É importante lembrar que nem tudo o que está na internet é verdade. Infelizmente, muitas pessoas utilizam a rede para disseminar informações falsas, com o intuito de manipular e enganar os usuários. Além disso, há também conteúdos que são ilegais, como pornografia infantil e incitação à violência.
    
    Apesar de existirem leis processuais para combater esses problemas, é praticamente impossível regulamentar todas as informações que circulam na internet. Por isso, é responsabilidade de cada um de nós ter cuidado ao navegar na web.
    
    `,
    textLeft: 'Ut fermentum accumsan felis quis mollis.',
    textRight: 'Donec ornare elit sed magna volutpat bibendum.',
  },
  {
    id: 2,
    title: 'Meu segundo artigo example',
    description: 'Este é o meu segundo artigo sobre Next.js',
    thumbNail: "",
    image: '',
    textPrincipal: 'lorem epsilumlorem epsilum lorem epsilum lorem epsilum lorem epsilum lorem epsilum lorem epsilum lorem epsilum lorem epsilum lorem epsilumlorem epsilum lorem epsilum lorem epsilum lorem epsilum lorem epsilum lorem epsilum lorem epsilum lorem epsilum lorem epsilum lorem epsilum lorem epsilum lorem epsilum lorem epsilum lorem epsilum lorem epsilum lorem epsilum lorem epsilum lorem epsilum lorem epsilum lorem epsilum lorem epsilum lorem epsilum',
    textLeft: 'Ut fermentum accumsan felis quis mollis.',
    textRight: 'Donec ornare elit sed magna volutpat bibendum.',
  }]
