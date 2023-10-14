$(document).ready(() => {
    $("#searchForm").on("submit", (e) => {
        let searchText = $("#searchText").val();
        getValue(searchText);
        e.preventDefault();
    });
});

function getValue(searchText) {
    const params = { value: searchText };
    const url = "http://185.255.135.57:8080/";
    console.log(`${url}?value=${searchText}`); // Выводим URL с параметрами в консоль
    axios
        .get(url, { params })
        .then((response) => {
            console.log(response);
            let output = response.data.message;
            console.log(output);
            $("#vivod").html(output);
        })
        .catch((err) => {
            console.log(err);
        });
}
