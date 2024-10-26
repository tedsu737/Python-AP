// 定義 API 的網址
const api_url = 'http://127.0.0.1:5000/hello_world';
// 監聽 id=getListButton 按鈕的點擊事件
document.getElementById('getListButton')
    .addEventListener('click', () => {

            fetch(api_url).then(response => {
                document.getElementById('itemList')
                        .innerText = response.body;
                /*
                response.json().then(body => {
                    // 清單的內容顯示於列表空間
                    document.getElementById('itemList')
                        .innerText = body.items;
                });
                */
            });
        
    });
