// 定義 API 的網址
const api_url = 'http://127.0.0.1:5000/getlist';
// 監聽 id=getListButton 按鈕的點擊事件
document.getElementById('getListButton')
    .addEventListener('click', () => {
        // 使用 fetch 函數向 API 網址發送 GET 請求
        
        fetch(api_url).then(response => {
            response.json().then(body => {
                // 清單的內容顯示於列表空間
                document.getElementById('itemList')
                    .innerText = body.items;
            });
        });
        
    });
