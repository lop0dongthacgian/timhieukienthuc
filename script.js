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
    function showNotification(message, audioElement, duration = 10000) {
        notificationText.textContent = message;
        notificationPopup.classList.remove('hide');
        if (audioElement && soundEnabled) {
            audioElement.currentTime = 0;
            audioElement.play().catch(e => console.log("Error playing notification sound:", e));
        }
        setTimeout(() => {
            notificationPopup.classList.add('hide');
        }, duration);
    }
    // --- Kết thúc phần thêm mới cho Thông báo ---

    // Dòng này rất quan trọng: Đảm bảo 'window.questions' chứa dữ liệu từ file câu hỏi
    const allQuestions = window.questions || [];

    let shuffledQuestions = [],
        currentQuestionIndex = 0,
        score = 0;
    const totalQuestions = 20,
        timePerQuestion = 15;
    let timerInterval;

    // Tạo timer element
    const timerElement = document.createElement('div');
    timerElement.id = 'timer';
    timerElement.classList.add('timer');
    if (questionContainer && questionElement) {
        questionContainer.insertBefore(timerElement, questionElement.nextSibling);
    }

    // === Khắc phục lỗi vết nhấn trên iPhone ===
    function clearButtonStates() {
        // Xóa focus trên phần tử đang active
        if (document.activeElement) {
            document.activeElement.blur();
        }
        // Force repaint để xóa trạng thái hover bị kẹt trên iOS
        const buttons = document.querySelectorAll('.btn');
        buttons.forEach(btn => {
            btn.blur();
            btn.style.opacity = '0.99';
            setTimeout(() => {
                btn.style.opacity = '1';
            }, 0);
        });
    }

    // Xử lý sự kiện touchstart để tránh delay trên iOS
    document.addEventListener('touchstart', function() {}, {passive: true});

    // === Nút Quay lại ===
    const backButton = document.getElementById('back-btn');
    if (backButton) {
        backButton.addEventListener('click', function() {
            // Kiểm tra xem có history để quay lại không
            if (document.referrer && document.referrer !== window.location.href) {
                window.history.back();
            } else {
                // Nếu không có history (mở trực tiếp PWA), chuyển về trang index
                window.location.href = 'index.html';
            }
        });
    }

    // Nút Bật/Tắt nhạc
    toggleMusicBtn.addEventListener('click', function () {
        if (bgMusic.paused) {
            bgMusic.play().catch(e => console.log("Không phát được nhạc:", e));
            toggleMusicBtn.textContent = 'Tắt nhạc';
            soundEnabled = true;
        } else {
            bgMusic.pause();
            toggleMusicBtn.textContent = 'Bật nhạc';
            soundEnabled = false;
        }
    });

    // Bắt đầu game
    function startGame() {
        score = 0;
        currentQuestionIndex = 0;
        
        if (bgMusic && bgMusic.paused) {
            bgMusic.play().catch(e => console.log("Không phát được nhạc:", e));
        }

        if (allQuestions.length === 0) {
            console.error("Lỗi: Không tìm thấy dữ liệu câu hỏi.");
            showNotification("Lỗi: Không tìm thấy câu hỏi! Vui lòng tải lại trang.", null, 5000);
            return;
        }
        
        shuffledQuestions = [...allQuestions].sort(() => Math.random() - 0.5).slice(0, totalQuestions);

        if (shuffledQuestions.length < totalQuestions) {
            console.error(`Không đủ câu hỏi (${shuffledQuestions.length}) để chơi (${totalQuestions} câu).`);
            showNotification(`Lỗi: Không đủ câu hỏi (${shuffledQuestions.length}/${totalQuestions}) để bắt đầu trò chơi!`, null, 5000);
            return;
        }

        resultContainer.classList.add('hide');
        startContainer.classList.add('hide');
        questionContainer.classList.remove('hide');
        currentQuestionNumberElement.innerText = 'Câu 1';
        setNextQuestion();

        showNotification("Mời bạn chọn đáp án, thời gian trả lời mỗi câu hỏi là 15 giây.", audioTb1, 1000);
    }

    function setNextQuestion() {
        resetState();
        clearButtonStates(); // Xóa vết nhấn trên iPhone
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
        answerButtonsElement.innerHTML = '';
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
        Array.from(answerButtonsElement.children).forEach(b => b.disabled = false);
        stopTimer();
    }

    function selectAnswer(e) {
        stopTimer();
        const selectedButton = e.target;
        const correct = selectedButton.dataset.correct === 'true';

        if (correct) {
            score++;
            if (correctSound && soundEnabled) {
                correctSound.currentTime = 0;
                correctSound.play();
            }
            showNotification("Đúng rồi!", audioTb3, 2000);
            if (window.confetti) {
                triggerConfetti();
            }
        } else {
            if (wrongSound && soundEnabled) {
                wrongSound.currentTime = 0;
                wrongSound.play();
            }
            showNotification("Sai rồi!", audioTb4, 2000);
        }

        // Vô hiệu hóa tất cả các nút sau khi chọn
        Array.from(answerButtonsElement.children).forEach(b => {
            setStatusClass(b, b.dataset.correct === 'true');
            b.disabled = true;
        });

        // Chuyển sang câu hỏi tiếp theo
        setTimeout(() => {
            currentQuestionIndex++;
            setNextQuestion();
        }, 1500);
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
        timerElement.classList.remove('red');
        timerInterval = setInterval(() => {
            timeLeft--;
            timerElement.innerText = timeLeft;
            if (timeLeft <= 5) timerElement.classList.add('red');
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
        Array.from(answerButtonsElement.children).forEach(b => {
            setStatusClass(b, b.dataset.correct === 'true');
            b.disabled = true;
        });

        if (timeoutSound && soundEnabled) {
            timeoutSound.currentTime = 0;
            timeoutSound.play();
        }
        
        showNotification("Thời gian trả lời câu hỏi đã hết!", audioTb2, 2000);

        setTimeout(() => {
            currentQuestionIndex++;
            setNextQuestion();
        }, 2000);
    }

    function showResult() {
        questionContainer.classList.add('hide');
        resultContainer.classList.remove('hide');
        const incorrectAnswers = totalQuestions - score;
        resultMessage.innerText = `Bạn đã trả lời đúng ${score}/${totalQuestions} câu hỏi!\n`;

        let finalMessage = `Lượt chơi đã kết thúc, bạn đã trả lời đúng ${score} câu, sai ${incorrectAnswers} câu.`;
        showNotification(finalMessage, audioTb5, 15000);

        if (score >= totalQuestions * 0.9) {
            resultMessage.innerText += "Xuất sắc!";
            if (window.confetti) {
                confetti({
                    particleCount: 100,
                    spread: 120,
                    origin: { y: 0.6 },
                    zIndex: 999
                });
            }
        } else if (score >= totalQuestions * 0.7) {
            resultMessage.innerText += "Khá tốt!";
        } else {
            resultMessage.innerText += "Cần cố gắng hơn!";
        }
    }

    // Hàm bắn pháo hoa Confetti
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

    // Event listeners
    startButton.addEventListener('click', () => startGame());
    restartButton.addEventListener('click', () => window.location.reload());
    exitButton.addEventListener('click', () => window.location.href = 'index.html');
});