let random;

document.getElementById("submitBtn").onclick = function(){
    random = Math.ceil(Math.random()*100);
    document.getElementById("randomNumber").textContent = `${random}`;
}