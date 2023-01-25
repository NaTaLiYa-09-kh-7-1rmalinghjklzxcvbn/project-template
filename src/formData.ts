// /* eslint-disable  @typescript-eslint/no-non-null-assertion */
// import { renderSearchFormBlock } from './search-form.js'
// import { renderSearchStubBlock } from './search-results.js'
// import { renderUserBlock } from './user.js'
// import { renderToast } from './lib.js'
// import { getUserData } from './getStorage.js'
// //import { getFavoritesAmount } from './getStorage.js'
// import { arrivalDay } from './search-form.js'
// import { departDay } from './search-form.js'
// //import { handleFormSubmit } from './formData.js'

// const avatar = "/img/avatar.png"
// const userName = "Wade Warren"
// const objectNumber = 3

interface SerchFormData {
    city: string,
    dateArrival: string,
    dateDepart: string,
    priceDay: string
}

export function handleFormSubmit(event) {
    event.preventDefault()

    const formData = new FormData(event.target)

    const serchFormData: SerchFormData = {
        city: formData.get('city')?.toString() || '',
        dateArrival: formData.get('checkin')?.toString() || '',
        dateDepart: formData.get('checkout')?.toString() || '',
        priceDay: formData.get('price')?.toString() || ''
    }

    search(serchFormData)
}
interface Place {
    ['']
}
const search = (data: SerchFormData, err?: string, arr?: Place) => {
    console.log(data)
    setTimeout(() => {
        if (err) {
            console.log(err);
        } else {
            console.log(arr);
        }
    }, 1000);

}






