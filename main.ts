function BlikejOranzovou () {
    RozsvitOranzovou()
    basic.pause(1000)
    ZhasniOranzovou()
    basic.pause(1000)
}
function Vypnuty () {
    ZhasniCervenou()
    ZhasniOranzovou()
    ZhasniZelenou()
}
input.onButtonPressed(Button.A, function () {
    mod = 0
})
function ZhasniCervenou () {
    pins.digitalWritePin(DigitalPin.P0, 0)
}
function ZhasniOranzovou () {
    pins.digitalWritePin(DigitalPin.P1, 0)
}
function RozsvitOranzovou () {
    pins.digitalWritePin(DigitalPin.P1, 1)
}
function ZhasniZelenou () {
    pins.digitalWritePin(DigitalPin.P2, 0)
}
input.onButtonPressed(Button.B, function () {
    mod = 2
})
function Zapnuty () {
    RozsvitCervenou()
    basic.pause(5000)
    RozsvitOranzovou()
    basic.pause(2000)
    ZhasniCervenou()
    ZhasniOranzovou()
    RozsvitZelenou()
    basic.pause(5000)
    ZhasniZelenou()
    RozsvitOranzovou()
    basic.pause(2000)
    ZhasniOranzovou()
}
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    mod = 1
})
function RozsvitZelenou () {
    pins.digitalWritePin(DigitalPin.P2, 1)
}
function RozsvitCervenou () {
    pins.digitalWritePin(DigitalPin.P0, 1)
}
// 0 - vypnutý
// 1 - bliká oranžová
// 2 - zapnutý
// 
// tlačítko pro chodce
// 
let mod = 0
mod = 1
basic.showLeds(`
    . . # # #
    . # . # #
    # . . . #
    # # . # .
    # # # . .
    `)
basic.forever(function () {
    if (mod == 0) {
        Vypnuty()
    } else if (mod == 1) {
        BlikejOranzovou()
    } else {
        Zapnuty()
    }
})
