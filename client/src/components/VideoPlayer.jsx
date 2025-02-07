export default function VideoPlayer() {
    return (
        <div className="video-container">
            {/* 배경 영상 */}
            <video className="background-video"
                src="https://cdn-stamplib.casetify.com/cms/video/4ccce0235a9dea5edfe813ba00351524.mp4"
                autoPlay
                loop
                muted
                playsInline
            />

            {/* 로그인 폼 */}
            <div className="login-form">
                <h2>로그인</h2>
                <input type="text" placeholder="아이디" />
                <input type="password" placeholder="비밀번호" />
                <button>로그인</button>
            </div>
        </div>
    );
}
