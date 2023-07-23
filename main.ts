controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (joun.vy == 0) {
        joun.vy = -100
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level2`)
    tiles.placeOnTile(joun, tiles.getTileLocation(0, 8))
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava1, function (sprite, location) {
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardHole, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level3`)
    tiles.placeOnTile(joun, tiles.getTileLocation(0, 8))
})
let joun: Sprite = null
joun = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . f 8 . . . . . . . . . 
    . . . . . 8 8 . . . . . . . . . 
    . . . . . . 8 . . 2 . . . . . . 
    . . . . . 6 8 2 . . . . . . . . 
    . . . 8 8 8 8 8 8 8 . . . . . . 
    . . . . . 8 8 8 . . . . . . . . 
    . . . . . 8 . 8 . . . . . . . . 
    . . . . . 8 . 8 . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
joun.ay = 120
tiles.placeOnTile(joun, tiles.getTileLocation(0, 8))
tiles.setCurrentTilemap(tilemap`level1`)
scene.cameraFollowSprite(joun)
controller.moveSprite(joun)
