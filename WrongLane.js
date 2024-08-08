/*
First time? Check out the tutorial game:
https://sprig.hackclub.com/gallery/getting_started

@title: WrongLane
@author: 
@tags: []
@addedOn: 2024-00-00
*/

const player = "p"
const grass = "g"
const roadLeft = "l"
const roadRight = "r"
const roadMiddle = "m"

const menuBackgroundLeft = "h"
const menuBackground = "j"
const menuBackgroundRight = "k"

setLegend(
  [ player, bitmap`
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
...33LLLLLL33...` ],
  [ grass, bitmap`
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
DDDDDDDDDDDDDDDD` ],
  [ roadLeft, bitmap`
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
0L1111111111111L` ],
  [ roadRight, bitmap`
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
L1111111111111L0` ],
  [ roadMiddle, bitmap`
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
1111111111111111` ],
  [ menuBackgroundLeft, bitmap`
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
1L1LLLLLLLLLLLLL` ],
  [ menuBackground, bitmap`
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
LLLLLLLLLLLLLLLL` ],
  [ menuBackgroundRight, bitmap`
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
LLLLLLLLLLLLL1L1` ]
)

setSolids([ player, grass ])

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
let speed = 500;
let textOffset = 0;

let playing = false
function play() {
  clearText()
  setMap(levels[1])
  playing = true
  addSprite(3, 6, player)
  addText(score.toString(), { 
    x: 16 - textOffset,
    y: 1,
    color: color`0`
  })
  score = 1
}

let difficulty = 0
function refreshMenu() {
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
  } else {
          addText("< Hard >", { 
    x: 6,
    y: 8,
    color: color`3`
  })
  }
}

refreshMenu()

setPushables({
  [ player ]: []
})

onInput("w", () => {
  if (playing) {
    getFirst(player).y--
  }
})

onInput("s", () => {
  if (playing) {
    getFirst(player).y++
  }
})

onInput("a", () => {
  if (playing) {
    getFirst(player).x--
  }
})

onInput("d", () => {
  if (playing) {
    getFirst(player).x++
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
    getFirst(player).x--
  }
})

onInput("l", () => {
  if (!playing) {
    if (difficulty === 0) {
      difficulty++
    } else {
      difficulty--
    }
    clearText()
    refreshMenu()
  }
})

afterInput(() => {
  
})
