const btn = document.getElementById("menu")
btn.addEventListener("click", () => {
  document.getElementById("nav").classList.toggle("nav");
})

const btnshort = document.getElementById("short")
let url = document.getElementById("url")

let historial = []


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
      let urlshort = result.short_url
      let urllong = result.long_url
      console.log(urllong);
      console.log(urlshort);
      historial.push({
        long: `${result.long_url}`,
        short: `${result.short_url}`
      })
      let contenido = result.short_url


      let div = `
      <div class="result-short"> 
        <a href="${result.long_url}">${result.long_url}</a>
        
        <div class="result-btn">
        <a href="${result.short_url}" id="" target="_blank" >${result.short_url} </a>
        
        <button id="${contenido}" class="copiar" onclick="copyToClipboard(${contenido})"> <span > Copy </span> </button></div>
      </div>`
      const resultados = document.getElementById("historial")
      resultados.innerHTML += div

    }))
    .catch(error => console.log('error', error));
}

function copyToClipboard(contenido){
  navigator.clipboard.writeText(contenido);
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

copiar-btn.addEventListener("click", e => {
  console.log(e);
  console.log("copiado");
})


// function copyToClipboard(id_elemento) {
//   try {
//     const inputFalse = document.createElement("input");
//     inputFalse.setAttribute("value", document.getElementById(id_elemento).innerHTML);
//     document.body.appendChild(inputFalse);
//     inputFalse.select();
//     document.execCommand("copy");
//     document.body.removeChild(inputFalse);

    
//     // const inputFalse = document.createElement("input")
//     // inputFalse.setAttribute("value". document,getElementById(id_elemento.innerHTML));
//     // document.body.appendChild(inputFalse);
//     // inputFalse.select();
//     // const content = document.getElementById(id_elemento);
//     // content.select();
//     // content.setSelectionRange(0, 99999);
//     // document.execCommand("copy");
//     console.log("Link copiado");
//   } catch (error) {
//     console.log(error);
//   }
// }




