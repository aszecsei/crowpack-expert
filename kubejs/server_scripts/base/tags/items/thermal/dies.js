ServerEvents.tags('item', event => {
    sharedDies.forEach(die => {
        event.add('thermal:crafting/dies', [`immersiveengineering:mold_${die.immersiveEngineeringName}`])
        event.add(`thermal:crafting/dies/${die.thermalName}`, [
            `immersiveengineering:mold_${die.immersiveEngineeringName}`
        ])
    })

    thermalDies.forEach(die => {
        event.add('thermal:crafting/dies', [`#thermal:crafting/dies/${die}`])
        event.add(`thermal:crafting/dies/${die}`, [`thermal:press_${die}_die`])
    })

    immersiveEngineeringDies.forEach((dieName) => {
        event.add('thermal:crafting/dies', [`#thermal:crafting/dies/${dieName}`]);
        event.add(`thermal:crafting/dies/${dieName}`, [`immersiveengineering:mold_${dieName}`]);
    })
})