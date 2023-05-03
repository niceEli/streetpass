enum RadioMessage {
    message1 = 49434,
    message2 = 1435
}
radio.onReceivedString(function (receivedString) {
    if (timetillunlock == 0) {
        if (messagen == 1) {
            if (!(SN[SN.indexOf(receivedString)] == receivedString)) {
                SN.unshift(receivedString)
                basic.showLeds(`
                    # # . # #
                    # # . # #
                    # # . # #
                    # # # # #
                    # # . # #
                    `)
            } else {
                timetillunlock = 1
            }
        }
        if (messagen == 2) {
            names.unshift(receivedString)
        }
    } else {
        breake = 0
    }
})
radio.onReceivedMessage(RadioMessage.message2, function () {
    messagen = 2
})
radio.onReceivedMessage(RadioMessage.message1, function () {
    messagen = 1
})
let breake = 0
let names: string[] = []
let SN: string[] = []
let timetillunlock = 0
let messagen = 0
messagen = 1
// make this your name
let name = "Eli"
basic.forever(function () {
    radio.sendMessage(RadioMessage.message1)
    radio.sendString("" + (control.deviceSerialNumber()))
    radio.sendMessage(RadioMessage.message2)
    radio.sendString(name)
})
basic.forever(function () {
    if (input.logoIsPressed()) {
        basic.clearScreen()
        breake = 1
    }
    if (breake == 0) {
        if (input.buttonIsPressed(Button.A)) {
            basic.showString("" + (SN.length))
        }
        if (input.buttonIsPressed(Button.B)) {
            basic.showString("" + (names._pickRandom()))
        }
    }
    breake = 0
})
