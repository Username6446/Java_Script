function printMessage(message){
    console.log(message);
}


setTimeout(printMessage, 5000, "Hello my friend");

function clickBtn(){
    const h1 = document.getElementById("message");
    console.log("start")
    const timeoutId = setTimeout(() => {
        h1.innerText = "Hello message"
    }, 3000, "Timeout 5 sec");

    const stopBtn = document.getElementById("stopMessage");
    stopBtn.addEventListener("click", )
}

setInterval()