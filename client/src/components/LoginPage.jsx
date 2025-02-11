import { useState } from 'react';
import SignUpPage from './SignUpPage'; // 회원가입 폼 컴포넌트

export default function LoginPage() {
    const [isSignUp, setIsSignUp] = useState(false); // 로그인/회원가입 상태 관리

    const toggleForm = () => {
        setIsSignUp(!isSignUp); // 상태를 반전시켜 폼을 전환
    };

    return (
        <div className="relative flex items-center justify-center w-full h-screen overflow-hidden">
            {/* 배경 영상 */}
            <video
                className="absolute top-0 left-0 w-full h-full object-cover -z-10"
                src="https://cdn-stamplib.casetify.com/cms/video/4ccce0235a9dea5edfe813ba00351524.mp4"
                autoPlay
                loop
                muted
                playsInline
            />

            {/* 폼을 로그인 폼 또는 회원가입 폼으로 전환 */}
            <div
                className={`relative bg-white p-10 rounded-lg shadow-2xl text-black text-center left-[700px] transition-all duration-300 ${
                    isSignUp ? 'w-[500px]' : 'w-[500px]' 
                }`}
            >
                <h2 className="text-3xl font-bold mb-8">{isSignUp ? '회원가입' : '로그인'}</h2>

                {/* 로그인 폼 */}
                {!isSignUp ? (
                    <>
                        <input
                            type="text"
                            placeholder="아이디"
                            className="block w-full mt-3 p-3 text-lg rounded-md bg-white text-black placeholder-gray-600 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                        <input
                            type="password"
                            placeholder="비밀번호"
                            className="block w-full mt-3 p-3 text-lg rounded-md bg-white text-black placeholder-gray-600 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                        <button className="w-full mt-4 p-3 bg-blue-500 text-white rounded-md text-lg hover:bg-blue-700 transition">
                            로그인
                        </button>
                    </>
                ) : (
                    <SignUpPage /> // 회원가입 폼이 활성화되면 SignUpPage 컴포넌트를 렌더링
                )}

                {/* 회원가입 링크 */}
                <div className="flex items-center justify-center gap-1 mt-4 text-sm">
                    <span className="text-black">{isSignUp ? '이미 계정이 있습니까?' : 'CASETiBUY 계정이 없습니까?'}</span>
                    <a
                        href="#"
                        onClick={toggleForm}
                        className="text-blue-500 underline hover:text-blue-700 cursor-pointer"
                    >
                        {isSignUp ? '로그인' : '지금 만드세요.'}
                    </a>
                </div>
            </div>
        </div>
    );
}
