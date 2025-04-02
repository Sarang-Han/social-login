import NaverLoginButton from "@/components/auth/NaverLoginButton";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "로그인",
  description: "소셜 계정으로 로그인하세요",
};

export default function SignInPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
        <div className="text-center">
          <h1 className="text-2xl font-bold">로그인</h1>
          <p className="mt-2 text-gray-600">소셜 계정으로 로그인하세요</p>
        </div>
        
        <div className="space-y-4">
          <NaverLoginButton />
          {/* 다른 소셜 로그인 버튼도 여기에 추가할 수 있습니다 */}
        </div>
        
        <div className="text-center mt-4">
          <Link href="/" className="text-blue-500 hover:underline">
            홈으로 돌아가기
          </Link>
        </div>
      </div>
    </div>
  );
}