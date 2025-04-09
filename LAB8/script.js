let mistakeCount = 0;

function getRandomLetters(length) {
    const chars = "abcdefghijklmnopqrstuvwxyz";
    let result = "";
    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}

function initializeContainer() {
    document.getElementById("container").textContent = getRandomLetters(Math.floor(Math.random() * 3));
}

function add_new_chars(baseCount = null) {
    const container = document.getElementById("container");
    const count = baseCount !== null ? baseCount : Math.floor(Math.random() * 3) + 1;
    container.textContent += getRandomLetters(count);
}

window.onload = initializeContainer;

window.addEventListener("keyup", function (e) {
    console.log(e.key);
    const container = document.getElementById("container");
    let text = container.textContent;

    if (text.length > 0 && e.key === text[0]) {
        // 正確輸入
        container.textContent = text.substring(1);
        mistakeCount = 0; // 重設錯誤次數
    } else {
        // 打錯一次
        mistakeCount++;
    }

    add_new_chars(); // 每次都加基本亂數字母

    if (mistakeCount >= 3) {
        add_new_chars(6); // 額外再加 6 個字母
        mistakeCount = 0; // 重設錯誤次數
    }
});
