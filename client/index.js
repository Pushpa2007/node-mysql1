document.addEventListener('DOMContentLoaded', function () {
    fetch('http://localhost:5000/getAll')
    .then(response => response.json())
    .then(data => loadHTMLTable(data['data']));
    
});


const searchBtn = document.querySelector('#search-btn');

searchBtn.onclick = function() {
    const searchValue = document.querySelector('#search-input').value;

    fetch('http://localhost:5000/search/' + searchValue)
    .then(response => response.json())
    .then(data => loadHTMLTable(data['data']));
}





   



    

    

function loadHTMLTable(data) {
    const table = document.querySelector('table tbody');

    if (data.length === 0) {
        table.innerHTML = "<tr><td class='no-data' colspan='5'>No Data</td></tr>";
        return;
    }

    let tableHtml = "";

    data.forEach(function ({userID, userName, Email,mobile,password,compID}) {
        tableHtml += "<tr>";
        tableHtml += `<td>${userID}</td>`;
        tableHtml += `<td>${userName}</td>`;
        tableHtml += `<td>${Email}</td>`;
        tableHtml += `<td>${mobile}</td>`;
        tableHtml += `<td>${password}</td>`;
        tableHtml += `<td>${compID}</td>`;
        tableHtml += "</tr>";
    });

    table.innerHTML = tableHtml;
}