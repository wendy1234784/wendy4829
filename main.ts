input.onButtonPressed(Button.A, function () {
    回答 = 1
    if (題目[I] == 回答) {
        basic.showLeds(`
            . . # . .
            . # . # .
            # . . . #
            . # . # .
            . . # . .
            `)
    } else {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    }
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
input.onButtonPressed(Button.AB, function () {
    I += 1
})
input.onButtonPressed(Button.B, function () {
    回答 = 0
    if (題目[I] == 回答) {
        basic.showLeds(`
            . . # . .
            . # . # .
            # . . . #
            . # . # .
            . . # . .
            `)
    } else {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . #
            . # . # .
            # . . . #
            `)
    }
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
let 回答 = 0
let 題目: number[] = []
let I = 0
I = 0
題目 = [
1,
1,
0,
0
]
basic.forever(function () {
	
})
