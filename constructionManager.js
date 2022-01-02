
/*
 * This code is here to automatically place roads so the travel will allways be optimized
*/

// function that will be called every 10 tics in order to find missing paths
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
    
    for(var po in path1)
    {
        console.log('this runssssssssssssssssssssss')
        room.visual.circle(path1[po].pos)
    } // what I am trying to do but for some reason it doesn't run
    

      // Getting the room terrain
    var terrain = Game.rooms[myHardcodedRoomName].getTerrain()

    // for each position in the path there should be a road
    for (var pos in path1)
    {
       switch(terrain.get(path1[pos].x, path1[pos].y))
       {
            // if there is floor or a swamp place a road on that position
            case TERRAIN_MASK_SWAMP:
                const placeConstructionSiteResult11 = room.createConstructionSite(path1[pos].pos, STRUCTURE_ROAD)
                console.log(placeConstructionSiteResult11) // returns -10 (invalid location)
                //room.createConstructionSite(path1[pos].pos, STRUCTURE_ROAD)
                break
            case 0:
                const placeConstructionSiteResult12 = room.createConstructionSite(path1[pos].pos, STRUCTURE_ROAD)
                 console.log(placeConstructionSiteResult12)
                break
       }
    }

    //same thing as previously
    for (var pos in path2)
    {
       switch(terrain.get(path2[pos].x, path2[pos].y))
       {
            case TERRAIN_MASK_SWAMP:
                const placeConstructionSiteResult21 = room.createConstructionSite(path2[pos].pos, STRUCTURE_ROAD)
                 console.log(placeConstructionSiteResult21)
                //room.createConstructionSite(path2[pos].pos, STRUCTURE_ROAD)
                break
            case 0:
                const placeConstructionSiteResult22 = room.createConstructionSite(path2[pos].pos, STRUCTURE_ROAD)
                 console.log(placeConstructionSiteResult22)
                //room.createConstructionSite(path2[pos].pos, STRUCTURE_ROAD)
                break
       }
    }

}

module.exports = FindEmptySites()
