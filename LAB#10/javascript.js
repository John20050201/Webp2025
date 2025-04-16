function getimg () {
  var xhr = new XMLHttpRequest();
  var url = 'https://api.unsplash.com/photos?client_id=812193ef71ca946e361ed541979a0cfd91e9419a19235fd05f51ea14233f020a&per_page=30';
  xhr.open('GET', url, true);
  xhr.send();

  xhr.onload = function () {
    if (xhr.status === 200) {
      var data = JSON.parse(this.responseText);
      add_new_img(data);
    } else {
      console.error('圖片載入錯誤:', xhr.status);
    }
  };
}

function add_new_img(photoArray) {
  var gallery = document.getElementById("gallery");
  gallery.innerHTML = "";

  photoArray.forEach(function(photo) {
    var img = document.createElement("img");
    img.src = photo.urls.small;
    img.alt = photo.alt_description || "圖片";
    gallery.appendChild(img);
  });
}
