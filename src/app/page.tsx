import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-50">
      <main className="max-w-4xl w-full">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">소셜 로그인 모듈</h1>
        </div>

        <div className="flex justify-center gap-4 mt-8">
          <Link
            href="/auth/signin"
            className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
          >
            Log-in
          </Link>
        </div>
      </main>
      
      <footer className="mt-12 text-center text-sm text-gray-500">
        2025 © Team Goggle
      </footer>
    </div>
  );
}