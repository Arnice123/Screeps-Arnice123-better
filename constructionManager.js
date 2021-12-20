const path1 = spawn.pos.findPathTo(sources[0]);
const path2 = spawn.pos.findPathTo(sources[1]);
Memory.path1 = Room.serializePath(path1);
Memory.path2 = Room.serializePath(path2);
const terrain = Game.rooms['E32N8'].getTerrain();

function FindEmptySites()
{
    for (var pos in path1)
    {
       switch(terrain.get(path1[pos].x, path1[pos].y))
       {
           case TERRAIN_MASK_WALL:
                 break;
            case TERRAIN_MASK_SWAMP:
                break;
            case 0:
                break;
       }
    }
}

module.exports = {

};