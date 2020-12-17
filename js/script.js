
//define interactive buttons
let playBtn = document.querySelector(`#play-btn`)
let pauseBtn = document.querySelector(`#pause-btn`)
let stopBtn = document.querySelector(`#stop-btn`)
let volume = document.querySelector(`#volume-slider`)

//define array and repositories
let instrSelected = [] 
let masterVolume = 0.5 
let musicFolder = `audio` 

//define audio files
let audioGuitar = new Audio(`audio/guitar.mp3`)
let audioUkulele = new Audio(`audio/ukulele.mp3`)
let audioTambo = new Audio(`audio/tambourine.mp3`)
let audioDjembe = new Audio(`audio/djembe.mp3`)
let audioCajon = new Audio(`audio/cajon.mp3`)
let audioMicOne = new Audio(`audio/voiceOne.mp3`)
let audioBass = new Audio(`audio/bass.mp3`)
// let audioMicTwo = new Audio(`audio/voiceTwo.mp3`)
// let audioSpeaker = new Audio(`audio/voiceThree.mp3`)

//define instruments images
let guitar = document.querySelector(`#guitar`)
let guitarCol = document.querySelector(`#guitar-col`)

let ukulele = document.querySelector(`#ukulele`)
let ukuleleCol = document.querySelector(`#ukulele-col`)

let tambo = document.querySelector(`#tambo`)
let tamboCol = document.querySelector(`#tambo-col`)

let djembe = document.querySelector(`#djembe`)
let djembeCol = document.querySelector(`#djembe-col`)

let cajon = document.querySelector(`#cajon`)
let cajonCol = document.querySelector(`#cajon-col`)

let micOne = document.querySelector(`#mic-one`)
let micOneCol = document.querySelector(`#mic-one-col`)

let micTwo = document.querySelector(`#mic-two`)
let micTwoCol = document.querySelector(`#mic-two-col`)

let speaker = document.querySelector(`#speaker`)
let speakerCol = document.querySelector(`#speaker-col`)

let bass = document.querySelector(`#bass`)
let bassCol = document.querySelector(`#bass-col`)

//add event listener to images (toggle between black-and-white and coloured images)
guitar.addEventListener(`click`, function() {
    guitar.classList.toggle(`inactive`)
    guitarCol.classList.add(`active`)
    instrSelected.push(audioGuitar)
})
guitarCol.addEventListener(`click`, function() {
    guitarCol.classList.toggle(`active`)
    guitar.classList.add(`active`)
})

ukulele.addEventListener(`click`, function() {
    ukulele.classList.toggle(`inactive`)
    ukuleleCol.classList.add(`active`)
    instrSelected.push(audioUkulele)
})
ukuleleCol.addEventListener(`click`, function() {
    ukuleleCol.classList.toggle(`active`)
    ukulele.classList.add(`active`)
})

tambo.addEventListener(`click`, function() {
    tambo.classList.toggle(`inactive`)
    tamboCol.classList.add(`active`)
    instrSelected.push(audioTambo)
})
tamboCol.addEventListener(`click`, function() {
    tamboCol.classList.toggle(`active`)
    tambo.classList.add(`active`)
})

djembe.addEventListener(`click`, function() {
    djembe.classList.toggle(`inactive`)
    djembeCol.classList.add(`active`)
    instrSelected.push(audioDjembe)
})
djembeCol.addEventListener(`click`, function() {
    djembeCol.classList.toggle(`active`)
    djembe.classList.add(audioCajon)
})

cajon.addEventListener(`click`, function() {
    cajon.classList.toggle(`inactive`)
    cajonCol.classList.add(`active`)
    instrSelected.push(`cajon`)
})
cajonCol.addEventListener(`click`, function() {
    cajonCol.classList.toggle(`active`)
    cajon.classList.add(`active`)
})

micOne.addEventListener(`click`, function() {
    micOne.classList.toggle(`inactive`)
    micOneCol.classList.add(`active`)
    instrSelected.push(audioMicOne)
})
micOneCol.addEventListener(`click`, function() {
    micOneCol.classList.toggle(`active`)
    micOne.classList.add(`active`)
})

micTwo.addEventListener(`click`, function() {
    micTwo.classList.toggle(`inactive`)
    micTwoCol.classList.add(`active`)
    // instrSelected.push(audioMicTwo)
})
micTwoCol.addEventListener(`click`, function() {
    micTwoCol.classList.toggle(`active`)
    micTwo.classList.add(`active`)
})

speaker.addEventListener(`click`, function() {
    speaker.classList.toggle(`inactive`)
    speakerCol.classList.add(`active`)
    // instrSelected.push(audioSpeaker)
})
speakerCol.addEventListener(`click`, function() {
    speakerCol.classList.toggle(`active`)
    speaker.classList.add(`active`)
})

bass.addEventListener(`click`, function() {
    bass.classList.toggle(`inactive`)
    bassCol.classList.add(`active`)
    instrSelected.push(audioBass)
})
bassCol.addEventListener(`click`, function() {
    bassCol.classList.toggle(`active`)
    bass.classList.add(`active`)
})

// add interaction to play/pause/stop buttons
playBtn.addEventListener(`click`, function() {
    playBtn.classList.toggle(`inactive`)
    pauseBtn.classList.add(`active`)
    stopBtn.classList.add(`active`)

    let playMusic = function(instrument) {
        console.log(`Playing:${instrument}`)
    }
    instrSelected.forEach(playMusic)

    playMusic
})
pauseBtn.addEventListener(`click`, function() {
    pauseBtn.classList.toggle(`active`)
    playBtn.classList.add(`active`)
})

// when stop button is pressed, reset the array to none

stopBtn.addEventListener(`click`, function() {
    stopBtn.classList.toggle(`active`)
    playBtn.classList.add(`active`)
    pauseBtn.classList.remove(`active`)
    let startNew = function() {
        instrSelected = []
    }
    startNew()
})



// let changeVolume = function(){
//     masterVolume = volume.value
// }
// volume.addEventListener(`change`, changeVolume)