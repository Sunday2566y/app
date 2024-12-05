document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault(); // ป้องกันการส่งฟอร์มแบบปกติ

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const data = {
        username: username,
        password: password
    };

    // URL ของ Web app ที่คุณได้จากการ deploy
    const url = 'https://script.google.com/macros/s/AKfycbxRWyWmkM099aoQZ7fYB_rFuSHyFeBSA1AP79Hc6u1SKEjZDfQuzKrQ_tdsXg9JeRuY/exec'; 

    // ส่งข้อมูลไปยัง Google Apps Script
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        if (data.status === 'success') {
            alert("เข้าสู่ระบบสำเร็จ!");
            window.location.href = 'content.html'; // เปลี่ยนเส้นทางไปที่หน้าแดชบอร์ด
        } else {
            alert("ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง");
        }
    })
    .catch((error) => {
        alert("เกิดข้อผิดพลาด: " + error);
    });
});
