const questions = [
  {
    question: "حدد البرنامج الذى يعطى فى الخرج",
    output: "4\n4",
    answers: [
      "2 + 2;\n2 * 2;",
      "console.log(2 + 2);\nconsole.log(2 / 2);",
      "2 + 2;\n2 / 2;",
      "console.log(2 + 2);\nconsole.log(2 * 2);",
    ],
    correct: 3,
  },
  {
    question: "حدد النتيجة التي سيتم إخراجها عند تنفيذ هذا البرنامج:",
    output:
      "let num = 5;\nlet ans = 0;\n\nnum = ans;\nconsole.log(num);\nans = num + 10;\nconsole.log(ans);",
    answers: ["5\n0", "5\n5", "0\n10", "0\n15"],
    correct: 2,
  },

  {
    question: "حدد البرنامج الذي يقوم بإخراج ما يلي:",
    output: "TOFAS Programming\nلنبذل قصارى جهدنا.",
    answers: [
      'let num = 1;\nlet text1 = "TOFAS Programming";\nlet text2 = "لنبذل قصارى جهدنا.";\nif (num == 1) {\n  console.log(text1);\n  console.log(text2);\n}',
      'let num = 1;\nlet text1 = "TOFAS Programming";\nlet text2 = "لنبذل قصارى جهدنا.";\ntext1;\ntext2;',
      'let num = 1;\nlet text1 = "TOFAS Programming";\nlet text2 = "لنبذل قصارى جهدنا.";\nnum == 1 {\n  console.log(text1);\n}\nconsole.log(text2);',
      'let num = 1;\nlet text1 = "TOFAS Programming";\nlet text2 = "لنبذل قصارى جهدنا.";\nif (num == 1) {\n  text1;\n  text2;\n}',
    ],
    correct: 0,
  },
  {
    question: "حدد البرنامج الذي يقوم بإخراج:",
    output: "300",
    answers: [
      "let num1 = 10;\nlet num2 = 30;\nif (num2 > num1) {\n  console.log(num1 * num2);\n}",
      "let num1 = 10;\nlet num2 = 30;\nif (num2 > num1) {\n  console.log(num1 + num2);\n}",
      "let num1 = 10;\nlet num2 = 30;\nelse (num2 > num1) {\n  console.log(num1 * num2);\n}",
      "let num1 = 10;\nlet num2 = 30;\nif (num2 > num1) {\n  console.log(num1 / num2);\n}",
    ],
    correct: 0,
  },
  {
    question: "حدد النتيجة التي سيتم إخراجها عند تنفيذ هذا البرنامج:",
    output: "مرحباً\n20",
    answers: [
      'let time = 15;\nif (time < 10) {\n  console.log("صباح الخير");\n} else {\n  console.log("مرحباً");\n}\ntime = 20;\nconsole.log(time);',
      'let time = 15;\nif (time < 10) {\n  console.log("صباح الخير");\n} else {\n  console.log("مرحباً");\n}\ntime = 15;\nconsole.log(time);',
      'let time = 15;\nif (time < 10) {\n  console.log("صباح الخير");\n}\ntime = 20;',
      "let time = 15;\nconsole.log(time);",
    ],
    correct: 0,
  },
  {
    question: "حدد البرنامج الذي يقوم بإخراج:",
    output: "طابت ليلتك",
    answers: [
      'let time = 22;\nlet str = "";\nif (time == 22) {\n  str = "طابت ليلتك";\n  console.log(str);\n}',
      'let time = 22;\nlet str = "";\nif (time > 22) {\n  str = "طابت ليلتك";\n  console.log(str);\n}',
      'let time = 22;\nlet str = "";\nconsole.log(time == 22) {\n  str = "طابت ليلتك";\n}',
      'let time = 22;\nlet str = "";\nconsole.log(time > 22);',
    ],
    correct: 0,
  },
  {
    question: "حدد النتيجة التي سيتم إخراجها عند تنفيذ هذا البرنامج:",
    output: "6\n8",
    answers: [
      "console.log(2 * 3);\nconsole.log(6 + 2);",
      "console.log(2 + 3);\nconsole.log(6 + 2);",
      "console.log(2 * 3);\nconsole.log(6 - 2);",
      "console.log(2 * 2);\nconsole.log(6 + 2);",
    ],
    correct: 0,
  },
  {
    question: "حدد البرنامج الذي يقوم بإخراج:",
    output: "مرحباً",
    answers: [
      'let hello = "مرحباً";\nconsole.log(hello);',
      'let hello = "مرحباً";\nconsole.log hello;',
      'hello = "مرحباً";\nconsole.log hello;',
      "hello = مرحباً;\nconsole.log(hello);",
    ],
    correct: 0,
  },
  {
    question: "حدد النتيجة التي سيتم إخراجها عند تنفيذ هذا البرنامج:",
    output: "مرحباً\nصباح الخير",
    answers: [
      'let greeting = "مرحباً";\nconsole.log(greeting);\ngreeting = "صباح الخير";\nconsole.log(greeting);',
      'let greeting = "مرحباً";\nconsole.log(greeting);',
      'let greeting = "صباح الخير";\nconsole.log(greeting);',
      'let greeting = "مرحباً";',
    ],
    correct: 0,
  },
  {
    question: "حدد النتيجة التي سيتم إخراجها عند تنفيذ هذا البرنامج:",
    output: "وجبة أرز",
    answers: [
      'let breakfast = "خبز";\nbreakfast = "وجبة أرز";\nconsole.log(breakfast);',
      'let breakfast = "خبز";\nconsole.log(breakfast);',
      'let breakfast = "وجبة أرز";\nconsole.log(breakfast);',
      'breakfast = "وجبة أرز";',
    ],
    correct: 0,
  },
  {
    question: "حدد البرنامج الذي يقوم بإخراج ما يلي:",
    output:
      "خصم 50% على المنتجات التي يزيد سعرها عن 1000 ين!\nلذلك، يصبح سعر هذا المنتج نصف القيمة!",
    answers: [
      'let productPrice = 1200;\nif (productPrice > 1000) {\n  console.log("خصم 50% على المنتجات التي يزيد سعرها عن 1000 ين!");\n  console.log("لذلك، يصبح سعر هذا المنتج نصف القيمة!");\n}',
      'let productPrice = 1200;\n(productPrice > 1000) {\n  console.log("خصم 50% على المنتجات التي يزيد سعرها عن 1000 ين!");\n}',
      'let productPrice = 1200;\nif {\n  console.log("خصم 50% على المنتجات!");\n}',
      'let productPrice = 1200;\nconsole.log("خصم 50% على المنتجات");',
    ],
    correct: 0,
  },
  {
    question: "حدد البرنامج الذي يقوم بإخراج:",
    output: "2",
    answers: [
      "if (2 < 5) {\n  console.log(4 / 2);\n}",
      "if (2 < 5) {\n  console.log(4 * 2);\n}",
      "if (2 < 5) {\n  console.log(4 + 2);\n}",
      "(2 < 5) {\n  console.log(4 / 2);\n}",
    ],
    correct: 0,
  },
  {
    question: "حدد البرنامج الذي يقوم بإخراج:",
    output: "يوجد برتقال أكثر.",
    answers: [
      'let appleCount = 5;\nlet orangeCount = 7;\nif (appleCount > orangeCount) {\n  console.log("يوجد تفاح أكثر.");\n} else {\n  console.log("يوجد برتقال أكثر.");\n}',
      'let appleCount = 5;\nlet orangeCount = 7;\nif (appleCount > orangeCount) {\n  console.log("يوجد تفاح أكثر.");\n} else (appleCount < orangeCount) {\n  console.log("يوجد برتقال أكثر.");\n}',
      'let appleCount = 5;\nlet orangeCount = 7;\nif (appleCount > orangeCount) {\n  console.log("يوجد تفاح أكثر.");\n}',
      'let appleCount = 5;\nlet orangeCount = 7;\nif (else) {\n  console.log("يوجد برتقال أكثر.");\n}',
    ],
    correct: 0,
  },
  {
    question: "حدد البرنامج الذي يقوم بإخراج:",
    output: "استخدمتها كلها.",
    answers: [
      'let apple = 200;\nlet num = 5;\nlet money = 1000;\nmoney = money - (apple * num);\nif (money == 0) {\n  console.log("استخدمتها كلها.");\n} else {\n  console.log("لا يزال بإمكانك شراؤها.");\n}',
      'let apple = 200;\nlet num = 5;\nlet money = 1000;\nmoney = money + (apple * num);\nif (money == 0) {\n  console.log("استخدمتها كلها.");\n}',
      'let apple = 200;\nlet num = 5;\nlet money = 1000;\nif (money = 0) {\n  console.log("استخدمتها كلها.");\n}',
      "let apple = 200;\nlet num = 5;\nlet money = 1000;\nmoney = apple + num;",
    ],
    correct: 0,
  },
  {
    question: "حدد البرنامج الذي يقوم بإخراج ما يلي:",
    output:
      "صباح الخير.\nلن أتناول وجبة الإفطار\nسأذهب إلى المدرسة في الساعة 9.",
    answers: [
      'let time = 8;\nif (time == 8) {\n  console.log("صباح الخير.");\n}\nif (time > 7) {\n  console.log("لن أتناول وجبة الإفطار");\n} else {\n  console.log("سأتناول وجبة الإفطار");\n}\nconsole.log("سأذهب إلى المدرسة في الساعة 9.");',
      'let time = 8;\nif (time > 8) {\n  console.log("صباح الخير.");\n}',
      'let time = 8;\nif (time > 7) {\n  console.log("سأتناول وجبة الإفطار");\n}',
      'let time = 8;\nconsole.log("صباح الخير.");',
    ],
    correct: 0,
  },
  {
    question: "حدد البرنامج الذي يقوم بإخراج:",
    output: "التفاح أثقل وزناً",
    answers: [
      'let appleWeight = 400;\nlet orangeWeight = 300;\nif (appleWeight > orangeWeight) {\n  console.log("التفاح أثقل وزناً");\n} else {\n  console.log("البرتقال أثقل وزناً");\n}',
      'let appleWeight = 400;\nlet orangeWeight = 300;\nif (appleWeight == orangeWeight) {\n  console.log("التفاح أثقل وزناً");\n}',
      'let appleWeight = 400;\nlet orangeWeight = 300;\nif (appleWeight < orangeWeight) {\n  console.log("التفاح أثقل وزناً");\n}',
      "appleWeight = 400;\norangeWeight = 300;",
    ],
    correct: 0,
  },
  {
    question: "حدد البرنامج الذي يقوم بإخراج:",
    output: "أحسنت!",
    answers: [
      'let score = 70;\nlet average = 65;\nif (score > average) {\n  console.log("أحسنت!");\n} else {\n  console.log("لتناول جهد أكبر قليلاً");\n}',
      'let score = 70;\nlet average = 65;\nif (score < average) {\n  console.log("أحسنت!");\n}',
      'let score = 70;\nlet average = 65;\nif (score average) {\n  console.log("أحسنت!");\n}',
      "score = 70;\naverage = 65;",
    ],
    correct: 0,
  },
  {
    question: "حدد النتيجة التي سيتم إخراجها عند تنفيذ هذا البرنامج:",
    output: "5",
    answers: [
      "let num1 = 1;\nlet num2 = 5;\nlet ans = 0;\nif (num1 > num2) {\n  ans = num1;\n} else if (num1 == num2) {\n  ans = num1 + num2;\n} else {\n  ans = num2;\n}\nconsole.log(ans);",
      "let num1 = 1;\nlet num2 = 5;\nlet ans = 0;\nif (num1 > num2) {\n  ans = num1;\n}\nconsole.log(ans);",
      "let num1 = 1;\nlet num2 = 5;\nconsole.log(num1);",
      "let num1 = 1;\nlet num2 = 5;\nconsole.log(0);",
    ],
    correct: 0,
  },
  {
    question: "حدد البرنامج الذي يقوم بإخراج ما يلي:",
    output: "شرطة\nقسم الإطفاء / الدفاع المدني",
    answers: [
      'let num = 110;\nif (num == 110) {\n  console.log("شرطة");\n}\nnum = 119;\nif (num == 119) {\n  console.log("قسم الإطفاء / الدفاع المدني");\n}',
      'let num = 110;\nif (num == 119) {\n  console.log("شرطة");\n}',
      'let num = 110;\nif (num == 10) {\n  console.log("شرطة");\n}',
      'num = 110;\nconsole.log("شرطة");',
    ],
    correct: 0,
  },
  {
    question: "حدد البرنامج الذي يقوم بإخراج ما يلي:",
    output: "جبل\nبحر",
    answers: [
      'let place = "جبل";\nconsole.log(place);\nplace = "بحر";\nconsole.log(place);',
      'let place = "جبل";\nconsole.log(place);\nplace = "";\nconsole.log(place);',
      'place = "جبل";\nconsole.log(place);',
      'let place = "بحر";\nconsole.log(place);',
    ],
    correct: 0,
  },
];

const questionArea = document.getElementById("question-area");
const startBtn = document.getElementById("start-btn");
const progressBar = document.getElementById("progress-bar");
const timerDisplay = document.getElementById("timer");
const studentNameInput = document.getElementById("student-name");
const studentClassInput = document.getElementById("student-class");

let studentName = "";
let studentClass = "";
let currentQuestion = 0;
let userAnswers = [];
let timeLeft = 2400; // 40 دقيقة
let timerInterval = null;
let examFinished = false;

startBtn.onclick = function () {
  studentName = studentNameInput.value.trim();
  studentClass = studentClassInput.value.trim();

  if (studentName === "" || studentClass === "") {
    alert("من فضلك اكتب اسم الطالب والفصل قبل البدء");
    return;
  }

  currentQuestion = 0;
  userAnswers = [];
  timeLeft = 2400;
  examFinished = false;

  studentNameInput.disabled = true;
  studentClassInput.disabled = true;
  startBtn.style.display = "none";

  showQuestion();
  startTimer();
};

function showQuestion() {
  const q = questions[currentQuestion];

  let outputHTML = q.output
    ? `<div class="question-output"><pre><code>${q.output}</code></pre></div>`
    : "";

  let answersHTML = `<div class="answers-grid">`;
  q.answers.forEach((answer, index) => {
    let isChecked = userAnswers[currentQuestion] === index ? "checked" : "";
    answersHTML += `
      <label class="answer-card">
        <span class="option-badge">${index + 1}</span>
        <input type="radio" name="answer" value="${index}" ${isChecked}>
        <pre><code>${answer}</code></pre>
      </label>
    `;
  });
  answersHTML += `</div>`;

  questionArea.innerHTML = `
    <div class="question-badge">السؤال ${currentQuestion + 1} من ${questions.length} (درجة واحدة)</div>
    <div class="question-title">${q.question}</div>
    ${outputHTML}
    ${answersHTML}
    
    <div class="nav-buttons">
      <button id="previous-btn">السابق</button>
      <button id="next-btn">
        ${currentQuestion === questions.length - 1 ? "إنهاء الامتحان" : "التالي"}
      </button>
    </div>
  `;

  progressBar.style.width =
    ((currentQuestion + 1) / questions.length) * 100 + "%";

  document.querySelectorAll('input[name="answer"]').forEach((input) => {
    input.onchange = function () {
      userAnswers[currentQuestion] = Number(this.value);
    };
  });

  document.getElementById("previous-btn").onclick = previousQuestion;
  document.getElementById("next-btn").onclick = nextQuestion;
  document.getElementById("previous-btn").disabled = currentQuestion === 0;
}

function previousQuestion() {
  if (currentQuestion > 0 && !examFinished) {
    currentQuestion--;
    showQuestion();
  }
}

function nextQuestion() {
  if (userAnswers[currentQuestion] === undefined) {
    alert("من فضلك اختر إجابة أولاً للانتقال للخطوة التالية");
    return;
  }

  if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    showQuestion();
  } else {
    finishExam();
  }
}

function startTimer() {
  updateTimerDisplay();

  timerInterval = setInterval(function () {
    timeLeft--;
    updateTimerDisplay();

    if (timeLeft <= 0) {
      alert("انتهى الوقت المحدد للامتحان!");
      finishExam();
    }
  }, 1000);
}

function updateTimerDisplay() {
  let minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;
  timerDisplay.textContent =
    "الوقت: " +
    String(minutes).padStart(2, "0") +
    ":" +
    String(seconds).padStart(2, "0");
}

function finishExam() {
  if (examFinished) return;

  examFinished = true;
  clearInterval(timerInterval);

  let score = 0;
  questions.forEach((q, index) => {
    if (userAnswers[index] === q.correct) {
      score++;
    }
  });

  saveResult(score);

  let reviewHTML = "";
  questions.forEach((q, index) => {
    let userAnswer = userAnswers[index];
    let isCorrect = userAnswer === q.correct;
    let qOutput = q.output ? `<pre><code>${q.output}</code></pre>` : "";

    reviewHTML += `
      <div class="review-question">
        <h3>السؤال ${index + 1}: ${q.question}</h3>
        ${qOutput}
        <div class="answers-grid" style="margin-top: 10px;">
          ${q.answers
            .map((answer, answerIndex) => {
              let className = "";
              if (answerIndex === q.correct) className = "correct-answer";
              if (answerIndex === userAnswer && !isCorrect)
                className = "wrong-answer";

              return `
                <div class="answer-card ${className}">
                  <span class="option-badge">${answerIndex + 1}</span>
                  <pre><code>${answer}</code></pre>
                  ${answerIndex === q.correct ? '<div style="color: #166534; font-weight: bold; margin-top: 5px;">✓ الإجابة الصحيحة</div>' : ""}
                  ${answerIndex === userAnswer && !isCorrect ? '<div style="color: #991b1b; font-weight: bold; margin-top: 5px;">✗ إجابتك</div>' : ""}
                </div>
              `;
            })
            .join("")}
        </div>
      </div>
    `;
  });

  let percentage = Math.round((score * 100) / questions.length);

  questionArea.innerHTML = `
    <h2>نتيجة الامتحان</h2>
    <h3>اسم الطالب: ${studentName}</h3>
    <h3>الفصل: ${studentClass}</h3>
    <h3>الدرجة الحاصل عليها: ${score} من ${questions.length} (كل سؤال من درجة)</h3>
    <h3>النسبة المئوية: ${percentage}%</h3>
    <hr>
    <h2>مراجعة الإجابات التفصيلية</h2>
    ${reviewHTML}
    <button onclick="location.reload()" style="margin-top: 20px; width: 100%;">إعادة الامتحان</button>
  `;

  progressBar.style.width = "100%";
}

function saveResult(score) {
  let results = JSON.parse(localStorage.getItem("examResults") || "[]");
  let percentage = Math.round((score * 100) / questions.length);

  let result = {
    teacher: "مستر بكري خليفة",
    name: studentName,
    className: studentClass,
    score: score,
    total: questions.length,
    percentage: percentage,
    date: new Date().toLocaleString("ar-EG"),
  };

  results.push(result);
  localStorage.setItem("examResults", JSON.stringify(results));
}
