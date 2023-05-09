import Image from "next/image";

export default function Home() {
  return (
    <>
      <header className="flex w-full justify-center items-center h-[5.5rem] border-b border-white/10 ">
        <h1 className="text-3xl">HypeDeveloper</h1>
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
        <div></div>
      </main>
    </>
  );
}
