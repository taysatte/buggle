import Image from "next/image";

const PuzzlePage = () => {
  return (
    <>
      {/* TODO: Navigation bar component with logo, daily timer, and links */}
      <nav className="px-4 flex flex-row justify-between items-center h-[64px] w-min-screen">
        <div>
          <Image
            src="/svgs/buggle-bug-logo.svg"
            alt="Buggle Bug Logo"
            width={40}
            height={40}
          />
        </div>
        {/* TODO: Daily Timer component */}
        <div className="bg-red-300">daily timer</div>
        <div className="bg-green-300">links</div>
      </nav>

      {/* Main content area */}
      <main>
        <section>{/* TODO: Code Editor component */}</section>
        <section>{/* TODO: Puzzle description component */}</section>
      </main>
    </>
  );
};

export default PuzzlePage;
