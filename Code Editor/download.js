let textarea1=document.querySelectorAll("textarea")[0]
let textarea2=document.querySelectorAll("textarea")[1]
let textarea3=document.querySelectorAll("textarea")[2]

function downloadFile(filename,text){
    let element=document.createElement("a")
    element.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(text))
    element.setAttribute("download", filename)
    element.style.display="none"
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)
}
function download1(){
    let text=textarea1.value
    filename="index.html"
    downloadFile(filename,text)
}

function download2(){
    let text=textarea2.value
    filename="style.css"
    downloadFile(filename,text)

}
function download3(){
    let text=textarea2.value
    filename="script.js"
    downloadFile(filename,text)

}
document.querySelectorAll(".download-options li")[0].addEventListener("click",download1,false)

document.querySelectorAll(".download-options li")[1].addEventListener("click",download2,false)

document.querySelectorAll(".download-options li")[2].addEventListener("click",download3,false)


document.querySelectorAll(".download-options li")[3].addEventListener("click",function(){
download1()
download2()
download3()

},false)
