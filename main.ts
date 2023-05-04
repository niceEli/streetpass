enum RadioMessage {
    message2 = 1435,
    message1 = 49434
}
input.onGesture(Gesture.ScreenDown, function () {
    basic.clearScreen()
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
        datalogger.deleteLog(datalogger.DeleteType.Full)
        datalogger.log(datalogger.createCV("1", tags))
        music.playSoundEffect(music.createSoundEffect(WaveShape.Square, 1600, 1, 255, 0, 300, SoundExpressionEffect.None, InterpolationCurve.Logarithmic), SoundExpressionPlayMode.UntilDone)
    }
})
let breake = 0
let tags = 0
let SN: string[] = []
let namez
let messagen = 1
// make this your name
let name = "Eli"
music.playSoundEffect(music.builtinSoundEffect(soundExpression.giggle), SoundExpressionPlayMode.UntilDone)
basic.forever(function () {
    radio.sendMessage(RadioMessage.message1)
    radio.sendString(name)
})
basic.forever(function () {
    namez = SN.join(", ")
if (input.logoIsPressed()) {
        basic.clearScreen()
        basic.pause(100)
        basic.showString("New Tags: " + tags)
        basic.clearScreen()
        breake = 1
        tags = 0
    }
    if (breake == 0) {
        if (input.buttonIsPressed(Button.A)) {
            basic.showString("Tags: " + SN.length)
        }
        if (input.buttonIsPressed(Button.B)) {
            basic.showString("" + (namez))
        }
    }
    breake = 0
})
