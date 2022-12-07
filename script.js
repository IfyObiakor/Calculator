let box = document.querySelector(".empty1")
let buttn = Array.from( document.querySelectorAll(".b"))

buttn.map(button => {
    button.addEventListener("click", (e) => {
        if (e.target.innerText == "="){
                try {box.innerText = eval(box.innerText)
                }catch {
                box.innerText = "error"
                 }
        } else if (e.target.innerText == "AC") {
            box.innerText = " "
        }
        else{
            box.innerText+=e.target.innerText
        }
    })
})