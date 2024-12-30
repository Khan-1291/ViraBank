


function showSignupForm() {
    document.getElementById('signup-form').classList.add('active');
    document.getElementById('login-form').classList.remove('active');
}

function showLoginForm() {
    document.getElementById('signup-form').classList.remove('active');
    document.getElementById('login-form').classList.add('active');
}

// Handle Signup Form Submission
document.querySelector('#signup-form form').addEventListener('submit', function(event) {
    event.preventDefault();

    const fullName = document.getElementById('full-name').value;
    const email = document.getElementById('email').value;
    const number = document.getElementById('signup-number').value;

    const username = email.split('@')[0];
    const users = JSON.parse(localStorage.getItem('users')) || [];

    if (users.find(user => user.username === username || user.number === number)) {
        alert('Username or number already exists.');
        return;
    }

    const newUser = { fullName, email, number, username };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('currentUser', JSON.stringify(newUser));
    setTimeout(() => {
        hideLoader();
        createPopup("Your Credentials", `Username: ${username}<br>Password: ${number}`);
    }, 3000); // 5 seconds

    setTimeout(() => {
        createPopup("Now You will be directed to your dashboard!! .. Thanks For chossing us")
    }, 10000); // 10 seconds

    setTimeout(() => {
        window.location.href = 'dashbord.html';
    }, 15000); // 15 seconds
});

    

// Handle Login Form Submission
document.querySelector('#login-form form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const number = document.getElementById('login-number').value;

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.username === username && user.number === number);

    if (user) {
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('currentUser', JSON.stringify(user));
        setTimeout(() => {
            createPopup("Now You will be directed to your dashboard!! .. Thanks For chossing us")
           
          
        }, 3000); // 5 seconds
    
    
        setTimeout(() => {
            window.location.href = 'dashbord.html';
        }, 8000); // 15 seconds

}

     else {
        alert('Invalid credentials. Please try again or sign up.');
    }
});

//Button Section
const sectbutton1 = document.getElementById("sectBtn1");
sectbutton1.style.backgroundColor = "red";
const circ = document.getElementById("circleLogo");
circ.style.backgroundColor = "green";
document.getElementById("operationp").innerHTML = "Duis aute irure dolor in reprehender it in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur s  int occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit   anim id est laborum.";
document.getElementById("operationheading").innerHTML = "Tranfser money to anyone, instantly! No fees, no BS.";
sectbutton1.addEventListener("click", function () {

    circ.style.backgroundColor = "green";
    document.getElementById("operationheading").innerHTML = "Tranfser money to anyone, instantly! No fees, no BS.";

    document.getElementById("operationp").innerHTML = "Duis aute irure dolor in reprehender it in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur s  int occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit   anim id est laborum.";


})



const sectbutton2 = document.getElementById("sectBtn2");
sectbutton2.style.backgroundColor = "yellow";

sectbutton2.addEventListener("click", function () {
    circ.style.backgroundColor = "#e715c4";
    document.getElementById("operationheading").innerHTML = "Buy a home/make your dreams come true, with instant loans.";

    document.getElementById("operationp").innerHTML = "Duis aute irure dolor in reprehender it in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur s  int occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit   anim id est laborum.";


})

const sectbutton3 = document.getElementById("sectBtn3");
sectbutton3.style.backgroundColor = "pink";

sectbutton3.addEventListener("click", function () {
    circ.style.backgroundColor = "black";
    document.getElementById("operationheading").innerHTML = "No longer need your account? No problem! Close it instantly.";

    document.getElementById("operationp").innerHTML = "Duis aute irure dolor in reprehender it in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur s  int occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit   anim id est laborum.";


})


// for card  

function createCard(title, paragraph, thumbnail, name, info) {
    let HTML = `<div class="card">
            <div class="cardTP"> <h3>${title}</h3><p>${paragraph}</p> </br>
           <img src="${thumbnail}" alt="" class="profile">
            <span>${name}</span> <span> | </span>
            <span>${info}</span>
            </div>`
    document.querySelector(".cardSection").innerHTML += HTML;




}

createCard("Best financial decision ever!", "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium quas quisquam non? Quas voluptate nulla minima deleniti optio ullam nesciunt, numquam corporis et asperiores laboriosam sunt, praesentium suscipit blanditiis. Necessitatibus id alias reiciendis, perferendis facere pariatur dolore veniam autem esse non voluptatem saepe provident nihil molestiae.", "/img/user-1.jpg", "Ahmad Khan", "San Francisco, USA")
createCard("Finally free from old-school banks!", "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium quas quisquam non? Quas voluptate nulla minima deleniti optio ullam nesciunt, numquam corporis et asperiores laboriosam sunt, praesentium suscipit blanditiis. Necessitatibus id alias reiciendis, perferendis facere pariatur dolore veniam autem esse non voluptatem saepe provident nihil molestiae.", "/img/user-2.jpg", "Mudasir Khan", "Lisbon, Portugal")
createCard("The last step to becoming a complete minimalist", "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium quas quisquam non? Quas voluptate nulla minima deleniti optio ullam nesciunt, numquam corporis et asperiores laboriosam sunt, praesentium suscipit blanditiis. Necessitatibus id alias reiciendis, perferendis facere pariatur dolore veniam autem esse non voluptatem saepe provident nihil molestiae.", "/img/user-3.jpg", "Shah Khan", "London, UK")


const card = document.querySelectorAll(".card");
const radio = document.querySelectorAll("#radio");
let currentCard = 0;
card.forEach((card, index) => {
    if (index === 0) {
        card.style.display = "block";



    }
    else {

        card.style.display = "none";

    }

});
function showCard(cardIndex) {
    card.forEach((card, index) => {
        card.style.display = index === cardIndex ? "block" : "none";

    });

}
document.getElementById("left").addEventListener("click", function () {
    if (currentCard === 0) {
        currentCard = 1;

    } else if (currentCard === 1) {
        currentCard = 2;
    }
    else {
        currentCard = 0
    }
    showCard(currentCard);
})
document.getElementById("right").addEventListener("click", function () {
    if (currentCard === 0) {
        currentCard = 1;

    } else if (currentCard === 1) {
        currentCard = 2;
    }
    else {
        currentCard = 0
    }
    showCard(currentCard);
})


function nextCard() {
    currentCard = (currentCard + 1) % card.length;
    showCard(currentCard);
}
setInterval(nextCard, 1000);
document.getElementById("cross").addEventListener("click", function () {
    document.querySelectorAll(".container").forEach(Element => {
        Element.style.display = "none";
    });

});
document.getElementById("createAccount").addEventListener("click", function () {
    showLoader(); // Show the loader

    setTimeout(() => {
      
        hideLoader(); // Hide the loader after updating
    }, 1000); // Simulate a delay for loading

    document.querySelectorAll(".container").forEach(Element => {
        Element.style.display = "block";
    });

}); 


// Show the loader
function showLoader() {
    document.getElementById("loader").style.display = "flex";
}

// Hide the loader
function hideLoader() {
    document.getElementById("loader").style.display = "none";
}

// Example usage
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
