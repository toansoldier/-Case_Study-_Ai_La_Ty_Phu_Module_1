let question = ["Làm thế nào để con cua được chín chân?", "Một ly thuỷ tinh đựng đầy nước, làm thế nào để lấy nước dưới đáy ly mà không đổ nước ra ngoài?", "con vịt đi trước 2 con vịt, 2 con vịt đi sau 2 con vịt, 2 con vịt đi giữa 2 con vịt. Hỏi có mấy con vịt?", "Bố mẹ có 6 người con trai, mỗi người con trai có 1 em gái. Hỏi gia đình đó có bao nhiêu người?", "Cái gì mà bạn có, khi bạn chia sẻ với tôi, nhưng khi bạn chia sẻ bạn sẽ không có nó?", "Làm thế nào cậu bé đá quả bóng 3 mét và sau đó quả bóng trở lại với cậu bé?", "Cái gì sau đây chặt không đứt, bứt không rời, phơi không khô, đốt không cháy?", "Cái gì không ai đào mà sâu nhất?", "Cái gì đen khi bạn mua nó, đỏ khi dùng nó và xám xịt khi vứt nó đi?", "Bàn gì mà lại bước gần bước xa?", "Bệnh gì bác sĩ bó tay?", "Có 1 đàn chim đậu trên cành, người thợ săn bắn cái rằm. Hỏi chết mấy con?", "Con gấu trúc ao ước gì mà không bao giờ được?", "Kể ra 3 ngày liên tiếp mà không có tên là thứ 2, thứ 3, thứ 4, thứ 5, thứ 6, thứ 7, chủ nhật?", "Vì tao tao phải đánh tao, vì tao tao phải đánh mày. Hỏi đang làm gì?"];

let answer = ["Lắp thêm chân", "Luộc", "Soi nó trong gương", "Cho nó ngồi", "Dùng miệng", "Dùng tay", "Bỏ sỏi vào", "Dùng ống mút", "Có 2 con vịt", "Có 3 con vịt", "Có 4 con vịt", "Có 5 con vịt", "7 người", "9 người", "10 người", "11 người", "Niềm tin", "Hy vọng", "Bí mật", "Tình yêu", "Cậu bé đá quả bóng lên trời", "Cậu bé đá xuống ao", "Cậu bé ăn quả bóng", "Cậu bé vứt quả bóng đi", "Gỗ tươi", "Kim cương", "Nước nóng", "Tình cũ", "Hang núi", "Sông đáy", "Mỏ Dầu", "Biển", "Than", "Vé Số", "Củi", "Chứng khoán", "Bàn đạp", "Bàn chân", "Bàn ghế", "Bàn Xoay", "Bệnh gãy tay", "Bệnh nan y", "Bệnh gãy chân", "Bệnh ung thư", "Chết 14 con", "Chết 15 con", "Chết 16 con", "Chết 17 con", "Được ăn trúc", "Được bơi lội", "Được tắm nắng", "Được chụp ảnh màu", "Hôm qua, hôm nay và ngày mai", "Sáng, Trưa, Chiều, Tối", "Thứ 9, thứ 10, thứ 11, thứ 12", "không có đáp án nào đúng", "Đập ruồi", "Đập kiến", "Đập muỗi", "Đập Điện Thoại"];

let correctAnswer = ["Luộc", "Dùng ống mút", "Có 4 con vịt", "9 người", "Bí mật", "Cậu bé đá quả bóng lên trời", "Nước nóng", "Biển", "Than", "Bàn chân", "Bệnh gãy tay", "Chết 15 con", "Được chụp ảnh màu", "Hôm qua, hôm nay và ngày mai", "Đập muỗi"];

let countQuestion = 0;

let countAnswerA = 0;
let countAnswerB = 1;
let countAnswerC = 2;
let countAnswerD = 3;

let countCorrect = 0;

let use5050 = true;
let useSurvey = true;

let readyGame = true;

let startSound = new Audio("sound/start.mp3");
let checkIntroSound = true;
let trueSound = new Audio("sound/true.mp3");
let falseSound = new Audio("sound/false.mp3");
let helpSound = new Audio("sound/help.mp3");
let winSound = new Audio("sound/win.mp3")

function showQuestion() {
    if (readyGame) {
        document.getElementById("question-number").innerHTML = "Câu " + (countQuestion + 1) + ": " + question[countQuestion];
        document.getElementById("boxA").innerHTML = "A.&nbsp&nbsp" + answer[countAnswerA];
        document.getElementById("boxB").innerHTML = "B.&nbsp&nbsp" + answer[countAnswerB];
        document.getElementById("boxC").innerHTML = "C.&nbsp&nbsp" + answer[countAnswerC];
        document.getElementById("boxD").innerHTML = "D.&nbsp&nbsp" + answer[countAnswerD];
        if(checkIntroSound){
            checkIntroSound = false;
            startSound.play();
        }
    }
}

function resetQuestion() {
    countQuestion = 0;
    countAnswerA = 0;
    countAnswerB = 1;
    countAnswerC = 2;
    countAnswerD = 3;
    countCorrect = 0;
    readyGame = true;
    use5050 = true;
    useSurvey=true;
    checkIntroSound = true;
    showQuestion();
}

function inputA() {
    return answer[countAnswerA];
}

function inputB() {
    return answer[countAnswerB];
}

function inputC() {
    return answer[countAnswerC];
}

function inputD() {
    return answer[countAnswerD];
}

function select(inputAnswer) {
    let result = correctAnswer[countCorrect];
    if (countQuestion == 14) {
        document.getElementById("question-number").innerHTML="Chúc mừng bạn đã trở thành tỷ phú với số tiền 1 Tỷ VNĐ";
        return winSound.play();
    } else if (inputAnswer == result) {
        countCorrect++;
        countQuestion++;
        countAnswerA += 4;
        countAnswerB += 4;
        countAnswerC += 4;
        countAnswerD += 4;
        trueSound.play();
        return showQuestion();
    } else {
        readyGame = false;
        falseSound.play();
        return gameOver();
    }
}

function gameOver() {
    document.getElementById("question-number").innerHTML = "Trò chơi kết thúc!!!";
    document.getElementById("boxA").innerHTML = "A";
    document.getElementById("boxB").innerHTML = "B";
    document.getElementById("boxC").innerHTML = "C";
    document.getElementById("boxD").innerHTML = "D";
}

function help5050() {
    if (use5050) {

        let result = correctAnswer[countCorrect];
        let a = answer[countAnswerA];
        let b = answer[countAnswerB];
        let c = answer[countAnswerC];
        let d = answer[countAnswerD];
        if (a == result) {
            document.getElementById("boxB").innerHTML = "B.&nbsp&nbsp";
            document.getElementById("boxC").innerHTML = "C.&nbsp&nbsp";
        } else if (b == result) {
            document.getElementById("boxC").innerHTML = "C.&nbsp&nbsp";
            document.getElementById("boxD").innerHTML = "D.&nbsp&nbsp";
        } else if (c == result) {
            document.getElementById("boxA").innerHTML = "A.&nbsp&nbsp";
            document.getElementById("boxD").innerHTML = "D.&nbsp&nbsp";
        } else if (d == result) {
            document.getElementById("boxA").innerHTML = "A.&nbsp&nbsp";
            document.getElementById("boxB").innerHTML = "B.&nbsp&nbsp";
        }
        helpSound.play();
        use5050 = false;
    }
}

function helpSurvey() {
    if (useSurvey) {
        let result = correctAnswer[countCorrect];
        let a = answer[countAnswerA];
        let b = answer[countAnswerB];
        let c = answer[countAnswerC];
        let d = answer[countAnswerD];
        if (a == result) {
            document.getElementById("boxA").innerHTML = "A.&nbsp&nbsp" + answer[countAnswerA] + "&nbsp&nbsp60%";
            document.getElementById("boxB").innerHTML = "B.&nbsp&nbsp" + answer[countAnswerB] + "&nbsp&nbsp15%";
            document.getElementById("boxC").innerHTML = "C.&nbsp&nbsp" + answer[countAnswerC] + "&nbsp&nbsp5%";
            document.getElementById("boxD").innerHTML = "D.&nbsp&nbsp" + answer[countAnswerD] + "&nbsp&nbsp20%";
        } else if (b == result) {
            document.getElementById("boxA").innerHTML = "A.&nbsp&nbsp" + answer[countAnswerA] + "&nbsp&nbsp30%";
            document.getElementById("boxB").innerHTML = "B.&nbsp&nbsp" + answer[countAnswerB] + "&nbsp&nbsp55%";
            document.getElementById("boxC").innerHTML = "C.&nbsp&nbsp" + answer[countAnswerC] + "&nbsp&nbsp15%";
            document.getElementById("boxD").innerHTML = "D.&nbsp&nbsp" + answer[countAnswerD] + "&nbsp&nbsp10%";
        } else if (c == result) {
            document.getElementById("boxA").innerHTML = "A.&nbsp&nbsp" + answer[countAnswerA] + "&nbsp&nbsp10%";
            document.getElementById("boxB").innerHTML = "B.&nbsp&nbsp" + answer[countAnswerB] + "&nbsp&nbsp15%";
            document.getElementById("boxC").innerHTML = "C.&nbsp&nbsp" + answer[countAnswerC] + "&nbsp&nbsp65%";
            document.getElementById("boxD").innerHTML = "D.&nbsp&nbsp" + answer[countAnswerD] + "&nbsp&nbsp15%";
        } else if (d == result) {
            document.getElementById("boxA").innerHTML = "A.&nbsp&nbsp" + answer[countAnswerA] + "&nbsp&nbsp10%";
            document.getElementById("boxB").innerHTML = "B.&nbsp&nbsp" + answer[countAnswerB] + "&nbsp&nbsp5%";
            document.getElementById("boxC").innerHTML = "C.&nbsp&nbsp" + answer[countAnswerC] + "&nbsp&nbsp5%";
            document.getElementById("boxD").innerHTML = "D.&nbsp&nbsp" + answer[countAnswerD] + "&nbsp&nbsp80%";
        }
        helpSound.play();
        useSurvey=false;
    }

}