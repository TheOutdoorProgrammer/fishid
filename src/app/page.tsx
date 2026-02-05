export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-text mb-4">FishID</h1>
        <p className="text-muted text-lg mb-8">
          Learn to identify Ohio & Lake Erie fish species - Duolingo style!
        </p>
        <div className="bg-panel rounded-sm p-8 max-w-md">
          <p className="text-text">Next.js 15 + TypeScript + Tailwind CSS</p>
          <p className="text-muted text-sm mt-2">Ready for React migration</p>
        </div>
      </div>
    </main>
  );
}
