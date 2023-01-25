export const getUserData = (username: string, userAvatar: string, objectNumber?: number) => {
    let userFindContent: string | null = ''
    const userContent: unknown = { username, userAvatar, objectNumber }
    try {
        userFindContent = localStorage.getItem('user')
    } catch {
        'err'
    }
    if (userFindContent && userFindContent === JSON.stringify(userContent)) {
        return JSON.parse(userFindContent)
    } else {
        localStorage.setItem('user', JSON.stringify(userContent))
        return userContent
    }
}

export const getFavoritesAmount = () => {
    let userFindAmount: string | null = '';
    const userAmount: unknown = '{}'
    try {
        userFindAmount = localStorage.getItem('favoritesAmount')
    } catch {
        'err'
    }
    if (userFindAmount) {
        const amount = JSON.parse(userFindAmount)
        if (amount === userAmount) {
            return amount
        }
    } else {
        console.log('not amount');
        localStorage.setItem('favoritesAmount', JSON.stringify(userAmount))
        return userAmount
    }
}