// import React, {useState} from 'react'

// const HotelFinder = ({destinationName, outDate, returnDate, guests, lat, lng, rooms}) => {

//     // https://www.expedia.co.uk/Hotel-Search?adults=2&d1=2022-02-23
//     // &d2=2022-02-24&destination=Dublin%2C%20Ireland%20%28DUB%29&endDate=2022-02-24
//     // &latLong=53.426408%2C-6.239646&regionId=4347204&rooms=1&semdtl=&sort=RECOMMENDED
//     // &startDate=2022-02-23&theme=&useRewards=false&userIntent=
//     const [rooms, setRooms] = useState()

//     function getHotels(destinationName, outDate, returnDate, guests, lat, lng, e){
//         e.preventDefault()
//         setRooms(e.target[0].value)
//         // dates must be in the form 2022-02-11 
//         const url =     `https://www.expedia.co.uk/Hotel-Search?adults=${guests}&d1=${outDate}
//                         &d2=${returnDate}&destination=${destinationName}&endDate=${returnDate}
//                         &latLong=${lat}%2C${lng}&rooms=${rooms}&semdtl=&sort=RECOMMENDED
//                         &startDate=${outDate}&theme=&useRewards=false&userIntent=`
//     }

//     return(
//         <>
//             <form onSubmit={getHotels}>
//                 <input type="number" placeholder="Number of rooms" min="0" max="8"></input>
//                 <input type="submit"></input>
//             </form>
//         </>
//     )
// }

// export default HotelFinder
