
function fileload(i){
  document.querySelector('#file-input').click(i);
}

function fileSaveJson(jsondata, filename){
  const d = new Date();
  const date = `${d.getFullYear()}${d.getMonth()}${d.getDate()}${d.getHours()}${d.getMinutes()}${d.getSeconds()}`;
  const loader = document.createElement("a");
  const fileName = `${filename}_${date}.json`;
  const json = JSON.stringify(jsondata);
  const blob = new Blob([json], {type: "octet/stream"}),
  
  url = window.URL.createObjectURL(blob);
  loader.href = url;
  loader.download = fileName;
  loader.click();
  window.URL.revokeObjectURL(url);  
}

function fileSaveHtmlEx(data, filename){
  // fileSaveHtmlEx(document.querySelector("html"),"save")
  fileSaveHtml(`<html>${data.innerHTML}</html>`,filename);
}

function fileSaveHtml(htmldata, filename){
  const d = new Date();
  const date = `${d.getFullYear()}${d.getMonth()}${d.getDate()}${d.getHours()}${d.getMinutes()}${d.getSeconds()}`;
  
  const fileName = `${filename}_${date}.html`;
  const loader = document.createElement("a");
  
  const blob = new Blob([htmldata], {type: "text/html"});
  const html = "htmldata";

  url = window.URL.createObjectURL(blob);
  loader.href = url;
  loader.download = fileName;
  loader.click();
  window.URL.revokeObjectURL(url);  
}

function qs(v) {
  return document.querySelector(v);
}

// document.querySelector('#file-input').addEventListener('change', ()=>{ 
//   const file = document.querySelector('#file-input').files[0];
//   const reader = new FileReader();
//   const loader = document.querySelector("#loader")
//   reader.addEventListener('load', function(e){
//         const t = e.target.result;
//         loader.innerHTML = t;
//         // loader.innerHTMl = JSON.parse(t);
//   })
//   reader.readAsText(file);//event triger
// })


  
