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
