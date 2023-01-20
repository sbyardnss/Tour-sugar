import { getVenues } from "./database.js"
import { getBands } from "./database.js"
import { getBookings } from "./database.js"

const venues = getVenues();
const bands = getBands();
const bookings = getBookings();
export const venueList = () => {
    let venueHTML = "<ul>\n"
    for (const venue of venues) {
        venueHTML += `  <li id="venueClick--${venue.id}">${venue.name}</li>\n`
    }
    return venueHTML
}



document.addEventListener(
    "click",
        (clickEvent) => {
        const itemClicked = clickEvent.target
            if (itemClicked.id.startsWith("venueClick")) {
                const [,venueId] = itemClicked.id.split("--")
                let matchingVenue = null;
                let bookedBands = "Bands booked at this venue are:\n";
                for (const venue of venues) {
                    if (venue.id === parseInt(venueId)) {
                        matchingVenue = venue;
                    }
                }
                for (const booking of bookings) {
                    if (booking.venue === matchingVenue.name) {
                        bookedBands += `${booking.band}\n`
                    }
                }
                window.alert(`${bookedBands}`)

                
        }
            
            
    }
)