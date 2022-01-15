//Keys
const c1 = document.getElementById("C1")
const d1 = document.getElementById("D1")
const e1 = document.getElementById("E1")
const f1 = document.getElementById("F1")
const g1 = document.getElementById("G1")
const a1 = document.getElementById("A1")
const b1 = document.getElementById("B1")
const c2 = document.getElementById("C2")

//Btns
const listenBtn = document.getElementById("listen")
const play = document.getElementById("play")

//Our notes
const c4_sound = new Audio("./notes/c4.wav")

//Notes pressed list
let pressed_keys = []

//Our functions
const repeat_pattern = (e) => {
    pressed_keys.push(e.key)
}



listenBtn.addEventListener("click", () => {
    document.addEventListener("keyup", repeat_pattern)
})

play.addEventListener("click", () => {
    document.removeEventListener('keyup', repeat_pattern)
    pressed_keys.forEach((key, i) =>{ 
        setTimeout(() => {
            const audio = document.querySelector(`audio[data-key="${key}"]`)
            const note = document.querySelector(`div[data-key="${key}"]`)
            if(!audio) return;
            audio.currentTime = 0
            audio.play()
            note.classList.add("key-pressed")
            setTimeout(() => {
            note.classList.remove("key-pressed")
            }, 250)

        }, i * 700) 
    })
    pressed_keys = []
})


document.addEventListener("keyup", (e) => {
    const audio = document.querySelector(`audio[data-key="${e.key}"]`)
    const note = document.querySelector(`div[data-key="${e.key}"]`)
    if(!audio) return;
    audio.currentTime = 0
    audio.play()
    note.classList.add("key-pressed")
    setTimeout(() => {
    note.classList.remove("key-pressed")
    }, 250)

})


c1.addEventListener("click", () => {
    c4_sound.currentTime = 0
    let promise = c4_sound.play()
    if (promise){
        promise.catch(function(error) {
            console.log(error)
        })
    }
    c1.classList.add("key-pressed")
    setTimeout(() => {
    c1.classList.remove("key-pressed")
    }, 250)
})

d1.addEventListener("click", () => {
    const key = new Audio("./notes/d4.mp3")
    key.play()
    d1.classList.add("key-pressed")
    setTimeout(() => {
    d1.classList.remove("key-pressed")
    }, 250)
    
})

e1.addEventListener("click", () => {
    const key = new Audio("./notes/e4.mp3")
    key.play()
    e1.classList.add("key-pressed")
    setTimeout(() => {
    e1.classList.remove("key-pressed")
    }, 250)
})

f1.addEventListener("click", () => {
    const key = new Audio("./notes/f4.mp3")
    key.play()
    f1.classList.add("key-pressed")
    setTimeout(() => {
    f1.classList.remove("key-pressed")
    }, 250)
})

g1.addEventListener("click", () => {
    const key = new Audio("./notes/g4.mp3")
    key.play()
    g1.classList.add("key-pressed")
    setTimeout(() => {
    g1.classList.remove("key-pressed")
    }, 250)
})

a1.addEventListener("click", () => {
    const key = new Audio("./notes/a4.mp3")
    key.play()
    a1.classList.add("key-pressed")
    setTimeout(() => {
    a1.classList.remove("key-pressed")
    }, 250)
})

b1.addEventListener("click", () => {
    const key = new Audio("./notes/b4.mp3")
    key.play()
    b1.classList.add("key-pressed")
    setTimeout(() => {
    b1.classList.remove("key-pressed")
    }, 250)
})

c2.addEventListener("click", () => {
    const key = new Audio("./notes/c5.mp3")
    key.play()
    c2.classList.add("key-pressed")
    setTimeout(() => {
    c2.classList.remove("key-pressed")
    }, 250)
})