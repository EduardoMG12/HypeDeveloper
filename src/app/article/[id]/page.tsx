import { articleMock, IArticle } from "../../../../data/mock";
import { Metadata } from "next";
import Link from "next/link";
import FirstArticle from "@/components/ArticleTemplates/FirstArticle";
import WithSubtitleArticle from "@/components/ArticleTemplates/WithSubtitleArticle";

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
        {article.head.type.template === "firstArticle" ? (
          <FirstArticle article={article} />
        ) : article.head.type.template === "withSubtitleArticle" ? (
          <WithSubtitleArticle article={article} />
        ) : null}
      </main>
    </>
  );
};

export default Article;