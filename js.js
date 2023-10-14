// $(document).ready(() => {
//   $("#searchForm").on("submit", (e) => {
//     let searchText = $("#searchText").val();
//     getValue(searchText);
//     e.preventDefault();
//   });
// });
//для отправки формы по нажатию ентера
function getValue(searchText) {
  const params = { value: searchText };
  console.log(params);
  axios
    .get("http://185.255.135.57:8080/", { params })
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
