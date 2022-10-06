//* Validate
const emailValue = document.getElementById("email").value;
const snameValue = document.getElementById("sname").value;
const spriceValue = document.getElementById("sprice").value;
const wcategoryValue = document.getElementById("wcategory").value;

sellForm.addEventListener('submit', (e) => {
    e.preventDefault();
    Validate();
})

function Validate() {
    //Ngilangin spasi
    const emailValue = document.getElementById("email").value.trim();
    const snameValue = document.getElementById("sname").value.trim();
    const spriceValue = document.getElementById("sprice").value;
    const wcategoryValue = document.getElementById("wcategory").value;

    if(emailValue.indexOf("@") < 1 || countFind(emailValue, "@") > 1) {
        alert("Please enter a correct email")
        document.myForm.email.focus();
        return false;
    } else if(snameValue == "" ) {
        alert( "Skin's name can't be empty!" );
        document.getElementById("sname").focus();
        return false;
    } else if(snameValue.length < 5) {
        alert( "Skin's name must contain atleast 5 characters!" );
        document.getElementById("sname").focus();
        return false;
    } else if(isNaN(spriceValue)) {
        alert( "Please input numbers only!" );
        document.getElementById("sprice").focus();
        return false;
    } else if(spriceValue <= 500 ) {
        alert( "Price must be higher than 500!" );
        document.getElementById("sprice").focus();
        return false;
    } else {
        alert("Thank you for using Neverending StriKe.\nPlease check your email for further notice.");
        window.location.href = "../SellYourSkin/sellyourskin.html";
    }

    return (true);
}

function countFind(string, word) {
    return string.split(word).length - 1;
 }

function disableSell() {
    document.getElementById("Sell").disabled = true;
}

function sellApprove () {
    if(document.getElementById("valid").checked) {
        document.getElementById("Sell").disabled = false;
    } else  {
    document.getElementById("Sell").disabled = true;
    }
}