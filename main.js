var roleHarvester = require('role.harvester');
var roleBuilder = require('role.builder');
var roleUpgrader = require('role.upgrader');
function FindEmptySites = require("constructionManager").FindEmptySites();

module.exports.loop = function () {

   for(var name in Memory.creeps) {
        if(!Game.creeps[name]) {
            delete Memory.creeps[name];
            console.log('Clearing non-existing creep memory:', name);
        }
    }

    // getting the creeps with the harvester role
    var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
    console.log('Harvesters: ' + harvesters.length);

    // if there are less than 2 harvesters spawn a new one
    if(harvesters.length < 2) {
        var newName = 'Harvester' + Game.time;
        console.log('Spawning new harvester: ' + newName);
        Game.spawns['Arnice123 First'].spawnCreep([WORK,WORK,MOVE,CARRY], newName,
            {memory: {role: 'harvester'}});

        // if the harvesters didn't farm enough energy use this so there will allways be harvesters
        if (harvesters.length == 0)
        {
            Game.spawns['Arnice123 First'].spawnCreep([WORK,MOVE,CARRY], newName,
            {memory: {role: 'harvester'}});
        }
    }

    // getting the creeps with the upgrader role
    var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
    console.log('Upgraders: ' + upgraders.length);

    // if there are less than 2 upgraders spawn a new one
    if(upgraders.length < 2) {
        var newName = 'Upgrader' + Game.time;
        console.log('Spawning new upgrader: ' + newName);
        Game.spawns['Arnice123 First'].spawnCreep([WORK,WORK,CARRY,MOVE], newName,
            {memory: {role: 'upgrader'}});

        // if the harvesters didn't farm enough energy use this so there will allways be some upgrades even if they are not good
        if (upgraders.length == 0)
        {
            Game.spawns['Arnice123 First'].spawnCreep([WORK,MOVE,CARRY], newName,
            {memory: {role: 'upgrader'}});
        }
    }

    // getting the creeps with the builders role
    var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
    console.log('Builders: ' + builders.length);

    // if there are less than 2 builders spawn a new one
    if(builders.length < 2) {
        var newName = 'Builders' + Game.time;
        console.log('Spawning new builders: ' + newName);
        Game.spawns['Arnice123 First'].spawnCreep([WORK,CARRY,WORK,MOVE], newName,
            {memory: {role: 'builder'}});

        // if the harvesters didn't farm enough energy use this so there will not be a lack of creeps
        if (builders.length == 0)
        {
            Game.spawns['Arnice123 First'].spawnCreep([WORK,MOVE,CARRY], newName,
            {memory: {role: 'builder'}});
        }
    }

    // displaying what type of creep is spawning
    if(Game.spawns['Arnice123 First'].spawning) {
        var spawningCreep = Game.creeps[Game.spawns['Arnice123 First'].spawning.name];
        Game.spawns['Arnice123 First'].room.visual.text(
            '🛠️' + spawningCreep.memory.role,
            Game.spawns['Arnice123 First'].pos.x + 1,
            Game.spawns['Arnice123 First'].pos.y,
            {align: 'left', opacity: 0.8});
    }

    //runs the specific creep roles
    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        if(creep.memory.role == 'harvester') {
            roleHarvester.run(creep);
        }
        if(creep.memory.role == 'upgrader') {
            roleUpgrader.run(creep);
        }
        if(creep.memory.role == 'builder') {
            roleBuilder.run(creep);
        }
    }

    //how often FindEmptySites runs
    const waitTime = 10;

    // If the remainder of dividing the current game time by some value is 0, then its been some 10 ticks
    if(Game.time%waitTime == 0){
        console.log("hi")
        FindEmptySites()
    }

}
