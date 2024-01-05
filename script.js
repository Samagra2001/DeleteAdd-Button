let inputBar = document.querySelector(".input1");
let inputVar = document.querySelector(".input2");
let InputBar = document.querySelector(".input3");
let addBtn = document.querySelector(".add");
let delBtn = document.querySelector(".Delete")
let taskcont = document.querySelector(".taskcontainer");

let flag = false;

addBtn.addEventListener("click", function () {
    let ele = document.createElement("div")
    ele.classList.add("task")
    ele.innerHTML = `<p> ${inputBar.value}</p>
    <p>${inputVar.value}</p>
    <p>${InputBar.value}</p>`
    taskcont.appendChild(ele);
    ele.addEventListener("click", function () {
        if (flag == true) { taskcont.removeChild(ele) }
    })
})
delBtn.addEventListener("click", function () {
    if (flag == false) {
        delBtn.style.backgroundColor = "red"
    }
    else {
        delBtn.style.backgroundColor = "white"
    }
    flag = !flag
    console.log(flag);
})