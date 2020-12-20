
//define interactive buttons
let playBtn = document.getElementById(`play-btn`)
let pauseBtn = document.getElementById(`pause-btn`)
let stopBtn = document.getElementById(`stop-btn`)

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


//define array and set volumes
let instrSelected = [] 

// let masterVolume = 0.5 //tried to create master volume but code did not take

let initGuitarVol = 0.3
let initUkuleleVol = 0.3
let initTamboVol = 0.3
let initDjembeVol = 0.2
let initCajonVol = 0.4
let initMicOneVol = 0.5
let initBassVol = 0.4
let initMicTwoVol = 0.5
let initSpeakerVol = 0.3

//define audio files
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

// tried to change all instruments to black and white upon stop button click. But code would not recognize adding class to the following two variables. Writer added classes to each instrument individually to accommodate this get around this issue.
//seen in resetInstruments function below
// let colInstruments = document.querySelector(`#instruments-col`)
// let bwInstruments = document.querySelector(`#instruments-bw`)

//add event listener to images (toggle between black-and-white and coloured images)
//since instruments are pushed to the end of the array, they do not have the option of removing the instrument from the array 
//this was changed in final code used for web page
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
    djembe.classList.add(`active`)
})

cajon.addEventListener(`click`, function() {
    cajon.classList.toggle(`inactive`)
    cajonCol.classList.add(`active`)
    instrSelected.push(audioCajon)
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
    instrSelected.push(audioMicTwo)
})
micTwoCol.addEventListener(`click`, function() {
    micTwoCol.classList.toggle(`active`)
    micTwo.classList.add(`active`)
})

speaker.addEventListener(`click`, function() {
    speaker.classList.toggle(`inactive`)
    speakerCol.classList.add(`active`)
    instrSelected.push(audioSpeaker)
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
        instrument.play()
    }
    instrSelected.forEach(playMusic)
})

pauseBtn.addEventListener(`click`, function() {
    pauseBtn.classList.toggle(`active`)
    playBtn.classList.add(`active`)

    let pauseMusic = function(instrument) {
        instrument.pause()
    }
    instrSelected.forEach(pauseMusic)
})

// when stop button is pressed, reset the array to none

stopBtn.addEventListener(`click`, function() {
    stopBtn.classList.toggle(`active`)
    playBtn.classList.add(`active`)
    pauseBtn.classList.remove(`active`)

    let stopMusic = function(instrument) {
        instrument.load()
    }
    instrSelected.forEach(stopMusic)

    let startNew = function() {
        instrSelected = []
    }

    // reset all instruments to black and white when stop button is pressed. Tried using class with all instruments but the code wasn't working. 
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

        //tried using umbrella class to add/remove active/inactive class to bw and col instruments but code did not act the away I wanted it to
        // colInstruments.classList.remove(`active`)
        // colInstruments.classList.add(`inactive`)
        // bwInstruments.classList.add(`active`)
        // bwInstruments.classList.remove(`inactive`)
    }
    startNew()
    resetInstruments()
})

//volume settings (per instrument)

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