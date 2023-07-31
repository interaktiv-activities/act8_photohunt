// The following variables below are all the sound variables and mute/unmute fucntions 
var backgroundMusic = new Audio();
backgroundMusic.src = "SOUNDS/background-music.mp3"

let backgroundMusicStatus = 0
let backgroundMusicInterval 

function playBackgroundMusic(){
    backgroundMusic.play()
    backgroundMusic.volume = 0.1
}

function muteBackgroundMusic(){
    if (backgroundMusicStatus == 0){
        document.getElementById("mute-btn-img").setAttribute("src","ASSETS/HEADER/mute.png")
        backgroundMusic.volume = 0
        backgroundMusicStatus++
    } else {
        document.getElementById("mute-btn-img").setAttribute("src","ASSETS/HEADER/unmute.png")
        backgroundMusic.volume = 0.1
        backgroundMusicStatus--
    }
}

document.getElementById("mute-header-btn").addEventListener("click", muteBackgroundMusic)
//END HERE

// The following lines of codes include all of the functions and variables needed for you to transition from the start screen to the game board
let startScreenTimer

function startTicketInterval(){
    startScreenTimer = setInterval(startGame ,500)
    document.getElementById("right-ticket-img").style.opacity = "0%"
}

// Add the function below to your start game function
function hideStartScreen(){
    document.getElementById("start-screen").style.display = "none"
    playBackgroundMusic()
    backgroundMusicInterval = setInterval(playBackgroundMusic, 120000)
    clearInterval(startScreenTimer)
}

document.getElementById("start-button").addEventListener("click", startTicketInterval)
// END HERE

// The following lines of codes hides all the header and gameboard elements, and shows the end message
function endGame(){
    document.getElementById("game-board").style.display = "none"
    document.getElementById("header").style.display = "none"
    clearInterval(backgroundMusicInterval)
    backgroundMusic.volume = 0
    document.getElementById("end-screen").style.display = "flex"
}
// END HERE

let imageValue1, imageValue2, imageValue3, imageValue4, imageValue5, imageValue6, imageValue7, imageValue8, imageValue9

let imagebankArray = [
    [1, true], [2, true], [3, true], [4, true], [5, true],
    [6, true], [7, true], [8, true], [9, true], [10, true],
    [11, true], [12, true], [13, true], [14, true], [15, true],
    [16, true], [17, true], [18, true], [19, true], [20, true],
    [21, true], [22, true], [23, true], [24, true], [25, true],
    [26, true], [27, true], [28, true], [29, true], [30, true],
    [31, true], [32, true], [33, true], [34, true], [35, true],
    [36, true], [37, true], [38, true], [39, true], [40, true],
    [41, true], [42, true], [43, true], [44, true], [45, true],
    [46, false], [47, false], [48, false], [49, false], [50, false],
    [51, false], [52, false], [53, false], [54, false], [55, false],
    [56, false], [57, false], [58, false], [59, false], [60, false],
    [61, false], [62, false], [63, false], [64, false], [65, false],
    [66, false], [67, false], [68, false], [69, false], [70, false],
    [71, false], [72, false], [73, false], [74, false], [75, false],
    [76, false], [77, false], [78, false], [79, false], [80, false],
    [81, false], [82, false], [83, false], [84, false], [85, false],
    [86, false], [87, false], [88, false], [89, false], [90, false],
]

function generateRandomNumber(min, max) {
    let minMaxValue = max - min + 1
    return Math.floor(Math.random() * minMaxValue)
}

function changeDisplay1() {
    let randomIndex = generateRandomNumber(0, imagebankArray.length - 1) /* creates a random number based on array length */
    let randomNumber = imagebankArray[randomIndex][0] /*gets the number from the array*/
    let imageDisplay = "ITEMS/image (" + randomNumber + ").png"  /*creates the new name of the image output in the game */
    document.getElementById("output1").setAttribute("src", imageDisplay)  /*changes the image displayed on the grid */
    imageValue1 = imagebankArray[randomIndex][1] /*changes the value of the image to the boolean value of the array item*/
    imagebankArray.splice(randomIndex, 1) /*removes the number in the array based on the index */
}

function changeDisplay2() {
    let randomIndex = generateRandomNumber(0, imagebankArray.length - 1) 
    let randomNumber = imagebankArray[randomIndex][0] 
    let imageDisplay = "ITEMS/image (" + randomNumber + ").png" 
    document.getElementById("output2").setAttribute("src", imageDisplay) 
    imageValue2 = imagebankArray[randomIndex][1] 
    imagebankArray.splice(randomIndex, 1) 
}

function changeDisplay3() {
    let randomIndex = generateRandomNumber(0, imagebankArray.length - 1) 
    let randomNumber = imagebankArray[randomIndex][0] 
    let imageDisplay = "ITEMS/image (" + randomNumber + ").png" 
    document.getElementById("output3").setAttribute("src", imageDisplay) 
    imageValue3 = imagebankArray[randomIndex][1] 
    imagebankArray.splice(randomIndex, 1) 
}
function changeDisplay4() {
    let randomIndex = generateRandomNumber(0, imagebankArray.length - 1) 
    let randomNumber = imagebankArray[randomIndex][0] 
    let imageDisplay = "ITEMS/image (" + randomNumber + ").png" 
    document.getElementById("output4").setAttribute("src", imageDisplay) 
    imageValue4 = imagebankArray[randomIndex][1] 
    imagebankArray.splice(randomIndex, 1) 
}
function changeDisplay5() {
    let randomIndex = generateRandomNumber(0, imagebankArray.length - 1) 
    let randomNumber = imagebankArray[randomIndex][0] 
    let imageDisplay = "ITEMS/image (" + randomNumber + ").png" 
    document.getElementById("output5").setAttribute("src", imageDisplay) 
    imageValue5 = imagebankArray[randomIndex][1] 
    imagebankArray.splice(randomIndex, 1) 
}

function changeDisplay6() {
    let randomIndex = generateRandomNumber(0, imagebankArray.length - 1) 
    let randomNumber = imagebankArray[randomIndex][0] 
    let imageDisplay = "ITEMS/image (" + randomNumber + ").png" 
    document.getElementById("output6").setAttribute("src", imageDisplay) 
    imageValue6 = imagebankArray[randomIndex][1] 
    imagebankArray.splice(randomIndex, 1) 
}

function changeDisplay7() {
    let randomIndex = generateRandomNumber(0, imagebankArray.length - 1) 
    let randomNumber = imagebankArray[randomIndex][0] 
    let imageDisplay = "ITEMS/image (" + randomNumber + ").png" 
    document.getElementById("output7").setAttribute("src", imageDisplay) 
    imageValue7 = imagebankArray[randomIndex][1] 
    imagebankArray.splice(randomIndex, 1) 
}

function changeDisplay8() {
    let randomIndex = generateRandomNumber(0, imagebankArray.length - 1) 
    let randomNumber = imagebankArray[randomIndex][0] 
    let imageDisplay = "ITEMS/image (" + randomNumber + ").png" 
    document.getElementById("output8").setAttribute("src", imageDisplay) 
    imageValue8 = imagebankArray[randomIndex][1] 
    imagebankArray.splice(randomIndex, 1) 
}

function changeDisplay9() {
    let randomIndex = generateRandomNumber(0, imagebankArray.length - 1) 
    let randomNumber = imagebankArray[randomIndex][0] 
    let imageDisplay = "ITEMS/image (" + randomNumber + ").png" 
    document.getElementById("output9").setAttribute("src", imageDisplay) 
    imageValue9 = imagebankArray[randomIndex][1] 
    imagebankArray.splice(randomIndex, 1) 
}

/* Changes the display of the image and starts the game */
function startGame() {
    hideStartScreen()
    changeDisplay1()
    changeDisplay2()
    changeDisplay3()
    changeDisplay4()
    changeDisplay5()
    changeDisplay6()
    changeDisplay7()
    changeDisplay8()
    changeDisplay9()
}

/* Checks whether all of the images return true (inclusive) or false (non-inclusive)*/
function submitAnswer() {
    if (imageValue1 == true && imageValue2 == true && imageValue3 == true && imageValue4 == true && imageValue5 == true &&
        imageValue6 == true && imageValue7 == true && imageValue8 == true && imageValue9 == true){
            endGame()
    } else {
        alert("PLEASE TRY AGAIN! There is one or more images that is NOT inclusive.")
    }
}