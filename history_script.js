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
    const timeoutSound = document.getElementById('timeout-sound'); // Thêm dòng này
    let soundEnabled = true;

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
        // Tự phát nhạc
        if (bgMusic && bgMusic.paused) {
            bgMusic.play().catch(e => console.log("Không phát được nhạc:", e));
        }
        // Trộn câu hỏi
        shuffledQuestions = [...allQuestions].sort(() => Math.random() - 0.5).slice(0, totalQuestions);
        if (shuffledQuestions.length < totalQuestions) {
            console.error("Không đủ câu hỏi để chơi.");
            return;
        }
        resultContainer.classList.add('hide');
        startContainer.classList.add('hide');
        questionContainer.classList.remove('hide');
        currentQuestionNumberElement.innerText = 'Câu 1';
        setNextQuestion();
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
        const correct = e.target.dataset.correct;
        if (correct && correctSound && soundEnabled) {
            correctSound.currentTime = 0;
            correctSound.play();
        } else if (!correct && wrongSound && soundEnabled) {
            wrongSound.currentTime = 0;
            wrongSound.play();
        }
        if (correct) score++;
        Array.from(answerButtonsElement.children).forEach(b => {
            setStatusClass(b, b.dataset.correct);
            b.disabled = true;
        });
        setTimeout(() => {
            currentQuestionIndex++;
            setNextQuestion();
        }, 1000);
    }

    function setStatusClass(el, correct) {
        clearStatusClass(el);
        el.classList.add(correct ? 'correct' : 'wrong');
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
            setStatusClass(b, b.dataset.correct);
            b.disabled = true;
        });

        // Kiểm tra xem người chơi có chọn đáp án nào không
        let anyAnswerSelected = Array.from(answerButtonsElement.children).some(b => b.classList.contains('correct') || b.classList.contains('wrong'));

        if (!anyAnswerSelected && wrongSound && soundEnabled) {
            wrongSound.currentTime = 0;
            wrongSound.play();
        }

        // Phát âm thanh timeout
        if (timeoutSound && soundEnabled) {
            timeoutSound.currentTime = 0;
            timeoutSound.play();
        }

        setTimeout(() => {
            currentQuestionIndex++;
            setNextQuestion();
        }, 1000);
    }

    function showResult() {
        questionContainer.classList.add('hide');
        resultContainer.classList.remove('hide');
        resultMessage.innerText = `Bạn đã trả lời đúng ${score}/${totalQuestions} câu hỏi!\n`;
        // Confetti nếu ≥90%
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

    startButton.addEventListener('click', () => startGame());
    restartButton.addEventListener('click', () => window.location.reload());
    exitButton.addEventListener('click', () => window.location.href = 'index.html');
});