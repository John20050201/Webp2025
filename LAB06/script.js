function addfunction() {
    var btn = document.createElement("BUTTON");  // 建立新的按鈕元素
    btn.innerHTML = "CLICK ME";  // 設定按鈕文字
    btn.setAttribute("class", "btn btn-outline-danger");  // 設定 Bootstrap 樣式
    document.body.appendChild(btn);  // 將按鈕加入網頁
}

function delfunction() {
    var btn_list = document.getElementsByTagName("BUTTON");  // 取得所有按鈕
    if (btn_list.length > 2) {  // 確保不刪除 "Add it" 和 "Del it" 按鈕
        var btn = btn_list.item(btn_list.length - 1);  // 取得最後一個按鈕
        document.body.removeChild(btn);  // 移除按鈕
    }
}
