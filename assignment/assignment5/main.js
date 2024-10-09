let postCount = 0;

window.onload = function() {
    document.getElementById("top").innerText = "Welcome to the Forum";
};

function postFunction() {
    let userMessage = document.getElementById("message").value;

    postCount++;

    if (postCount === 1) {
        document.getElementById("topic").innerText = userMessage;
    } else if (postCount === 2) {
        document.getElementById("reply1").innerText = userMessage;
    } else if (postCount === 3) {
        document.getElementById("reply2").innerText = userMessage;
    }

    document.getElementById("message").value = "";
}

function clearFunction() {
    document.getElementById("topic").innerText = "";
    document.getElementById("reply1").innerText = "";
    document.getElementById("reply2").innerText = "";
    postCount = 0; 
}
