const database = {
    venues: [{
        id: 1,
        name: "The Hole",
        sqft: 500,
        maxOccupancy: 200
    }, {
        id: 2,
        name: "Meat Shack",
        sqft: 430,
        maxOccupancy: 160
    }, {
        id: 3,
        name: "Rolfs",
        sqft: 800,
        maxOccupancy: 430
    }, {
        id: 4,
        name: "Planet Zero",
        sqft: 280,
        maxOccupancy: 75
    }, {
        id: 5,
        name: "Jim's",
        sqft: 450,
        maxOccupancy: 225
    }],
    bands: [{
        id: 1,
        name: "Skelly and the Heavies",
        genre: "post rock",
        yearFormed: 2010
    }, {
        id: 2,
        name: "Teenie rainbows",
        genre: "psych",
        yearFormed: 2017
    }, {
        id: 3,
        name: "Cowboy Shark Tank",
        genre: "bluegrass",
        yearFormed: 2013
    }, {
        id: 4,
        name: "Fury Mambo",
        genre: "punk",
        yearFormed: 2016
    }, {
        id: 5,
        name: "Blarney Fife",
        genre: "funk",
        yearFormed: 2009
    }, {
        id: 6,
        name: "Airborne Tadpole",
        genre: "ambient",
        yearFormed: 2013
    }, {
        id: 7,
        name: "Mr Magma",
        genre: "doom",
        yearFormed: 2019
    }, {
        id: 8,
        name: "Hevvy",
        genre: "post rock",
        yearFormed: 2011
    }],
    bookings: [{
        id: 1,
        band: "Blarney Fife",
        venue: "Rolfs",
        date: "1/30/2023"
    }, {
        id: 2,
        band: "Mr Magma",
        venue: "Jim's",
        date: "1/30/2023"
    }, {
        id: 3,
        band: "Airborne Tadpole",
        venue: "Meat Shack",
        date: "1/30/2023"
    }, {
        id: 4,
        band: "Hevvy",
        venue: "The Hole",
        date: "1/30/2023"
    }, {
        id: 5,
        band: "Fury Mambo",
        venue: "Planet Zero",
        date: "1/30/2023"
    }, {
        id: 6,
        band: "Cowboy Shark Tank",
        venue: "The Hole",
        date: "1/30/2023"
    }, {
        id: 7,
        band: "Skelly and the Heavies",
        venue: "The Hole",
        date: "1/31/2023"
    }, {
        id: 8,
        band: "Teenie rainbows",
        venue: "Planet Zero",
        date: "1/31/2023"
    }, {
        id: 9,
        band: "Mr Magma",
        venue: "Meat Shack",
        date: "1/31/2023"
    }, {
        id: 10,
        band: "Hevvy",
        venue: "Rolfs",
        date: "1/31/2023"
    }, {
        id: 11,
        band: "Fury Mambo",
        venue: "The Hole",
        date: "1/31/2023"
    }, {
        id: 12,
        band: "Skelly and the Heavies",
        venue: "Planet Zero",
        date: "2/1/2023"
    }, {
        id: 13,
        band: "Blarney Fife",
        venue: "Meat Shack",
        date: "2/1/2023"
    }, {
        id: 14,
        band: "Mr Magma",
        venue: "Rolfs",
        date: "2/1/2023"
    }, {
        id: 15,
        band: "Teenie rainbows",
        venue: "Planet Zero",
        date: "2/1/2023"
    }, {
        id: 16,
        band: "Skelly and the Heavies",
        venue: "Jim's",
        date: "2/1/2023"
    }]
}


export const getVenues = () => {
    return database.venues.map(venue => ({...venue}))
}

export const getBands = () => {
    return database.bands.map(band => ({...band}))
}

export const getBookings = () => {
    return database.bookings.map(booking => ({...booking}))
}

