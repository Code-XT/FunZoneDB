import Link from "next/link";

const Navbar = () => {
  return (
    <div className="grid text-center md:w-full lg:w-1/5 lg:text-left p-4 h-96">
      {/* Anime */}
      <Link
        href="/anime" // Add your link here
        className="group rounded-lg border border-transparent px-4 py-3 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        rel="noopener noreferrer"
      >
        <h2 className={`mb-3 text-2xl font-semibold`}>Anime</h2>
        <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          Animated Adventures Await
        </p>
      </Link>

      {/* Movies */}
      <Link
        href="/movies" // Add your link here
        className="group rounded-lg border border-transparent px-4 py-3 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        rel="noopener noreferrer"
      >
        <h2 className={`mb-3 text-2xl font-semibold`}>Movies</h2>
        <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          Cinematic Journeys Unfold
        </p>
      </Link>

      {/* TV Series */}
      <Link
        href="/tv" // Add your link here
        className="group rounded-lg border border-transparent px-4 py-3 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        rel="noopener noreferrer"
      >
        <h2 className={`mb-3 text-2xl font-semibold`}>TV Series</h2>
        <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          Episodic Excitement Awaits
        </p>
      </Link>

      {/* Games */}
      <Link
        href="/games" // Add your link here
        className="group rounded-lg border border-transparent px-4 py-3 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        rel="noopener noreferrer"
      >
        <h2 className={`mb-3 text-2xl font-semibold`}>Games</h2>
        <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          Gaming Thrills Unleashed
        </p>
      </Link>

      {/* Add any additional link blocks as needed */}
    </div>
  );
};

export default Navbar;
