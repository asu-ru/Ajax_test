let data = [];
let number = 0;

const titleArea = document.getElementById("title");
const contentArea = document.getElementById("content");
const videoArea = document.getElementById("video");
const button = document.getElementById('btn');

function getData() {
  $.ajax({
    url: 'ajax.json',
    type: 'GET',
    dataType: 'json',
    success: function(response) {
      // 取得したデータを data に追加
        data = data.concat(response);
        updateVideo();
      },
    })      
  };

function changeVideo() {
  button.addEventListener('click', function() {
    // ajax.jsonからデータを取得していない場合のみ、getDataの処理を呼び出す
    if (data.length === 0) {
      getData();  // データ取得後にupdateVideoが呼ばれる
    } else {
      updateVideo();
    }
  });
}

function updateVideo() {
  if (data[number]) {
    titleArea.innerHTML = data[number].title;
    contentArea.innerHTML = data[number].content;
    videoArea.setAttribute("src", data[number].url);
    number == 2 ? number = 0 : number++; 
  }
}

window.onload = changeVideo;
