        const html=document.querySelector(".html")
        const css=document.querySelector(".css")
        const js=document.querySelector(".js")
        const code=document.querySelector("#code").contentWindow.document
        let checkbox2=document.querySelector("#check2")
        let download=document.querySelectorAll("button")[1]
        let checkbox1=document.querySelector("#check1")
        let show=document.querySelectorAll("button")[0]



        let htmlValue=localStorage.getItem("htmlvalue")
        html.value=htmlValue
        let cssValue=localStorage.getItem("cssvalue")
        css.value=cssValue
        let jsValue=localStorage.getItem("jsvalue")
        js.value=jsValue

        const item1=document.querySelector(".item1")
        const item2=document.querySelector(".item2")
        const item3=document.querySelector(".item3")

        function displayCSS(){
            item1.style.display="none"
            item3.style.display="none"
            item2.style.display="block"
            
            checkbox1.checked=!checkbox1.checked
        }
        function displayHTML(){
            item2.style.display="none"
            item3.style.display="none"
            item1.style.display="block"
            checkbox1.checked=!checkbox1.checked
        }
        function displayJS(){
            item1.style.display="none"
            item2.style.display="none"
            item3.style.display="block"
            checkbox1.checked=!checkbox1.checked
        }
        show.addEventListener("click", function(){
            checkbox1.checked=!checkbox1.checked
        })

        download.addEventListener("click", function(){
            checkbox2.checked=!checkbox2.checked
        })

        function update(){
            code.open()
            code.writeln(
                html.value+
                "<style>"
                    +css.value+
                    "</style> "  +
                    "<script>"+
                        js.value+
                    "</script>"
            )
            code.close()
        }
        html.addEventListener("input",function(){
            localStorage.setItem("htmlvalue",html.value)

       
        })
        js.addEventListener("input",function(){
            localStorage.setItem("jsvalue",js.value)

           
        })
        css.addEventListener("input",function(){
            localStorage.setItem("cssvalue",css.value)
       
        })
        function result(){
    update()
        }
     