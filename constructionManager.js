/*
 * This code is here to automatically place roads so the travel will allways be optimized
*/

    // create a path from the spawn to the energy sources
    const path1 = Game.spawns['Arnice123 First'].pos.findPathTo(Game.flags.SOURCE1.pos)
    const path2 = Game.spawns['Arnice123 First'].pos.findPathTo(Game.flags.SOURCE2.pos)

    // Serilizing the paths
    Memory.path1 = Game.room.serializePath(path1)
    Memory.path2 = Game.room.serializePath(path2)

// function that will be called every 25 tics in order to find missing paths
function FindEmptySites(creep)
{
    // Getting the room terrain
    const terrain = Game.rooms['E32N8'].getTerrain()

    // for each position in the path there should be a road
    for (var pos in Memory.path1)
    {
       switch(terrain.get(Memory.path1[pos].x, Memory.path1[pos].y))
       {
            // if there is floor or a swamp place a road on that position
            case TERRAIN_MASK_SWAMP:
                Game.rooms.sim.createConstructionSite(Memory.path1[pos].x, Memory.path1[pos].y, STRUCTURE_ROAD)
                break
            case 0:
                Game.rooms.sim.createConstructionSite(Memory.path1[pos].x, Memory.path1[pos].y, STRUCTURE_ROAD)
                break
       }
    }

    //same thing as previously
    for (var pos in Memory.path2)
    {
       switch(terrain.get(Memory.path2[pos].x, Memory.path2[pos].y))
       {
            case TERRAIN_MASK_SWAMP:
                Game.rooms.sim.createConstructionSite(Memory.path2[pos].x, Memory.path2[pos].y, STRUCTURE_ROAD)
                break
            case 0:
                Game.rooms.sim.createConstructionSite(Memory.path2[pos].x, Memory.path2[pos].y, STRUCTURE_ROAD)
                break
       }
    }

}

module.exports = FindEmptySites()
