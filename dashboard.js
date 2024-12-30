 // Check if user is logged in
var amount = 10000.00;

 const isLoggedIn = localStorage.getItem('isLoggedIn');
 const currentUser = JSON.parse(localStorage.getItem('currentUser'));

 if (isLoggedIn && currentUser) {
     const userInfoDiv = document.getElementById('user-info');
     userInfoDiv.innerHTML = `
         <p><strong>Full Name:</strong> ${currentUser.fullName}</p>
         <p><strong>Email:</strong> ${currentUser.email}</p>
         <p><strong>Account Number:</strong> ${currentUser.number}</p>
         <p><strong>Username:</strong> ${currentUser.username}</p>
         <p ><strong>Amount:${" "}</strong><span id="accountBalence">${" "}${amount.toFixed(2)}</span><strong>${" "}Pkr</strong></p>
     `;
     document.getElementById("username").innerHTML= currentUser.fullName;
 } else {
     window.location.href = 'index.html';
 }

 // Logout functionality
 document.getElementById('logout').addEventListener('click', function() {
     localStorage.removeItem('isLoggedIn');
     localStorage.removeItem('currentUser');
     window.location.href = 'index.html';
 });




document.getElementById("deposit").addEventListener("click", function () {
    document.getElementById("deposit-section").style.display = "block";
    document.getElementById("with-section").style.display = "none";
    document.getElementById("transfar-section").style.display = "none";
    document.getElementById("transictionHistory").style.display = "none";



})
document.getElementById("withDraw").addEventListener("click", function () {
    document.getElementById("with-section").style.display = "block";
    document.getElementById("deposit-section").style.display = "none";
    document.getElementById("transfar-section").style.display = "none";
    document.getElementById("transictionHistory").style.display = "none";



})
document.getElementById("transiction").addEventListener("click", function () {
    document.getElementById("transfar-section").style.display = "block";
    document.getElementById("with-section").style.display = "none";
    document.getElementById("deposit-section").style.display = "none";
    document.getElementById("transictionHistory").style.display = "none";


})
document.getElementById("History").addEventListener("click", function () {
    document.getElementById("transictionHistory").style.display = "block";
    document.getElementById("transfar-section").style.display = "none";
    document.getElementById("with-section").style.display = "none";
    document.getElementById("deposit-section").style.display = "none";

})
document.getElementById("cancel-deposit").addEventListener("click",function () {



    if (confirm("Deposit will be cancelled out")) {
       
 document.getElementById("deposit-section").style.display = "none";
    }
    
})
document.getElementById("cancel-with").addEventListener("click",function () {

    
    if (confirm("With Draw will be cancelled out")) {
        document.getElementById("with-section").style.display = "none";

           }
    
})
document.getElementById("cross").addEventListener("click",function () {
    if (confirm("Transiction will be cancelled out.")){
    document.getElementById("transfar-section").style.display = "none";


    }
    else{
        console.error("Elements Not found");
    }
    
    
})
document.getElementById("cancel-history").addEventListener("click",function () {

    document.getElementById("transictionHistory").style.display = "none";


    
    
})








document.getElementById("accountBalence").innerHTML = amount.toFixed(2);

document.getElementById("deposit-form").addEventListener("submit", function (event) {
    event.preventDefault();
    let amountDeposit = document.getElementById("deposit-amount").value;
    amountDeposit = parseFloat(amountDeposit);
    amount += amountDeposit;
    document.getElementById("accountBalence").innerHTML = amount.toFixed(2);


    


    const date = new Date().toLocaleString();
    const accountNumber = "N/A"; // No account number involved for deposit
    
    updateTransactionHistory(date, amountDeposit, accountNumber);


    document.getElementById("deposit-amount").value = "";
    setTimeout(() => {
        createPopup(`${amountDeposit} pkr Was suussfully added to your account`)
    }, 1000); // 10 seconds



});


document.getElementById("with-form").addEventListener("submit", function (event) {
    event.preventDefault();
    let amountWithdraw = document.getElementById("with-amount").value;
    amountWithdraw = parseFloat(amountWithdraw);
    if (amount >= amountWithdraw) {
        amount -= amountWithdraw;
        document.getElementById("accountBalence").innerHTML = amount.toFixed(2);
    
        const date = new Date().toLocaleString();
        const accountNumber = "N/A"; // No account number involved for deposit
        
        updateTransactionHistory(date, amountWithdraw, accountNumber);
    
        document.getElementById("with-amount").value = "";
        setTimeout(() => {
            createPopup(`${amountWithdraw} pkr is With Draw successfully from your account`)
        }, 1000); // 10 seconds
    

    } else {
        alert("Ooops! You dont have enough money.")
        document.getElementById("with-amount").value = "";

    }
   



});

document.getElementById("transfar-form").addEventListener("submit", function (event) {
    event.preventDefault();
    let accountNumber=document.getElementById("transfar-account").value;
    let amountTransfar = document.getElementById("transfar-amount").value;
    amountTransfar = parseFloat(amountTransfar);
    if (amount >= amountTransfar) {
        amount -= amountTransfar;
        setTimeout(() => {
            createPopup(`${amountTransfar}pkr is   successfully transfared to ${accountNumber}  from your accoun`)
        }, 1000); // 10 seconds
        document.getElementById("accountBalence").innerHTML = amount.toFixed(2);
        const date = new Date().toLocaleString();
        accountNumber.toLocaleString();
         // No account number involved for deposit
        updateTransactionHistory(date, amountTransfar, accountNumber);
        document.getElementById("transfar-amount").value = "";
        document.getElementById("transfar-account").value= "";
        
    
    }

    else {
        alert("Oops! You dont have enought money.")
        document.getElementById("transfar-amount").value = "";
        document.getElementById("transfar-account").value= "";
    }
  
    

});

// user





function updateTransactionHistory(date, amount, accountNumber) {
    // Get the transaction history table
    const historyTable = document.querySelector("#transictionHistory table");

    // Create a new row
    const newRow = document.createElement("tr");

    // Create and append the Date cell
    const dateCell = document.createElement("td");
    dateCell.textContent = date;
    newRow.appendChild(dateCell);

    // Create and append the Amount cell
    const amountCell = document.createElement("td");
    amountCell.textContent = `${amount.toFixed(2)} PKR `;
    newRow.appendChild(amountCell);

    // Create and append the Account Number cell
    const accountNumberCell = document.createElement("td");
    accountNumberCell.textContent = accountNumber;
    newRow.appendChild(accountNumberCell);

    // Append the new row to the table
    historyTable.appendChild(newRow);
}


document.addEventListener("DOMContentLoaded", () => {
    // Show loader when the page starts loading
    showLoader();

    // Simulate loading time (e.g., fetching data)
    setTimeout(() => {
        // Hide loader when the page is fully loaded
        hideLoader();
    }, 2000); // Simulate 2 seconds of loading time
});
function createPopup(title, message) {
    const popupWidth = 400;
    const popupHeight = 200;
    const screenWidth = window.screen.width;
    const screenHeight = window.screen.height;

    const left = (screenWidth - popupWidth) / 2;
    const top = (screenHeight - popupHeight) / 2;

    const popup = window.open(
        "",
        "Popup",
        `width=${popupWidth},height=${popupHeight},left=${left},top=${top}`
    );

    if (popup) {
        popup.document.write(`
            <html>
                <head>
                    <title>${title}</title>
                </head>
                <body style="font-family: Arial, sans-serif; text-align: center; padding: 20px;">
                    <h2>${title}</h2>
                    <p>${message}</p>
                    <button onclick="window.close()">Close</button>
                </body>
            </html>
        `);
    } else {
        alert("Popup blocked! Please allow popups for this site.");
    }
}
