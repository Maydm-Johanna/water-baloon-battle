namespace SpriteKind {
    export const Player2 = SpriteKind.create()
    export const Player3 = SpriteKind.create()
    export const Player4 = SpriteKind.create()
}
controller.player4.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
    player_4.setImage(img`
        . . . . f f f f . . . . . 
        . . f f c c c c f f . . . 
        . f f c c c c c c f f . . 
        f f c c c c c c c c f f . 
        f f c c f c c c c c c f . 
        f f f f f c c c f c c f . 
        f f f f c c c f c c f f . 
        f f f f f f f f f f f f . 
        f f f f f f f f f f f f . 
        . f f f f f f f f f f . . 
        . f f f f f f f f f f . . 
        f e f f f f f f f f e f . 
        e 4 f 7 7 7 7 7 7 c 4 e . 
        e e f 6 6 6 6 6 6 f e e . 
        . . . f f f f f f . . . . 
        . . . f f . . f f . . . . 
        `)
    p4_vx = 0
    p4_vy = -50
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    player1.setImage(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . f f f f f 2 2 f f f f f . . 
        . . f f e 2 e 2 2 e 2 e f f . . 
        . . f e 2 f 2 f f 2 f 2 e f . . 
        . . f f f 2 2 e e 2 2 f f f . . 
        . f f e f 2 f e e f 2 f e f f . 
        . f e e f f e e e e f e e e f . 
        . . f e e e e e e e e e e f . . 
        . . . f e e e e e e e e f . . . 
        . . e 4 f f f f f f f f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `)
    p1_vx = 0
    p1_vy = -50
})
controller.player3.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Pressed, function () {
    if (info.player3.score() > 0 && !(player_3.tileKindAt(TileDirection.Center, sprites.dungeon.collectibleInsignia))) {
        projectile_p3 = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 5 5 5 5 5 . . . . . . 
            . . . . 5 5 5 5 5 5 5 . . . . . 
            . . . . 5 5 5 5 5 5 5 . . . . . 
            . . . . 5 5 5 5 5 5 5 . . . . . 
            . . . . 5 5 5 5 5 5 5 . . . . . 
            . . . . 5 5 5 5 5 5 5 . . . . . 
            . . . . . 5 5 5 5 5 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, player_3, 0, 0)
        projectile_p3.setFlag(SpriteFlag.AutoDestroy, true)
        info.player3.changeScoreBy(-1)
    }
})
controller.player2.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Pressed, function () {
    if (info.player2.score() > 0 && !(player2.tileKindAt(TileDirection.Center, sprites.dungeon.collectibleInsignia))) {
        projectile_p2 = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 8 8 8 8 8 . . . . . . 
            . . . . 8 8 8 8 8 8 8 . . . . . 
            . . . . 8 8 8 8 8 8 8 . . . . . 
            . . . . 8 8 8 8 8 8 8 . . . . . 
            . . . . 8 8 8 8 8 8 8 . . . . . 
            . . . . 8 8 8 8 8 8 8 . . . . . 
            . . . . . 8 8 8 8 8 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, player2, 0, 0)
        projectile_p2.setFlag(SpriteFlag.AutoDestroy, true)
        info.player2.changeScoreBy(-1)
        projectile_p2.lifespan = 5000
    }
})
controller.player4.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Pressed, function () {
    if (info.player4.score() > 0 && !(player_4.tileKindAt(TileDirection.Center, sprites.dungeon.collectibleInsignia))) {
        projectile_p4 = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . a a a a a . . . . . . 
            . . . . a a a a a a a . . . . . 
            . . . . a a a a a a a . . . . . 
            . . . . a a a a a a a . . . . . 
            . . . . a a a a a a a . . . . . 
            . . . . a a a a a a a . . . . . 
            . . . . . a a a a a . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, player_4, 0, 0)
        projectile_p4.setFlag(SpriteFlag.AutoDestroy, true)
        info.player4.changeScoreBy(-1)
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (info.score() > 0 && !(player1.tileKindAt(TileDirection.Center, sprites.dungeon.collectibleInsignia))) {
        projectile_p1 = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 2 2 2 2 2 . . . . . . 
            . . . . 2 2 2 2 2 2 2 . . . . . 
            . . . . 2 2 2 2 2 2 2 . . . . . 
            . . . . 2 2 2 2 2 2 2 . . . . . 
            . . . . 2 2 2 2 2 2 2 . . . . . 
            . . . . 2 2 2 2 2 2 2 . . . . . 
            . . . . . 2 2 2 2 2 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, player1, 0, 0)
        projectile_p1.setFlag(SpriteFlag.AutoDestroy, true)
        info.changeScoreBy(-1)
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player2, function (sprite, otherSprite) {
    if (sprite != projectile_p2) {
        info.player2.changeLifeBy(-1)
        sprite.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . 6 . . . . . . . . . . . . 
            . . . 6 9 . . . 6 . . 9 9 9 . . 
            . . 6 6 9 9 . 9 . . 9 9 9 9 6 . 
            . . 6 6 9 9 . . . 9 9 9 9 6 6 . 
            . . . 6 6 9 . . . 9 9 6 6 6 . . 
            . . . . 6 9 . . . . . . . . . . 
            . . 9 . 6 . . . . . . . . . . . 
            . . . . . . . . 6 9 9 9 . . . . 
            . . . 9 9 . . . . 9 9 9 9 9 . . 
            . 9 9 9 9 . . . . . . 9 9 9 9 . 
            9 9 6 6 6 . 9 9 . 6 . . 6 6 6 . 
            9 6 6 . . . 9 9 . . 9 . . . . . 
            . 6 . . . . 9 6 . . . . . . . . 
            . . . . . . 9 6 . . . . . . . . 
            . . . . . . 9 6 . . . . . . . . 
            `)
        sprite.setVelocity(0, 0)
        sprites.destroy(sprite, effects.spray, 200)
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (info.score() > 0 && !(player1.tileKindAt(TileDirection.Center, sprites.dungeon.collectibleInsignia))) {
        projectile_p1 = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 2 2 2 2 2 . . . . . . 
            . . . . 2 2 2 2 2 2 2 . . . . . 
            . . . . 2 2 2 2 2 2 2 . . . . . 
            . . . . 2 2 2 2 2 2 2 . . . . . 
            . . . . 2 2 2 2 2 2 2 . . . . . 
            . . . . 2 2 2 2 2 2 2 . . . . . 
            . . . . . 2 2 2 2 2 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, player1, p1_vx, p1_vy)
        projectile_p1.setFlag(SpriteFlag.AutoDestroy, true)
        info.changeScoreBy(-1)
    }
})
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    if (info.player2.score() > 0 && !(player2.tileKindAt(TileDirection.Center, sprites.dungeon.collectibleInsignia))) {
        projectile_p2 = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 8 8 8 8 8 . . . . . . 
            . . . . 8 8 8 8 8 8 8 . . . . . 
            . . . . 8 8 8 8 8 8 8 . . . . . 
            . . . . 8 8 8 8 8 8 8 . . . . . 
            . . . . 8 8 8 8 8 8 8 . . . . . 
            . . . . 8 8 8 8 8 8 8 . . . . . 
            . . . . . 8 8 8 8 8 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, player2, p2_vx, p2_vy)
        projectile_p2.setFlag(SpriteFlag.AutoDestroy, true)
        info.player2.changeScoreBy(-1)
    }
})
info.player4.onLifeZero(function () {
    controller.moveSprite(player_4, 0, 0)
    player_4.setImage(img`
        . . . . f f f f . . . . . 
        . . f f f f f f f f . . . 
        . f f f f f f 8 f f f . . 
        f f f f f f 8 8 f f f 8 . 
        f f f 8 f f f f f f f 8 . 
        8 8 8 f f f 6 6 f f 8 8 . 
        f f f f f 6 6 f f 8 8 f . 
        f f f b f 6 6 f b f f f . 
        . f 9 1 f 9 9 f 1 9 f . . 
        . f 6 9 9 9 9 9 9 6 f . . 
        . f f f 6 6 6 6 f f f . . 
        f 6 f 8 9 9 9 9 8 f 6 f . 
        6 9 f 9 9 9 9 9 9 f 9 6 . 
        6 6 f 6 6 6 6 6 6 f 6 6 . 
        . . . f f f f f f . . . . 
        . . . f f . . f f . . . . 
        `)
    sprites.destroy(player_4, effects.spray, 500)
    info.player4.setScore(0)
    number_of_players_out += 1
})
controller.player2.onButtonEvent(ControllerButton.Down, ControllerButtonEvent.Pressed, function () {
    player2.setImage(img`
        . . . . . f f 4 4 f f . . . . . 
        . . . . f 5 4 5 5 4 5 f . . . . 
        . . . f e 4 5 5 5 5 4 e f . . . 
        . . f b 3 e 4 4 4 4 e 3 b f . . 
        . . f 3 3 3 3 3 3 3 3 3 3 f . . 
        . f 3 3 e b 3 e e 3 b e 3 3 f . 
        . f 3 3 f f e e e e f f 3 3 f . 
        . f b b f b f e e f b f b b f . 
        . f b b e 1 f 4 4 f 1 e b b f . 
        f f b b f 4 4 4 4 4 4 f b b f f 
        f b b f f f e e e e f f f b b f 
        . f e e f b d d d d b f e e f . 
        . . e 4 c d d d d d d c 4 e . . 
        . . e f b d b d b d b b f e . . 
        . . . f f 1 d 1 d 1 d f f . . . 
        . . . . . f f b b f f . . . . . 
        `)
    p2_vx = 0
    p2_vy = 50
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player, function (sprite, otherSprite) {
    if (sprite != projectile_p1) {
        info.player1.changeLifeBy(-1)
        sprite.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . 6 . . . . . . . . . . . . 
            . . . 6 9 . . . 6 . . 9 9 9 . . 
            . . 6 6 9 9 . 9 . . 9 9 9 9 6 . 
            . . 6 6 9 9 . . . 9 9 9 9 6 6 . 
            . . . 6 6 9 . . . 9 9 6 6 6 . . 
            . . . . 6 9 . . . . . . . . . . 
            . . 9 . 6 . . . . . . . . . . . 
            . . . . . . . . 6 9 9 9 . . . . 
            . . . 9 9 . . . . 9 9 9 9 9 . . 
            . 9 9 9 9 . . . . . . 9 9 9 9 . 
            9 9 6 6 6 . 9 9 . 6 . . 6 6 6 . 
            9 6 6 . . . 9 9 . . 9 . . . . . 
            . 6 . . . . 9 6 . . . . . . . . 
            . . . . . . 9 6 . . . . . . . . 
            . . . . . . 9 6 . . . . . . . . 
            `)
        sprite.setVelocity(0, 0)
        sprites.destroy(sprite, effects.spray, 200)
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player4, function (sprite, otherSprite) {
    if (sprite != projectile_p4) {
        info.player4.changeLifeBy(-1)
        sprite.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . 6 . . . . . . . . . . . . 
            . . . 6 9 . . . 6 . . 9 9 9 . . 
            . . 6 6 9 9 . 9 . . 9 9 9 9 6 . 
            . . 6 6 9 9 . . . 9 9 9 9 6 6 . 
            . . . 6 6 9 . . . 9 9 6 6 6 . . 
            . . . . 6 9 . . . . . . . . . . 
            . . 9 . 6 . . . . . . . . . . . 
            . . . . . . . . 6 9 9 9 . . . . 
            . . . 9 9 . . . . 9 9 9 9 9 . . 
            . 9 9 9 9 . . . . . . 9 9 9 9 . 
            9 9 6 6 6 . 9 9 . 6 . . 6 6 6 . 
            9 6 6 . . . 9 9 . . 9 . . . . . 
            . 6 . . . . 9 6 . . . . . . . . 
            . . . . . . 9 6 . . . . . . . . 
            . . . . . . 9 6 . . . . . . . . 
            `)
        sprite.setVelocity(0, 0)
        sprites.destroy(sprite, effects.spray, 200)
    }
})
controller.player4.onButtonEvent(ControllerButton.Down, ControllerButtonEvent.Pressed, function () {
    player_4.setImage(img`
        . . . . f f f f . . . . . 
        . . f f f f f f f f . . . 
        . f f f f f f c f f f . . 
        f f f f f f c c f f f c . 
        f f f c f f f f f f f c . 
        c c c f f f e e f f c c . 
        f f f f f e e f f c c f . 
        f f f b f e e f b f f f . 
        . f 4 1 f 4 4 f 1 4 f . . 
        . f e 4 4 4 4 4 4 e f . . 
        . f f f e e e e f f f . . 
        f e f b 7 7 7 7 b f e f . 
        e 4 f 7 7 7 7 7 7 f 4 e . 
        e e f 6 6 6 6 6 6 f e e . 
        . . . f f f f f f . . . . 
        . . . f f . . f f . . . . 
        `)
    p4_vx = 0
    p4_vy = 50
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    player1.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d e e e e e f . . . 
        . . . f e 4 e d d 4 f . . . . . 
        . . . f 2 2 e d d e f . . . . . 
        . . f f 5 5 f e e f f f . . . . 
        . . f f f f f f f f f f . . . . 
        . . . f f f . . . f f . . . . . 
        `)
    p1_vx = -50
    p1_vy = 0
})
controller.player3.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Pressed, function () {
    player_3.setImage(img`
        . f f f . f f f f f . . . . 
        f f f f f c c c c f f . . . 
        f f f f b c c c c c c f . . 
        f f f c 3 c c c c c c f . . 
        . f 3 3 c c c c c c c c f . 
        . f f f c c c c c 4 c c f . 
        . f f f f c c c 4 4 e f f . 
        . f f 4 4 f b f 4 4 e f f . 
        . . f 4 d 4 1 f d d f f . . 
        . . f f f 4 d d d d f . . . 
        . . . f e e 4 4 4 e f . . . 
        . . . 4 d d e 3 3 3 f . . . 
        . . . e d d e 3 3 3 f . . . 
        . . . f e e f 6 6 6 f . . . 
        . . . . f f f f f f . . . . 
        . . . . . f f f . . . . . . 
        `)
    p3_vx = 50
    p3_vy = 0
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Projectile, function (sprite, otherSprite) {
    sprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . 6 . . . . . . . . . . . . 
        . . . 6 9 . . . 6 . . 9 9 9 . . 
        . . 6 6 9 9 . 9 . . 9 9 9 9 6 . 
        . . 6 6 9 9 . . . 9 9 9 9 6 6 . 
        . . . 6 6 9 . . . 9 9 6 6 6 . . 
        . . . . 6 9 . . . . . . . . . . 
        . . 9 . 6 . . . . . . . . . . . 
        . . . . . . . . 6 9 9 9 . . . . 
        . . . 9 9 . . . . 9 9 9 9 9 . . 
        . 9 9 9 9 . . . . . . 9 9 9 9 . 
        9 9 6 6 6 . 9 9 . 6 . . 6 6 6 . 
        9 6 6 . . . 9 9 . . 9 . . . . . 
        . 6 . . . . 9 6 . . . . . . . . 
        . . . . . . 9 6 . . . . . . . . 
        . . . . . . 9 6 . . . . . . . . 
        `)
    otherSprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . 6 . . . . . . . . . . . . 
        . . . 6 9 . . . 6 . . 9 9 9 . . 
        . . 6 6 9 9 . 9 . . 9 9 9 9 6 . 
        . . 6 6 9 9 . . . 9 9 9 9 6 6 . 
        . . . 6 6 9 . . . 9 9 6 6 6 . . 
        . . . . 6 9 . . . . . . . . . . 
        . . 9 . 6 . . . . . . . . . . . 
        . . . . . . . . 6 9 9 9 . . . . 
        . . . 9 9 . . . . 9 9 9 9 9 . . 
        . 9 9 9 9 . . . . . . 9 9 9 9 . 
        9 9 6 6 6 . 9 9 . 6 . . 6 6 6 . 
        9 6 6 . . . 9 9 . . 9 . . . . . 
        . 6 . . . . 9 6 . . . . . . . . 
        . . . . . . 9 6 . . . . . . . . 
        . . . . . . 9 6 . . . . . . . . 
        `)
    sprites.destroy(otherSprite, effects.spray, 200)
    sprites.destroy(sprite, effects.spray, 200)
})
controller.player2.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
    player2.setImage(img`
        . . . . . f f 4 4 f f . . . . . 
        . . . . f 5 4 5 5 4 5 f . . . . 
        . . . f e 3 3 3 3 3 3 e f . . . 
        . . f b 3 3 3 3 3 3 3 3 b f . . 
        . . f 3 3 3 3 3 3 3 3 3 3 f . . 
        . f 3 3 3 3 3 3 3 3 3 3 3 3 f . 
        . f b 3 3 3 3 3 3 3 3 3 3 b f . 
        . f b b 3 3 3 3 3 3 3 3 b b f . 
        . f b b b b b b b b b b b b f . 
        f c b b b b b b b b b b b b c f 
        f b b b b b b b b b b b b b b f 
        . f c c b b b b b b b b c c f . 
        . . e 4 c f f f f f f c 4 e . . 
        . . e f b d b d b d b b f e . . 
        . . . f f 1 d 1 d 1 d f f . . . 
        . . . . . f f b b f f . . . . . 
        `)
    p2_vx = 0
    p2_vy = -50
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    player1.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . f f e e e e f 2 f . . . . 
        . . f f e e e e f 2 2 2 f . . . 
        . . f e e e f f e e e e f . . . 
        . . f f f f e e 2 2 2 2 e f . . 
        . . f e 2 2 2 f f f f e 2 f . . 
        . f f f f f f f e e e f f f . . 
        . f f e 4 4 e b f 4 4 e e f . . 
        . f e e 4 d 4 1 f d d e f . . . 
        . . f e e e e e d d d f . . . . 
        . . . . f 4 d d e 4 e f . . . . 
        . . . . f e d d e 2 2 f . . . . 
        . . . f f f e e f 5 5 f f . . . 
        . . . f f f f f f f f f f . . . 
        . . . . f f . . . f f f . . . . 
        `)
    p1_vx = 50
    p1_vy = 0
})
controller.player2.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Pressed, function () {
    player2.setImage(img`
        . . . . . . f f f f 4 4 f . . . 
        . . . . f f b f 5 4 5 5 4 f . . 
        . . . f b 3 3 e 4 5 5 5 5 f . . 
        . . f b 3 3 3 3 e 4 4 4 e f . . 
        . . f 3 3 3 3 3 3 3 3 3 3 f . . 
        . . f 3 3 3 3 e b 3 e e 3 3 f . 
        . . f 3 3 3 3 f f e e e 3 3 f . 
        . . f b b b b f b f e e e 3 f . 
        . . f b b b b e 1 f 4 4 e f . . 
        . f f b b b b f 4 4 4 4 f . . . 
        . f b b b b f f f e e e f . . . 
        . . f b b f 4 4 e d d d f . . . 
        . . . f f e 4 4 e d d d f . . . 
        . . . . f b e e b d b d b f . . 
        . . . . f f d 1 d 1 d 1 f f . . 
        . . . . . . f f b b f f . . . . 
        `)
    p2_vx = 50
    p2_vy = 0
})
info.player3.onLifeZero(function () {
    controller.moveSprite(player_3, 0, 0)
    player_3.setImage(img`
        . f f f . f f f f . f f f . 
        f f f f f 8 8 8 8 f f f f f 
        f f f f 9 8 8 8 8 9 f f f f 
        f f f 8 9 8 8 8 8 9 8 f f f 
        . f 9 9 8 8 8 8 8 8 9 9 f . 
        . f 8 8 8 8 6 6 8 8 8 8 f . 
        . f f 8 8 6 6 6 6 8 8 f f . 
        . f f f 6 f 6 6 f 6 f f f . 
        . f f 6 1 f 9 9 f 1 6 f f . 
        . . f f 9 9 9 9 9 9 f f . . 
        . . 8 f 8 6 6 6 6 8 f 8 . . 
        . 8 6 f 6 9 9 9 9 6 f 6 8 . 
        . 6 9 f 9 9 9 9 9 9 8 9 6 . 
        . 6 6 f 6 6 6 6 6 6 f 6 6 . 
        . . . . f f f f f f . . . . 
        . . . . f f . . f f . . . . 
        `)
    sprites.destroy(player_3, effects.spray, 500)
    info.player3.setScore(0)
    number_of_players_out += 1
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player3, function (sprite, otherSprite) {
    if (sprite != projectile_p3) {
        info.player3.changeLifeBy(-1)
        sprite.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . 6 . . . . . . . . . . . . 
            . . . 6 9 . . . 6 . . 9 9 9 . . 
            . . 6 6 9 9 . 9 . . 9 9 9 9 6 . 
            . . 6 6 9 9 . . . 9 9 9 9 6 6 . 
            . . . 6 6 9 . . . 9 9 6 6 6 . . 
            . . . . 6 9 . . . . . . . . . . 
            . . 9 . 6 . . . . . . . . . . . 
            . . . . . . . . 6 9 9 9 . . . . 
            . . . 9 9 . . . . 9 9 9 9 9 . . 
            . 9 9 9 9 . . . . . . 9 9 9 9 . 
            9 9 6 6 6 . 9 9 . 6 . . 6 6 6 . 
            9 6 6 . . . 9 9 . . 9 . . . . . 
            . 6 . . . . 9 6 . . . . . . . . 
            . . . . . . 9 6 . . . . . . . . 
            . . . . . . 9 6 . . . . . . . . 
            `)
        sprite.setVelocity(0, 0)
        sprites.destroy(sprite, effects.spray, 200)
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    player1.setImage(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `)
    p1_vx = 0
    p1_vy = 50
})
controller.player4.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    if (info.player4.score() > 0 && !(player_4.tileKindAt(TileDirection.Center, sprites.dungeon.collectibleInsignia))) {
        projectile_p4 = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 7 7 7 7 7 . . . . . . 
            . . . . 7 7 7 7 7 7 7 . . . . . 
            . . . . 7 7 7 7 7 7 7 . . . . . 
            . . . . 7 7 7 7 7 7 7 . . . . . 
            . . . . 7 7 7 7 7 7 7 . . . . . 
            . . . . 7 7 7 7 7 7 7 . . . . . 
            . . . . . 7 7 7 7 7 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, player_4, p4_vx, p4_vy)
        projectile_p4.setFlag(SpriteFlag.AutoDestroy, true)
        info.player4.changeScoreBy(-1)
    }
})
info.onLifeZero(function () {
    controller.moveSprite(player1, 0, 0)
    player1.setImage(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 6 6 f f f . . . . 
        . . . f f f 6 6 6 6 f f f . . . 
        . . f f f 6 6 6 6 6 6 f f f . . 
        . . f f 6 8 8 8 8 8 8 6 6 f . . 
        . . f 8 8 f f f f f f 8 6 f . . 
        . . f f f f 6 6 6 6 f f f f . . 
        . f f 6 f 9 f 6 6 f 9 f 6 f f . 
        . f 6 6 6 9 f 9 9 f 9 6 6 6 f . 
        . . f 6 6 9 9 9 9 9 9 6 6 f . . 
        . . . f 6 6 6 6 6 6 6 6 f . . . 
        . . 6 6 f 8 8 8 8 8 8 f 6 6 . . 
        . . 6 9 f 8 8 8 8 8 8 f 9 6 . . 
        . . 6 6 f 6 6 9 9 6 6 f 6 6 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `)
    sprites.destroy(player1, effects.spray, 500)
    info.setScore(0)
    number_of_players_out += 1
})
controller.player2.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Pressed, function () {
    player2.setImage(img`
        . . . f 4 4 f f f f . . . . . . 
        . . f 4 5 5 4 5 f b f f . . . . 
        . . f 5 5 5 5 4 e 3 3 b f . . . 
        . . f e 4 4 4 e 3 3 3 3 b f . . 
        . . f 3 3 3 3 3 3 3 3 3 3 f . . 
        . f 3 3 e e 3 b e 3 3 3 3 f . . 
        . f 3 3 e e e f f 3 3 3 3 f . . 
        . f 3 e e e f b f b b b b f . . 
        . . f e 4 4 f 1 e b b b b f . . 
        . . . f 4 4 4 4 f b b b b f f . 
        . . . f e e e f f f b b b b f . 
        . . . f d d d e 4 4 f b b f . . 
        . . . f d d d e 4 4 e f f . . . 
        . . f b d b d b e e b f . . . . 
        . . f f 1 d 1 d 1 d f f . . . . 
        . . . . f f b b f f . . . . . . 
        `)
    p2_vx = -50
    p2_vy = 0
})
controller.player3.onButtonEvent(ControllerButton.Down, ControllerButtonEvent.Pressed, function () {
    player_3.setImage(img`
        . f f f . f f f f . f f f . 
        f f f f f c c c c f f f f f 
        f f f f b c c c c b f f f f 
        f f f c 3 c c c c 3 c f f f 
        . f 3 3 c c c c c c 3 3 f . 
        . f c c c c 4 4 c c c c f . 
        . f f c c 4 4 4 4 c c f f . 
        . f f f b f 4 4 f b f f f . 
        . f f 4 1 f d d f 1 4 f f . 
        . . f f d d d d d d f f . . 
        . . e f e 4 4 4 4 e f e . . 
        . e 4 f b 3 3 3 3 b f 4 e . 
        . 4 d f 3 3 3 3 3 3 c d 4 . 
        . 4 4 f 6 6 6 6 6 6 f 4 4 . 
        . . . . f f f f f f . . . . 
        . . . . f f . . f f . . . . 
        `)
    p3_vx = 0
    p3_vy = 50
})
controller.player4.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Pressed, function () {
    player_4.setImage(img`
        . . . . . f f f f f . . . 
        . . . f f f f f f f f f . 
        . . f f f c f f f f f f . 
        . . f f c f f f c f f f f 
        f f c c f f f c c f f c f 
        f f f f f e f f f f c c f 
        . f f f e e f f f f f f f 
        . . f f e e f b f e e f f 
        . . . f 4 4 f 1 e 4 e f . 
        . . . f 4 4 4 4 e f f f . 
        . . . f f e e e e e f . . 
        . . . f 7 7 7 e 4 4 e . . 
        . . . f 7 7 7 e 4 4 e . . 
        . . . f 6 6 6 f e e f . . 
        . . . . f f f f f f . . . 
        . . . . . . f f f . . . . 
        `)
    p4_vx = -50
    p4_vy = 0
})
controller.player3.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    if (info.player3.score() > 0 && !(player_3.tileKindAt(TileDirection.Center, sprites.dungeon.collectibleInsignia))) {
        projectile_p3 = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 4 4 4 4 4 . . . . . . 
            . . . . 4 4 4 4 4 4 4 . . . . . 
            . . . . 4 4 4 4 4 4 4 . . . . . 
            . . . . 4 4 4 4 4 4 4 . . . . . 
            . . . . 4 4 4 4 4 4 4 . . . . . 
            . . . . 4 4 4 4 4 4 4 . . . . . 
            . . . . . 4 4 4 4 4 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, player_3, p3_vx, p3_vy)
        projectile_p3.setFlag(SpriteFlag.AutoDestroy, true)
        info.player3.changeScoreBy(-1)
    }
})
info.player2.onLifeZero(function () {
    controller.moveSprite(player2, 0, 0)
    player2.setImage(img`
        . . . . . f f 9 9 f f . . . . . 
        . . . . f 9 9 9 9 9 9 f . . . . 
        . . . f 6 9 9 9 9 9 9 6 f . . . 
        . . f 9 6 6 9 9 9 9 6 6 9 f . . 
        . . f 6 6 6 6 6 6 6 6 6 6 f . . 
        . f 6 6 8 9 6 8 8 6 9 8 6 6 f . 
        . f 6 6 f f 8 8 8 8 f f 6 6 f . 
        . f 8 8 f 9 f 8 8 f 9 f 8 8 f . 
        . f 8 8 8 1 f 6 6 f 1 8 8 8 f . 
        f f 8 8 f 6 6 6 6 6 6 f 8 8 f f 
        f 8 8 f f f 8 8 8 8 f f f 8 8 f 
        . f 8 8 f 6 9 9 9 9 6 f 8 8 f . 
        . . 8 9 8 9 9 9 9 9 9 8 9 8 . . 
        . . 8 f 6 9 6 9 6 9 6 6 f 8 . . 
        . . . f f 9 9 9 9 9 9 f f . . . 
        . . . . . f f 6 6 f f . . . . . 
        `)
    sprites.destroy(player2, effects.spray, 500)
    info.player2.setScore(0)
    number_of_players_out += 1
})
controller.player4.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Pressed, function () {
    player_4.setImage(img`
        . . . f f f f f . . . . . 
        . f f f f f f f f f . . . 
        . f f f f f f c f f f . . 
        f f f f c f f f c f f . . 
        f c f f c c f f f c c f f 
        f c c f f f f e f f f f f 
        f f f f f f f e e f f f . 
        f f e e f b f e e f f . . 
        . f e 4 e 1 f 4 4 f . . . 
        . f f f e 4 4 4 4 f . . . 
        . . f e e e e e f f . . . 
        . . e 4 4 e 7 7 7 f . . . 
        . . e 4 4 e 7 7 7 f . . . 
        . . f e e f 6 6 6 f . . . 
        . . . f f f f f f . . . . 
        . . . . f f f . . . . . . 
        `)
    p4_vx = 50
    p4_vy = 0
})
controller.player3.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Pressed, function () {
    player_3.setImage(img`
        . . . . f f f f f . f f f . 
        . . . f f c c c c f f f f f 
        . . f c c c c c c b f f f f 
        . . f c c c c c c 3 c f f f 
        . f c c c c c c c c 3 3 f . 
        . f c c 4 c c c c c f f f . 
        . f f e 4 4 c c c f f f f . 
        . f f e 4 4 f b f 4 4 f f . 
        . . f f d d f 1 4 d 4 f . . 
        . . . f d d d d 4 f f f . . 
        . . . f e 4 4 4 e e f . . . 
        . . . f 3 3 3 e d d 4 . . . 
        . . . f 3 3 3 e d d e . . . 
        . . . f 6 6 6 f e e f . . . 
        . . . . f f f f f f . . . . 
        . . . . . . f f f . . . . . 
        `)
    p3_vx = -50
    p3_vy = 0
})
controller.player3.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
    player_3.setImage(img`
        . f f f . f f f f . f f f . 
        f f f f f c c c c f f f f f 
        f f f f b c c c c b f f f f 
        f f f c 3 c c c c 3 c f f f 
        . f 3 3 c c c c c c 3 3 f . 
        . f c c c c c c c c c c f . 
        . f f c c c c c c c c f f . 
        . f f f c c c c c c f f f . 
        . f f f f f f f f f f f f . 
        . . f f f f f f f f f f . . 
        . . e f f f f f f f f e . . 
        . e 4 f f f f f f f f 4 e . 
        . 4 d f 3 3 3 3 3 3 c d 4 . 
        . 4 4 f 6 6 6 6 6 6 f 4 4 . 
        . . . . f f f f f f . . . . 
        . . . . f f . . f f . . . . 
        `)
    p3_vx = 0
    p3_vy = -50
})
let p3_vy = 0
let p3_vx = 0
let p2_vy = 0
let p2_vx = 0
let projectile_p1: Sprite = null
let projectile_p4: Sprite = null
let projectile_p2: Sprite = null
let projectile_p3: Sprite = null
let p1_vy = 0
let p1_vx = 0
let p4_vy = 0
let p4_vx = 0
let player_4: Sprite = null
let player_3: Sprite = null
let player2: Sprite = null
let player1: Sprite = null
player1 = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
player2 = sprites.create(img`
    . . . . . f f 4 4 f f . . . . . 
    . . . . f 5 4 5 5 4 5 f . . . . 
    . . . f e 4 5 5 5 5 4 e f . . . 
    . . f b 3 e 4 4 4 4 e 3 b f . . 
    . . f 3 3 3 3 3 3 3 3 3 3 f . . 
    . f 3 3 e b 3 e e 3 b e 3 3 f . 
    . f 3 3 f f e e e e f f 3 3 f . 
    . f b b f b f e e f b f b b f . 
    . f b b e 1 f 4 4 f 1 e b b f . 
    f f b b f 4 4 4 4 4 4 f b b f f 
    f b b f f f e e e e f f f b b f 
    . f e e f b d d d d b f e e f . 
    . . e 4 c d d d d d d c 4 e . . 
    . . e f b d b d b d b b f e . . 
    . . . f f 1 d 1 d 1 d f f . . . 
    . . . . . f f b b f f . . . . . 
    `, SpriteKind.Player2)
player_3 = sprites.create(img`
    . f f f . f f f f . f f f . 
    f f f f f c c c c f f f f f 
    f f f f b c c c c b f f f f 
    f f f c 3 c c c c 3 c f f f 
    . f 3 3 c c c c c c 3 3 f . 
    . f c c c c 4 4 c c c c f . 
    . f f c c 4 4 4 4 c c f f . 
    . f f f b f 4 4 f b f f f . 
    . f f 4 1 f d d f 1 4 f f . 
    . . f f d d d d d d f f . . 
    . . e f e 4 4 4 4 e f e . . 
    . e 4 f b 3 3 3 3 b f 4 e . 
    . 4 d f 3 3 3 3 3 3 c d 4 . 
    . 4 4 f 6 6 6 6 6 6 f 4 4 . 
    . . . . f f f f f f . . . . 
    . . . . f f . . f f . . . . 
    `, SpriteKind.Player3)
player_4 = sprites.create(img`
    . . . . f f f f . . . . . 
    . . f f f f f f f f . . . 
    . f f f f f f c f f f . . 
    f f f f f f c c f f f c . 
    f f f c f f f f f f f c . 
    c c c f f f e e f f c c . 
    f f f f f e e f f c c f . 
    f f f b f e e f b f f f . 
    . f 4 1 f 4 4 f 1 4 f . . 
    . f e 4 4 4 4 4 4 e f . . 
    . f f f e e e e f f f . . 
    f e f b 7 7 7 7 b f e f . 
    e 4 f 7 7 7 7 7 7 f 4 e . 
    e e f 6 6 6 6 6 6 f e e . 
    . . . f f f f f f . . . . 
    . . . f f . . f f . . . . 
    `, SpriteKind.Player4)
player1.setPosition(42, 59)
player2.setPosition(113, 59)
player_3.setPosition(84, 25)
player_4.setPosition(60, 93)
controller.moveSprite(player1)
controller.player2.moveSprite(player2)
controller.player3.moveSprite(player_3)
controller.player4.moveSprite(player_4)
info.setLife(5)
info.player2.setLife(5)
info.player3.setLife(5)
info.player4.setLife(5)
game.setGameOverPlayable(true, music.melodyPlayable(music.powerUp), false)
game.setGameOverPlayable(false, music.melodyPlayable(music.wawawawaa), false)
scene.setBackgroundColor(7)
tiles.setCurrentTilemap(tilemap`level1`)
info.setScore(15)
info.player2.setScore(15)
info.player3.setScore(15)
info.player4.setScore(15)
let number_of_players_out = 0
game.onUpdate(function () {
    if (number_of_players_out == 3) {
        game.gameOver(true)
    }
})
game.onUpdateInterval(1000, function () {
    if (player1.tileKindAt(TileDirection.Center, sprites.dungeon.collectibleInsignia)) {
        info.changeScoreBy(1)
    }
    if (player2.tileKindAt(TileDirection.Center, sprites.dungeon.collectibleInsignia)) {
        info.player2.changeScoreBy(1)
    }
    if (player_3.tileKindAt(TileDirection.Center, sprites.dungeon.collectibleInsignia)) {
        info.player3.changeScoreBy(1)
    }
    if (player_4.tileKindAt(TileDirection.Center, sprites.dungeon.collectibleInsignia)) {
        info.player4.changeScoreBy(1)
    }
})
