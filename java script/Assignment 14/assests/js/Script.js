




/*
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

*/


$("#Customerpage").css("display","none");
$("#itempage").css("display","none");

$("#Home").click(function () {
    $("#Homepage").css("display","block");
    $("#Customerpage").css("display","none");
    $("#itempage").css("display","none");


});
$("#Customer").click(function () {
    $("#Homepage").css("display","none");
    $("#Customerpage").css("display","block");
    $("#itempage").css("display","none");
});
$("#item").click(function () {
    $("#Homepage").css("display","none");
    $("#Customerpage").css("display","none");
    $("#itempage").css("display","block");
});



$("#btnSave").click(function () {
    $("#custablebody>tr").off();


    let customerID = $("#txtCusID").val();
    let customerName = $("#txtCusName").val();
    let customerAddress = $("#txtaddress").val();
    let customerContactNO = $("#txtcontact").val();


    let row = `<tr><td>${customerID}</td><td>${customerName}</td><td>${customerAddress}</td><td>${customerContactNO}</td></tr>`;

    $("#custablebody").append(row);


    $("#custablebody>tr").click(function () {
    let cusID = $(this).children(":eq(0)").text(); // select first td and get text
    let cusName = $(this).children(":eq(1)").text();
    let cusAddress = $(this).children(":eq(2)").text();
    let cusTP = $(this).children(":eq(3)").text();

    console.log(cusID, cusName, cusAddress, cusTP);

    // set values for the input fields
    $("#txtCusID").val(cusID);
    $("#txtCusName").val(cusName);
    $("#txtaddress").val(cusAddress);
    $("#txtcontact").val(cusTP);

});

});

$("#btnsave1").click(function () {
    $("#itemtablebody>tr").off();


    let itemcode = $("#txtitemcode").val();
    let itemName = $("#txtitemname").val();
    let itemprice = $("#txtitemprice").val();
    let itemQty = $("#txtitemqty").val();


    let row1 = `<tr><td>${itemcode}</td><td>${itemName}</td><td>${itemprice}</td><td>${itemQty}</td></tr>`;

    $("#itemtablebody").append(row1);


    $("#itemtablebody>tr").click(function () {
        let itemcode = $(this).children(":eq(0)").text(); // select first td and get text
        let itemName = $(this).children(":eq(1)").text();
        let itemprice = $(this).children(":eq(2)").text();
        let itemQty = $(this).children(":eq(3)").text();

        //console.log(cusID, cusName, cusAddress, cusTP);

        // set values for the input fields
        $("#txtitemcode").val(itemcode);
        $("#txtitemname").val(itemName);
        $("#txtitemprice").val(itemprice);
        $("#txtitemqty").val(itemQty);

    });
});

/*
validation customer
*/

//validation customer ID
let RegCusID=/^(C00-){3,4}$/;
/*$("#txtCusID").keyup(function () {
    let input =$("txtCusID").value();
    if (RegCusID.test(input)){
        $("#txtCusID").css('border','2px solid green');
    }
    else {
        $("#txtCusID").css('border','2px solid red');
    }
});*/


//validation customer ID
$("#txtCusID").on('keyup',function () {
    let input =$("txtCusID").value();
    if (RegCusID.test(input)){
        $("#txtCusID").css('border','2px solid green');
    }
    else {
        $("#txtCusID").css('border','2px solid red');
    }
})
//validation customername
let RegExCusName=/^[A-z]{5,10}$/;
$("#txtCusName").keyup(function () {
    let input =$("#txtCusName").value();
    if (RegExCusName.test(input)){
        $("#txtCusName").css('border','2px solid green');
    }
    else {
        $("#txtCusName").css('border','2px solid red');
    }
});


//validation customeraddress
let RegExCusAddress=/^(No.)[0-9]{2} [A-z]{4,100}$/;
$("#txtaddress").keyup(function () {
    let input =$("#txtaddress").value();
    if (RegExCusAddress.test(input)){
        $("#txtaddress").css('border','2px solid green');
    }
    else {
        $("#txtaddress").css('border','2px solid red');
    }
});

//validation contact-no
let Regcontact=/^(07)[0-9]{8,9}$/;
$("#txtcontact").keyup(function () {
    let input =$("#txtcontact").value();
    if (Regcontact.test(input)){
        $("#txtcontact").css('border','2px solid green');
    }
    else {
        $("#txtcontact").css('border','2px solid red');
    }
});

/*validatin item*/
/*



//validation itemcode
let RegCusID=/^(C00-)[3.4]$/;
$("txtCusID").keyup(function () {
    let input =$("txtCusID").value();
    if (RegCusID.test(input)){
        $("#txtCusID").css('border','2px solid green');
    }
    else {
        $("#txtCusID").css('border','2px solid red');
    }
});

//validation itemname
let RegCusname=/^(C00-){3,4}$/;
$("txtCusID").keyup(function () {
    let input =$("txtCusID").value();
    if (RegCusname.test(input)){
        $("#txtCusName").css('border','2px solid green');
    }
    else {
        $("#txtCusName").css('border','2px solid red');
    }
});

//validation customername
let RegCusname=/^(A-Z){5,10}$/;
$("txtCusID").keyup(function () {
    let input =$("#txtCusID").value();
    if (RegCusname.test(input)){
        $("#txtCusName").css('border','2px solid green');
    }
    else {
        $("#txtCusName").css('border','2px solid red');
    }
});
//validation itemprice
let RegExCusAddress=/^(No.)[0-9]{2} [A-z]{4,100}$/;
$("txtCusID").keyup(function () {
    let input =$("#txtaddress").value();
    if (RegExCusAddress.test(input)){
        $("#txtaddress").css('border','2px solid green');
    }
    else {
        $("#txtaddress").css('border','2px solid red');
    }
});
*/

