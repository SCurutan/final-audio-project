//define interactive buttons
let playBtn = document.getElementById(`play-btn`)
let pauseBtn = document.getElementById(`pause-btn`)
let stopBtn = document.getElementById(`stop-btn`)
let resetBtn = document.getElementById(`reset-btn`)

//define range sliders per instrument
let volumeGuitar = document.getElementById(`volume-guitar`)
let volumeUkulele = document.getElementById(`volume-ukulele`)
let volumeTambo = document.getElementById(`volume-tambo`)
let volumeDjembe = document.getElementById(`volume-djembe`)
let volumeCajon = document.getElementById(`volume-cajon`)
let volumeMicOne = document.getElementById(`volume-mic-one`)
let volumeBass = document.getElementById(`volume-bass`)
let volumeMicTwo = document.getElementById(`volume-mic-two`)
let volumeSpeaker = document.getElementById(`volume-speaker`)

//define array
let instrSelected = [] 

//define Boolean
let isMusicPlaying = false

//set initial volumes of instruments
let initGuitarVol = 0.3
let initUkuleleVol = 0.3
let initTamboVol = 0.3
let initDjembeVol = 0.2
let initCajonVol = 0.4
let initMicOneVol = 0.5
let initBassVol = 0.4
let initMicTwoVol = 0.5
let initSpeakerVol = 0.3

// //define audio files
let audioGuitar = new Audio(`audio/guitar.mp3`)
let audioUkulele = new Audio(`audio/ukulele.mp3`)
let audioTambo = new Audio(`audio/tambourine.mp3`)
let audioDjembe = new Audio(`audio/djembe.mp3`)
let audioCajon = new Audio(`audio/cajon.mp3`)
let audioMicOne = new Audio(`audio/voiceOne.mp3`)
let audioBass = new Audio(`audio/bass.mp3`)
let audioMicTwo = new Audio(`audio/voiceTwo.mp3`)
let audioSpeaker = new Audio(`audio/speakers.mp3`)

//set all audio to initial instrument volumes
audioGuitar.volume = initGuitarVol
audioUkulele.volume = initUkuleleVol
audioTambo.volume = initTamboVol
audioDjembe.volume = initDjembeVol
audioCajon.volume = initCajonVol
audioMicOne.volume = initMicOneVol
audioBass.volume = initBassVol
audioMicTwo.volume = initMicTwoVol
audioSpeaker.volume = initSpeakerVol

//define instruments images
let guitar = document.getElementById(`guitar`)
let guitarCol = document.getElementById(`guitar-col`)

let ukulele = document.getElementById(`ukulele`)
let ukuleleCol = document.getElementById(`ukulele-col`)

let tambo = document.getElementById(`tambo`)
let tamboCol = document.getElementById(`tambo-col`)

let djembe = document.getElementById(`djembe`)
let djembeCol = document.getElementById(`djembe-col`)

let cajon = document.getElementById(`cajon`)
let cajonCol = document.getElementById(`cajon-col`)

let micOne = document.getElementById(`mic-one`)
let micOneCol = document.getElementById(`mic-one-col`)

let micTwo = document.getElementById(`mic-two`)
let micTwoCol = document.getElementById(`mic-two-col`)

let speaker = document.getElementById(`speaker`)
let speakerCol = document.getElementById(`speaker-col`)

let bass = document.getElementById(`bass`)
let bassCol = document.getElementById(`bass-col`)

//used this function to reset images less efficently than forEach
    let resetInstruments = function() {
        guitar.classList.remove(`inactive`)
        guitarCol.classList.remove(`active`)
        ukulele.classList.remove(`inactive`)
        ukuleleCol.classList.remove(`active`)
        cajon.classList.remove(`inactive`)
        cajonCol.classList.remove(`active`)
        micOne.classList.remove(`inactive`)
        micOneCol.classList.remove(`active`)
        micTwo.classList.remove(`inactive`)
        micTwoCol.classList.remove(`active`)
        speaker.classList.remove(`inactive`)
        speakerCol.classList.remove(`active`)
        bass.classList.remove(`inactive`)
        bassCol.classList.remove(`active`)
        djembe.classList.remove(`inactive`)
        djembeCol.classList.remove(`active`)
        tambo.classList.remove(`inactive`)
        tamboCol.classList.remove(`active`)
    }

//used this function to reset the array to none 
    let startNew = function() {
        instrSelected = []
    }

//add event listener to images (toggle between black-and-white and coloured images)
guitar.addEventListener(`click`, function() {
    guitar.classList.toggle(`inactive`)
    guitarCol.classList.add(`active`)
    instrSelected.push(audioGuitar)
})

ukulele.addEventListener(`click`, function() {
    ukulele.classList.toggle(`inactive`)
    ukuleleCol.classList.add(`active`)
    instrSelected.push(audioUkulele)
})

tambo.addEventListener(`click`, function() {
    tambo.classList.toggle(`inactive`)
    tamboCol.classList.add(`active`)
    instrSelected.push(audioTambo)
})

djembe.addEventListener(`click`, function() {
    djembe.classList.toggle(`inactive`)
    djembeCol.classList.add(`active`)
    instrSelected.push(audioDjembe)
})

cajon.addEventListener(`click`, function() {
    cajon.classList.toggle(`inactive`)
    cajonCol.classList.add(`active`)
    instrSelected.push(audioCajon)
})

micOne.addEventListener(`click`, function() {
    micOne.classList.toggle(`inactive`)
    micOneCol.classList.add(`active`)
    instrSelected.push(audioMicOne)
})

micTwo.addEventListener(`click`, function() {
    micTwo.classList.toggle(`inactive`)
    micTwoCol.classList.add(`active`)
    instrSelected.push(audioMicTwo)
})

speaker.addEventListener(`click`, function() {
    speaker.classList.toggle(`inactive`)
    speakerCol.classList.add(`active`)
    instrSelected.push(audioSpeaker)
})

bass.addEventListener(`click`, function() {
    bass.classList.toggle(`inactive`)
    bassCol.classList.add(`active`)
    instrSelected.push(audioBass)
})

// add interaction to play/pause/stop buttons
playBtn.addEventListener(`click`, function() {
    if (instrSelected.length === 0){
        window.alert(`Remember to select your instruments`)
        return
    } else {
        playBtn.classList.toggle(`inactive`)
        pauseBtn.classList.add(`active`)
        stopBtn.classList.add(`active`)
            let playMusic = function(instrument) {
                    instrument.play()
                }
        instrSelected.forEach(playMusic)
    }

})

pauseBtn.addEventListener(`click`, function() {
    pauseBtn.classList.toggle(`active`)
    playBtn.classList.add(`active`)

    let pauseMusic = function(instrument) {
        instrument.pause()
    }
    instrSelected.forEach(pauseMusic)

})

// when stop button is pressed, reset all instrument images to black and white and the array to none

stopBtn.addEventListener(`click`, function() {
    stopBtn.classList.toggle(`active`)
    playBtn.classList.add(`active`)
    pauseBtn.classList.remove(`active`)

    let stopMusic = function(instrument) {
        instrument.load()
    }
    instrSelected.forEach(stopMusic)

    startNew()
    resetInstruments()
})

// when reset instruments button is pressed, reset all instrument images to black and white images and the array to none

resetBtn.addEventListener(`click`, function() {
    let stopMusic = function(instrument) {
        instrument.load()
    }
    instrSelected.forEach(stopMusic)

    if (isMusicPlaying = true) {
        pauseBtn.classList.remove(`active`)
        playBtn.classList.add(`active`)
    }

    isMusicPlaying = false

    resetInstruments()
    startNew()
})

//group coloured instruments images and black and white instruments images into two separate variables to change active/inactive status
//querySelectorAll to find all instances (not just the first)
//had issues using forEach to change the class of these items when pressing reset button

// let colInstruments = document.querySelectorAll(`.col`)
// let bwInstruments = document.querySelectorAll(`.bw`)

//first try using forEach
// let removeColour = function(instrument){
//     let changeInstruments = function() {
//         bwInstruments.classList.add(`active`)
//         colInstruments.classList.remove(`active`)
//     }

//     instrument.addEventListener(`click`, changeInstruments)
// }

// colInstruments.forEach(removeColour)

//second try using forEach
// resetBtn.addEventListener(`click`, function() {

//     let removeColImg = colInstruments.forEach(function(removeColour) {
//         removeColour.classList.remove('active');
//       })

//     let addBwImg = bwInstruments.forEach(function(addBw) {
//         addBw.classList.remove('inactive');
// })
// })

//third try using forEach
// let activeImages = document.querySelectorAll(`active`)

// activeImages.forEach(function(resetBtn){

//      resetBtn.addEventListener(`click`,function(){
//            colInstruments.classList.remove(`active`)
//            bwInstruments.classList.toggle(`inactive`)

//     })
// })

//add event listeners to allow change in volume settings (per instrument)

let changeGuitarVol = function(){
    audioGuitar.volume = volumeGuitar.value
}
volumeGuitar.addEventListener(`change`, changeGuitarVol)

let changeUkuleleVol = function(){
    audioUkulele.volume = volumeUkulele.value
}
volumeUkulele.addEventListener(`change`, changeUkuleleVol)

let changeTamboVol = function(){
    audioTambo.volume = volumeTambo.value
}
volumeTambo.addEventListener(`change`, changeTamboVol)

let changeDjembeVol = function(){
    audioDjembe.volume = volumeDjembe.value
}
volumeDjembe.addEventListener(`change`, changeDjembeVol)

let changeCajonVol = function(){
    audioCajon.volume = volumeCajon.value
}
volumeCajon.addEventListener(`change`, changeCajonVol)

let changeMicOneVol = function(){
    audioMicOne.volume = volumeMicOne.value
}
volumeMicOne.addEventListener(`change`, changeMicOneVol)

let changeMicTwoVol = function(){
    audioMicTwo.volume = volumeMicTwo.value
}
volumeMicTwo.addEventListener(`change`, changeMicTwoVol)

let changeBassVol = function(){
    audioBass.volume = volumeBass.value
}
volumeBass.addEventListener(`change`, changeBassVol)

let changeSpeakerVol = function(){
    audioSpeaker.volume = volumeSpeaker.value
}
volumeSpeaker.addEventListener(`change`, changeSpeakerVol)

//images return to black and white state once audio file is done

audioGuitar.addEventListener(`ended`, function(){
    audioGuitar.currentTime = 0;
    resetInstruments()
});

audioUkulele.addEventListener(`ended`, function(){
    audioUkulele.currentTime = 0;
    resetInstruments()
});

audioTambo.addEventListener(`ended`, function(){
    audioTambo.currentTime = 0;
    resetInstruments()
});

audioDjembe.addEventListener(`ended`, function(){
    audioDjembe.currentTime = 0;
    resetInstruments()
});

audioCajon.addEventListener(`ended`, function(){
    audioCajon.currentTime = 0;
    resetInstruments()
});

audioMicOne.addEventListener(`ended`, function(){
    audioMicOne.currentTime = 0;
    resetInstruments()
});

audioMicTwo.addEventListener(`ended`, function(){
    audioMicTwo.currentTime = 0;
    resetInstruments()
});

audioSpeaker.addEventListener(`ended`, function(){
    audioSpeaker.currentTime = 0;
    resetInstruments()
});

audioBass.addEventListener(`ended`, function(){
    audioBass.currentTime = 0;
    resetInstruments()
});