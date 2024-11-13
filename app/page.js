import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    <main className="mt-9">
      <section className="grid grid-cols-2 h-[50vh] m-6">
        <div className="flex flex-col gap-4 items-center justify-center">
          <p className="text-2xl font-semibold text-center">
            The best URL Shortener in the market
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto
            quo ipsum incidunt! Fuga, distinctio veniam. Odit ullam inventore
            dolorem fugit earum adipisci eos itaque unde dolore? Natus dolorum
            modi beatae.
          </p>

          <div>
            <Link className="mx-3" href="/generate">
              <Button>Try Now</Button>
            </Link>
            <Link href="/github">
              <Button>Github</Button>
            </Link>
          </div>
        </div>

        <div className="relative">
          <Image src={"/vector.jpg"} alt="img" fill={true} />
        </div>
      </section>
    </main>
  );
}
