let homePoints = document.getElementById("home-points");
let guestPoints = document.getElementById("guest-points");
let newGame = document.getElementById("new-game");
let pointHome = 0;
let pointGuest = 0;

//add points home section
function add1PointHome(){
  pointHome += 1;
  homePoints.textContent = pointHome;
}

function add2PointsHome(){
  pointHome += 2;
  homePoints.textContent = pointHome;
}

function add3PointsHome(){
  pointHome += 3;
  homePoints.textContent = pointHome;
}

//add points guest section

function add1PointGuest(){
  pointGuest += 1;
  guestPoints.textContent = pointGuest;
}

function add2PointsGuest(){
  pointGuest += 2;
  guestPoints.textContent = pointGuest;
}

function add3PointsGuest(){
  pointGuest += 3;
  guestPoints.textContent = pointGuest;
}

// new game

function addNewGame(){
  pointHome = 0;
  pointGuest = 0;
  homePoints.textContent = 0;
  guestPoints.textContent = 0;
}


