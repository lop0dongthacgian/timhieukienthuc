document.addEventListener('DOMContentLoaded', function () {
    const bgMusic = document.getElementById('bg-music');
    const toggleMusicBtn = document.getElementById('toggle-music');
    const startContainer = document.getElementById('start-container');
    const startButton = document.getElementById('start-btn');
    const questionContainer = document.getElementById('question-container');
    const questionElement = document.getElementById('question');
    const answerButtonsElement = document.getElementById('answer-buttons');
    const resultContainer = document.getElementById('result-container');
    const resultMessage = document.getElementById('result-message');
    const restartButton = document.getElementById('restart-btn');
    const exitButton = document.getElementById('exit-btn');
    const currentQuestionNumberElement = document.getElementById('current-question-number');

    // Tham chiếu audio và biến điều khiển
    const correctSound = document.getElementById('correct-sound');
    const wrongSound = document.getElementById('wrong-sound');
    const timeoutSound = document.getElementById('timeout-sound');
    let soundEnabled = true;

    // --- Bắt đầu phần thêm mới cho Thông báo ---
    const notificationPopup = document.getElementById('notification-popup');
    const notificationText = document.getElementById('notification-text');
    const audioTb1 = document.getElementById('audio-tb1');
    const audioTb2 = document.getElementById('audio-tb2');
    const audioTb3 = document.getElementById('audio-tb3');
    const audioTb4 = document.getElementById('audio-tb4');
    const audioTb5 = document.getElementById('audio-tb5');

    // Hàm hiển thị thông báo
    // duration mặc định là 10000ms (10 giây) nhưng sẽ được ghi đè ở các lần gọi cụ thể
    function showNotification(message, audioElement, duration = 10000) {
        notificationText.textContent = message;
        notificationPopup.classList.remove('hide');
        if (audioElement && soundEnabled) {
            audioElement.currentTime = 0; // Đảm bảo âm thanh phát từ đầu
            audioElement.play().catch(e => console.log("Error playing notification sound:", e));
            // KHÔNG DỪNG ÂM THANH BẰNG setTimeout Ở ĐÂY NỮA
            // Âm thanh sẽ phát tự nhiên hết tệp
        }
        setTimeout(() => {
            notificationPopup.classList.add('hide');
            // KHÔNG DỪNG ÂM THANH Ở ĐÂY NỮA
        }, duration);
    }
    // --- Kết thúc phần thêm mới cho Thông báo ---

    // Dòng này rất quan trọng: Đảm bảo 'window.questions' chứa dữ liệu từ file câu hỏi
    // Nếu file history_questions.js (hoặc digital_questions.js) của bạn đang dùng 'const questions = [...]'
    // bạn cần đổi nó thành 'window.questions = [...]' trong file câu hỏi đó.
    const allQuestions = window.questions || [];

    let shuffledQuestions = [],
        currentQuestionIndex = 0,
        score = 0;
    const totalQuestions = 20,
        timePerQuestion = 15;
    let timerInterval;

    // Tạo timer element (Nếu timer của bạn đã có trong HTML thì có thể bỏ qua phần này)
    const timerElement = document.createElement('div');
    timerElement.id = 'timer';
    timerElement.classList.add('timer');
    // Kiểm tra xem questionContainer có tồn tại trước khi chèn
    if (questionContainer && questionElement) {
        questionContainer.insertBefore(timerElement, questionElement.nextSibling);
    }


    // Nút Bật/Tắt nhạc
    toggleMusicBtn.addEventListener('click', function () {
        if (bgMusic.paused) {
            bgMusic.play().catch(e => console.log("Không phát được nhạc:", e));
            toggleMusicBtn.textContent = 'Tắt nhạc';
            soundEnabled = true; // Bật âm thanh khi bật nhạc nền
        } else {
            bgMusic.pause();
            toggleMusicBtn.textContent = 'Bật nhạc';
            soundEnabled = false; // Tắt âm thanh khi tắt nhạc nền
        }
    });

    // Bắt đầu game
    function startGame() {
        score = 0;
        currentQuestionIndex = 0;
        // Tự phát nhạc
        if (bgMusic && bgMusic.paused) {
            bgMusic.play().catch(e => console.log("Không phát được nhạc:", e));
        }

        // Trộn câu hỏi và lấy 20 câu
        if (allQuestions.length === 0) {
             console.error("Lỗi: Không tìm thấy dữ liệu câu hỏi. Đảm bảo file câu hỏi đã được tải và định nghĩa 'window.questions'.");
             showNotification("Lỗi: Không tìm thấy câu hỏi! Vui lòng tải lại trang.", null, 5000); // Thông báo lỗi
             return; // Dừng trò chơi nếu không có câu hỏi
        }
        shuffledQuestions = [...allQuestions].sort(() => Math.random() - 0.5).slice(0, totalQuestions);

        if (shuffledQuestions.length < totalQuestions) {
            console.error(`Không đủ câu hỏi (${shuffledQuestions.length}) để chơi (${totalQuestions} câu).`);
            showNotification(`Lỗi: Không đủ câu hỏi (${shuffledQuestions.length}/${totalQuestions}) để bắt đầu trò chơi!`, null, 5000);
            return; // Dừng game nếu không đủ câu hỏi
        }

        resultContainer.classList.add('hide');
        startContainer.classList.add('hide');
        questionContainer.classList.remove('hide');
        currentQuestionNumberElement.innerText = 'Câu 1';
        setNextQuestion();

        // --- Thông báo 1 khi bắt đầu trò chơi (1 giây cho text, âm thanh phát hết) ---
        showNotification("Mời bạn chọn đáp án, thời gian trả lời mỗi câu hỏi là 15 giây.", audioTb1, 1000);
    }

    function setNextQuestion() {
        resetState();
        if (currentQuestionIndex < shuffledQuestions.length) {
            showQuestion(shuffledQuestions[currentQuestionIndex]);
            startTimer();
        } else {
            showResult();
        }
    }

    function showQuestion(question) {
        currentQuestionNumberElement.innerText = `Câu ${currentQuestionIndex + 1}`;
        questionElement.innerText = question.question;
        answerButtonsElement.innerHTML = ''; // Xóa các nút cũ
        question.answers.forEach(ans => {
            const btn = document.createElement('button');
            btn.innerText = ans.text;
            btn.classList.add('btn');
            if (ans.correct) btn.dataset.correct = ans.correct;
            btn.addEventListener('click', selectAnswer);
            answerButtonsElement.appendChild(btn);
        });
    }

    function resetState() {
        clearStatusClass(document.body);
        Array.from(answerButtonsElement.children).forEach(b => b.disabled = false); // Kích hoạt lại nút
        stopTimer(); // Dừng bộ đếm thời gian
    }

    function selectAnswer(e) {
        stopTimer(); // Dừng bộ đếm thời gian khi trả lời
        const selectedButton = e.target;
        const correct = selectedButton.dataset.correct === 'true';

        if (correct) {
            score++;
            if (correctSound && soundEnabled) {
                correctSound.currentTime = 0;
                correctSound.play();
            }
            // --- Thông báo 3 khi trả lời đúng (2 giây cho text, âm thanh phát hết) ---
            showNotification("Chúc mừng, bạn đã trả lời chính xác!", audioTb3, 2000);
            // Kích hoạt Confetti nếu có
            if (window.confetti) { // Đảm bảo confetti đã được tải
                triggerConfetti();
            }
        } else {
            if (wrongSound && soundEnabled) {
                wrongSound.currentTime = 0;
                wrongSound.play();
            }
            // --- Thông báo 4 khi trả lời sai (2 giây cho text, âm thanh phát hết) ---
            showNotification("Bạn đã trả lời sai rồi, cần tìm hiểu lại nhé!", audioTb4, 2000);
        }

        // Vô hiệu hóa tất cả các nút sau khi chọn
        Array.from(answerButtonsElement.children).forEach(b => {
            setStatusClass(b, b.dataset.correct === 'true'); // Hiển thị đáp án đúng/sai
            b.disabled = true; // Vô hiệu hóa nút
        });

        // Chuyển sang câu hỏi tiếp theo sau một khoảng trễ
        setTimeout(() => {
            currentQuestionIndex++;
            setNextQuestion();
        }, 1500); // Khoảng trễ 1.5 giây để xem thông báo (này là để chuyển câu hỏi)
    }

    function setStatusClass(el, correct) {
        clearStatusClass(el);
        if (correct) {
            el.classList.add('correct');
        } else {
            el.classList.add('wrong');
        }
    }

    function clearStatusClass(el) {
        el.classList.remove('correct', 'wrong');
    }

    function startTimer() {
        let timeLeft = timePerQuestion;
        timerElement.innerText = timeLeft;
        timerElement.classList.remove('red'); // Xóa màu đỏ nếu có
        timerInterval = setInterval(() => {
            timeLeft--;
            timerElement.innerText = timeLeft;
            if (timeLeft <= 5) timerElement.classList.add('red'); // Chuyển màu đỏ khi còn 5 giây
            if (timeLeft <= 0) {
                stopTimer();
                handleTimerEnd();
            }
        }, 1000);
    }

    function stopTimer() {
        clearInterval(timerInterval);
    }

    function handleTimerEnd() {
        // Vô hiệu hóa tất cả các nút
        Array.from(answerButtonsElement.children).forEach(b => {
            setStatusClass(b, b.dataset.correct === 'true');
            b.disabled = true;
        });

        // Phát âm thanh timeout và thông báo 2
        if (timeoutSound && soundEnabled) {
            timeoutSound.currentTime = 0;
            timeoutSound.play();
        }
        // --- Thông báo 2 khi hết giờ (2 giây cho text, âm thanh phát hết) ---
        showNotification("Thời gian trả lời câu hỏi đã hết!", audioTb2, 2000);

        setTimeout(() => {
            currentQuestionIndex++;
            setNextQuestion();
        }, 2000); // Khoảng trễ 2 giây để xem thông báo (này là để chuyển câu hỏi)
    }

    function showResult() {
        questionContainer.classList.add('hide');
        resultContainer.classList.remove('hide');
        const incorrectAnswers = totalQuestions - score;
        resultMessage.innerText = `Bạn đã trả lời đúng ${score}/${totalQuestions} câu hỏi!\n`;

        // --- Thông báo 5 khi kết thúc lượt chơi (15 giây cho text, âm thanh phát hết) ---
        let finalMessage = `Lượt chơi đã kết thúc, bạn đã trả lời đúng ${score} câu, sai ${incorrectAnswers} câu.`;
        showNotification(finalMessage, audioTb5, 15000); // Hiển thị 15 giây

        // Confetti nếu ≥90%
        // Đảm bảo confetti canvas và script được tải trong HTML
        if (score >= totalQuestions * 0.9 && window.confetti) {
            confetti({
                particleCount: 100,
                spread: 120,
                origin: {
                    y: 0.6
                },
                zIndex: 999
            });
        }
        if (score >= totalQuestions * 0.9) {
            resultMessage.innerText += "Xuất sắc!";
        } else if (score >= totalQuestions * 0.7) {
            resultMessage.innerText += "Khá tốt!";
        } else {
            resultMessage.innerText += "Cần cố gắng hơn!";
        }
    }

    // Hàm bắn pháo hoa Confetti (nếu bạn có)
    function triggerConfetti() {
        const defaults = {
            spread: 360,
            ticks: 50,
            gravity: 0,
            decay: 0.94,
            startVelocity: 30,
            shapes: ['star'],
            colors: ['FFE400', 'FFBD00', 'E89400', 'FFCA6C', 'FDFFB8']
        };

        function shoot() {
            confetti({
                ...defaults,
                particleCount: 40,
                scalar: 1.2,
                shapes: ['star']
            });

            confetti({
                ...defaults,
                particleCount: 10,
                scalar: 0.75,
                shapes: ['circle']
            });
        }

        setTimeout(shoot, 0);
        setTimeout(shoot, 100);
        setTimeout(shoot, 200);
    }


    startButton.addEventListener('click', () => startGame());
    restartButton.addEventListener('click', () => window.location.reload());
    exitButton.addEventListener('click', () => window.location.href = 'index.html'); // Chắc chắn 'index.html' là trang bạn muốn thoát về
});