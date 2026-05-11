// ===== Codenest Gold Global System =====

// =======================
// إعدادات عامة
// =======================

// عنوان الموقع
document.title = "Codenestall";

// لوجو الموقع
const favicon = document.createElement("link");
favicon.rel = "icon";
favicon.type = "image/png";
favicon.href = "/logo.png";
document.head.appendChild(favicon);

// تحسين للموبايل
document.head.innerHTML += `
<meta name="theme-color" content="#0f0f0f">
<meta name="description" content="Codenestall - أكواد وبرمجة وتقنيات حديثة">
<meta name="keywords" content="HTML,CSS,JavaScript,Codenestall">
<meta name="author" content="Ahmed Mostafa">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;700&display=swap" rel="stylesheet">
`;

// =======================
// ستايل عام لكل الصفحات
// =======================

const style = document.createElement("style");

style.innerHTML = `
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:'Cairo',sans-serif;
}

body{
    background:#0d0d0d;
    color:white;
    min-height:100vh;
}

/* الهيدر */

.codenest-header{
    width:100%;
    padding:15px 20px;
    background:#111;
    display:flex;
    align-items:center;
    justify-content:space-between;
    border-bottom:1px solid #222;
    position:sticky;
    top:0;
    z-index:999;
    backdrop-filter:blur(10px);
}

.codenest-left{
    display:flex;
    align-items:center;
    gap:12px;
}

.codenest-logo{
    width:45px;
    height:45px;
    border-radius:50%;
    object-fit:cover;
    box-shadow:0 0 15px rgba(255,255,255,.2);
}

.codenest-title{
    font-size:20px;
    font-weight:bold;
}

/* الفوتر */

.codenest-footer{
    margin-top:50px;
    padding:20px;
    text-align:center;
    background:#111;
    border-top:1px solid #222;
    color:#aaa;
    font-size:14px;
}

/* تأثيرات */

a{
    color:#4da3ff;
    text-decoration:none;
    transition:.3s;
}

a:hover{
    opacity:.7;
}

::-webkit-scrollbar{
    width:8px;
}

::-webkit-scrollbar-thumb{
    background:#333;
    border-radius:10px;
}
`;

document.head.appendChild(style);

// =======================
// إنشاء الهيدر
// =======================

document.body.insertAdjacentHTML("afterbegin", `
<header class="codenest-header">
    
    <div class="codenest-left">
        <img src="/logo2.png" class="codenest-logo">
        <div class="codenest-title">Codenest Gold</div>
    </div>

</header>
`);

// =======================
// إنشاء الفوتر
// =======================

document.body.insertAdjacentHTML("beforeend", `
<footer class="codenest-footer">
    © 2026 Codenest Gold - All Rights Reserved
</footer>
`);

// =======================
// حماية بسيطة
// =======================

// منع كليك يمين
document.addEventListener("contextmenu", e => e.preventDefault());

// منع تحديد النص
document.addEventListener("selectstart", e => e.preventDefault());

// =======================
// رسالة ترحيب
// =======================

console.log("%cWelcome To Codenest Gold","color:gold;font-size:20px;font-weight:bold;");

