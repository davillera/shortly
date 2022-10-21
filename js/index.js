const btn = document.getElementById("menu")

btn.addEventListener("click", () => {
  document.getElementById("nav").classList.toggle("nav");
})

// var myHeaders = new Headers();
// myHeaders.append("apikey", "LS7OtHZzG4it51Zv4zZL5Uv0GpU6L2CO");

// var raw = "";

// var requestOptions = {
//   method: 'POST',
//   redirect: 'follow',
//   headers: myHeaders,
//   body: raw
// };

// fetch("https://api.apilayer.com/short_url/hash", requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));