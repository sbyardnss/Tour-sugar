import { getBookings } from "./database.js"
import { getBands } from "./database.js"
import { getVenues } from "./database.js"

const venues = getVenues();
const bands = getBands();
const bookings = getBookings();


export const bookingList = () => {
    let bookingHTML = "<ul>\n"
    for (const booking of bookings) {
        bookingHTML += `    <li id="bookingClick--${booking.id}">${booking.band} is playing ${booking.venue} on ${booking.date}`
    }
    return bookingHTML
}


document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
            if (itemClicked.id.startsWith("bookingClick")) {
                const [,bookingId] = itemClicked.id.split("--")
                let matchingBooking = null;
                let bookedBand = null;
                for (const booking of bookings) {
                    if (booking.id === parseInt(bookingId)) {
                        matchingBooking = booking;
                    }
                }
                for (const band of bands) {
                    if (band.name === matchingBooking.band) {
                        bookedBand = band
                    }
                }
                window.alert(`${bookedBand.name}\n${bookedBand.genre}\nFormed in ${bookedBand.yearFormed}\n${bookedBand.members} band members`)
            }
    }
)