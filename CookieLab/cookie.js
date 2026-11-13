function setCookie(cookieName, cookieValue, exdays) {
    let cookieDate = new Date();
    let expiryTime = exdays * 24 * 60 * 60 * 1000 
    cookieDate.setTime(cookieDate.getTime() + expiryTime);
    let expires = "expires=" + cookieDate.toUTCString();
    document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/";  
}

setCookie("clicks", 0, 1);

function getCookie(cookieName) {
    let name = cookieName + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let myCookie = decodedCookie.split(';');
    for (let i = 0; i < myCookie.length; i++) {
        let cookie = myCookie[i];
        while (cookie.charAt(0) == ' ') {
            cookie = cookie.substring(1);
            return cookie.substring(name.length, cookie.length);
        }
        }
        return "";
    }

    getCookie("clicks");

    function updatedCookie(cookieName) {
        document.getElementById("cookieButton").onclick = function() {
            let cookieValue = parseInt(getCookie(cookieName)) || 0;
            cookieValue++;
            setCookie(cookieName, cookieValue, 1);
            document.getElementById("cookieCount").textContent = "You fool! Now I know you cliked the button " + cookieValue + " times!";
        }
    }

    window.localStorage.setItem('updatedCookie', JSON.stringify(updatedCookie))

// document.cookie = "cookieValue=0; expires=

// document.getElementById("cookieButton").onclick = function() {
//     cookieValue++
// }

