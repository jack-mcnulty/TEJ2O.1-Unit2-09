/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Jack
 * Created on: Sep 2025
 * This program plays rock, paper, scissors
*/

// variables
let randomNumber : number = 0 
let score : number = 0

// setup
basic.clearScreen()
basic.showIcon(IconNames.Happy)

// picking rock, paper, or scissors
input.onGesture(Gesture.Shake, function() {
    randomNumber = randint (0, 2)
    basic.clearScreen()
   
    // scissors
    if (randomNumber == 0) {
        basic.showIcon(IconNames.Scissors)
        basic.pause(1000)
        basic.showIcon(IconNames.Happy)
    }
   // rock
    if (randomNumber == 1) {
        basic.showIcon(IconNames.SmallSquare)
        basic.pause(1000)
        basic.showIcon(IconNames.Happy)
    }
  // paper
    if (randomNumber == 2) {
        basic.showIcon(IconNames.Square)
        basic.pause(1000)
        basic.showIcon(IconNames.Happy)
    }
})

// add to score
input.onButtonPressed(Button.A, function() {
   score = score + 1
   basic.clearScreen()
   basic.showIcon(IconNames.Yes)
   basic.pause(1000)
   basic.clearScreen()
   basic.showIcon(IconNames.Happy)
})

// show score
input.onButtonPressed(Button.B, function() {
    basic.clearScreen()
    basic.showString('Score: ' + score.toString() )
    basic.pause(1000)
    basic.clearScreen()
    basic.showIcon(IconNames.Happy)
})
