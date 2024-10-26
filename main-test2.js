// 定義 API 的網址
const api_url = 'https://seat.tpml.edu.tw/sm/service/getAllArea';
// 監聽 id=getListButton 按鈕的點擊事件
document.getElementById('getListButton')
    .addEventListener('click', () => {
        // 使用 fetch 函數向 API 網址發送 GET 請求
        
        fetch(api_url).then(response => {
            console.log()
            /*
            response.json().then(body => {
                // 清單的內容顯示於列表空間
                document.getElementById('itemList')
                    .innerText = body.items;
            });
            */
        });
        
    });
