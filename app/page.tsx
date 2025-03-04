import Link from "next/link";

export default function Home() {
  return (
    <div>
      <main className="px-8 text-center flex flex-col">
        <h1 className="mt-16 text-5xl sm:text-6xl md:text-7xl font-bangers text-[#5a5a5a]">
          Hop into custom
        </h1>

        <p className="mt-6 max-w-md mx-auto text-sm md:text-base font-comic">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        </p>

        <Link href="#" className="mt-6 px-4 py-1 w-fit mx-auto bg-yellow-300 font-lucky rounded-tl-xl rounded-br-xl border border-black">
          Explore
        </Link>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-4 w-fit mx-auto">
          {[
            {
              title: 'Lorem Ipsum',
              description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.'
            },
            {
              title: 'Lorem Ipsum',
              description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.'
            },
            {
              title: 'Lorem Ipsum',
              description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.'
            },
            {
              title: 'Lorem Ipsum',
              description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.'
            },
          ].map((item, i) => (
            <div key={i} className="mt-8 p-4 w-72 max-w-60 bg-white border border-black rounded-xl shadow-[-10px_15px_black]">
              <h2 className="text-xl font-bangers">{item.title}</h2>
              <p className="mt-2 text-xs font-comic max-w-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
