
/*
 * This code is here to automatically place roads so the travel will allways be optimized
*/

// function that will be called every 25 tics in order to find missing paths
function FindEmptySites()
{
    //creating an instance of the room
    const myHardcodedRoomName = "E32N8";
    const room = Game.rooms[myHardcodedRoomName]

    // create a path from the spawn to the energy sources
    const path1 = Game.spawns['Arnice123 First'].pos.findPathTo(Game.flags.SOURCE1.pos)
    const path2 = Game.spawns['Arnice123 First'].pos.findPathTo(Game.flags.SOURCE2.pos)
    
    const constructSitesLength = Game.spawns['Arnice123 First'].room.find(FIND_MY_STRUCTURES, {
    filter: { structureType: FIND_MY_CONSTRUCTION_SITES }})

    if (constructSitesLength.length >= 100)
    {
        return
    }

      // Getting the room terrain
    var terrain = Game.rooms[myHardcodedRoomName].getTerrain()

    // for each position in the path there should be a road
    for (var pos in path1)
    {
       switch(terrain.get(path1[pos].x, path1[pos].y))
       {
            // if there is floor or a swamp place a road on that position
            case TERRAIN_MASK_SWAMP:
                room.createConstructionSite(path1[pos].pos, STRUCTURE_ROAD)
                break
            case 0:
                room.createConstructionSite(path1[pos].pos, STRUCTURE_ROAD)
                break
       }
    }

    //same thing as previously
    for (var pos in path2)
    {
       switch(terrain.get(path2[pos].x, path2[pos].y))
       {
            case TERRAIN_MASK_SWAMP:
                room.createConstructionSite(path2[pos].pos, STRUCTURE_ROAD)
                break
            case 0:
                room.createConstructionSite(path2[pos].pos, STRUCTURE_ROAD)
                break
       }
    }

}

module.exports = FindEmptySites()
