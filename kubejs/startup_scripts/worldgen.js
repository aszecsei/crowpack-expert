WorldgenEvents.remove(e => {

    const oresToRemove = [
        'create:zinc_ore',
        'create:deepslate_zinc_ore',

        'occultism:silver_ore',
        'occultism:silver_ore_deepslate',
    ]
    e.removeOres(o => {
        o.worldgenLayer = 'underground_ores'
        o.blocks = oresToRemove
    })
})

WorldgenEvents.add(e => {
    e.addSpawn(spawn => {
        spawn.setCategory('creature')
        spawn.setEntity('minecraft:turtle')
        spawn.weight = 60
        spawn.minCount = 1
        spawn.maxCount = 3
        spawn.biomes = ['#beach', '#ocean']
    })
})