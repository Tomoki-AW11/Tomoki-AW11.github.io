'use strict'
// 1行目に記載している 'use strict' は削除しないでください




function clickBtn(){
    let select = document.getElementById('list');   
    console.log(select.options[select.selectedIndex].value)
    if(select.options[select.selectedIndex].value === "nativePlace"){
        document.getElementById("character").style.visibility = "hidden"
        document.getElementById("tastes").style.visibility = "hidden"
        document.getElementById("message").style.visibility = "hidden"
        document.getElementById("nativePlace").style.visibility = "visible"
        }
    else{
        if(select.options[select.selectedIndex].value === "character"){
            document.getElementById("nativePlace").style.visibility = "hidden"
            document.getElementById("tastes").style.visibility = "hidden"
            document.getElementById("message").style.visibility = "hidden"
            document.getElementById("character").style.visibility = "visible"
            }
    else{
        if(select.options[select.selectedIndex].value === "tastes"){
            document.getElementById("nativePlace").style.visibility = "hidden"
            document.getElementById("character").style.visibility = "hidden"
            document.getElementById("tastes").style.visibility = "visible"
            document.getElementById("message").style.visibility = "visible"
            }
    else{
        if(select.options[select.selectedIndex].value === "close"){
            document.getElementById("nativePlace").style.visibility = "hidden"
            document.getElementById("character").style.visibility = "hidden"
            document.getElementById("tastes").style.visibility = "hidden"
            document.getElementById("message").style.visibility = "hidden"
            }
        }
        }
        }
        return
    }

    function clickSecretBtn(){
        document.getElementById("hukidashi").style.visibility = "visible"
        document.getElementById("nativePlace").style.visibility = "hidden"
        document.getElementById("character").style.visibility = "hidden"
        document.getElementById("tastes").style.visibility = "hidden"
        document.getElementById("message").style.visibility = "hidden"
     return 
    }

    document.querySelector("#hukidashi").addEventListener(
        "click",function(){
            document.getElementById("coment").style.visibility = "visible"
        }
    )

    document.querySelector("#coment").addEventListener(
        "click",function(){
            document.getElementById("hukidashi").style.visibility = "hidden"
            document.getElementById("coment").style.visibility = "hidden"
        }
    )
