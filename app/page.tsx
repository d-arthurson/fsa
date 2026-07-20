"use client";
import Image from "next/image";

export default function Home() {
  console.log("test deployment>>>");
  return (
    <div className="flex flex-col flex-1">
      <main className="flex flex-1 w-full flex-col items-center justify-center px-2 bg-background-main">
        <Image
          src="/images/logo-main.png"
          alt="logo"
          loading="eager"
          width={200}
          height={200}
          className="d-block mb-4 w-auto h-auto"
        />
        <h1 className="text-2xl font-bold mb-6">Coming soon!</h1>
        <h2 className="mb-1"> Please, follow us on: </h2>

        <div className="flex gap-2 items-center">
          <a
            href="https://www.linkedin.com/in/formation-et-sensibilisation-armenie"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/icons/linkedin-logo.svg"
              alt="linkedin"
              width={36}
              height={36}
            />
          </a>

          <a
            href="https://www.instagram.com/fsarmenia"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/icons/instagram-logo.svg"
              alt="instagram"
              width={36}
              height={36}
            />
          </a>
        </div>
      </main>
    </div>
  );
}
