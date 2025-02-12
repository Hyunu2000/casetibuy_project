import { useState, useEffect, useRef } from "react";
import SignUpPage from "./SignUpPage";

export default function LoginPage() {
    const [isSignUp, setIsSignUp] = useState(false);
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
    const [fade, setFade] = useState(false);
    const videoRef = useRef(null);

    const videos = [
        "/images/tom_jerry.mp4",
        "/images/chiikawa.mp4",
        "/images/kuromi.mp4"
    ];

    useEffect(() => {
        const handleTransition = () => {
            setFade(true); // 페이드아웃 시작
            setTimeout(() => {
                setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
                setFade(false); // 페이드인 시작
            }, 500); // 0.5초 후 영상 변경
        };

        const videoElement = videoRef.current;
        if (videoElement) {
            videoElement.addEventListener("ended", handleTransition);
        }

        return () => {
            if (videoElement) {
                videoElement.removeEventListener("ended", handleTransition);
            }
        };
    }, [currentVideoIndex]);

    return (
        <div className="relative flex items-center justify-center w-full h-screen overflow-hidden">
            {/* ✅ 검은 배경 (가장 뒤) */}
            <div className="absolute top-0 left-0 w-full h-full bg-black -z-20"></div>

            {/* 🎬 배경 영상 (페이드 효과 적용) */}
            <video
                ref={videoRef}
                className={`absolute top-0 left-0 w-full h-full object-cover -z-10 transition-opacity duration-500 ${
                    fade ? "opacity-0" : "opacity-100"
                }`}
                src={videos[currentVideoIndex]}
                autoPlay
                muted
                playsInline
            />

            {/* 📌 로그인 / 회원가입 폼 (가장 위) */}
            <div
                className="relative bg-white p-10 rounded-lg shadow-2xl text-black text-center z-10 transition-all duration-300 w-[500px] left-[700px]"
            >
                <h2 className="text-3xl font-bold mb-8">{isSignUp ? "회원가입" : "로그인"}</h2>

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
                    <SignUpPage />
                )}

                <div className="flex items-center justify-center gap-1 mt-4 text-sm">
                    <span className="text-black">
                        {isSignUp ? "이미 계정이 있습니까?" : "CASETiBUY 계정이 없습니까?"}
                    </span>
                    <a
                        href="#"
                        onClick={() => setIsSignUp(!isSignUp)}
                        className="text-blue-500 underline hover:text-blue-700 cursor-pointer"
                    >
                        {isSignUp ? "로그인" : "지금 만드세요."}
                    </a>
                </div>
            </div>
        </div>
    );
}
