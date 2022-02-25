document.querySelector("#form").addEventListener("submit", payDebit);

function payDebit(event) {
  event.preventDefault();
  console.log("click");

  var cardHolderName = document.querySelector("#cardH").value;
  var cardNumber = document.querySelector("#cardNum").value;
  var expDate = document.querySelector("#expDate").value;
  var cvv = document.querySelector("#cvv").value;

  //   console.log(cvv,cardHolderName,cardNumber,expDate);

  if (cvv == 123 || cvv == 000 ) {
    alert("Congratulation! your payment is succesful");
    window.location.href="./Thanks.html";
    
  }
  else{
    alert("enter valid data");
  }
  
 

}
