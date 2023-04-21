let buttons = document.querySelectorAll(".btn");
let s = ""
Array.from(buttons).forEach((item) => {

    // item.style.backgroundColor="green"
    item.addEventListener('click', (e) => {

        if (e.target.innerHTML == '=') {
            s = eval(s)
            document.querySelector("input").value = s;

        }

        else if (e.target.innerHTML == "C") {
            s = ""
            document.querySelector("input").value = s;

        }

        
        else {

            s = s + e.target.innerHTML;
            document.querySelector("input").value = s;
            // let result =  document.getElementById("example")

        }
    })
})