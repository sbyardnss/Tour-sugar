import { getBands } from "./database.js"
import { getVenues } from "./database.js"
import { getBookings } from "./database.js"

const venues = getVenues();
const bands = getBands();
const bookings = getBookings();

export const bandList = () => {
    let bandHTML = "<ul>\n"
    for (const band of bands) {
        bandHTML += `   <li id="bandClick--${band.id}>${band.name}</li>`
    }
    return bandHTML
}

document.addEventListener(
    "click",
        (clickEvent) => {
        const itemClicked = clickEvent.target
            if (itemClicked.id.startsWith("bandClick")) {
                const [,bandId] = itemClicked.id.split("--")
                let matchingBand = null;
                let bookedVenues = "This band is playing at these venues:\n";
                for (const band of bands) {
                    if (band.id === parseInt(bandId)) {
                        matchingBand = band;
                    }
                }
                for (const booking of bookings) {
                    if (booking.band === matchingBand.name) {
                        bookedVenues += `${booking.venue}\n`
                    }
                }
                window.alert(`${bookedVenues}`)
            }
        }
)