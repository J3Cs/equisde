let btn = document.getElementById("no");
btn.onmouseover = () => {
    btn.innerText = "Si"
}
btn.onmouseleave = () => {
    btn.innerText = "No"
}
btn.onclick = () => {
    alert("Sabia que dirias que si, mi amor :3")
}