export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1 className="text-4xl font-bold text-black dark:text-white">
          This is edited by Jeppung. This is a test for CI/CD pipeline.
        </h1>
        <h2 className="text-xl text-gray-600 dark:text-gray-400">
          The CI/CD pipeline is working correctly.
        </h2>
      </main>
    </div>
  );
}
