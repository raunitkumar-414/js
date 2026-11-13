let count=0;

document.getElementById("DecreaseBtn").onclick = function () {
    count-- ;
    document.getElementById("countlabel").textContent = count;
}
document.getElementById("IncreaseBtn").onclick = function () {
    count++ ;
    document.getElementById("countlabel").textContent = count;
}
document.getElementById("ResetBtn").onclick = function () {
    count = 0 ;
    document.getElementById("countlabel").textContent = count;
}