const btn = document.getElementById("menu")
btn.addEventListener("click", () => {
  document.getElementById("nav").classList.toggle("nav");
})

const btnshort = document.getElementById("short")
let url = document.getElementById("url")

let historial = []

let urlshort

function shorter() {
  document.getElementById("urlwrong", "url").classList.remove("malurl");
  let myHeaders = new Headers();
  myHeaders.append("apikey", "LS7OtHZzG4it51Zv4zZL5Uv0GpU6L2CO");

  let raw = url.value;

  let requestOptions = {
    method: 'POST',
    redirect: 'follow',
    headers: myHeaders,
    body: raw
  };


  fetch("https://api.apilayer.com/short_url/hash", requestOptions)

    .then(response => response.json())
    .then((result => {
      urlshort = result.short_url
      let urllong = result.long_url
      console.log(urllong);
      console.log(urlshort);
      historial.push({
        long: `${result.long_url}`,
        short: `${result.short_url}`
      })


      let div = `
      <div class="result-short"> 
      
      <a href="${result.long_url}">${result.long_url}</a>
        

        <div class="result-btn">
        <a href="${result.short_url}" id="" target="_blank" >${result.short_url} </a>
        
        <button id="copiar-btn" class="copiar" onclick="copyToClipboard()"> <span class="copied" id='span' > Copy </span> </button>
        </div>
      </div>`
      const resultados = document.getElementById("historial")
      resultados.innerHTML += div

    }))
    .catch(error => console.log('error', error));
}

function copyToClipboard(){
  navigator.clipboard.writeText(urlshort);
  document.getElementById('span').innerHTML = 'Copied!';
  document.getElementById("copiar-btn").classList.toogle("copiado");
}


btnshort.addEventListener("click", () => {
  if (url.value == "") {
    urlwrong()
  } else {
    shorter()
  }
})

function urlwrong() {
  console.log("no link");
  document.getElementById("urlwrong", "url").classList.add("malurl");
}


