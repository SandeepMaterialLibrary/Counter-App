let homeCount = 0;
let guestCount = 0;

let homeScore = document.getElementById('home-score')
 homeScore.textContent =  homeCount;

let guestScore = document.getElementById('guest-score')
  guestScore.textContent =  guestCount;

// let scoreHome1 = document.getElementById('home-score')
// scoreHome1.textContent = count


function dataH1() {
     homeCount += 1;
     homeScore.textContent =  homeCount;
}
function dataH2() {
     homeCount += 2;
     homeScore.textContent =  homeCount;
}
function dataH3() {
     homeCount += 3;
     homeScore.textContent =  homeCount;
}
function dataG1() {
     guestCount += 1;
     guestScore.textContent =  guestCount;
}
function dataG2() {
     guestCount += 2;
     guestScore.textContent =  guestCount;
}
function dataG3() {
     guestCount += 3;
     guestScore.textContent =  guestCount;
}
function resetall() {
    homeCount=0;
    guestCount=0;
    homeScore.textContent =  homeCount;
    guestScore.textContent =  guestCount;
}
