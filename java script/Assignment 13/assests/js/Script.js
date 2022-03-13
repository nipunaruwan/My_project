



document.getElementById("Customerpage").style.display="none";
document.getElementById("itempage").style.display="none";
//First Btn Func
document.getElementById("Home").addEventListener("click",function () {
    document.getElementById("Homepage").style.display="block";
    document.getElementById("Customerpage").style.display="none";
    document.getElementById("itempage").style.display="none";
});
//Sec Btn Func
document.getElementById("Customer").addEventListener("click",function () {
    document.getElementById("Customerpage").style.display="block";
    document.getElementById("itempage").style.display="none";
    document.getElementById("Homepage").style.display="none";
});

document.getElementById("item").addEventListener("click",function () {
    document.getElementById("Homepage").style.display="none";
    document.getElementById("itempage").style.display="block";
    document.getElementById("Customerpage").style.display="none";
});

