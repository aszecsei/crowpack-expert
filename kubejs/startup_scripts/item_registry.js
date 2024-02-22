StartupEvents.registry('item', event => {

    const generalItems = [
        'incomplete_book',
        'wood_pulp'
    ]

    generalItems.forEach(item => {
        event.create(item).texture(`kubejs:item/${item}`)
    })
})