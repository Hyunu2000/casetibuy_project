export default function SignUpPage() {
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="w-[500px]">
                <input
                    type="text"
                    placeholder="이름"
                    className="block w-[300px] p-8 mb-5 text-black placeholder-gray-600 bg-white border border-gray-300 rounded-md text-20 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 mx-auto"
                />
                <input
                    type="text"
                    placeholder="아이디"
                    className="block w-[300px] p-8 mt-10 mb-5 text-black placeholder-gray-600 bg-white border border-gray-300 rounded-md text-20 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 mx-auto"
                />
                <input
                    type="password"
                    placeholder="비밀번호"
                    className="block w-[300px] p-8 mt-10 mb-5 text-black placeholder-gray-600 bg-white border border-gray-300 rounded-md text-20 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 mx-auto"
                />
                <input
                    type="password"
                    placeholder="비밀번호 확인"
                    className="block w-[300px] p-8 mt-10 mb-5 text-black placeholder-gray-600 bg-white border border-gray-300 rounded-md text-20 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 mx-auto"
                />
                <input
                    type="email"
                    placeholder="이메일"
                    className="block w-[300px] p-8 mt-10 mb-5 text-black placeholder-gray-600 bg-white border border-gray-300 rounded-md text-20 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 mx-auto"
                />
                <div className="flex justify-center gap-4 mt-16">
                    <button
                        type="submit"
                        className="p-8 text-white transition bg-blue-500 rounded-md w-[145px] text-20 hover:bg-blue-700"
                    >
                        회원가입
                    </button>
                    <button
                        type="reset"
                        className="p-8 text-white transition bg-red-500 rounded-md w-[145px] text-20 hover:bg-red-700"
                    >
                        가입취소
                    </button>
                </div>
            </div>
        </div>
    );
}
