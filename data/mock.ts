export interface IArticle {
    id: number;
    title: string;
    description: string;
    image?: string;
    textNormal?: string;
    textLeft?: string;
    textRight?: string;
  }

  export const articleMock: IArticle[] = [
    {
    id: 1,
    title: 'Meu primeiro artigo example',
    description: 'Este é o meu primeiro artigo sobre Next.js',
   
    textNormal: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    textLeft: 'Ut fermentum accumsan felis quis mollis.',
    textRight: 'Donec ornare elit sed magna volutpat bibendum.',
  },
  {
    id: 2,
    title: 'Meu segundo artigo example',
    description: 'Este é o meu segundo artigo sobre Next.js',
    image: '',
    textNormal: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    textLeft: 'Ut fermentum accumsan felis quis mollis.',
    textRight: 'Donec ornare elit sed magna volutpat bibendum.',
  }]
