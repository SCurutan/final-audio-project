
// //define interactive buttons
// let playBtn = document.querySelector(`#play-btn`)
// let pauseBtn = document.querySelector(`#pause-btn`)
// let stopBtn = document.querySelector(`#stop-btn`)
// let volume = document.querySelector(`#volume-slider`)

// //define range input for guitar
// let volumeGuitar = document.querySelector(`#volume-guitar`)

// //define array and repositories
// let instrSelected = [] 
// let masterVolume = 0.5 
// let initGuitarVol = 0.3

// //define audio files
// let audioGuitar = new Audio(`audio/guitar.m4a`)

// //set all audio to master volume intially
// audioGuitar.volume = initGuitarVol

// //define instruments images
// let guitar = document.querySelector(`#guitar`)
// let guitarCol = document.querySelector(`#guitar-col`)

// //add event listener to images (toggle between black-and-white and coloured images)
// //add play guitar audio to test out volume sliders
// guitar.addEventListener(`click`, function() {
//     guitar.classList.toggle(`inactive`)
//     guitarCol.classList.add(`active`)
//     instrSelected.push(audioGuitar)
//     audioGuitar.volume = initGuitarVol
//     audioGuitar.play()
// })
// guitarCol.addEventListener(`click`, function() {
//     guitarCol.classList.toggle(`active`)
//     guitar.classList.add(`active`)
// })

// //volume settings for guitar

// let changeVolume = function(){
//     audioGuitar.volume = volumeGuitar.value
// }

// volumeGuitar.addEventListener(`change`, changeVolume)

let masterVolume = 0.5 // Default volume

let rngVol = document.querySelector(`#volume`) // Volume

// "Replay" button was pressed...
let replayNotes = function() {

let updateVolume = function() {
  // Change the master volume when the slider changes
  masterVolume = rngVol.value
}

rngVol.addEventListener(`change`, updateVolume) // Volume slide was updated
