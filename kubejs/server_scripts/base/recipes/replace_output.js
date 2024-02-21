ServerEvents.recipes(event => {
    sharedDies.forEach(die => {
        event.replaceOutput(
            {},
            `thermal:press_${die.thermalName}_die`,
            `immersiveengineering:mold_${die.immersiveEngineeringName}`
        )
    })
})