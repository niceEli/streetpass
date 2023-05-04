enum RadioMessage {
    message1 = 49434,
    message2 = 1435
}
input.onGesture(Gesture.EightG, function () {
    music.playMelody("C D C C D E F D ", 200)
})
input.onGesture(Gesture.FreeFall, function () {
    music.playMelody("D F E D C C D C ", 200)
})
radio.onReceivedString(function (receivedString) {
    if (!(SN[SN.indexOf(receivedString)] == receivedString)) {
        SN.unshift(receivedString)
        basic.showLeds(`
            # # . # #
            # # . # #
            # # . # #
            # # # # #
            # # . # #
            `)
        tags += 1
    }
})
let breake = 0
let tags = 0
let SN: string[] = []
let messagen = 1
// make this your name
let name = "Eli"
basic.forever(function () {
    radio.sendMessage(RadioMessage.message1)
    radio.sendString(name)
})
basic.forever(function () {
    if (input.logoIsPressed()) {
        basic.clearScreen()
        basic.pause(100)
        basic.showString("Tags: " + tags)
        basic.clearScreen()
        breake = 1
        tags = 0
    }
    if (breake == 0) {
        if (input.buttonIsPressed(Button.A)) {
            basic.showString("" + (SN.length))
        }
        if (input.buttonIsPressed(Button.B)) {
            let names: number[] = []
            basic.showString("" + (names._pickRandom()))
        }
    }
    breake = 0
})
