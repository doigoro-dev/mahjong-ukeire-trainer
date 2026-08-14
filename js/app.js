let currentQuestionIndex = 0;
let question = questions[currentQuestionIndex];

const questionInfo = document.getElementById("question-info");
const handElement = document.getElementById("hand");
const nextButton = document.getElementById("next-button");

function renderQuestion() {
  question = questions[currentQuestionIndex];

  // 問題番号・シャンテン数
  questionInfo.textContent =
    `問題 ${question.id}　${question.shanten}シャンテン`;

  // 手牌をいったん空にする
  handElement.innerHTML = "";

  // 手牌表示
  question.hand.forEach(tile => {
    const tileElement = document.createElement("img");

    tileElement.classList.add("tile");
    tileElement.src = getTileImagePath(tile);
    tileElement.alt = tile;

    handElement.appendChild(tileElement);
  });
}


function getTileImagePath(tile) {
  const suit = tile.slice(-1);
  const number = tile.slice(0, -1);

  if (suit === "m") {
    return `assets/tiles/Man${number}.svg`;
  }

  if (suit === "p") {
    return `assets/tiles/Pin${number}.svg`;
  }

  if (suit === "s") {
    return `assets/tiles/Sou${number}.svg`;
  }

  if (suit === "z") {
    const honorTiles = {
      "1": "Ton",
      "2": "Nan",
      "3": "Shaa",
      "4": "Pei",
      "5": "Haku",
      "6": "Hatsu",
      "7": "Chun"
    };

    return `assets/tiles/${honorTiles[number]}.svg`;
  }
}

const tileGroups = [
  {
    label: "萬子",
    tiles: ["1m", "2m", "3m", "4m", "5m", "6m", "7m", "8m", "9m"]
  },
  {
    label: "筒子",
    tiles: ["1p", "2p", "3p", "4p", "5p", "6p", "7p", "8p", "9p"]
  },
  {
    label: "索子",
    tiles: ["1s", "2s", "3s", "4s", "5s", "6s", "7s", "8s", "9s"]
  },
  {
    label: "字牌",
    tiles: ["1z", "2z", "3z", "4z", "5z", "6z", "7z"]
  }
];

const selectedTiles = new Set();

const tileSelector = document.getElementById("tile-selector");
const selectedCount = document.getElementById("selected-count");

tileGroups.forEach(group => {
  const groupElement = document.createElement("div");
  groupElement.classList.add("tile-group");

  const groupLabel = document.createElement("div");
  groupLabel.classList.add("tile-group-label");
  groupLabel.textContent = group.label;

  const tileRow = document.createElement("div");
  tileRow.classList.add("tile-row");

  group.tiles.forEach(tile => {
    const button = document.createElement("button");

    button.type = "button";
    button.classList.add("selectable-tile");
    button.dataset.tile = tile;

    const image = document.createElement("img");
    image.src = getTileImagePath(tile);
    image.alt = tile;

    button.appendChild(image);

    button.addEventListener("click", () => {
      if (selectedTiles.has(tile)) {
        selectedTiles.delete(tile);
        button.classList.remove("selected");
      } else {
        selectedTiles.add(tile);
        button.classList.add("selected");
      }

      selectedCount.textContent = selectedTiles.size;
    });

    tileRow.appendChild(button);
  });

  groupElement.appendChild(groupLabel);
  groupElement.appendChild(tileRow);

  tileSelector.appendChild(groupElement);
});

renderQuestion();


const answerCountInput = document.getElementById("answer-count");
const answerButton = document.getElementById("answer-button");
const answerPreview = document.getElementById("answer-preview");

answerButton.addEventListener("click", () => {
  const answerCount = Number(answerCountInput.value);

  const selectedTileList = [...selectedTiles];
  const correctTileList = question.acceptance.map(item => item.tile);

  const isTileCorrect =
    selectedTileList.length === correctTileList.length &&
    selectedTileList.every(tile => correctTileList.includes(tile));

  const isCountCorrect =
    answerCount === question.acceptanceCount;

  const isPerfect =
    isTileCorrect &&
    isCountCorrect;

  const correctTilesHtml = question.acceptance
    .map(item => `
      <div class="correct-tile">
        <img src="${getTileImagePath(item.tile)}" alt="${item.tile}">
        <span>${item.remaining}枚</span>
      </div>
    `)
    .join("");

  answerPreview.innerHTML = `
    <h3>${isPerfect ? "○ 正解！" : "× 不正解"}</h3>

    <p>受け入れ牌：${isTileCorrect ? "○" : "×"}</p>
    <p>受け入れ種類：${selectedTiles.size}種</p>
    <p>受け入れ枚数：${isCountCorrect ? "○" : "×"}</p>

    <h4>正解</h4>

    <div class="correct-tiles">
      ${correctTilesHtml}
    </div>

    <p>
      合計：
      ${question.acceptance.length}種
      ${question.acceptanceCount}枚
    </p>
  `;
  
	nextButton.hidden = false;
});

nextButton.addEventListener("click", () => {
  currentQuestionIndex++;

  if (currentQuestionIndex >= questions.length) {
    currentQuestionIndex = 0;
  }

  // 選択した受け入れ牌をリセット
  selectedTiles.clear();

  document
    .querySelectorAll(".selectable-tile.selected")
    .forEach(button => {
      button.classList.remove("selected");
    });

  // 選択中の種類数
  selectedCount.textContent = "0";

  // 枚数入力
  answerCountInput.value = "";

  // 採点結果
  answerPreview.innerHTML = "";

  // 次の問題ボタンを隠す
  nextButton.hidden = true;

  // 新しい問題を表示
  renderQuestion();
});