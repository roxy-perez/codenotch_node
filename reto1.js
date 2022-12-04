function messageOne(callback) {
    console.log("Mensaje 1");
    setTimeout(() => {
        callback();
        console.log("Mensaje 3");
    }, 3000);
}

function messageTwo() {
    console.log("Mensaje 2");
}

messageOne(messageTwo);
