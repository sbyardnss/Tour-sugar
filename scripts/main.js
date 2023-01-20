//html layout

import { venueList } from "./venues.js";
import { bandList } from "./bands.js";
import { bookingList } from "./bookings.js";

const mainBody = document.querySelector("#container");

const siteHTML = `
<h1>Tour some sugar on me</h1>
<article  class="bookingBlock">
    <section>
        <h2>Bookings</h2>
        ${bookingList()}
    </section>
</article>

<div class="details">
    <section class="detail--column">
        <h2>Venues</h2>
        ${venueList()}
    </section>
    <section class="detail--column">
        <h2>Bands</h2>
        ${bandList()}
    </section>
</div>

`

mainBody.innerHTML = siteHTML