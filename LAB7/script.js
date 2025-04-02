// 隨機產生 a-z 字母的字串 (指定長度)
function getRandomLetters(length) {
    let chars = "abcdefghijklmnopqrstuvwxyz";
    let result = "";
    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}

// 初始化 container 內容 (0~2 個隨機字母)
function initializeContainer() {
    document.getElementById("container").textContent = getRandomLetters(Math.floor(Math.random() * 3));
}

// 監聽 keyup 事件
window.addEventListener("keyup", function(e) {
    console.log(e.key); // 顯示輸入的按鍵
    
    let container = document.getElementById("container");
    let text = container.textContent;

    // 如果 container 內有字，且第一個字元等於 e.key，則刪除該字元
    if (text.length > 0 && e.key === text[0]) {
        container.textContent = text.substring(1);
    }

    // 增加新的隨機字元
    add_new_chars();
});

// 隨機新增 1~3 個字元到 container
function add_new_chars() {
    let container = document.getElementById("container");
    let newText = getRandomLetters(Math.floor(Math.random() * 3) + 1); // 產生 1~3 個新字母
    container.textContent += newText;
}

window.onload = initializeContainer;
