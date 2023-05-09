import { articleMock, IArticle } from "../../../../data/mock";
import { Metadata } from "next";
import Link from "next/link";
import { Article as ArticleComponent } from "../../../components/Article";

interface IParams {
  params: { id: string };
}

export async function generateMetadata({ params }: IParams): Promise<Metadata> {
  const article = await articleMock[parseInt(params.id) - 1];
  return { title: article.title, description: article.description };
}

const Article = async ({ params }: IParams) => {
  const article: IArticle = await articleMock[parseInt(params.id) - 1];
  return (
    <>
      <header className="flex w-full justify-center items-center h-[5.5rem] border-b border-white/10 ">
        <Link href="/">
          <h1 className="text-3xl">HypeDeveloper</h1>
        </Link>
      </header>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <ArticleComponent.Root>
          <ArticleComponent.Title paragraphText={article.title} />
          <ArticleComponent.PrincipalSection
            paragraphText={article.textPrincipal}
          />
          {article.image ? (
            <ArticleComponent.Image src={article.image} />
          ) : null}
          {article.textSecondary ? (
            <ArticleComponent.SecondarySection
              paragraphText={article.textSecondary}
            />
          ) : null}
          {article.video ? (
            <ArticleComponent.Video src={article.video} />
          ) : null}
          {article.textLeft || article.textRight ? (
            <ArticleComponent.ContainerLeftAndRightContent
              leftSection={article.textLeft ?? null}
              rightSection={article.textRight ?? null}
            />
          ) : null}
        </ArticleComponent.Root>
      </main>
    </>
  );
};

export default Article;
