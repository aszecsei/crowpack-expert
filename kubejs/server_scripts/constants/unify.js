// priority: 1000

global['auTags'] = {
    dusts: [],
    gears: [],
    ingots: [],
    nuggets: [],
    plates: [],
    raw_materials: [],
    rods: [],
    storage_blocks: [],
    wires: []
}

/**
 * 
 * @param {string} type 
 * @param {string} material 
 * @returns Internal.ItemStack
 */
global['itemFromTag'] = function (type, material) {
    let item = AlmostUnified.getPreferredItemForTag(`forge:${type}/${material}`)
    if (item.isEmpty()) {
        let ing = Ingredient.of(`#forge:${type}/${material}`)
        if (ing.itemIds.length > 1 && global.devLogging) {
            console.log(`${type}/${material} has more than 1 item and is not unified by AU`)
        }
        item = ing.getFirst()
    }
    return item
}

ServerEvents.recipes(event => {
    AlmostUnified.getTags().forEach(tag => {
        let tagString = tag.toString()
        let match = /forge:(dusts|gears|ingots|nuggets|plates|raw_materials|rods|storage_blocks|wires)\/(.+?)$/.exec(tagString)
        if (match) {
            global.auTags[match[1]].push(match[2])
        }
    })
})