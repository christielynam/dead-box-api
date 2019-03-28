const express = require('express');
const app = express();
const cors = require('cors')

app.use(express.json())
app.use(cors())

app.set('port', process.env.PORT || 3000);
app.locals.title = 'Dead Box';

app.locals.shows = [
  {
    "showId": 1,
    "showNumber": 1,
    "date": "05/31/19",
    "venue": "Shoreline Ampitheatre",
    "capacity": 22500,
    "showTime": "7:00",
    "city": "Mountain View",
    "state": "California",
    "milesToNextShow": 0,
    "closestAirport": "Mineta San Jose International Airport",
    "showGap": 0
  },
  {
    "showId": 1,
    "showNumber": 2,
    "date": "06/01/19",
    "venue": "Shoreline Ampitheatre",
    "capacity": 22500,
    "showTime": "7:00",
    "city": "Mountain View",
    "state": "California",
    "milesToNextShow": 346,
    "closestAirport": "Mineta San Jose International Airport",
    "showGap": 1
  },
  {
    "showId": 2,
    "showNumber": 3,
    "date": "06/03/19",
    "venue": "Hollywood Bowl",
    "capacity": 17500,
    "showTime": "7:00",
    "city": "Hollywood",
    "state": "California",
    "milesToNextShow": 0,
    "closestAirport": "Los Angeles International Airport (LAX)",
    "showGap": 0
  },
  {
    "showId": 2,
    "showNumber": 4,
    "date": "06/04/19",
    "venue": "Hollywood Bowl",
    "capacity": 17500,
    "showTime": "7:00",
    "city": "Hollywood",
    "state": "California",
    "milesToNextShow": 1101,
    "closestAirport": "Los Angeles International Airport (LAX)",
    "showGap": 2
  },
  {
    "showId": 3,
    "showNumber": 5,
    "date": "06/07/19",
    "venue": "The Gorge Amphitheatre",
    "capacity": 27500,
    "showTime": "7:00",
    "city": "George",
    "state": "Washington",
    "milesToNextShow": 0,
    "closestAirport": "Pangborn Memorial Airport",
    "showGap": 0
  },
  {
    "showId": 3,
    "showNumber": 6,
    "date": "06/08/19",
    "venue": "The Gorge Amphitheatre",
    "capacity": 27500,
    "showTime": "7:00",
    "city": "George",
    "state": "Washington",
    "milesToNextShow": 2117,
    "closestAirport": "Pangborn Memorial Airport ",
    "showGap": 3
  },
  {
    "showId": 4,
    "showNumber": 7,
    "date": "06/12/19",
    "venue": "Ruoff Home Mortgage Music Center",
    "capacity": 24790,
    "showTime": "7:00",
    "city": "Noblesville",
    "state": "Indiana",
    "milesToNextShow": 200,
    "closestAirport": "Indianapolis International Airport",
    "showGap": 1
  },
  {
    "showId": 5,
    "showNumber": 8,
    "date": "06/14/19",
    "venue": "Wrigley Field",
    "capacity": 84218,
    "showTime": "6:30",
    "city": "Chicago",
    "state": "Illinois",
    "milesToNextShow": 0,
    "closestAirport": "Chicago O'Hare International Airport",
    "showGap": 0
  },
  {
    "showId": 5,
    "showNumber": 9,
    "date": "06/15/19",
    "venue": "Wrigley Field",
    "capacity": 84218,
    "showTime": "6:30",
    "city": "Chicago",
    "state": "Illinois",
    "milesToNextShow": 815,
    "closestAirport": "Chicago O'Hare International Airport",
    "showGap": 2
  },
  {
    "showId": 6,
    "showNumber": 10,
    "date": "06/18/19",
    "venue": "Saratoga Performing Arts Center",
    "capacity": 25100,
    "showTime": "7:00",
    "city": "Saratoga Springs",
    "state": "New York",
    "milesToNextShow": 269,
    "closestAirport": "Albany International Airport",
    "showGap": 1
  },
  {
    "showId": 7,
    "showNumber": 11,
    "date": "06/20/19",
    "venue": "BB&T Pavillion",
    "capacity": 25000,
    "showTime": "7:00",
    "city": "Camden",
    "state": "New Jersey",
    "milesToNextShow": 297,
    "closestAirport": "Philadelphia International Airport",
    "showGap": 1
  },
  {
    "showId": 8,
    "showNumber": 12,
    "date": "06/22/19",
    "venue": "Gillete Stadium",
    "capacity": 66829,
    "showTime": "7:00",
    "city": "Foxborough",
    "state": "Massachusetts",
    "milesToNextShow": 196,
    "closestAirport": "Boston Logan International Airport",
    "showGap": 0
  },
  {
    "showId": 9,
    "showNumber": 13,
    "date": "06/23/19",
    "venue": "Citi Field",
    "capacity": 45186,
    "showTime": "7:00",
    "city": "New York",
    "state": "New York",
    "milesToNextShow": 275,
    "closestAirport": "LaGuardia Airport",
    "showGap": 2
  },
  {
    "showId": 10,
    "showNumber": 14,
    "date": "06/26/19",
    "venue": "Jiffy Lube Live",
    "capacity": 25262,
    "showTime": "7:00",
    "city": "Bristow",
    "state": "Virginia",
    "milesToNextShow": 342,
    "closestAirport": "Ronald Reagan Washington National Airport",
    "showGap": 1
  },
  {
    "showId": 11,
    "showNumber": 15,
    "date": "06/28/19",
    "venue": "PNC Music Pavillion",
    "capacity": 19500,
    "showTime": "7:00",
    "city": "Charlotte",
    "state": "North California",
    "milesToNextShow": 259,
    "closestAirport": "Charlotte Douglas International Airport",
    "showGap": 0
  },
  {
    "showId": 12,
    "showNumber": 16,
    "date": "06/29/19",
    "venue": "Cellairis Amphitheatre at Lakewood",
    "capacity": 18920,
    "showTime": "7:00",
    "city": "Atlanta",
    "state": "Georgia",
    "milesToNextShow": 784,
    "closestAirport": "Hartsfield–Jackson Atlanta International Airport",
    "showGap": 2
  },
  {
    "showId": 13,
    "showNumber": 17,
    "date": "07/02/19",
    "venue": "Dos Equis Pavillion",
    "capacity": 20000,
    "showTime": "7:00",
    "city": "Dallas",
    "state": "Texas",
    "milesToNextShow": 824,
    "closestAirport": "Dallas/Fort Worth International Airport",
    "showGap": 2
  },
  {
    "showId": 14,
    "showNumber": 18,
    "date": "07/05/19",
    "venue": "Folsom Field",
    "capacity": 86982,
    "showTime": "6:30",
    "city": "Boulder",
    "state": "Colorado",
    "milesToNextShow": 0,
    "closestAirport": "Denver International Airport",
    "showGap": 0
  },
  {
    "showId": 14,
    "showNumber": 19,
    "date": "07/06/19",
    "venue": "Folsom Field",
    "capacity": 86982,
    "showTime": "6:30",
    "city": "Boulder",
    "state": "Colorado",
    "milesToNextShow": 0,
    "closestAirport": "Denver International Airport",
    "showGap": 0
  }
]

app.locals.lodging = [
  {
      "showId": 1,
      "name": "Hampton Inn & Suites Mountain View",
      "address": "390 Moffett Blvd, Mountain View, CA, 94043",
      "phoneNumber": "(650) 988-0300",
      "type": "Hotel",
      "milesFromVenue": 2.2,
      "foodNearBy": ["Oren's Hummus", "Taco Bell", "ShorelineLake American Bistro", "Doppio Zero"],
      "thingsToDo": ["Santa Monica Pier", "Golden Gate Bridge", "Haight-Ashbury"],
      "dogFriendly": false
    },
    {
      "showId": 1,
      "name": "Courtyard by Marriott Palo Alto Los Altos",
      "address": "4320 El Camino Real, Los Altos, CA 94022",
      "phoneNumber": "(650) 941-9900",
      "type": "Hotel",
      "milesFromVenue": 3.5,
      "foodNearBy": ["Oren's Hummus", "Taco Bell", "ShorelineLake American Bistro", "Doppio Zero"],
      "thingsToDo": ["Santa Monica Pier", "Golden Gate Bridge", "Haight-Ashbury"],
      "dogFriendly": false
    },
    {
      "showId": 1,
      "name": "Dinah's Garden Hotel",
      "address": "4261 El Camino Real, Palo Alto, CA 94306",
      "phoneNumber": "(650) 493-2844",
      "type": "Hotel",
      "milesFromVenue": 3.4,
      "foodNearBy": ["Oren's Hummus", "Taco Bell", "ShorelineLake American Bistro", "Doppio Zero"],
      "thingsToDo": ["Santa Monica Pier", "Golden Gate Bridge", "Haight-Ashbury"],
      "dogFriendly": true
    },
    {
      "showId": 1,
      "name": "Black Mountain Backpack Camp",
      "address": "Monte Bello Rd (Trail), Los Altos, CA 94022",
      "phoneNumber": "(650) 691-1200",
      "type": "Camping",
      "milesFromVenue": 15.2,
      "foodNearBy": ["Cheztakoss", "Tacos Lujano"],
      "thingsToDo": ["Santa Monica Pier", "Golden Gate Bridge", "Haight-Ashbury"],
      "dogFriendly": false
    },
    {
      "showId": 2,
      "name": "Best Western Hollywood Plaza Inn",
      "address": "2011 N Highland Ave, Los Angeles, CA, 90068, United States",
      "phoneNumber": "(866)-538-0293",
      "type": "Hotel",
      "milesFromVenue": 0.4,
      "foodNearBy": ["Papilles", "PokiNometry", "Subway", "Baja Fresh", "Grub"],
      "thingsToDo": ["Hollywood Walk of Fame", "Hollywood Wax Museum", "Runyon Canyon Park"],
      "dogFriendly": false
    },
    {
      "showId": 2,
      "name": "Lexen Hotel Hollywood Walk of Fame",
      "address": "2018 North Highland Avenue, Los Angeles, CA, 90068",
      "phoneNumber": "(866)-538-1349",
      "type": "Hotel",
      "milesFromVenue": 0.5,
      "foodNearBy": ["Papilles", "PokiNometry", "Subway", "Baja Fresh", "Grub"],
      "thingsToDo": ["Hollywood Walk of Fame", "Hollywood Wax Museum", "Runyon Canyon Park"],
      "dogFriendly": false
    },
    {
      "showId": 2,
      "name": "Hilton Garden Inn Los Angeles/Hollywood",
      "address": "2005 N Highland Avenue, Los Angeles, CA, 90068",
      "phoneNumber": "(866)-925-9754",
      "type": "Hotel",
      "milesFromVenue": 0.5,
      "foodNearBy": ["Papilles", "PokiNometry", "Subway", "Baja Fresh", "Grub"],
      "thingsToDo": ["Hollywood Walk of Fame", "Hollywood Wax Museum", "Runyon Canyon Park"],
      "dogFriendly": false
    },
    {
      "showId": 2,
      "name": "Highland Gardens Hotel",
      "address": "7047 Franklin Ave, Los Angeles, CA, 90028",
      "phoneNumber": "(866)-925-7881",
      "type": "Hotel",
      "milesFromVenue": 1,
      "foodNearBy": ["Papilles", "PokiNometry", "Subway", "Baja Fresh", "Grub"],
      "thingsToDo": ["Hollywood Walk of Fame", "Hollywood Wax Museum", "Runyon Canyon Park"],
      "dogFriendly": true
    },
    {
      "showId": 2,
      "name": "Los Angeles North KOA",
      "address": "7601 Soledad Canyon Rd, Acton, CA 93510",
      "phoneNumber": "(661) 268-1214",
      "type": "Camping",
      "milesFromVenue": 37.9,
      "foodNearBy": ["Yummy Donuts", "Del Taco", "Jack-in-the-Box"],
      "thingsToDo": ["Hollywood Walk of Fame", "Hollywood Wax Museum", "Runyon Canyon Park"],
      "dogFriendly": true
    },
    {
      "showId": 3,
      "name": "Knights Inn Quincy",
      "address": "710 10th Ave SW, Quincy, WA 98848",
      "phoneNumber": "(509) 797-7001",
      "type": "Hotel",
      "milesFromVenue": 17.9,
      "foodNearBy": ["Westside Pizza", "Andaluz Family Mexican", "McDonalds", "Pita Pit"],
      "thingsToDo": ["Cave B Estate Winery Quincy Tasting Room", "Frenchman Coulee", "Trinity Gardens Lavender Farm"],
      "dogFriendly": false
    },
    {
      "showId": 3,
      "name": "Sundowner Motel",
      "address": "414 F St SE, Quincy, WA 98848",
      "phoneNumber": "(509) 787-3587",
      "type": "Motel",
      "milesFromVenue": 17.4,
      "foodNearBy": ["Westside Pizza", "Andaluz Family Mexican", "McDonalds", "Pita Pit"],
      "thingsToDo": ["Cave B Estate Winery Quincy Tasting Room", "Frenchman Coulee", "Trinity Gardens Lavender Farm"],
      "dogFriendly": true
    },
    {
      "showId": 3,
      "name": "The Gorge Amphitheatre",
      "address": "On-site",
      "phoneNumber": "(509) 785-6262",
      "type": "Camping",
      "milesFromVenue": 0,
      "foodNearBy": ["Westside Pizza", "Andaluz Family Mexican", "McDonalds", "Pita Pit"],
      "thingsToDo": ["Cave B Estate Winery Quincy Tasting Room", "Frenchman Coulee", "Trinity Gardens Lavender Farm"],
      "dogFriendly": false
    },
    {
      "showId": 3,
      "name": "Wildhorse Campground",
      "address": "22456 W Baseline Rd, Quincy, WA 98848",
      "phoneNumber": "(509) 398-0543",
      "type": "Camping",
      "milesFromVenue": 3,
      "foodNearBy": ["Westside Pizza", "Andaluz Family Mexican", "McDonalds", "Pita Pit"],
      "thingsToDo": ["Cave B Estate Winery Quincy Tasting Room", "Frenchman Coulee", "Trinity Gardens Lavender Farm"],
      "dogFriendly": false
    },
    {
      "showId": 4,
      "name": "Cambria Hotel Noblesville Indianapolis",
      "address": "13500 Tegler Dr, Noblesville, IN 46060",
      "phoneNumber": "(317) 773-4970",
      "type": "Hotel",
      "milesFromVenue": 1.2,
      "foodNearBy": ["Aspen Creek Grill", "Fresh to Order", "Bella Pizzeria", "Olive Garden", "QDOBA"],
      "thingsToDo": ["Urban Vines Winery & Brewery Co.", "Carmel Arts and Design District", "Conner Prairie"],
      "dogFriendly": false
    },
    {
      "showId": 4,
      "name": "Embassy Suites by Hilton Noblesville Indianapolis",
      "address": "South, 13700 Conference Center Drive, Noblesville, IN 46060",
      "phoneNumber": "(317) 674-1900",
      "type": "Hotel",
      "milesFromVenue": 1.5,
      "foodNearBy": ["Aspen Creek Grill", "Fresh to Order", "Bella Pizzeria", "Olive Garden", "QDOBA"],
      "thingsToDo": ["Urban Vines Winery & Brewery Co.", "Carmel Arts and Design District", "Conner Prairie"],
      "dogFriendly": false
    },
    {
      "showId": 4,
      "name": "Baymont Inn & Suites",
      "address": "16025 Prosperity Dr, Noblesville, IN 46060",
      "phoneNumber": "(317) 770-6772",
      "type": "Hotel",
      "milesFromVenue": 4.8,
      "foodNearBy": ["Aspen Creek Grill", "Fresh to Order", "Bella Pizzeria", "Olive Garden", "QDOBA"],
      "thingsToDo": ["Urban Vines Winery & Brewery Co.", "Carmel Arts and Design District", "Conner Prairie"],
      "dogFriendly": true
    },
    {
      "showId": 4,
      "name": "Sleepybear Campground",
      "address": "13231 E 146th St",
      "phoneNumber": "(317) 691-2339",
      "type": "Camping",
      "milesFromVenue": 0.6,
      "foodNearBy": ["Aspen Creek Grill", "Fresh to Order", "Bella Pizzeria", "Olive Garden", "QDOBA"],
      "thingsToDo": ["Urban Vines Winery & Brewery Co.", "Carmel Arts and Design District", "Conner Prairie"],
      "dogFriendly": false
    },
    {
      "showId": 4,
      "name": "Backstage Campground",
      "address": "15017 Prairie Baptist Rd, Noblesville, IN 46060",
      "phoneNumber": "(317) 258-3759",
      "type": "Camping",
      "milesFromVenue": 2.3,
      "foodNearBy": ["Aspen Creek Grill", "Fresh to Order", "Bella Pizzeria", "Olive Garden", "QDOBA"],
      "thingsToDo": ["Urban Vines Winery & Brewery Co.", "Carmel Arts and Design District", "Conner Prairie"],
      "dogFriendly": false
    },
    {
      "showId": 5,
      "name": "Wrigley Hostel",
      "address": "3514 N Sheffield Ave, Chicago, IL 60657",
      "phoneNumber": "(773) 598-4471",
      "type": "Hostel",
      "milesFromVenue": 0.1,
      "foodNearBy": ["Lou Malnati's Pizzeria", "Azteca Grill", "Bernie's Tap & Grill", "Wrigley BBQ"],
      "thingsToDo": ["Millennium Park", "Grant Park", "The Bean", "Kingston Mines"],
      "dogFriendly": false
    },
    {
      "showId": 5,
      "name": "Majestic Hotel",
      "address": "528 W Brompton Ave, Chicago, IL 60657",
      "phoneNumber": "(773) 404-3499",
      "type": "Hotel",
      "milesFromVenue": 0.7,
      "foodNearBy": ["Lou Malnati's Pizzeria", "Azteca Grill", "Bernie's Tap & Grill", "Wrigley BBQ"],
      "thingsToDo": ["Millennium Park", "Grant Park", "The Bean", "Kingston Mines"],
      "dogFriendly": false
    },
    {
      "showId": 5,
      "name": "BEST WESTERN PLUS Hawthorne Terrace",
      "address": "3434 N Broadway, Chicago, IL 60657",
      "phoneNumber": "(773) 244-3434",
      "type": "Hotel",
      "milesFromVenue": 0.6,
      "foodNearBy": ["Lou Malnati's Pizzeria", "Azteca Grill", "Bernie's Tap & Grill", "Wrigley BBQ"],
      "thingsToDo": ["Millennium Park", "Grant Park", "The Bean", "Kingston Mines"],
      "dogFriendly": true
    },
    {
      "showId": 5,
      "name": "Hotel Zachary, Chicago",
      "address": "3630 N Clark St, Chicago, IL 60613",
      "phoneNumber": "(773) 302-2300",
      "type": "Hotel",
      "milesFromVenue": 0.1,
      "foodNearBy": ["Lou Malnati's Pizzeria", "Azteca Grill", "Bernie's Tap & Grill", "Wrigley BBQ"],
      "thingsToDo": ["Millennium Park", "Grant Park", "The Bean", "Kingston Mines"],
      "dogFriendly": false
    },
    {
      "showId": 5,
      "name": "Camp Bullfrog Lake",
      "address": "9600 Wolf Rd, Willow Springs, IL 60480",
      "phoneNumber": "(312) 636-9785",
      "type": "Camping",
      "milesFromVenue": 24,
      "foodNearBy": ["Portillo's Hot Dogs", "Lassak Market & Deli"],
      "thingsToDo": ["Millennium Park", "Grant Park", "The Bean", "Kingston Mines"],
      "dogFriendly": false
    },
    {
      "showId": 6,
      "name": "Hilton Garden Inn Saratoga Springs",
      "address": "125 S Broadway, Saratoga Springs, NY 12866",
      "phoneNumber": "(518) 587-1500",
      "type": "Hotel",
      "milesFromVenue": 0.9,
      "foodNearBy": ["Boston Market", "Pizza Hut", "Thirsty Owl Saratoga"],
      "thingsToDo": ["Adirondack Mountains", "Lake George"],
      "dogFriendly": false
    },
    {
      "showId": 6,
      "name": "Embassy Suites by Hilton Saratoga Springs",
      "address": "86 Congress St, Saratoga Springs, NY 12866",
      "phoneNumber": "(518) 290-9090",
      "type": "Hotel",
      "milesFromVenue": 2.4,
      "foodNearBy": ["Boston Market", "Pizza Hut", "Thirsty Owl Saratoga"],
      "thingsToDo": ["Adirondack Mountains", "Lake George"],
      "dogFriendly": false
    },
    {
      "showId": 6,
      "name": "Holiday Inn Saratoga Springs",
      "address": "232 Broadway, Saratoga Springs, NY 12866",
      "phoneNumber": "(518) 584-4550",
      "type": "Hotel",
      "milesFromVenue": 2.2,
      "foodNearBy": ["Boston Market", "Pizza Hut", "Thirsty Owl Saratoga"],
      "thingsToDo": ["Adirondack Mountains", "Lake George"],
      "dogFriendly": true
    },
    {
      "showId": 6,
      "name": "Lee's Park",
      "address": "1464 NY-9P, Saratoga Springs, NY 12866",
      "phoneNumber": "(518) 584-1951",
      "type": "Camping",
      "milesFromVenue": 5.7,
      "foodNearBy": ["Stewart's Shops"],
      "thingsToDo": ["Adirondack Mountains", "Lake George"],
      "dogFriendly": true
    },
    {
      "showId": 7,
      "name": "Hilton Philadelphia at Penn's Landing",
      "address": "201 S Columbus Blvd, Philadelphia, PA 19106-3101",
      "phoneNumber": "(855)-605-0316",
      "type": "Hotel",
      "milesFromVenue": 4.5,
      "foodNearBy": ["Tony Luke's", "Barbuzzo", "Dante & Luigi's", "Carmen's Famous Italian Hoagie"],
      "thingsToDo": ["The Liberty Bell", "Art Museum Steps", "Independence Hall"],
      "dogFriendly": false
    },
    {
      "showId": 7,
      "name": "Sheraton Philadelphia Society Hill Hotel",
      "address": "One Dock Street, 2nd and Walnut Streets, Philadelphia, PA 19106-3939",
      "phoneNumber": "(215) 238-6000",
      "type": "Hotel",
      "milesFromVenue": 3.6,
      "foodNearBy": ["Tony Luke's", "Barbuzzo", "Dante & Luigi's", "Carmen's Famous Italian Hoagie"],
      "thingsToDo": ["The Liberty Bell", "Art Museum Steps", "Independence Hall"],
      "dogFriendly": false
    },
    {
      "showId": 7,
      "name": "Sleep Inn Center City",
      "address": "1020 Cherry St, Philadelphia, PA 19107-2305",
      "phoneNumber": "(267) 417-8990",
      "type": "Hotel",
      "milesFromVenue": 3.4,
      "foodNearBy": ["Tony Luke's", "Barbuzzo", "Dante & Luigi's", "Carmen's Famous Italian Hoagie"],
      "thingsToDo": ["The Liberty Bell", "Art Museum Steps", "Independence Hall"],
      "dogFriendly": false
    },
    {
      "showId": 7,
      "name": "Aloft Philadelphia Downtown",
      "address": "101 N Broad St, Philadelphia, PA 19107",
      "phoneNumber": "(215) 607-2020",
      "type": "Hotel",
      "milesFromVenue": 3.9,
      "foodNearBy": ["Tony Luke's", "Barbuzzo", "Dante & Luigi's", "Carmen's Famous Italian Hoagie"],
      "thingsToDo": ["The Liberty Bell", "Art Museum Steps", "Independence Hall"],
      "dogFriendly": true
    },
    {
      "showId": 7,
      "name": "Clarksboro KOA",
      "address": "117 Timberlane Rd, Clarksboro, NJ 08020",
      "phoneNumber": "(856) 423-6677",
      "type": "Camping",
      "milesFromVenue": 5.7,
      "foodNearBy": ["McDonalds", "Dragon Nest"],
      "thingsToDo": ["The Liberty Bell", "Art Museum Steps", "Independence Hall"],
      "dogFriendly": true
    },
    {
      "showId": 8,
      "name": "Hilton Garden Inn Foxborough Patriot Place",
      "address": "27 Patriot Place, Foxboro, MA, 02035",
      "phoneNumber": "(800) 374 4208",
      "type": "Hotel",
      "milesFromVenue": 0.3,
      "foodNearBy": ["Davio's Northern Italian Steakhouse", "Skipjack's", "CBS Sporting Club"],
      "thingsToDo": ["Showcase Live", "The Patriots Hall of Fame", "Fenway Park (Boston)"],
      "dogFriendly": false
    },
    {
      "showId": 8,
      "name": "Americas Best Value Inn-Foxboro",
      "address": "105 Washington St, Foxboro, MA, 02035",
      "phoneNumber": "(800) 491-9657",
      "type": "Hotel",
      "milesFromVenue": 1.1,
      "foodNearBy": ["Davio's Northern Italian Steakhouse", "Skipjack's", "CBS Sporting Club"],
      "thingsToDo": ["Showcase Live", "The Patriots Hall of Fame", "Fenway Park (Boston)"],
      "dogFriendly": false
    },
    {
      "showId": 8,
      "name": "Residence Inn by Marriott Foxborough",
      "address": "250 Foxborough Blvd, Foxboro, MA",
      "phoneNumber": "(866) 925-7881",
      "type": "Hotel",
      "milesFromVenue": 5.1,
      "foodNearBy": ["Davio's Northern Italian Steakhouse", "Skipjack's", "CBS Sporting Club"],
      "thingsToDo": ["Showcase Live", "The Patriots Hall of Fame", "Fenway Park (Boston)"],
      "dogFriendly": true
    },
    {
      "showId": 8,
      "name": "Normandy Farms Campground",
      "address": "72 West St, Foxborough, MA 02035",
      "phoneNumber": "(866) 673-2767",
      "type": "Camping",
      "milesFromVenue": 4.4,
      "foodNearBy": ["Davio's Northern Italian Steakhouse", "Skipjack's", "CBS Sporting Club"],
      "thingsToDo": ["Showcase Live", "The Patriots Hall of Fame", "Fenway Park (Boston)"],
      "dogFriendly": true
    },
    {
      "showId": 9,
      "name": "Queens Hotel",
      "address": "65-15 Queens Blvd, Woodside, NY 11377",
      "phoneNumber": "(718) 458-8808",
      "type": "Hotel",
      "milesFromVenue": 5.8,
      "foodNearBy": ["Katz's Delicatessen", "Lombardi's", "ChoLon", "Blue Hill"],
      "thingsToDo": ["Statue of Liberty", "Times Square", "Empire State Building", "Brooklyn Bowl"],
      "dogFriendly": false
    },
    {
      "showId": 9,
      "name": "Hotel Pennsylvania",
      "address": "401 7th Ave, New York, NY 10001",
      "phoneNumber": "(212) 736-5000",
      "type": "Hotel",
      "milesFromVenue": 10.1,
      "foodNearBy": ["Katz's Delicatessen", "Lombardi's", "ChoLon", "Blue Hill"],
      "thingsToDo": ["Statue of Liberty", "Times Square", "Empire State Building", "Brooklyn Bowl"],
      "dogFriendly": true
    },
    {
      "showId": 9,
      "name": "Courtyard by Marriott New York Manhattan/Upper East Side",
      "address": "E 92nd st New York, NY 10128",
      "phoneNumber": "(855)-809-3511",
      "type": "Hotel",
      "milesFromVenue": 9.2,
      "foodNearBy": ["Katz's Delicatessen", "Lombardi's", "ChoLon", "Blue Hill"],
      "thingsToDo": ["Statue of Liberty", "Times Square", "Empire State Building", "Brooklyn Bowl"],
      "dogFriendly": false
    },
    {
      "showId": 9,
      "name": "Round Valley",
      "address": "1220 Stanton Lebanon Rd, Lebanon, NJ 08833",
      "phoneNumber": "(908) 236-6355",
      "type": "Camping",
      "milesFromVenue": 1.6,
      "foodNearBy": ["King Tut Seafood & Grill", "Janina Bistro"],
      "thingsToDo": ["Statue of Liberty", "Times Square", "Empire State Building", "Brooklyn Bowl"],
      "dogFriendly": false
    },
    {
      "showId": 10,
      "name": "Holiday Inn Manassas - Battlefield",
      "address": "10424 Balls Ford Road, Manassas, VA 20109",
      "phoneNumber": "(571) 292-5400",
      "type": "Hotel",
      "milesFromVenue": 5.5,
      "foodNearBy": ["MOD Pizza", "El Tio Tex-Mex Grill", "Firebirds Wood Fired Grill"],
      "thingsToDo": ["Washington, DC", "Tin Cannon Brewing", "Manassas National Battlefield Park"],
      "dogFriendly": false
    },
    {
      "showId": 10,
      "name": "Courtyard Manassas Battlefield Park",
      "address": "10701 Battleview Pkwy, Manassas, VA 20109",
      "phoneNumber": "(703) 335-1300",
      "type": "Hotel",
      "milesFromVenue": 6.6,
      "foodNearBy": ["MOD Pizza", "El Tio Tex-Mex Grill", "Firebirds Wood Fired Grill"],
      "thingsToDo": ["Washington, DC", "Tin Cannon Brewing", "Manassas National Battlefield Park"],
      "dogFriendly": false
    },
    {
      "showId": 10,
      "name": "Candlewood Suites Manassas",
      "address": "11220 Balls Ford Rd, Manassas, VA, 20109",
      "phoneNumber": "(800)-491-9657",
      "type": "Hotel",
      "milesFromVenue": 4.2,
      "foodNearBy": ["MOD Pizza", "El Tio Tex-Mex Grill", "Firebirds Wood Fired Grill"],
      "thingsToDo": ["Washington, DC", "Tin Cannon Brewing", "Manassas National Battlefield Park"],
      "dogFriendly": true
    },
    {
      "showId": 10,
      "name": "Hillwood Camping Park",
      "address": "14280 Gardner Manor Place, Gainesville, VA 20155",
      "phoneNumber": "(703) 754-6105",
      "type": "Camping",
      "milesFromVenue": 4.2,
      "foodNearBy": ["MOD Pizza", "El Tio Tex-Mex Grill", "Firebirds Wood Fired Grill"],
      "thingsToDo": ["Washington, DC", "Tin Cannon Brewing", "Manassas National Battlefield Park"],
      "dogFriendly": true
    },
    {
      "showId": 10,
      "name": "Greenville Farm Family Campground",
      "address": "14004 Shelter Ln, Haymarket, VA 20169",
      "phoneNumber": "(703) 754-7944",
      "type": "Camping",
      "milesFromVenue": 9.5,
      "foodNearBy": ["MOD Pizza", "El Tio Tex-Mex Grill", "Firebirds Wood Fired Grill"],
      "thingsToDo": ["Washington, DC", "Tin Cannon Brewing", "Manassas National Battlefield Park"],
      "dogFriendly": false
    },
    {
      "showId": 11,
      "name": "Hampton Inn & Suites Concord",
      "address": "9850 Weddington Road Ext, Concord, NC, 28027",
      "phoneNumber": "(855)-238-1591",
      "type": "Hotel",
      "milesFromVenue": 4.6,
      "foodNearBy": ["Le Kebab Grill", "Famous Toastery", "Mert's Heart & Soul"],
      "thingsToDo": ["NASCAR Hall of Fame", "Discovery Place", "Bechtler Museum of Modern Art"],
      "dogFriendly": false
    },
    {
      "showId": 11,
      "name": "Continental Inn Charlotte",
      "address": "1100 W Sugar Creek Rd, Charlotte, NC, 28213",
      "phoneNumber": "(800)-491-9657",
      "type": "Hotel",
      "milesFromVenue": 7.5,
      "foodNearBy": ["Le Kebab Grill", "Famous Toastery", "Mert's Heart & Soul"],
      "thingsToDo": ["NASCAR Hall of Fame", "Discovery Place", "Bechtler Museum of Modern Art"],
      "dogFriendly": false
    },
    {
      "showId": 11,
      "name": "Extended Stay America - Charlotte",
      "address": "123 E. Mccullough Dr, Charlotte, NC, 28262",
      "phoneNumber": "(800)-658-6760",
      "type": "Hotel",
      "milesFromVenue": 4.0,
      "foodNearBy": ["Le Kebab Grill", "Famous Toastery", "Mert's Heart & Soul"],
      "thingsToDo": ["NASCAR Hall of Fame", "Discovery Place", "Bechtler Museum of Modern Art"],
      "dogFriendly": true
    },
    {
      "showId": 11,
      "name": "Ver-El RV Park & Campground",
      "address": "5650 Sandusky Blvd, Concord, NC 28027",
      "phoneNumber": "(704) 769-0248",
      "type": "Camping",
      "milesFromVenue": 2.7,
      "foodNearBy": ["Le Kebab Grill", "Famous Toastery", "Mert's Heart & Soul"],
      "thingsToDo": ["NASCAR Hall of Fame", "Discovery Place", "Bechtler Museum of Modern Art"],
      "dogFriendly": true
    },
    {
      "showId": 12,
      "name": "Hyatt Regency Atlanta Downtown",
      "address": "265 Peachtree St NE, Atlanta, GA, 30303",
      "phoneNumber": "(866)-539-8122",
      "type": "Hotel",
      "milesFromVenue": 5.9,
      "foodNearBy": ["The Vortex", "BoccaLupo", "The Varsity"],
      "thingsToDo": ["World of Coca-Cola", "The Tabernacle", "Piedmont Park"],
      "dogFriendly": false
    },
    {
      "showId": 12,
      "name": "Country Inn & Suites by Radisson",
      "address": "759 Pollard Blvd SW, Atlanta, GA 30315",
      "phoneNumber": "(404) 658-1961",
      "type": "Hotel",
      "milesFromVenue": 2.5,
      "foodNearBy": ["The Vortex", "BoccaLupo", "The Varsity"],
      "thingsToDo": ["World of Coca-Cola", "The Tabernacle", "Piedmont Park"],
      "dogFriendly": true
    },
    {
      "showId": 12,
      "name": "Fairfield Inn & Suites by Marriott Atlanta Downtown",
      "address": "54 Peachtree St SW, Atlanta, GA 30303",
      "phoneNumber": "(678) 702-8600",
      "type": "Hotel",
      "milesFromVenue": 4,
      "foodNearBy": ["The Vortex", "BoccaLupo", "The Varsity"],
      "thingsToDo": ["World of Coca-Cola", "The Tabernacle", "Piedmont Park"],
      "dogFriendly": false
    },
    {
      "showId": 12,
      "name": "Atlanta West Campground",
      "address": "2420 Old Alabama Rd Austell, GA 30168",
      "phoneNumber": "(770) 941-7185",
      "type": "Camping",
      "milesFromVenue": 4.6,
      "foodNearBy": ["The Vortex", "BoccaLupo", "The Varsity"],
      "thingsToDo": ["World of Coca-Cola", "The Tabernacle", "Piedmont Park"],
      "dogFriendly": false
    },
    {
      "showId": 13,
      "name": "Americas Best Value Inn Dallas",
      "address": "3243 Merrifield Avenue, Dallas, TX, 75223",
      "phoneNumber": "(800)-491-9657",
      "type": "Hotel",
      "milesFromVenue": 2.1,
      "foodNearBy": ["Mia's Tex-Mex", "The Grape Restaurant", "Peacan Lodge"],
      "thingsToDo": ["The Dallas Arboretum and Botanical Garden", "Reunion Tower", "Deep Ellum, Dallas"],
      "dogFriendly": true
    },
    {
      "showId": 13,
      "name": "Downtown Suites Dallas",
      "address": "3422 Samuell Blvd, Dallas, TX, 75223",
      "phoneNumber": "(800)-491-9657",
      "type": "Hotel",
      "milesFromVenue": 2.2,
      "foodNearBy": ["Mia's Tex-Mex", "The Grape Restaurant", "Peacan Lodge"],
      "thingsToDo": ["The Dallas Arboretum and Botanical Garden", "Reunion Tower", "Deep Ellum, Dallas"],
      "dogFriendly": false
    },
    {
      "showId": 13,
      "name": "Deep Ellum Hostel",
      "address": "2801 Elm Street, Dallas, TX, 75226",
      "phoneNumber": "(800)-491-9657",
      "type": "Hostel",
      "milesFromVenue": 2.4,
      "foodNearBy": ["Mia's Tex-Mex", "The Grape Restaurant", "Peacan Lodge"],
      "thingsToDo": ["The Dallas Arboretum and Botanical Garden", "Reunion Tower", "Deep Ellum, Dallas"],
      "dogFriendly": false
    },
    {
      "showId": 13,
      "name": "Fairfield Inn & Suites by Marriott Dallas Downtown",
      "address": "555 Evergreen Street, Dallas, TX, 75201",
      "phoneNumber": "(855)239-9483",
      "type": "Hotel",
      "milesFromVenue": 3.3,
      "foodNearBy": ["Mia's Tex-Mex", "The Grape Restaurant", "Peacan Lodge"],
      "thingsToDo": ["The Dallas Arboretum and Botanical Garden", "Reunion Tower", "Deep Ellum, Dallas"],
      "dogFriendly": false
    },
    {
      "showId": 13,
      "name": "Dallas Northeast Campground",
      "address": "4268 FM 36, Caddo Mills, TX 75135",
      "phoneNumber": "(903) 527-3615",
      "type": "Camping",
      "milesFromVenue": 8.4,
      "foodNearBy": ["Mia's Tex-Mex", "The Grape Restaurant", "Peacan Lodge"],
      "thingsToDo": ["The Dallas Arboretum and Botanical Garden", "Reunion Tower", "Deep Ellum, Dallas"],
      "dogFriendly": false
    },
    {
      "showId": 14,
      "name": "Best Western Plus Boulder Inn",
      "address": "770 28th Street, Boulder, CO, 80303-2343",
      "phoneNumber": "(866)-925-8648",
      "type": "Hotel",
      "milesFromVenue": 0.8,
      "foodNearBy": ["The Sink", "The West End Tavern", "Mountain Sun Pub & Brewery"],
      "thingsToDo": ["The Flatirons", "Pearl Street", "Boulder Theatre", "The Fox Theatre"],
      "dogFriendly": true
    },
    {
      "showId": 14,
      "name": "Hilton Garden Inn Boulder",
      "address": "2701 Canyon Boulevard, Boulder, CO, 80302",
      "phoneNumber": "(855)-239-9477",
      "type": "Hotel",
      "milesFromVenue": 1.1,
      "foodNearBy": ["The Sink", "The West End Tavern", "Mountain Sun Pub & Brewery"],
      "thingsToDo": ["The Flatirons", "Pearl Street", "Boulder Theatre", "The Fox Theatre"],
      "dogFriendly": true
    },
    {
      "showId": 14,
      "name": "Residence Inn By Marriott Boulder",
      "address": "3030 Center Green Dr, Boulder, CO, 80301",
      "phoneNumber": "(303) 449-5545",
      "type": "Hotel",
      "milesFromVenue": 0.9,
      "foodNearBy": ["The Sink", "The West End Tavern", "Mountain Sun Pub & Brewery"],
      "thingsToDo": ["The Flatirons", "Pearl Street", "Boulder Theatre", "The Fox Theatre"],
      "dogFriendly": true
    },
    {
      "showId": 14,
      "name": "Peaceful Valley",
      "address": "Middle Saint Vrain Creek, Boulder, CO 80301",
      "phoneNumber": "(303) 541-2500",
      "type": "Camping",
      "milesFromVenue": 3.3,
      "foodNearBy": ["The Sink", "The West End Tavern", "Mountain Sun Pub & Brewery"],
      "thingsToDo": ["The Flatirons", "Pearl Street", "Boulder Theatre", "The Fox Theatre"],
      "dogFriendly": true
    }
  ];

app.get('/api/v1/shows', (request, response) => {
  const shows = app.locals.shows
  return response.json({shows})
});

app.get('/api/v1/lodging', (request, response) => {
  const lodging = app.locals.lodging
  return response.json({lodging})
})

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`)
})