function CervenaAuto (sviti: number) {
    pins.digitalWritePin(DigitalPin.P0, sviti)
}
function BlikejOranzovou () {
    SmeaforChodce("nic")
    SemaforAuta("oranzova")
    basic.pause(1000)
    SemaforAuta("nic")
    basic.pause(1000)
}
function ZelenaAuto (sviti: number) {
    pins.digitalWritePin(DigitalPin.P2, sviti)
}
function SemaforAuta (coMaSvitit: string) {
    if (coMaSvitit == "cervena") {
        CervenaAuto(1)
        OranzovaAuto(0)
        ZelenaAuto(0)
    } else if (coMaSvitit == "cervenaOranzova") {
        CervenaAuto(1)
        OranzovaAuto(1)
        ZelenaAuto(0)
    } else if (coMaSvitit == "zelena") {
        CervenaAuto(0)
        OranzovaAuto(0)
        ZelenaAuto(1)
    } else if (coMaSvitit == "oranzova") {
        CervenaAuto(0)
        OranzovaAuto(1)
        ZelenaAuto(0)
    } else {
        CervenaAuto(0)
        OranzovaAuto(0)
        ZelenaAuto(0)
    }
}
function ZelenaChodec (sviti: number) {
    pins.digitalWritePin(DigitalPin.P8, sviti)
}
function CervenaChodec (sviti: number) {
    pins.digitalWritePin(DigitalPin.P16, sviti)
}
function OranzovaAuto (sviti: number) {
    pins.digitalWritePin(DigitalPin.P1, sviti)
}
function Chodec () {
    if (prepniChodec == 1) {
        SmeaforChodce("cervena")
        basic.pause(2000)
        SemaforAuta("oranzova")
        basic.pause(2000)
        SemaforAuta("cervena")
        basic.pause(2000)
        SmeaforChodce("zelena")
        prepniChodec = 0
        basic.pause(5000)
        prepniAuto = 1
        mod = 2
    }
}
input.onButtonPressed(Button.A, function () {
    if (mod == 1) {
        prepniAuto = 1
        mod = 2
    }
})
function Auto () {
    if (prepniAuto == 1) {
        SmeaforChodce("cervena")
        SemaforAuta("cervena")
        basic.pause(3000)
        SemaforAuta("cervenaOranzova")
        basic.pause(2000)
        SemaforAuta("zelena")
        prepniAuto = 0
    }
}
function SmeaforChodce (coMaSvitit: string) {
    if (coMaSvitit == "cervena") {
        CervenaChodec(1)
        ZelenaChodec(0)
    } else if (coMaSvitit == "zelena") {
        CervenaChodec(0)
        ZelenaChodec(1)
    } else {
        CervenaChodec(0)
        ZelenaChodec(0)
    }
}
input.onButtonPressed(Button.B, function () {
    if (mod == 2) {
        mod = 1
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (mod == 2) {
        mod = 3
        prepniChodec += 1
    }
})
// 0 - vypnutý
// 1 - bliká oranžová
// 2 - auto
// 3 - chodec
// 
// 
let prepniChodec = 0
let prepniAuto = 0
let mod = 0
mod = 1
prepniAuto += 0
prepniChodec = 0
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
        Chodec()
    }
})
