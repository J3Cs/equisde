let btn = document.getElementById("no");
btn.onmouseover = () => {
    btn.innerText = "Si"
}
btn.onmouseleave = () => {
    btn.innerText = "No"
}
btn.onclick = () => {
    setTimeout(() => {
        alert("Sabia que dirias que si, mi amor :3")    
    }, 1500);
    
}