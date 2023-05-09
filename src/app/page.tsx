import Image from "next/image";
import Link from "next/link";
import { articleMock } from "../../data/mock";
export default function Home() {
  return (
    <>
      <header className="flex w-full justify-center items-center h-[5.5rem] border-b border-white/10 ">
        <Link href="/">
          <h1 className="text-3xl">HypeDeveloper</h1>
        </Link>
      </header>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="flex flex-col items-start justify-center gap-10">
          <h2 className="text-3xl">HypeDeveloper</h2>
          <p className="text-lg w-10/12 self-center">
            Aqui, você encontrará diversas opiniões e reflexões sobre
            programação, tecnologia e outros assuntos relacionados. Vale lembrar
            que as ideias expressas neste site são apenas opiniões pessoais, e
            não devem ser levadas totalmente a sério. Cabe a você concordar ou
            não com elas, assim como acontece com muitas outras coisas na
            internet. Fique à vontade para explorar e deixar sua opinião nos
            comentários!
          </p>
        </div>
        <div className="flex flex-col items-center justify-start gap-20 p-24 min-h-screen w-full">
          {articleMock.map((data) => (
            <Link
              href={`/article/${data.id}`}
              key={data.id}
              className="rounded-2xl bg-slate-900 h-3/4 flex w-3/4 gap-5"
            >
              <div
                className="imageArticle w-1/3 h-64 bg-cover bg-no-repeat rounded-l-2xl"
                style={{
                  backgroundImage: `url(${
                    data.image ??
                    "https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  })`,
                }}
              ></div>
              <div className="wapper flex-col justify-start gap-3 items-start w-full">
                <h3 className="title">{data.title}</h3>
                <div className="sinopse">{data.description}</div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}
