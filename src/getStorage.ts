
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

export function getFavoritesAmount() {
    let data: any = ''
    data = localStorage.getItem('favoriteItems')
    if (data) {
        data = JSON.parse(data)
    } else {
        data = []
    }
    return data.length
}