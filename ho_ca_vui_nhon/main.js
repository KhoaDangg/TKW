document.addEventListener("DOMContentLoaded", function() {
    // Bật/tắt nhạc
    const backgroundMusic = document.getElementById("background-music");
    const toggleMusicButton = document.getElementById("toggle-music");
    let isMusicPlaying = true;
    backgroundMusic.volume = 0.3;
    
    backgroundMusic.play().catch(() => { isMusicPlaying = false; });
    toggleMusicButton.addEventListener("click", function() {
        if (isMusicPlaying) {
            backgroundMusic.pause();
            toggleMusicButton.textContent = "Bật nhạc";
        } else {
            backgroundMusic.play();
            toggleMusicButton.textContent = "Tắt nhạc";
        }
        isMusicPlaying = !isMusicPlaying;
    });

    // Đổi ảnh nền
    const changeBackgroundButton = document.getElementById("change-background");
    const backgrounds = ['background/back1.png', 'background/back2.png', 'background/back3.png'];
    let currentBackgroundIndex = 0;
    changeBackgroundButton.addEventListener("click", function() {
        currentBackgroundIndex = (currentBackgroundIndex + 1) % backgrounds.length;
        document.body.style.backgroundImage = `url(${backgrounds[currentBackgroundIndex]})`;
    });

    // Tạo bong bóng ngẫu nhiên
    function createBubbles() {
        const bubblesContainer = document.getElementById("bubbles-container");

        // Giảm số lượng bong bóng xuống 5
        for (let i = 0; i < 5; i++) {
            const bubble = document.createElement("div");
            bubble.classList.add("bubble");

            // Vị trí ngẫu nhiên cho mỗi bong bóng
            const randomX = Math.random() * window.innerWidth;
            const randomDelay = Math.random() * 5; // Độ trễ ngẫu nhiên
            bubble.style.left = `${randomX}px`;
            bubble.style.animationDelay = `${randomDelay}s`;

            // Thêm bong bóng vào container
            bubblesContainer.appendChild(bubble);
        }
    }

    // Gọi hàm tạo bong bóng khi trang tải
    createBubbles();

    // Tạo bong bóng mới mỗi 3 giây
    setInterval(createBubbles, 6000);
});