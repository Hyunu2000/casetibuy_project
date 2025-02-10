export default function SignUpPage() {
    return (
        <div>
            <input
                type="text"
                placeholder="아이디"
                className="block w-full mt-3 p-3 text-lg rounded-md bg-white/40 text-black placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
                type="password"
                placeholder="비밀번호"
                className="block w-full mt-3 p-3 text-lg rounded-md bg-white/40 text-black placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
                type="email"
                placeholder="이메일"
                className="block w-full mt-3 p-3 text-lg rounded-md bg-white/40 text-black placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="w-full mt-4 p-3 bg-blue-500 text-white rounded-md text-lg hover:bg-blue-700 transition">
                회원가입
            </button>
        </div>
    );
}
