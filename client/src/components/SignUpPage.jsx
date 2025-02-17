export default function SignUpPage() {
    return (
        <div>

            <input
                type="text"
                placeholder="이름"
                className="block w-full p-3 text-lg text-black placeholder-gray-600 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <input
                type="text"
                placeholder="아이디"
                className="block w-full p-3 mt-3 text-lg text-black placeholder-gray-600 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <input
                type="password"
                placeholder="비밀번호"
                className="block w-full p-3 mt-3 text-lg text-black placeholder-gray-600 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <input
                type="password"
                placeholder="비밀번호 확인"
                className="block w-full p-3 mt-3 text-lg text-black placeholder-gray-600 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <input
                type="email"
                placeholder="이메일"
                className="block w-full p-3 mt-3 text-lg text-black placeholder-gray-600 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />

            <div className="flex gap-4 mt-4">
                <button
                    type="submit"
                    className="w-full p-3 text-lg text-white transition bg-blue-500 rounded-md hover:bg-blue-700"
                >
                    회원가입
                </button>
                <button
                    type="reset"
                    className="w-full p-3 text-lg text-white transition bg-red-500 rounded-md hover:bg-red-700"
                >
                    가입취소
                </button>
            </div>
        </div>
    );
}
