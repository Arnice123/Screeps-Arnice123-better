var roleHarvester = {

    /** @param {Creep} creep **/
    run: function(creep) {
	    if(creep.store.getFreeCapacity() > 0) {
            var sources = creep.room.find(FIND_SOURCES);
            if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
                if (!AreThereCreepsNearPos1(creep) || !AreThereCreepsNearPos1(creep) || !AreThereCreepsNearPos1(creep))
                {
                    creep.moveTo(sources[0], {visualizePathStyle: {stroke: '#ffaa00'}});
                }
            }
            else if (creep.harvest(sources[1]) == ERR_NOT_IN_RANGE)
            {
                 creep.moveTo(sources[1], {visualizePathStyle: {stroke: '##0000FF'}});
            }

        }
        else {
            var targets = creep.room.find(FIND_STRUCTURES, {
                    filter: (structure) => {
                        return (structure.structureType == STRUCTURE_EXTENSION || structure.structureType == STRUCTURE_SPAWN) &&
                            structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0;
                    }
            });
            if(targets.length > 0) {
                if(creep.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#ffffff'}});
                }
            }
        }
	}
};

function AreThereCreepsNearPos1(creep)
{
    const found1 = Game.flags.pos1.pos.lookFor(LOOK_CREEPS);

    if (found1.length == 0)
    {
        return false;
    }
    else{
        return true;
    }

}

function AreThereCreepsNearPos2(creep)
{
    const found2 = Game.flags.pos2.pos.lookFor(LOOK_CREEPS);

    if (found2.length == 0)
    {
        return false;
    }
    else{
        return true;
    }

}

function AreThereCreepsNearPos3(creep)
{
    const found3 = Game.flags.pos3.pos.lookFor(LOOK_CREEPS);

    if (found3.length == 0)
    {
        return false;
    }
    else{
        return true;
    }

}

module.exports = roleHarvester;

/*
var roleHarvester = {

    /** @param {Creep} creep **//*
    run: function(creep) {
	    if(creep.store.getFreeCapacity() > 0) {
            var sources = creep.room.find(FIND_SOURCES);
            if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[0], {visualizePathStyle: {stroke: '#ffaa00'}});
            }
        }
        else {
            var targets = creep.room.find(FIND_STRUCTURES, {
                    filter: (structure) => {
                        return (structure.structureType == STRUCTURE_EXTENSION || structure.structureType == STRUCTURE_SPAWN) &&
                            structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0;
                    }
            });
            if(targets.length > 0) {
                if(creep.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#ffffff'}});
                }
            }
        }
	}
};*/
