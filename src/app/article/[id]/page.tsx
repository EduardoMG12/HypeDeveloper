import { articleMock, IArticle } from "../../../../data/mock";
import { metadata } from "@/app/layout";
import { Metadata } from "next";

interface IParams {
  params: { id: string };
}

export async function generateMetadata({ params }: IParams): Promise<Metadata> {
  const article = await articleMock[parseInt(params.id) - 1];
  return { title: article.title, description: article.description };
}

const Article = async ({ params }: IParams) => {
  const article: IArticle = await articleMock[parseInt(params.id) - 1];
  return <div>{article.description}</div>;
};

export default Article;
