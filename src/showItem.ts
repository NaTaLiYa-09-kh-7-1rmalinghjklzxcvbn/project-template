export const toggleFavoriteItem = (event) => {
    const dataItem = JSON.parse(event.target.getAttribute('data-item'))
    let items: any = ''
    const block = { id: dataItem.id, name: dataItem.name, image: dataItem.image }

    items = localStorage.getItem('favoriteItems')
    if (items) {
        items = JSON.parse(items)
        if (items.find(item => item.id == block.id)) {
            items = items.filter(item => item.id !== block.id)
        } else {
            items.push(block)
        }
    } else {
        items = []
    }
    localStorage.setItem('favoriteItems', JSON.stringify(items))
    window.dispatchEvent(new Event('storage'))
}