let deg = 0
basic.forever(function () {
    deg = input.compassHeading()
    if (deg > 315 || deg <= 45) {
        basic.showString("N")
        Kitronik_LAMPbit.lampLightLED(Kitronik_LAMPbit.DisplayLamp.On)
    } else if (deg > 45 && deg <= 135) {
        basic.showString("E")
    } else if (deg > 135 && deg <= 225) {
        basic.showString("S")
    } else if (deg > 225 && deg <= 315) {
        basic.showString("W")
    }
})
