document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault(); // ป้องกันการส่งฟอร์มแบบธรรมดา

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const data = {
        username: username,
        email: email,
        password: password
    };

    // URL ของ Web app ที่คุณได้จากการ deploy
    const url = 'https://script.google.com/macros/s/AKfycbwqgryPujOxNW8ESby3Z6s0SQ2brDqTNDwwI3TA9o6wVT7u52-Fn9CTmXK2ChzVeRnC/exec';

    // ส่งข้อมูลไปยัง Web app ผ่าน POST
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        // เมื่อสมัครสมาชิกสำเร็จ ให้ไปยังหน้าต่อไป
        alert("สมัครสมาชิกสำเร็จ!");
        window.location.href = 'login.html'; // เปลี่ยนเส้นทางไปที่หน้า login.html
    })
    .catch((error) => {
        alert("เกิดข้อผิดพลาด: " + error);
    });
});
