var gameData = {
    trees: 0,
    treesPerClick: 1,
    gold: 0,
    treesPerGold: 10,
    goldPerTrees: 1,
}

function plantTree() {
    gameData.trees += gameData.treesPerClick
    document.getElementById("treesPlanted").innerHTML = gameData.trees + " Trees Planted"
}

function cutTreesForGold() {
    if (gameData.trees >= gameData.treesPerGold) {
        gameData.trees -= gameData.treesPerGold
        gameData.gold += gameData.goldPerTrees
        document.getElementById("goldOnHand").innerHTML = gameData.gold + " Gold"
    }
}