const questions = [
  {
    id: 1,
    shanten: 1,

    hand: [
      "1m", "2m", "3m",
      "4m", "5m",
      "2p", "3p", "4p",
      "5s", "6s",
      "7s", "7s",
      "9s"
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
      "3m", "6m", "7m", "8m",
      "3p", "6p", "7p",
      "2s", "3s", "9s",
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
	    "4m", "5m", "6m", "9m",
	    "2p",
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
	}
];