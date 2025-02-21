const inputStyle = "block w-[350px] p-8 mb-12 text-black placeholder-gray-600 bg-white border border-gray-300 rounded-md text-20 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 mx-auto";
const buttonStyle = "p-8 text-white transition bg-blue-500 rounded-md w-[170px] text-20 hover:bg-blue-700";  // 버튼 너비 175px로 수정
const buttonContainerStyle = "flex justify-center gap-4 mt-16";  // 버튼 사이 간격을 조정하고, 가운데 정렬

export default function SignUpPage() {
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="w-[500px]">
                <input type="text" placeholder="이름" className={inputStyle} />
                <input type="text" placeholder="아이디" className={inputStyle} />
                <input type="password" placeholder="비밀번호" className={inputStyle} />
                <input type="password" placeholder="비밀번호 확인" className={inputStyle} />
                <input type="email" placeholder="이메일" className={inputStyle} />
                <div className={buttonContainerStyle}>
                    <button
                        type="submit"
                        className={buttonStyle}
                    >
                        회원가입
                    </button>
                    <button
                        type="reset"
                        className="p-8 text-white transition bg-red-500 rounded-md w-[175px] text-20 hover:bg-red-700"  // 동일한 너비
                    >
                        가입취소
                    </button>
                </div>
            </div>
        </div>
    );
}
