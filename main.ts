input.onButtonPressed(Button.A, function () {
    radio.sendString("Hi")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
basic.showIcon(IconNames.Heart)
radio.setGroup(1)
basic.forever(function () {
	
})
