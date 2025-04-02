"use client";

import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/auth/signin");
    }
  }, [status, router]);

  if (status === "loading") {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-50">
      <div className="w-full max-w-lg p-8 space-y-8 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center">로그인 대시보드</h1>
        
        {session?.user ? (
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
              {session.user.image && (
                <img 
                  src={session.user.image} 
                  alt={session.user.name || "프로필 이미지"} 
                  className="w-20 h-20 rounded-full border-2 border-gray-200"
                />
              )}
              <div className="text-center md:text-left">
                <p className="text-lg font-medium">{session.user.name || "사용자"}</p>
                <p className="text-gray-600">{session.user.email || "이메일 없음"}</p>
                <p className="text-sm text-gray-500">로그인 제공자: {session.user.provider || "알 수 없음"}</p>
              </div>
            </div>
            
            <div className="border-t border-gray-200 pt-4">
              <h2 className="text-lg font-medium mb-2">사용자 정보</h2>
              <pre className="bg-gray-100 p-4 rounded-md text-sm overflow-auto">
                {JSON.stringify(session, null, 2)}
              </pre>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => signOut({ callbackUrl: "/" })}
                className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 transition-colors"
              >
                로그아웃
              </button>
              <Link
                href="/"
                className="w-full px-4 py-2 text-center text-blue-500 border border-blue-500 rounded-md hover:bg-blue-50 transition-colors"
              >
                홈으로 이동
              </Link>
            </div>
          </div>
        ) : (
          <div className="text-center">
            <p className="text-gray-600 mb-4">로그인이 필요합니다.</p>
            <Link
              href="/auth/signin"
              className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 transition-colors"
            >
              로그인 페이지로 이동
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}