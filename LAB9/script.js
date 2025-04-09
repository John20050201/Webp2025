var openUrl = "https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=6";
var xhr = new XMLHttpRequest();

xhr.open('GET', openUrl, true);
xhr.send();

xhr.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    var dataset = JSON.parse(this.responseText);
    addNewData(dataset);
  }
};

function addNewData(dataset) {
  var myTable = document.getElementById("csie").getElementsByTagName("tbody")[0];
  dataset.forEach(function (data, index) {
    var row = myTable.insertRow(-1);

    var title = data["title"] || "無資料";
    var location = (data["showInfo"] && data["showInfo"][0] && data["showInfo"][0]["location"]) || "無地點資訊";
    var price = (data["showInfo"] && data["showInfo"][0] && data["showInfo"][0]["price"]) || "免費或未提供";

    row.insertCell(0).innerHTML = title;
    row.insertCell(1).innerHTML = location;
    row.insertCell(2).innerHTML = price;
  });
}

function delOldData() {
  var myTable = document.getElementById("csie").getElementsByTagName("tbody")[0];
  while (myTable.rows.length > 0) {
    myTable.deleteRow(0);
  }
}
