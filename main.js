var roleHarvester = require('role.harvester');
var roleBuilder = require('role.builder');
var roleUpgrader = require('role.upgrader');

module.exports.loop = function () {

   for(var name in Memory.creeps) {
        if(!Game.creeps[name]) {
            delete Memory.creeps[name];
            console.log('Clearing non-existing creep memory:', name);
        }
    }

    var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
    console.log('Harvesters: ' + harvesters.length);

    if(harvesters.length < 2) {
        var newName = 'Harvester' + Game.time;
        console.log('Spawning new harvester: ' + newName);
        Game.spawns['Arnice123 First'].spawnCreep([WORK,WORK,MOVE,MOVE,CARRY,CARRY], newName, 
            {memory: {role: 'harvester'}});
    }
    
    var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
    console.log('Upgraders: ' + upgraders.length);

    if(upgraders.length < 2) {
        var newName = 'Upgrader' + Game.time;
        console.log('Spawning new upgrader: ' + newName);
        Game.spawns['Arnice123 First'].spawnCreep([WORK,CARRY,MOVE,MOVE,WORK], newName, 
            {memory: {role: 'upgrader'}});
    }
    
    var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
    console.log('Builders: ' + builders.length);

    if(builders.length < 2) {
        var newName = 'Builders' + Game.time;
        console.log('Spawning new builders: ' + newName);
        Game.spawns['Arnice123 First'].spawnCreep([WORK,CARRY,MOVE,MOVE], newName, 
            {memory: {role: 'builder'}});
    }
    
    if(Game.spawns['Arnice123 First'].spawning) { 
        var spawningCreep = Game.creeps[Game.spawns['Arnice123 First'].spawning.name];
        Game.spawns['Arnice123 First'].room.visual.text(
            '🛠️' + spawningCreep.memory.role,
            Game.spawns['Arnice123 First'].pos.x + 1, 
            Game.spawns['Arnice123 First'].pos.y, 
            {align: 'left', opacity: 0.8});
    }

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
}