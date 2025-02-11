export default function SignUpPage() {
    return (
        <div>
            <div className="flex gap-4">
                <input
                    type="text"
                    placeholder="성"
                    className="block w-full p-3 text-lg rounded-md bg-white text-black placeholder-gray-600 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <input
                    type="text"
                    placeholder="이름"
                    className="block w-full p-3 text-lg rounded-md bg-white text-black placeholder-gray-600 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
            </div>

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
            <input
                    type="password"
                    placeholder="비밀번호 확인"
                    className="block w-full mt-3 p-3 text-lg rounded-md bg-white text-black placeholder-gray-600 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <input
                type="email"
                placeholder="이메일"
                className="block w-full mt-3 p-3 text-lg rounded-md bg-white text-black placeholder-gray-600 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />

            <div className="flex gap-4 mt-4">
                <button
                    type="submit"
                    className="w-full p-3 bg-blue-500 text-white rounded-md text-lg hover:bg-blue-700 transition"
                >
                    회원가입
                </button>
                <button
                    type="reset"
                    className="w-full p-3 bg-red-500 text-white rounded-md text-lg hover:bg-red-700 transition"
                >
                    가입취소
                </button>
            </div>
        </div>
    );
}
