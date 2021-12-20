/*
for (var locations in targets)
{
    let dist = creep.pos.getRangeTo(targets[locations])
    var chosenDist;

    if (chosenDist == null)
    {
        chosenDist = targets[0]
    }

    if (dist <= chosenDist && chosenDist != null)
    {
        chosenDist = targets[locations]
    }
}

    if(creep.transfer(chosenDist, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
        creep.moveTo(chosenDist, {visualizePathStyle: {stroke: '#ffffff'}});
    }
*/

/*
var targets = creep.pos.findClosestByRange(FIND_MY_STRUCTURES, {
                filter: (structure) => {
                    return (structure.structureType == STRUCTURE_EXTENSION || structure.structureType == STRUCTURE_SPAWN) &&
                        structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0;
                }
            });
            if (targets.length > 0) {
                
                if (creep.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0], { visualizePathStyle: { stroke: '#ffffff' } });
                }
            }
*/