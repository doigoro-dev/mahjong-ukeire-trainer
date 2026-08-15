const questions = [
  {
    id: 1,
    shanten: 1,

    hand: [
      "1m", "2m", "3m", "4m", "5m",
      "2p", "3p", "4p", "5s", "6s",
      "7s", "7s", "9s"
    ],

    acceptance: [
      { tile: "1m", remaining: 3 },
      { tile: "2m", remaining: 3 },
      { tile: "3m", remaining: 3 },
      { tile: "4m", remaining: 3 },
      { tile: "5m", remaining: 3 },
      { tile: "6m", remaining: 4 },
      { tile: "4s", remaining: 4 },
      { tile: "7s", remaining: 2 },
      { tile: "8s", remaining: 4 },
      { tile: "9s", remaining: 3 }
    ],

    acceptanceCount: 32
  },

  {
    id: 2,
    shanten: 2,

    hand: [
      "3m", "6m", "7m", "8m", "3p",
      "6p", "7p", "2s", "3s", "9s",
      "1z", "1z", "1z"
    ],

    acceptance: [
      { tile: "3m", remaining: 3 },
      { tile: "3p", remaining: 3 },
      { tile: "5p", remaining: 4 },
      { tile: "8p", remaining: 4 },
      { tile: "1s", remaining: 4 },
      { tile: "4s", remaining: 4 },
      { tile: "9s", remaining: 3 }
    ],

    acceptanceCount: 25
  },

  {
    id: 3,
    shanten: 3,

    hand: [
      "4m", "5m", "6m", "9m", "2p",
      "5s", "6s", "7s", "7s", "9s",
      "1z", "2z", "4z"
    ],

    acceptance: [
      { tile: "7m", remaining: 4 },
      { tile: "8m", remaining: 4 },
      { tile: "9m", remaining: 3 },
      { tile: "1p", remaining: 4 },
      { tile: "2p", remaining: 3 },
      { tile: "3p", remaining: 4 },
      { tile: "4p", remaining: 4 },
      { tile: "8s", remaining: 4 },
      { tile: "1z", remaining: 3 },
      { tile: "2z", remaining: 3 },
      { tile: "4z", remaining: 3 }
    ],

    acceptanceCount: 39
  },

  {
    id: 4,
    shanten: 1,

    hand: [
      "1m", "4m", "5m", "6m", "4p",
      "4p", "5p", "6p", "7p", "5s",
      "6s", "7s", "3z"
    ],

    acceptance: [
      { tile: "1m", remaining: 3 },
      { tile: "2m", remaining: 4 },
      { tile: "3m", remaining: 4 },
      { tile: "4p", remaining: 2 },
      { tile: "3z", remaining: 3 }
    ],

    acceptanceCount: 16
  },

  {
    id: 5,
    shanten: 1,

    hand: [
      "6m", "7m", "3p", "4p", "5p",
      "5p", "6p", "7p", "4s", "6s",
      "6s", "6s", "7s"
    ],

    acceptance: [
      { tile: "5m", remaining: 4 },
      { tile: "8m", remaining: 4 },
      { tile: "4s", remaining: 3 },
      { tile: "5s", remaining: 4 },
      { tile: "7s", remaining: 3 },
      { tile: "8s", remaining: 4 }
    ],

    acceptanceCount: 22
  },

  {
    id: 6,
    shanten: 2,

    hand: [
      "7m", "8m", "1p", "6p", "7p",
      "8p", "4s", "5s", "6s", "7s",
      "8s", "1z", "5z"
    ],

    acceptance: [
      { tile: "6m", remaining: 4 },
      { tile: "9m", remaining: 4 },
      { tile: "1p", remaining: 3 },
      { tile: "3s", remaining: 4 },
      { tile: "6s", remaining: 3 },
      { tile: "9s", remaining: 4 },
      { tile: "1z", remaining: 3 },
      { tile: "5z", remaining: 3 }
    ],

    acceptanceCount: 28
  },

  {
    id: 7,
    shanten: 2,

    hand: [
      "3m", "5m", "7m", "8m", "8m",
      "8m", "1p", "2p", "3p", "6p",
      "6s", "7s", "7z"
    ],

    acceptance: [
      { tile: "3m", remaining: 3 },
      { tile: "4m", remaining: 4 },
      { tile: "6m", remaining: 4 },
      { tile: "7m", remaining: 3 },
      { tile: "9m", remaining: 4 },
      { tile: "6p", remaining: 3 },
      { tile: "5s", remaining: 4 },
      { tile: "8s", remaining: 4 },
      { tile: "7z", remaining: 3 }
    ],

    acceptanceCount: 32
  },

  {
    id: 8,
    shanten: 2,

    hand: [
      "6m", "7m", "8m", "1p", "2p",
      "2s", "3s", "6s", "7s", "7s",
      "8s", "5z", "6z"
    ],

    acceptance: [
      { tile: "3p", remaining: 4 },
      { tile: "1s", remaining: 4 },
      { tile: "4s", remaining: 4 },
      { tile: "7s", remaining: 2 },
      { tile: "5z", remaining: 3 },
      { tile: "6z", remaining: 3 }
    ],

    acceptanceCount: 20
  },

  {
    id: 9,
    shanten: 2,

    hand: [
      "2m", "3m", "6m", "7m", "8m",
      "4p", "5p", "6p", "7p", "7p",
      "6s", "3z", "7z"
    ],

    acceptance: [
      { tile: "1m", remaining: 4 },
      { tile: "4m", remaining: 4 },
      { tile: "7p", remaining: 2 },
      { tile: "4s", remaining: 4 },
      { tile: "5s", remaining: 4 },
      { tile: "6s", remaining: 3 },
      { tile: "7s", remaining: 4 },
      { tile: "8s", remaining: 4 },
      { tile: "3z", remaining: 3 },
      { tile: "7z", remaining: 3 }
    ],

    acceptanceCount: 35
  },

  {
    id: 10,
    shanten: 2,

    hand: [
      "5m", "5m", "9m", "1p", "4p",
      "5p", "6p", "7p", "8p", "9p",
      "2s", "3s", "6z"
    ],

    acceptance: [
      { tile: "5m", remaining: 2 },
      { tile: "7m", remaining: 4 },
      { tile: "8m", remaining: 4 },
      { tile: "9m", remaining: 3 },
      { tile: "1p", remaining: 3 },
      { tile: "2p", remaining: 4 },
      { tile: "3p", remaining: 4 },
      { tile: "1s", remaining: 4 },
      { tile: "4s", remaining: 4 },
      { tile: "6z", remaining: 3 }
    ],

    acceptanceCount: 35
  },

  {
    id: 11,
    shanten: 3,

    hand: [
      "1m", "2m", "3m", "4m", "6m",
      "8m", "9m", "4s", "6s", "8s",
      "5z", "6z", "7z"
    ],

    acceptance: [
      { tile: "5m", remaining: 4 },
      { tile: "7m", remaining: 4 },
      { tile: "4s", remaining: 3 },
      { tile: "5s", remaining: 4 },
      { tile: "7s", remaining: 4 },
      { tile: "8s", remaining: 3 },
      { tile: "5z", remaining: 3 },
      { tile: "6z", remaining: 3 },
      { tile: "7z", remaining: 3 }
    ],

    acceptanceCount: 31
  },

  {
    id: 12,
    shanten: 3,

    hand: [
      "1p", "4p", "5p", "7p", "8p",
      "3s", "4s", "5s", "8s", "8s",
      "1z", "5z", "6z"
    ],

    acceptance: [
      { tile: "1p", remaining: 3 },
      { tile: "2p", remaining: 4 },
      { tile: "3p", remaining: 4 },
      { tile: "6p", remaining: 4 },
      { tile: "9p", remaining: 4 },
      { tile: "8s", remaining: 2 },
      { tile: "1z", remaining: 3 },
      { tile: "5z", remaining: 3 },
      { tile: "6z", remaining: 3 }
    ],

    acceptanceCount: 30
  },

  {
    id: 13,
    shanten: 3,

    hand: [
      "4m", "6m", "1p", "3p", "3p",
      "4p", "5p", "9p", "6s", "7s",
      "2z", "4z", "6z"
    ],

    acceptance: [
      { tile: "5m", remaining: 4 },
      { tile: "2p", remaining: 4 },
      { tile: "9p", remaining: 3 },
      { tile: "5s", remaining: 4 },
      { tile: "8s", remaining: 4 },
      { tile: "2z", remaining: 3 },
      { tile: "4z", remaining: 3 },
      { tile: "6z", remaining: 3 }
    ],

    acceptanceCount: 28
  },

  {
    id: 14,
    shanten: 3,

    hand: [
      "3m", "4m", "6m", "8m", "1p",
      "5p", "6p", "9p", "9p", "3s",
      "4s", "6s", "4z"
    ],

    acceptance: [
      { tile: "2m", remaining: 4 },
      { tile: "5m", remaining: 4 },
      { tile: "7m", remaining: 4 },
      { tile: "4p", remaining: 4 },
      { tile: "7p", remaining: 4 },
      { tile: "2s", remaining: 4 },
      { tile: "5s", remaining: 4 }
    ],

    acceptanceCount: 28
  },

  {
    id: 15,
    shanten: 3,

    hand: [
      "2m", "4m", "6m", "7m", "8m",
      "4p", "6p", "1s", "4s", "6s",
      "9s", "2z", "3z"
    ],

    acceptance: [
      { tile: "3m", remaining: 4 },
      { tile: "5p", remaining: 4 },
      { tile: "1s", remaining: 3 },
      { tile: "5s", remaining: 4 },
      { tile: "9s", remaining: 3 },
      { tile: "2z", remaining: 3 },
      { tile: "3z", remaining: 3 }
    ],

    acceptanceCount: 24
  },

  {
    id: 16,
    shanten: 1,

    hand: [
      "8m", "8m", "4p", "5p", "7p",
      "8p", "9p", "6s", "7s", "8s",
      "8s", "3z", "3z"
    ],

    acceptance: [
      { tile: "8m", remaining: 2 },
      { tile: "3p", remaining: 4 },
      { tile: "6p", remaining: 4 },
      { tile: "3z", remaining: 2 }
    ],

    acceptanceCount: 12
  },

  {
    id: 17,
    shanten: 1,

    hand: [
      "2m", "3m", "4m", "4m", "5m",
      "6m", "3p", "4p", "6p", "2s",
      "3s", "6z", "6z"
    ],

    acceptance: [
      { tile: "2p", remaining: 4 },
      { tile: "5p", remaining: 4 },
      { tile: "1s", remaining: 4 },
      { tile: "4s", remaining: 4 }
    ],

    acceptanceCount: 16
  },

  {
    id: 18,
    shanten: 1,

    hand: [
      "6m", "7m", "8m", "9m", "1p",
      "3p", "4p", "5p", "3s", "4s",
      "4s", "5s", "6s"
    ],

    acceptance: [
      { tile: "6m", remaining: 3 },
      { tile: "9m", remaining: 3 },
      { tile: "1p", remaining: 3 },
      { tile: "2s", remaining: 4 },
      { tile: "5s", remaining: 3 }
    ],

    acceptanceCount: 16
  },

  {
    id: 19,
    shanten: 1,

    hand: [
      "7m", "8m", "9m", "4p", "5p",
      "3s", "3s", "6s", "6s", "6s",
      "7s", "8s", "5z"
    ],

    acceptance: [
      { tile: "3p", remaining: 4 },
      { tile: "6p", remaining: 4 },
      { tile: "3s", remaining: 2 },
      { tile: "6s", remaining: 1 },
      { tile: "9s", remaining: 4 }
    ],

    acceptanceCount: 15
  },

  {
    id: 20,
    shanten: 1,

    hand: [
      "7m", "8m", "9m", "5p", "7p",
      "8p", "8p", "9p", "9p", "4s",
      "5s", "6s", "2z"
    ],

    acceptance: [
      { tile: "5p", remaining: 3 },
      { tile: "6p", remaining: 4 },
      { tile: "7p", remaining: 3 },
      { tile: "8p", remaining: 2 },
      { tile: "9p", remaining: 2 },
      { tile: "2z", remaining: 3 }
    ],

    acceptanceCount: 17
  },

  {
    id: 21,
    shanten: 1,

    hand: [
      "5m", "6m", "5p", "6p", "7p",
      "8p", "8p", "9p", "7s", "8s",
      "9s", "4z", "4z"
    ],

    acceptance: [
      { tile: "4m", remaining: 4 },
      { tile: "7m", remaining: 4 },
      { tile: "4p", remaining: 4 },
      { tile: "7p", remaining: 3 },
      { tile: "8p", remaining: 2 },
      { tile: "4z", remaining: 2 }
    ],

    acceptanceCount: 19
  },

  {
    id: 22,
    shanten: 1,

    hand: [
      "1m", "9m", "1p", "1p", "5p",
      "6p", "6p", "7p", "7p", "8p",
      "1s", "2s", "3s"
    ],

    acceptance: [
      { tile: "1m", remaining: 3 },
      { tile: "2m", remaining: 4 },
      { tile: "3m", remaining: 4 },
      { tile: "7m", remaining: 4 },
      { tile: "8m", remaining: 4 },
      { tile: "9m", remaining: 3 },
      { tile: "1p", remaining: 2 }
    ],

    acceptanceCount: 24
  },

  {
    id: 23,
    shanten: 1,

    hand: [
      "5m", "6m", "7m", "2p", "3p",
      "4p", "4p", "6p", "6p", "6p",
      "5s", "5s", "7z"
    ],

    acceptance: [
      { tile: "1p", remaining: 4 },
      { tile: "2p", remaining: 3 },
      { tile: "3p", remaining: 3 },
      { tile: "4p", remaining: 2 },
      { tile: "5p", remaining: 4 },
      { tile: "6p", remaining: 1 },
      { tile: "5s", remaining: 2 },
      { tile: "7z", remaining: 3 }
    ],

    acceptanceCount: 22
  },

  {
    id: 24,
    shanten: 1,

    hand: [
      "4m", "7m", "7m", "8m", "9m",
      "1p", "2p", "3p", "7p", "7p",
      "4s", "5s", "6s"
    ],

    acceptance: [
      { tile: "2m", remaining: 4 },
      { tile: "3m", remaining: 4 },
      { tile: "4m", remaining: 3 },
      { tile: "5m", remaining: 4 },
      { tile: "6m", remaining: 4 },
      { tile: "7m", remaining: 2 },
      { tile: "8m", remaining: 3 },
      { tile: "9m", remaining: 3 },
      { tile: "7p", remaining: 2 }
    ],

    acceptanceCount: 29
  },

  {
    id: 25,
    shanten: 1,

    hand: [
      "1m", "2m", "3m", "3m", "4m",
      "5m", "6m", "1p", "2p", "3p",
      "9s", "9s", "1z"
    ],

    acceptance: [
      { tile: "1m", remaining: 3 },
      { tile: "2m", remaining: 3 },
      { tile: "3m", remaining: 2 },
      { tile: "4m", remaining: 3 },
      { tile: "5m", remaining: 3 },
      { tile: "6m", remaining: 3 },
      { tile: "7m", remaining: 4 },
      { tile: "8m", remaining: 4 },
      { tile: "9s", remaining: 2 },
      { tile: "1z", remaining: 3 }
    ],

    acceptanceCount: 30
  },

  {
    id: 26,
    shanten: 2,

    hand: [
      "3m", "5m", "6m", "8m", "2p",
      "2p", "6p", "7p", "8p", "2s",
      "4s", "6s", "7s"
    ],

    acceptance: [
      { tile: "4m", remaining: 4 },
      { tile: "7m", remaining: 4 },
      { tile: "3s", remaining: 4 },
      { tile: "5s", remaining: 4 },
      { tile: "8s", remaining: 4 }
    ],

    acceptanceCount: 20
  },

  {
    id: 27,
    shanten: 2,

    hand: [
      "1m", "3m", "4m", "5m", "6m",
      "7m", "7p", "1s", "3s", "4z",
      "4z", "7z", "7z"
    ],

    acceptance: [
      { tile: "2m", remaining: 4 },
      { tile: "5m", remaining: 3 },
      { tile: "8m", remaining: 4 },
      { tile: "2s", remaining: 4 },
      { tile: "4z", remaining: 2 },
      { tile: "7z", remaining: 2 }
    ],

    acceptanceCount: 19
  },

  {
    id: 28,
    shanten: 2,

    hand: [
      "1m", "2m", "4m", "6m", "7m",
      "8m", "2p", "3p", "4p", "4p",
      "3s", "5s", "1z"
    ],

    acceptance: [
      { tile: "1m", remaining: 3 },
      { tile: "3m", remaining: 4 },
      { tile: "4m", remaining: 3 },
      { tile: "1p", remaining: 4 },
      { tile: "4p", remaining: 2 },
      { tile: "4s", remaining: 4 },
      { tile: "1z", remaining: 3 }
    ],

    acceptanceCount: 23
  },

  {
    id: 29,
    shanten: 2,

    hand: [
      "4m", "5m", "7m", "9m", "1s",
      "3s", "4s", "5s", "6s", "7s",
      "8s", "8s", "6z"
    ],

    acceptance: [
      { tile: "3m", remaining: 4 },
      { tile: "6m", remaining: 4 },
      { tile: "8m", remaining: 4 },
      { tile: "1s", remaining: 3 },
      { tile: "2s", remaining: 4 },
      { tile: "5s", remaining: 3 },
      { tile: "8s", remaining: 2 },
      { tile: "6z", remaining: 3 }
    ],

    acceptanceCount: 27
  },

  {
    id: 30,
    shanten: 2,

    hand: [
      "4m", "7m", "8m", "9m", "3p",
      "3p", "3p", "6p", "6p", "8s",
      "8s", "4z", "7z"
    ],

    acceptance: [
      { tile: "2m", remaining: 4 },
      { tile: "3m", remaining: 4 },
      { tile: "4m", remaining: 3 },
      { tile: "5m", remaining: 4 },
      { tile: "6m", remaining: 4 },
      { tile: "6p", remaining: 2 },
      { tile: "8s", remaining: 2 },
      { tile: "4z", remaining: 3 },
      { tile: "7z", remaining: 3 }
    ],

    acceptanceCount: 29
  },

  {
    id: 31,
    shanten: 2,

    hand: [
      "5m", "7m", "8m", "1p", "3p",
      "5p", "7p", "8p", "9p", "4s",
      "5s", "6s", "7s"
    ],

    acceptance: [
      { tile: "5m", remaining: 3 },
      { tile: "6m", remaining: 4 },
      { tile: "8m", remaining: 3 },
      { tile: "9m", remaining: 4 },
      { tile: "1p", remaining: 3 },
      { tile: "2p", remaining: 4 },
      { tile: "4p", remaining: 4 },
      { tile: "5p", remaining: 3 },
      { tile: "4s", remaining: 3 },
      { tile: "7s", remaining: 3 }
    ],

    acceptanceCount: 34
  },

  {
    id: 32,
    shanten: 2,

    hand: [
      "1m", "1m", "2m", "3m", "4m",
      "4m", "7m", "8m", "9p", "4s",
      "5s", "6s", "6z"
    ],

    acceptance: [
      { tile: "1m", remaining: 2 },
      { tile: "2m", remaining: 3 },
      { tile: "3m", remaining: 3 },
      { tile: "4m", remaining: 2 },
      { tile: "5m", remaining: 4 },
      { tile: "6m", remaining: 4 },
      { tile: "9m", remaining: 4 },
      { tile: "7p", remaining: 4 },
      { tile: "8p", remaining: 4 },
      { tile: "9p", remaining: 3 },
      { tile: "6z", remaining: 3 }
    ],

    acceptanceCount: 36
  },

  {
    id: 33,
    shanten: 2,

    hand: [
      "2m", "3m", "5p", "6p", "7p",
      "8p", "7s", "8s", "9s", "3z",
      "4z", "6z", "6z"
    ],

    acceptance: [
      { tile: "1m", remaining: 4 },
      { tile: "4m", remaining: 4 },
      { tile: "3p", remaining: 4 },
      { tile: "4p", remaining: 4 },
      { tile: "5p", remaining: 3 },
      { tile: "6p", remaining: 3 },
      { tile: "7p", remaining: 3 },
      { tile: "8p", remaining: 3 },
      { tile: "9p", remaining: 4 },
      { tile: "3z", remaining: 3 },
      { tile: "4z", remaining: 3 },
      { tile: "6z", remaining: 2 }
    ],

    acceptanceCount: 40
  },

  {
    id: 34,
    shanten: 2,

    hand: [
      "1m", "5m", "5m", "8m", "8m",
      "9m", "2p", "3p", "4p", "4p",
      "5p", "6p", "8p"
    ],

    acceptance: [
      { tile: "1m", remaining: 3 },
      { tile: "2m", remaining: 4 },
      { tile: "3m", remaining: 4 },
      { tile: "5m", remaining: 2 },
      { tile: "6m", remaining: 4 },
      { tile: "7m", remaining: 4 },
      { tile: "8m", remaining: 2 },
      { tile: "9m", remaining: 3 },
      { tile: "3p", remaining: 3 },
      { tile: "6p", remaining: 3 },
      { tile: "7p", remaining: 4 },
      { tile: "8p", remaining: 3 },
      { tile: "9p", remaining: 4 }
    ],

    acceptanceCount: 43
  },

  {
    id: 35,
    shanten: 2,

    hand: [
      "1m", "3m", "5m", "6m", "7m",
      "5p", "6p", "7p", "8p", "5s",
      "5s", "8s", "7z"
    ],

    acceptance: [
      { tile: "2m", remaining: 4 },
      { tile: "3p", remaining: 4 },
      { tile: "4p", remaining: 4 },
      { tile: "5p", remaining: 3 },
      { tile: "6p", remaining: 3 },
      { tile: "7p", remaining: 3 },
      { tile: "8p", remaining: 3 },
      { tile: "9p", remaining: 4 },
      { tile: "5s", remaining: 2 },
      { tile: "6s", remaining: 4 },
      { tile: "7s", remaining: 4 },
      { tile: "8s", remaining: 3 },
      { tile: "9s", remaining: 4 },
      { tile: "7z", remaining: 3 }
    ],

    acceptanceCount: 48
  }
];
