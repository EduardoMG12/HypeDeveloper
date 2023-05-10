import { articleMock, IArticle } from "../../../../data/mock";
import { Metadata } from "next";
import Link from "next/link";
import { Article as ArticleComponent } from "../../../components/Article";

interface IParams {
  params: { id: string };
}

export async function generateMetadata({ params }: IParams): Promise<Metadata> {
  const article = await articleMock[parseInt(params.id) - 1];
  return { title: article.head.title, description: article.head.description };
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
      <main className="flex min-h-screen flex-col items-center justify-between p-6 lg:p-24">
        <ArticleComponent.Root>
          <ArticleComponent.Title paragraphText={article.head.title} />
          <ArticleComponent.PrincipalSection
            paragraphText={article.text.textPrincipal}
          />
          {article.image.imageSrc ? (
            <ArticleComponent.ImageRetract src={article.image.imageSrc} />
          ) : null}
          {article.text.textSecondary ? (
            <ArticleComponent.SecondarySection
              paragraphText={article.text.textSecondary}
            />
          ) : null}
          {article.video.srcVideo ? (
            <ArticleComponent.Video
              srcVideo={article.video.srcVideo}
              dateVideo={article.video.dateVideo}
              descriptionVideo={article.video.descriptionVideo}
              titleVideo={article.video.titleVideo}
            />
          ) : null}
          {article.text.textLeft || article.text.textRight ? (
            <ArticleComponent.ContainerLeftAndRightContent
              leftSection={article.text.textLeft ?? null}
              rightSection={article.text.textRight ?? null}
            />
          ) : null}
        </ArticleComponent.Root>
      </main>
    </>
  );
};

export default Article;
