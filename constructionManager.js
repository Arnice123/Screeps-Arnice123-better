/*
 * This code is here to automatically place roads so the travel will allways be optimized
*/

// create a path from the spawn to the energy sources
const path1 = spawn.pos.findPathTo(sources[0])
const path2 = spawn.pos.findPathTo(sources[1])

// Serilizing the paths
Memory.path1 = Room.serializePath(path1)
Memory.path2 = Room.serializePath(path2)

// Getting the room terrain
const terrain = Game.rooms['E32N8'].getTerrain()

// function that will be called every 25 tics in order to find missing paths
function FindEmptySites()
{
    // for each position in the path there should be a road
    for (var pos in path1)
    {
       switch(terrain.get(path1[pos].x, path1[pos].y))
       {
            // if there is floor or a swamp place a road on that position
            case TERRAIN_MASK_SWAMP:
                Game.rooms.sim.createConstructionSite(path1[pos].x, path1[pos].y, STRUCTURE_ROAD)
                break
            case 0:
                Game.rooms.sim.createConstructionSite(path1[pos].x, path1[pos].y, STRUCTURE_ROAD)
                break
       }
    }

    //same thing as previously
    for (var pos in path2)
    {
       switch(terrain.get(path2[pos].x, path2[pos].y))
       {
            case TERRAIN_MASK_SWAMP:
                Game.rooms.sim.createConstructionSite(path2[pos].x, path2[pos].y, STRUCTURE_ROAD)
                break
            case 0:
                Game.rooms.sim.createConstructionSite(path2[pos].x, path2[pos].y, STRUCTURE_ROAD)
                break
       }
    }
     
}

// Modulo - 10 ticks
    const waitTime = 10;

module.exports = {
   
    // If the remainder of dividing the current game time by some value is 0, then its been some value of ticks
    if(Game.time%waitTime == 0){
        console.log("hi")
        FindEmptySites()
    }
    
}
