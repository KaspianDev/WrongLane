/*
First time? Check out the tutorial game:
https://sprig.hackclub.com/gallery/getting_started

@title: WrongLane
@author: 
@tags: []
@addedOn: 2024-00-00
*/

const player = "p"
const car = "c"
const truck = "t"
const grass = "g"
const roadLeft = "l"
const roadRight = "r"
const roadMiddle = "m"

const menuBackgroundLeft = "h"
const menuBackground = "j"
const menuBackgroundRight = "k"

setLegend(
  [player, bitmap`
....6LLLLLL6....
...6LL0000LL6...
...LL077770LL...
..0L07777770L0..
..0L07777770L0..
..0L00000000L0..
...L00111100L...
...L01111110L...
...L01111110L...
...L00111100L...
...L00000000L...
..0L07777770L0..
..0L00777700L0..
..0LLL0000LLL0..
...3LLLLLLLL3...
...33LLLLLL33...`],
  [car, bitmap`
...33HHHHHH33...
...3HHHHHHHH3...
..0HHH0000HHH0..
..0H00777700H0..
..0H07777770H0..
...H00000000H...
...H00888800H...
...H08888880H...
...H08888880H...
...H00888800H...
..0H00000000H0..
..0H07777770H0..
..0H07777770H0..
...HH077770HH...
...6HH0000HH6...
....6HHHHHH6....`],
  [truck, bitmap`
...3000000003...
...30D4444D03...
...D04444440D...
..0D04444440D0..
..0D04444440D0..
..0D0D4444D0D0..
...D00000000D...
...D00000000D...
...D04444440D...
...D04444440D...
...D00444400D...
...D00000000D...
..0D07777770D0..
..0D07777770D0..
..0DD000000DD0..
...66DDDDDD66...`],
  [grass, bitmap`
DDDDDDDDDDDDDDDD
4DD4DDDDDDD4DDDD
DD444DD4DDDDDDDD
DDDCDDDDDDDDDD4D
DDDCDDDDDDDDDDDD
DDDCDDDDDDD4DDDD
DDDDDDD4DD444DDD
D4DDDDDDDDDCDDDD
DDDDDDDDDDDCDDDD
DDD4DDDDDDDCDD4D
DD444DDDDDDDDDDD
DDDCDDDD4DDD4DDD
DDDCDDDDDDDDDDDD
DDDCDDDDDDDDDDDD
D4DDDD4DDD4DDDD4
DDDDDDDDDDDDDDDD`],
  [roadLeft, bitmap`
0L1111111111111L
0L1111110111111L
0L1111110111111L
0L1111111111111L
0L1111111111111L
0L1111110111111L
0L1111110111111L
0L1111111111111L
0L1111111111111L
0L1111110111111L
0L1111110111111L
0L1111111111111L
0L1111111111111L
0L1111110111111L
0L1111110111111L
0L1111111111111L`],
  [roadRight, bitmap`
L1111111111111L0
L1111110111111L0
L1111110111111L0
L1111111111111L0
L1111111111111L0
L1111110111111L0
L1111110111111L0
L1111111111111L0
L1111111111111L0
L1111110111111L0
L1111110111111L0
L1111111111111L0
L1111111111111L0
L1111110111111L0
L1111110111111L0
L1111111111111L0`],
  [roadMiddle, bitmap`
1111111111111111
L11111101111111L
L11111101111111L
L11111111111111L
L11111111111111L
L11111101111111L
L11111101111111L
1111111111111111
1111111111111111
L11111101111111L
L11111101111111L
L11111111111111L
L11111111111111L
L11111101111111L
L11111101111111L
1111111111111111`],
  [menuBackgroundLeft, bitmap`
L1LLLLLLLLLLLLLL
1L1LLLLLLLLLLLLL
L1LLLLLLLLLLLLLL
1L1LLLLLLLLLLLLL
L1LLLLLLLLLLLLLL
1L1LLLLLLLLLLLLL
L1LLLLLLLLLLLLLL
1L1LLLLLLLLLLLLL
L1LLLLLLLLLLLLLL
1L1LLLLLLLLLLLLL
L1LLLLLLLLLLLLLL
1L1LLLLLLLLLLLLL
L1LLLLLLLLLLLLLL
1L1LLLLLLLLLLLLL
L1LLLLLLLLLLLLLL
1L1LLLLLLLLLLLLL`],
  [menuBackground, bitmap`
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL`],
  [menuBackgroundRight, bitmap`
LLLLLLLLLLLLLL1L
LLLLLLLLLLLLL1L1
LLLLLLLLLLLLLL1L
LLLLLLLLLLLLL1L1
LLLLLLLLLLLLLL1L
LLLLLLLLLLLLL1L1
LLLLLLLLLLLLLL1L
LLLLLLLLLLLLL1L1
LLLLLLLLLLLLLL1L
LLLLLLLLLLLLL1L1
LLLLLLLLLLLLLL1L
LLLLLLLLLLLLL1L1
LLLLLLLLLLLLLL1L
LLLLLLLLLLLLL1L1
LLLLLLLLLLLLLL1L
LLLLLLLLLLLLL1L1`]
)

setSolids([player, grass])

let level = 0
const levels = [
  map`
hjjjjk
hjjjjk
hjjjjk
hjjjjk
hjjjjk`,
  map`
gglmrgg
gglmrgg
gglmrgg
gglmrgg
gglmrgg
gglmrgg
gglmrgg`
]
setMap(levels[0])

let score = 0
let speed;
let frequency;
let textOffset = 0;

let carTaskID;
let carSpawnTaskID;

let playing = false

function play() {
  setMap(levels[1])
  playing = true
  refreshGame()
}

<<<<<<< HEAD
=======
const cars = []
const newCars = []

>>>>>>> e49a920 (Better collision system, added trucks)
function stop() {
  playing = false
  setMap(levels[0])
  refreshMenu()
  if (carTaskID) clearInterval(carTaskID)
  if (carSpawnTaskID) clearInterval(carSpawnTaskID)
<<<<<<< HEAD
  getAll("c").forEach((trafficCar) => trafficCar.remove())
}

const newCars = []
=======
  cars.length = 0
  console.log(cars)
}

const carTypes = [ "c", "t" ]

function getRandomCarType() {
  return carTypes[Math.floor(Math.random() * 2)]
}
>>>>>>> e49a920 (Better collision system, added trucks)

function refreshGame() {
  clearText()
  addSprite(3, 6, player)
  addText(score.toString(), {
    x: 16 - textOffset,
    y: 1,
    color: color`0`
  })
<<<<<<< HEAD
  speed = (difficulty === 0) ? 450 : 350;
  frequency = (difficulty === 0) ? 4 : 3;
  if (carTaskID) clearInterval(carTaskID)
  if (carSpawnTaskID) clearInterval(carSpawnTaskID)
  carTaskID = setInterval(() => {
    getAll("c").forEach((trafficCar) => {
      if (newCars.includes(trafficCar)) {
        newCars.pop(trafficCar)
        console.log("pop")
        return
      }
      if (trafficCar.y === height() - 1) {
=======
  if (difficulty === 0) {
    speed = 375
    frequency = 3
  } else if (difficulty === 1) {
    speed = 325
    frequency = 3
  } else {
    speed = 300
    frequency = 2
  }
  if (carTaskID) clearInterval(carTaskID)
  if (carSpawnTaskID) clearInterval(carSpawnTaskID)
  carTaskID = setInterval(() => {
    cars.forEach((trafficCar, index) => {
      if (!playing) return
      if (newCars.includes(trafficCar)) {
        newCars.pop(trafficCar)
        checkCarForCrash(trafficCar)
        return
      }
      if (trafficCar.y === height() - 1) {
        cars.splice(index, 1);
>>>>>>> e49a920 (Better collision system, added trucks)
        trafficCar.remove()
      } else {
        trafficCar.y++
      }
<<<<<<< HEAD
      if (trafficCar.y === getFirst(player).y 
          && trafficCar.x === getFirst(player).x) {
        stop()
      }
    })
  }, speed)
  carSpawnTaskID = setInterval(() => {
    addSprite(2 + Math.floor(Math.random() * 3), 0, "c")
    newCars.push(getAll("c")[getAll("c").length - 1])
  }, speed * frequency)
=======
      checkCarForCrash(trafficCar)
    })
  }, speed)
  carSpawnTaskID = setInterval(() => {
    const carType = getRandomCarType();
    addSprite(2 + Math.floor(Math.random() * 3), 0, carType)
    const sprite = getAll(carType)[getAll(carType).length - 1]
    cars.push(sprite)
    newCars.push(sprite)
  }, speed * frequency)
}

function checkForCrash() {
  cars.forEach((car) => {
    checkCarForCrash(car)
  })
}

function checkCarForCrash(car) {
    if (car.x === getFirst(player).x
       && car.y === getFirst(player).y) {
      stop()
      console.log(true)
    }
>>>>>>> e49a920 (Better collision system, added trucks)
}

let difficulty = 0

function refreshMenu() {
  clearText()
  addText("Wrong Lane", {
    x: 5,
    y: 1,
    color: color`6`
  })

  addText("Difficulty", {
    x: 5,
    y: 6,
    color: color`2`
  })

  addText("Press k to start", {
    x: 2,
    y: 13,
    color: color`2`
  })

  if (difficulty === 0) {
    addText("< Normal >", {
      x: 5,
      y: 8,
      color: color`4`
    })
  } else if (difficulty === 1) {
    addText("< Hard >", {
      x: 6,
      y: 8,
      color: color`9`
    })
  } else {
    addText("< Hardcore >", {
      x: 4,
      y: 8,
      color: color`3`
    })
  }
}

<<<<<<< HEAD
function changeDifficulty() {
    if (difficulty === 0) {
      difficulty++
    } else {
      difficulty--
    }
    refreshMenu()
}

=======
>>>>>>> e49a920 (Better collision system, added trucks)
refreshMenu()

setPushables({
  [player]: []
})

onInput("w", () => {
  if (playing) {
    getFirst(player).y--
    checkForCrash()
  }
})

onInput("s", () => {
  if (playing) {
    getFirst(player).y++
    checkForCrash()
  }
})

onInput("a", () => {
  if (playing) {
    getFirst(player).x--
    checkForCrash()
  }
})

onInput("d", () => {
  if (playing) {
    getFirst(player).x++
    checkForCrash()
  }
})

onInput("i", () => {
  if (!playing) {
    getFirst(player).y--
  }
})

onInput("k", () => {
  play()
})

onInput("j", () => {
  if (!playing) {
    if (difficulty > 0) difficulty--
    refreshMenu()
  }
})

onInput("l", () => {
  if (!playing) {
    if (difficulty < 2) difficulty++
    refreshMenu()
  }
})

afterInput(() => {

})
