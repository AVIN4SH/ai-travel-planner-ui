import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = import.meta.env.VITE_REACT_APP_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  // responseMimeType: "text/plain",
  responseMimeType: "application/json",
};

export const chatSession = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {
          text: "generate travel plan for location: las vegas, for 5 days for couple for a moderate budget, give me hotels option list with hotel name, hotel address, price, hotel image url, geo coordinates, rating description, and suggest itinerary with placeName, placeDetails, place Image url, geo coordinates, ticket pricing, time to travel each of location for 5 days with each day plan with best time to visit in JSON format",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n{\n  "hotels": [\n    {\n      "name": "The Linq Hotel + Experience",\n      "address": "3535 Las Vegas Blvd S, Las Vegas, NV 89109, USA",\n      "price": "$150-$250 per night",\n      "imageUrl": "https://www.linq.com/content/dam/linq/hero-images/hero-image-desktop-linq-hotel-exterior.jpg",\n      "geoCoordinates": "36.1011,-115.1739",\n      "rating": "4 stars",\n      "description": "Modern hotel with a vibrant atmosphere, connected to the LINQ Promenade and High Roller observation wheel."\n    },\n    {\n      "name": "The Venetian Resort Las Vegas",\n      "address": "3355 Las Vegas Blvd S, Las Vegas, NV 89109, USA",\n      "price": "$200-$350 per night",\n      "imageUrl": "https://www.venetian.com/content/dam/venetian/hero-images/hero-image-desktop-venetian-resort-exterior.jpg",\n      "geoCoordinates": "36.1008,-115.1742",\n      "rating": "4.5 stars",\n      "description": "Luxurious hotel with a Venetian-inspired theme, featuring a Grand Canal and gondola rides."\n    },\n    {\n      "name": "The Cosmopolitan of Las Vegas",\n      "address": "3708 Las Vegas Blvd S, Las Vegas, NV 89109, USA",\n      "price": "$250-$450 per night",\n      "imageUrl": "https://www.cosmopolitanlasvegas.com/content/dam/cosmopolitan/hero-images/hero-image-desktop-cosmopolitan-exterior.jpg",\n      "geoCoordinates": "36.1002,-115.1737",\n      "rating": "5 stars",\n      "description": "Stylish and contemporary hotel with a rooftop pool, Chandelier Bar, and award-winning restaurants."\n    },\n    {\n      "name": "The Wynn Las Vegas",\n      "address": "3131 Las Vegas Blvd S, Las Vegas, NV 89109, USA",\n      "price": "$300-$500 per night",\n      "imageUrl": "https://www.wynnlasvegas.com/content/dam/wynn/hero-images/hero-image-desktop-wynn-exterior.jpg",\n      "geoCoordinates": "36.1025,-115.1751",\n      "rating": "5 stars",\n      "description": "Luxury resort with world-class dining, shopping, and entertainment."\n    }\n  ],\n  "itinerary": [\n    {\n      "day": 1,\n      "theme": "Arrival and Exploring the Strip",\n      "schedule": [\n        {\n          "time": "10:00 AM",\n          "placeName": "Arrive at McCarran International Airport (LAS)",\n          "placeDetails": "Take a taxi or ride-sharing service to your hotel.",\n          "placeImageUrl": "https://www.lasvegas.com/sites/default/files/styles/hero_image_2x/public/images/hero-images/hero_image_mccarran.jpg?itok=7J0_57q7",\n          "geoCoordinates": "36.0803,-115.1523",\n          "ticketPricing": "N/A",\n          "timeToTravel": "30 minutes"\n        },\n        {\n          "time": "11:00 AM",\n          "placeName": "Check-in at your hotel",\n          "placeDetails": "",\n          "placeImageUrl": "",\n          "geoCoordinates": "",\n          "ticketPricing": "N/A",\n          "timeToTravel": "N/A"\n        },\n        {\n          "time": "12:00 PM",\n          "placeName": "Lunch at In-N-Out Burger",\n          "placeDetails": "Enjoy a classic American burger at a popular fast-food chain.",\n          "placeImageUrl": "https://www.in-n-out.com/images/home/hero.jpg",\n          "geoCoordinates": "36.1138,-115.1719",\n          "ticketPricing": "N/A",\n          "timeToTravel": "10 minutes"\n        },\n        {\n          "time": "2:00 PM",\n          "placeName": "Walk the Las Vegas Strip",\n          "placeDetails": "Explore the famous casinos, hotels, and attractions.",\n          "placeImageUrl": "https://www.lasvegas.com/sites/default/files/styles/hero_image_2x/public/images/hero-images/hero_image_strip_night.jpg?itok=z4mD6-tL",\n          "geoCoordinates": "36.1008,-115.1742",\n          "ticketPricing": "N/A",\n          "timeToTravel": "2 hours"\n        },\n        {\n          "time": "4:00 PM",\n          "placeName": "Visit the Bellagio Conservatory & Botanical Garden",\n          "placeDetails": "Admire the stunning floral displays and seasonal themes.",\n          "placeImageUrl": "https://www.bellagio.com/content/dam/bellagio/hero-images/hero-image-desktop-bellagio-conservatory.jpg",\n          "geoCoordinates": "36.1009,-115.1753",\n          "ticketPricing": "Free",\n          "timeToTravel": "30 minutes"\n        },\n        {\n          "time": "6:00 PM",\n          "placeName": "Dinner at The Cheesecake Factory",\n          "placeDetails": "Enjoy a delicious and affordable meal at a popular chain restaurant.",\n          "placeImageUrl": "https://www.thecheesecakefactory.com/content/dam/tcf/images/home/hero-image-desktop-cheesecake-factory-exterior.jpg",\n          "geoCoordinates": "36.1008,-115.1742",\n          "ticketPricing": "N/A",\n          "timeToTravel": "10 minutes"\n        },\n        {\n          "time": "8:00 PM",\n          "placeName": "See the Bellagio Fountains Show",\n          "placeDetails": "Watch the mesmerizing synchronized water and music show.",\n          "placeImageUrl": "https://www.bellagio.com/content/dam/bellagio/hero-images/hero-image-desktop-fountains.jpg",\n          "geoCoordinates": "36.1009,-115.1753",\n          "ticketPricing": "Free",\n          "timeToTravel": "30 minutes"\n        }\n      ]\n    },\n    {\n      "day": 2,\n      "theme": "Exploring Downtown Las Vegas",\n      "schedule": [\n        {\n          "time": "10:00 AM",\n          "placeName": "Breakfast at The Peppermill",\n          "placeDetails": "Enjoy a unique and vibrant atmosphere for breakfast.",\n          "placeImageUrl": "https://www.peppermilllasvegas.com/images/peppermill-interior.jpg",\n          "geoCoordinates": "36.1707,-115.1439",\n          "ticketPricing": "N/A",\n          "timeToTravel": "20 minutes"\n        },\n        {\n          "time": "11:00 AM",\n          "placeName": "Visit the Neon Museum",\n          "placeDetails": "Explore the history of Las Vegas through iconic neon signs.",\n          "placeImageUrl": "https://www.neonmuseum.org/wp-content/uploads/2019/09/Neon-Museum-Las-Vegas-Sign-Entrance.jpg",\n          "geoCoordinates": "36.1688,-115.1468",\n          "ticketPricing": "$20",\n          "timeToTravel": "15 minutes"\n        },\n        {\n          "time": "1:00 PM",\n          "placeName": "Lunch at  The Hofbrauhaus Las Vegas",\n          "placeDetails": "Enjoy authentic German food and beer in a traditional setting.",\n          "placeImageUrl": "https://www.hofbrauhauslasvegas.com/images/hofbrauhaus-interior.jpg",\n          "geoCoordinates": "36.1702,-115.1405",\n          "ticketPricing": "N/A",\n          "timeToTravel": "10 minutes"\n        },\n        {\n          "time": "3:00 PM",\n          "placeName": "Explore Fremont Street Experience",\n          "placeDetails": "Experience the vibrant atmosphere with live music, street performers, and the Viva Vision light show.",\n          "placeImageUrl": "https://www.fremontstreetexperience.com/wp-content/uploads/2020/03/Fremont-Street-Experience-Viva-Vision-1.jpg",\n          "geoCoordinates": "36.1678,-115.1421",\n          "ticketPricing": "N/A",\n          "timeToTravel": "1 hour"\n        },\n        {\n          "time": "5:00 PM",\n          "placeName": "Visit the Mob Museum",\n          "placeDetails": "Learn about the history of organized crime in Las Vegas.",\n          "placeImageUrl": "https://www.themobmuseum.org/wp-content/uploads/2020/08/Mob-Museum-Las-Vegas-Exterior.jpg",\n          "geoCoordinates": "36.1696,-115.1429",\n          "ticketPricing": "$25",\n          "timeToTravel": "10 minutes"\n        },\n        {\n          "time": "7:00 PM",\n          "placeName": "Dinner at  The Golden Steer Steak House",\n          "placeDetails": "Enjoy a classic steakhouse experience with a retro ambiance.",\n          "placeImageUrl": "https://www.goldensteer.com/media/images/golden-steer-exterior.jpg",\n          "geoCoordinates": "36.1701,-115.1402",\n          "ticketPricing": "N/A",\n          "timeToTravel": "10 minutes"\n        },\n        {\n          "time": "9:00 PM",\n          "placeName": "Enjoy a show at the Golden Nugget",\n          "placeDetails": "Catch a live music or comedy show at the Golden Nugget.",\n          "placeImageUrl": "https://www.goldennugget.com/las-vegas/images/main/home-hero-mobile-2020.jpg",\n          "geoCoordinates": "36.1693,-115.1404",\n          "ticketPricing": "Varies",\n          "timeToTravel": "10 minutes"\n        }\n      ]\n    },\n    {\n      "day": 3,\n      "theme": "Day Trip to the Hoover Dam",\n      "schedule": [\n        {\n          "time": "9:00 AM",\n          "placeName": "Breakfast at your hotel",\n          "placeDetails": "",\n          "placeImageUrl": "",\n          "geoCoordinates": "",\n          "ticketPricing": "N/A",\n          "timeToTravel": "N/A"\n        },\n        {\n          "time": "10:00 AM",\n          "placeName": "Drive to Hoover Dam",\n          "placeDetails": "Take a scenic drive to the Hoover Dam, about an hour from Las Vegas.",\n          "placeImageUrl": "https://www.hooverdam.com/sites/default/files/styles/hero_image/public/images/hero-images/hoover-dam-hero.jpg?itok=X_l4Z35V",\n          "geoCoordinates": "36.0266,-114.9986",\n          "ticketPricing": "N/A",\n          "timeToTravel": "1 hour"\n        },\n        {\n          "time": "11:00 AM",\n          "placeName": "Explore the Hoover Dam",\n          "placeDetails": "Take a guided tour of the dam and learn about its history and construction.",\n          "placeImageUrl": "https://www.hooverdam.com/sites/default/files/styles/gallery_image/public/images/gallery-images/dam-image.jpg?itok=d2k2445V",\n          "geoCoordinates": "36.0266,-114.9986",\n          "ticketPricing": "$30",\n          "timeToTravel": "2 hours"\n        },\n        {\n          "time": "1:00 PM",\n          "placeName": "Lunch at  The Hoover Dam Cafe",\n          "placeDetails": "Enjoy a casual lunch with a view of the dam.",\n          "placeImageUrl": "https://www.hooverdamcafe.com/images/hooverdamcafe-exterior.jpg",\n          "geoCoordinates": "36.0281,-114.9984",\n          "ticketPricing": "N/A",\n          "timeToTravel": "5 minutes"\n        },\n        {\n          "time": "3:00 PM",\n          "placeName": "Visit the Hoover Dam Bypass Bridge",\n          "placeDetails": "Take a walk or drive across the bridge for stunning views of the dam and the surrounding area.",\n          "placeImageUrl": "https://www.flickr.com/photos/jeffreybeall/8437810999/in/photolist-8437809975-8437811419-8437810411-8437810427-8437809457-8437810977-8437812903-8437813905-8437814431-8437811425-8437811407-8437811945-8437813911-8437811939-8437812907-8437810967-8437811933-8437809969-8437812911-8437812917-8437811923-8437812445-8437809953-8437813923-8437812919-8437810421-8437810447-8437810951-8437811915-8437811917",\n          "geoCoordinates": "36.0307,-114.9958",\n          "ticketPricing": "N/A",\n          "timeToTravel": "10 minutes"\n        },\n        {\n          "time": "5:00 PM",\n          "placeName": "Drive back to Las Vegas",\n          "placeDetails": "",\n          "placeImageUrl": "",\n          "geoCoordinates": "",\n          "ticketPricing": "N/A",\n          "timeToTravel": "1 hour"\n        },\n        {\n          "time": "6:00 PM",\n          "placeName": "Dinner at  The Yard House",\n          "placeDetails": "Enjoy a casual meal with a wide selection of food and drinks.",\n          "placeImageUrl": "https://www.yardhouse.com/media/wysiwyg/Yard-House-Las-Vegas-Strip.jpg",\n          "geoCoordinates": "36.1008,-115.1742",\n          "ticketPricing": "N/A",\n          "timeToTravel": "10 minutes"\n        },\n        {\n          "time": "8:00 PM",\n          "placeName": "Enjoy a show at the Wynn Las Vegas",\n          "placeDetails": "Catch a world-class musical or magic show.",\n          "placeImageUrl": "https://www.wynnlasvegas.com/content/dam/wynn/hero-images/hero-image-desktop-wynn-exterior.jpg",\n          "geoCoordinates": "36.1025,-115.1751",\n          "ticketPricing": "Varies",\n          "timeToTravel": "10 minutes"\n        }\n      ]\n    },\n    {\n      "day": 4,\n      "theme": "Relaxation and Entertainment",\n      "schedule": [\n        {\n          "time": "10:00 AM",\n          "placeName": "Breakfast at your hotel",\n          "placeDetails": "",\n          "placeImageUrl": "",\n          "geoCoordinates": "",\n          "ticketPricing": "N/A",\n          "timeToTravel": "N/A"\n        },\n        {\n          "time": "11:00 AM",\n          "placeName": "Relax by the pool",\n          "placeDetails": "Enjoy the pool facilities at your hotel.",\n          "placeImageUrl": "https://www.linq.com/content/dam/linq/hero-images/hero-image-desktop-pool-view.jpg",\n          "geoCoordinates": "36.1011,-115.1739",\n          "ticketPricing": "N/A",\n          "timeToTravel": "N/A"\n        },\n        {\n          "time": "1:00 PM",\n          "placeName": "Lunch at  The California Pizza Kitchen",\n          "placeDetails": "Enjoy a casual pizza and salad lunch.",\n          "placeImageUrl": "https://www.cpk.com/sites/default/files/styles/hero_image_large/public/images/home/restaurant-exterior-day.jpg?itok=wJ-0qW5H",\n          "geoCoordinates": "36.1008,-115.1742",\n          "ticketPricing": "N/A",\n          "timeToTravel": "10 minutes"\n        },\n        {\n          "time": "3:00 PM",\n          "placeName": "Visit the High Roller observation wheel",\n          "placeDetails": "Enjoy panoramic views of Las Vegas.",\n          "placeImageUrl": "https://www.linq.com/content/dam/linq/hero-images/hero-image-desktop-high-roller-view-2.jpg",\n          "geoCoordinates": "36.1014,-115.1740",\n          "ticketPricing": "$30",\n          "timeToTravel": "10 minutes"\n        },\n        {\n          "time": "5:00 PM",\n          "placeName": "Visit the LINQ Promenade",\n          "placeDetails": "Explore the shops and restaurants along the promenade.",\n          "placeImageUrl": "https://www.linq.com/content/dam/linq/hero-images/hero-image-desktop-linq-promenade-day.jpg",\n          "geoCoordinates": "36.1014,-115.1740",\n          "ticketPricing": "N/A",\n          "timeToTravel": "1 hour"\n        },\n        {\n          "time": "7:00 PM",\n          "placeName": "Dinner at  The Rio Buffet",\n          "placeDetails": "Enjoy a delicious and affordable buffet dinner.",\n          "placeImageUrl": "https://www.caesars.com/content/dam/caesars/rio/hero-images/hero-image-desktop-rio-buffet-interior.jpg",\n          "geoCoordinates": "36.1128,-115.1740",\n          "ticketPricing": "N/A",\n          "timeToTravel": "20 minutes"\n        },\n        {\n          "time": "9:00 PM",\n          "placeName": "Catch a show at the Rio Las Vegas",\n          "placeDetails": "Enjoy a live comedy show or musical act.",\n          "placeImageUrl": "https://www.caesars.com/content/dam/caesars/rio/hero-images/hero-image-desktop-rio-exterior.jpg",\n          "geoCoordinates": "36.1128,-115.1740",\n          "ticketPricing": "Varies",\n          "timeToTravel": "N/A"\n        }\n      ]\n    },\n    {\n      "day": 5,\n      "theme": "Departure",\n      "schedule": [\n        {\n          "time": "9:00 AM",\n          "placeName": "Breakfast at your hotel",\n          "placeDetails": "",\n          "placeImageUrl": "",\n          "geoCoordinates": "",\n          "ticketPricing": "N/A",\n          "timeToTravel": "N/A"\n        },\n        {\n          "time": "10:00 AM",\n          "placeName": "Check out of your hotel",\n          "placeDetails": "",\n          "placeImageUrl": "",\n          "geoCoordinates": "",\n          "ticketPricing": "N/A",\n          "timeToTravel": "N/A"\n        },\n        {\n          "time": "11:00 AM",\n          "placeName": "Visit the Venetian and The Palazzo",\n          "placeDetails": "Explore the luxurious shops and restaurants.",\n          "placeImageUrl": "https://www.venetian.com/content/dam/venetian/hero-images/hero-image-desktop-venetian-resort-exterior.jpg",\n          "geoCoordinates": "36.1008,-115.1742",\n          "ticketPricing": "N/A",\n          "timeToTravel": "1 hour"\n        },\n        {\n          "time": "12:00 PM",\n          "placeName": "Lunch at  The Grand Canal Shoppes",\n          "placeDetails": "Enjoy a casual lunch with a view of the Grand Canal.",\n          "placeImageUrl": "https://www.venetian.com/content/dam/venetian/hero-images/hero-image-desktop-grand-canal-shoppes.jpg",\n          "geoCoordinates": "36.1008,-115.1742",\n          "ticketPricing": "N/A",\n          "timeToTravel": "N/A"\n        },\n        {\n          "time": "2:00 PM",\n          "placeName": "Head to McCarran International Airport (LAS)",\n          "placeDetails": "Take a taxi or ride-sharing service to the airport.",\n          "placeImageUrl": "https://www.lasvegas.com/sites/default/files/styles/hero_image_2x/public/images/hero-images/hero_image_mccarran.jpg?itok=7J0_57q7",\n          "geoCoordinates": "36.0803,-115.1523",\n          "ticketPricing": "N/A",\n          "timeToTravel": "30 minutes"\n        },\n        {\n          "time": "3:00 PM",\n          "placeName": "Depart from Las Vegas",\n          "placeDetails": "",\n          "placeImageUrl": "",\n          "geoCoordinates": "",\n          "ticketPricing": "N/A",\n          "timeToTravel": "N/A"\n        }\n      ]\n    }\n  ]\n}\n```\n\n**Explanation of the JSON Format:**\n\n* **hotels:** An array containing details of suggested hotels. Each hotel object has the following properties:\n    * **name:** The name of the hotel.\n    * **address:** The physical address of the hotel.\n    * **price:** An estimated price range per night.\n    * **imageUrl:** A URL to an image of the hotel.\n    * **geoCoordinates:** The latitude and longitude coordinates of the hotel.\n    * **rating:** The star rating of the hotel.\n    * **description:** A brief description of the hotel.\n* **itinerary:** An array containing the day-by-day travel plan. Each day object has the following properties:\n    * **day:** The day number (1-5).\n    * **theme:** A descriptive theme for the day\'s activities.\n    * **schedule:** An array of activities planned for that day. Each activity object has the following properties:\n        * **time:** The time of the activity.\n        * **placeName:** The name of the place to visit.\n        * **placeDetails:** A description of the place or activity.\n        * **placeImageUrl:** A URL to an image of the place.\n        * **geoCoordinates:** The latitude and longitude coordinates of the place.\n        * **ticketPricing:** The estimated cost of tickets, if applicable.\n       * **rating:** The star rating of the hotel.\n    * **timeToTravel:** The estimated time it will take to get to the location.\n\n**Note:** This itinerary is a suggestion and can be adjusted based on your preferences and interests.  Prices are approximate and may vary depending on the time of year and availability. \n',
        },
      ],
    },
  ],
});
