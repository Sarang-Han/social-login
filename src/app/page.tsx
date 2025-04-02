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
            className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            로그인 페이지로 이동
          </Link>
          <Link
            href="/dashboard"
            className="px-6 py-3 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors"
          >
            대시보드로 이동
          </Link>
        </div>
      </main>
      
      <footer className="mt-12 text-center text-sm text-gray-500">
        2025 © Team Goggle
      </footer>
    </div>
  );
}