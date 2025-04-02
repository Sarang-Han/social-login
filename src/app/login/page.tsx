import NaverLoginButton from "@/components/auth/NaverLoginButton";
import GoogleLoginButton from "@/components/auth/GoogleLoginButton";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "로그인",
  description: "소셜 계정으로 로그인하세요",
};

export default function SignInPage() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* 왼쪽 이미지 영역 */}
      <div className="hidden md:flex md:w-1/2 bg-indigo-600 items-center justify-center p-8">
        <div className="max-w-md text-white">
          <h2 className="text-3xl font-bold mb-6">소셜 로그인 데모</h2>
          <div className="w-full h-64 relative rounded-lg overflow-hidden">
            {/* 프로젝트 관련 이미지*/}
            <div className="w-full h-full bg-indigo-500 flex items-center justify-center">
              <p className="text-lg font-semibold">프로젝트 이미지</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* 오른쪽 로그인 영역 */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-4 md:p-8">
        <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
          <div className="text-center">
            <h1 className="text-2xl font-bold">로그인</h1>
            <p className="mt-2 text-gray-600">소셜 계정으로 로그인하세요</p>
          </div>
          
          <div className="space-y-4">
            <NaverLoginButton />
            <GoogleLoginButton />
          </div>
          
          <div className="text-center mt-4">
            <Link href="/" className="text-blue-500 hover:underline">
              홈으로 돌아가기
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}