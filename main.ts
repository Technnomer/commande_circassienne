input.onButtonPressed(Button.A, function () {
    Ordre += 1
    if (Ordre < 10) {
        basic.showNumber(Ordre)
    }
    if (Ordre == 10) {
        basic.showLeds(`
            # # # # #
            # # # # #
            . . . . .
            . . . . .
            . . . . .
            `)
    }
    if (Ordre == 11) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # . . . .
            . . . . .
            . . . . .
            `)
    }
    if (Ordre == 12) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # . . .
            . . . . .
            . . . . .
            `)
    }
    if (Ordre == 3) {
        basic.showLeds(`
            # # # . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(0)
    Ordre = 0
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(Ordre)
})
let Ordre = 0
radio.setGroup(1)
radio.setTransmitPower(7)
Ordre = 0
radio.sendNumber(0)
basic.forever(function () {
	
})
