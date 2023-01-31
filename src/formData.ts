import { renderSearchResultsBlock } from "./search-results.js"

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
  id: number;
  image: string;
  name: string;
  description: string;
  remoteness: number;
  bookedDates: number[];
  price: number;
}

const search = (data: SerchFormData, err?: string, arr?: Place) => {
  fetch(`http://localhost:3030/places?coordinates=59.9386,30.3141&checkInDate=1623761668832&checkOutDate=1623861668832&maxPrice=20000`)
    .then(response => response.json())
    .then((response) => {
      const places = (response)
      places.map(item => {
        const place: Place = {
          id: item.id,
          image: item.image,
          name: item.name,
          description: item.description,
          remoteness: item.remoteness,
          bookedDates: item.bookedDates,
          price: item.price
        }
        return place
      })
      renderSearchResultsBlock(places);
    })


  console.log(data)
  setTimeout(() => {
    if (err) {
      console.log(err);
    } else {
      console.log(arr);
    }
  }, 1000);
}






