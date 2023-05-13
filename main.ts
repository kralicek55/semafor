function BlikejOranzovou () {
    RozsvitOranzovou()
    basic.pause(1000)
    ZhasniOranzovou()
    basic.pause(1000)
}
function ZelenaChodec (sviti: number) {
    if (sviti == 1) {
        pins.digitalWritePin(DigitalPin.P8, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P8, 0)
    }
}
function CervenaChodec (sviti: number) {
    if (sviti == 1) {
        pins.digitalWritePin(DigitalPin.P16, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P16, 0)
    }
}
function Chodec (coMaSvitit: string) {
    if (coMaSvitit == "nic") {
        CervenaChodec(0)
        ZelenaChodec(0)
    } else if (coMaSvitit == "cervena") {
        CervenaChodec(1)
        ZelenaChodec(0)
    } else {
        CervenaChodec(0)
        ZelenaChodec(1)
    }
}
input.onButtonPressed(Button.A, function () {
    mod = 0
})
function ZhasniCervenou () {
    pins.digitalWritePin(DigitalPin.P0, 0)
}
function Auto () {
    RozsvitCervenou()
    basic.pause(5000)
    RozsvitOranzovou()
    basic.pause(2000)
    ZhasniCervenou()
    ZhasniOranzovou()
    RozsvitZelenou()
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
// 2 - auto
// 3 - chodec
// 
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
    if (mod == 1) {
        BlikejOranzovou()
    } else if (mod == 2) {
        Auto()
    } else {
    	
    }
})
