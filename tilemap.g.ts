// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`0a0008000303040305010202030303020101030302020103030303030103030204030303030204030302020303030303020302020203030401010202020301030302020202030204030303020202020502020303`, img`
. . 2 . . . . . . . 
. . . . . . . . . . 
. . . . . . . . 2 . 
. . . . 2 . . . . . 
. . . . . . . . . . 
. 2 . . . . . . . . 
. . . . . . . 2 . . 
. . . . . . . . . . 
`, [myTiles.transparency16,sprites.castle.tileGrass2,sprites.castle.tileGrass3,sprites.castle.tileGrass1,sprites.builtin.forestTiles0,sprites.dungeon.collectibleInsignia], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
