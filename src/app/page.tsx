import LargeHeading from "@/components/ui/LargeHeading";
import Paragraph from "@/components/ui/Paragraph";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Open API || Home",
  description: "Free & open-source api",
};

export default function Home() {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-x-hidden">
      <div className="container pt-32 max-w-7xl mx-auto w-full h-full">
        <div className="h-full gap-6 flex flex-col justify-start lg:justify-center lg:items-start">
          <LargeHeading
            size="lg"
            className="three-d text-black dark:text-light-gold"
          >
            Easily determine <br />
            Open Api.
          </LargeHeading>
          <Paragraph className="max-w-xl lg:text-left">
            with text similarity API, you can easily determine the similarity
            between two pieces of text with a free{" "}
            <Link
              href="/login"
              className="underline underline-offset-2 text-black dark:text-light-gold"
            >
              API key
            </Link>
          </Paragraph>

          <div className="relative lg:absolute w-full max-w-lg lg:max-w-xl lg:left-1/2 aspect-square">
            <Image
              priority
              className="img-shadow"
              quality={100}
              style={{ objectFit: "contain" }}
              src="/typewriter.png"
              fill
              alt="typewriter"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
