// เมื่อโหลดหน้าเว็บเสร็จ จะเรียกใช้ฟังก์ชัน pageLoad
window.onload = pageLoad;

// ฟังก์ชันเพื่อเตรียมการเริ่มเกม
function pageLoad() {
    var startButton = document.getElementById("start"); // ดึงปุ่ม "Start" จาก DOM
    startButton.onclick = startGame; // ผูกการคลิกของปุ่มกับฟังก์ชัน startGame
}

// ฟังก์ชันเริ่มเกม
function startGame() {
    alert("Ready"); // แสดงการแจ้งเตือนว่าเกมพร้อมแล้ว
    addBox(); // เรียกใช้ฟังก์ชันเพื่อสร้างกล่อง
    timeStart(); // เริ่มจับเวลา
}

// ฟังก์ชันสำหรับเริ่มจับเวลา
function timeStart() {
    var TIMER_TICK = 1000; // กำหนดเวลาในการนับถอยหลัง (1 วินาที)
    var timer = null; // ตัวแปรสำหรับเก็บ timer
    var min = 0.5; // กำหนดเวลาเริ่มต้นเป็น 0.5 นาที
    var second = min * 10; // แปลงนาทีเป็นวินาที (0.5 นาที = 5 วินาที)
    var x = document.getElementById('clock'); // ดึงองค์ประกอบสำหรับแสดงเวลาจาก DOM
    x.innerHTML = second; // แสดงเวลาที่เริ่มต้น

    timer = setInterval(timeCount, TIMER_TICK); // เริ่มนับถอยหลังทุก 1 วินาที

    // ฟังก์ชันสำหรับนับถอยหลังเวลา
    function timeCount() {
        var allbox = document.querySelectorAll("#layer div"); // ดึงกล่องทั้งหมดจาก DOM
        second--; // ลดเวลาลง 1 วินาที
        x.innerHTML = second; // แสดงเวลาที่เหลือ

        // ตรวจสอบว่าเวลาหมด
        if (second <= 0) {
            clearInterval(timer); // หยุดการนับถอยหลัง
            if (allbox.length == 0) { // หากไม่มีกล่องเหลืออยู่
                alert("You win!"); // แสดงข้อความชนะ
            } else { // หากยังมีกล่องเหลืออยู่
                alert("Game over"); // แสดงข้อความแพ้
                clearScreen(); // ลบกล่องทั้งหมด
            }
        }
        // ตรวจสอบว่าผู้เล่นเคลียร์กล่องหมดก่อนเวลาหมด
        if (allbox.length == 0 && second > 0) {
            clearInterval(timer); // หยุดการนับถอยหลัง
            alert("You win!"); // แสดงข้อความชนะ
        }
    }
}

// ฟังก์ชันสำหรับสร้างกล่อง
function addBox() {
    var numbox = document.getElementById("numbox").value; // ดึงค่าจำนวนกล่องจาก input
    var gameLayer = document.getElementById("layer"); // ดึงพื้นที่เกมจาก DOM
    var colorDrop = document.getElementById("color").value; // ดึงสีจาก dropdown

    // สร้างกล่องตามจำนวนที่กำหนด
    for (var i = 0; i < numbox; i++) {
        var tempbox = document.createElement("div"); // สร้างกล่องใหม่
        tempbox.className = "square"; // กำหนดคลาสให้กล่อง
        tempbox.id = "box" + i; // กำหนด ID ให้กล่อง
        // กำหนดตำแหน่งสุ่มให้กล่อง
        tempbox.style.left = Math.random() * (500 - 25) + "px";
        tempbox.style.top = Math.random() * (500 - 25) + "px";
        tempbox.style.backgroundColor = colorDrop; // กำหนดสีให้กล่อง
        gameLayer.appendChild(tempbox); // เพิ่มกล่องลงในพื้นที่เกม
        bindBox(tempbox); // ผูกการคลิกให้กล่อง
    }
}

// ฟังก์ชันผูกการคลิกที่กล่อง
function bindBox(box) {
    box.onclick = function() {
        box.parentNode.removeChild(box); // ลบกล่องเมื่อถูกคลิก
    }
}

// ฟังก์ชันสำหรับลบกล่องทั้งหมดจากพื้นที่เกม
function clearScreen() {
    var allbox = document.querySelectorAll("#layer div"); // ดึงกล่องทั้งหมดจาก DOM

    // ลบกล่องทั้งหมด
    for (var i = 0; i < allbox.length; i++) {
        allbox[i].parentNode.removeChild(allbox[i]);
    }
}
