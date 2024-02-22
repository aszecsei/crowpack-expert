StartupEvents.registry('item', event => {

    const generalItems = [
        'wood_pulp'
    ]

    generalItems.forEach(item => {
        event.create(item).texture(`kubejs:item/${item}`)
    })
})