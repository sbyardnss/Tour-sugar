import { getBookings } from "./database.js"
import { getBands } from "./database.js"
import { getVenues } from "./database.js"

const venues = getVenues();
const bands = getBands();
const bookings = getBookings();


export const bookingList = () => {
    let bookingHTML = "<ul>\n"
    for (const booking of bookings) {
        bookingHTML += `    <li>${booking.band} is playing ${booking.venue} on ${booking.date}`
    }
    return bookingHTML
}