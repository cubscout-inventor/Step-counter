input.onGesture(Gesture.Shake, function () {
    set_step_to += 1
    led.stopAnimation()
})
let set_step_to = 0
basic.forever(function () {
    basic.showNumber(0)
})
