import snipsnok from '../img/snipsnok.jpg';
import world2 from '../img/world2.jpg';
import brain from '../img/brain.jpg';
import travel3 from '../img/travel3.jpg';
import weather from '../img/weather.jpg';
import artica from '../img/artica.jpg';
import watch from '../img/watch.jpg';
import portfolio from '../img/portfolio.jpg';
import osrs from '../img/osrs.jpg';
import vuegram from '../img/vuegram.jpg';

const data = [
    {
        name: "SnipSnok",
        date: 2020,
        image: snipsnok,
        tags: ["MySQL", "Java", "JS", "HTML/CSS", "React", "Spring", "Axios", "Maven", "Hibernate"],
        desc: "Developed alongside team members, SnipSnok is an application designed to help struggling content creators in Australia. Users can donate to others, follow others and post/like content they enjoy!",
        link:"https://github.com/SuKaiwen/SnipSnok"
    },
    {
        name: "Artica",
        date: 2021,
        image: artica,
        tags: ["JS", "HTML/CSS", "React", "Bootstrap"],
        desc: "Artica is a fake interior modelling and furniture design website. It features multiple pages with a cart functionality. Users are able to browse items and add multiple items to cart.",
        link:"https://github.com/SuKaiwen/Artica"
    },
    {
        name: "Travel Companion",
        date: 2021,
        image: travel3,
        tags: ["JS", "HTML/CSS", "React", "Axios", "Bootstrap"],
        desc: "Travel Companion is a travel assistance application that helps users identify various restaurants and hotels within their local area or a place upon lookup. The users are able to filter result by rating (stars) and price ($$$).",
        link: "https://github.com/SuKaiwen/TravelCompanion"
    },
    {
        name: "Portfolio",
        date: 2021,
        image: portfolio,
        tags: ["JS", "HTML/CSS", "React", "Bootstrap"],
        desc: "Created this portfolio to showcase my projects and let you get to know a little more about myself. This portfolio is hosted on AWS S3. The majority of the CSS is done by hand with minimal library usage.",
        link:"https://github.com/SuKaiwen/Portfolio"
    },
    {
        name: "World Countries",
        date: 2021,
        image: world2,
        tags: ["JS", "HTML/CSS", "React", "Bootstrap", "API Handling"],
        desc: "Countries of the World takes country data an external API and displayed on a React frontend. Users can view countries via continent or search for them. Users can also filter results by alphabetical order or population.",
        link:"https://github.com/SuKaiwen/WorldCountries"
    },
    {
        name: "Vuegram",
        date: 2021,
        image: vuegram,
        tags: ["JS", "HTML/CSS", "Vue JS", "Vuestic UI", "API Handling"],
        desc: "Vuegram is an application that takes images from Unsplash API given a search term and displays it to the user. Upon hovering over each image it reveals the details such as date created, photographer, descriptions etc.",
        link:"https://github.com/SuKaiwen/Vue-Gallery"
    },
    {
        name: "OSRS Beastiary",
        date: 2021,
        image: osrs,
        tags: ["JS", "HTML/CSS", "React", "API Handling", "Bootstrap"],
        desc: "OSRS Beastiary is an application that pulls monster data from osrs-api. Search and see the stats for over 2700 monsters in the game. Check the aggressive, defensive, slayer info as well as a DPS calculator. See their droptable with multiple sorting options.",
        link: "https://github.com/SuKaiwen/Old-School-Runescape-App"
    },
    {
        name: "Weather App",
        date: 2019,
        image: weather,
        tags: ["JS", "HTML/CSS", "React", "API Handling"],
        desc: "Developed an application that displays the weather information for cities around the world. It fetches the information using OpenWeatherAPI and formats it in a dynamic and readable way using React components.",
        link:"https://github.com/SuKaiwen/weather"
    },
    {
        name: "Regal",
        date: 2021,
        image: watch,
        tags: ["JS", "HTML/CSS", "React", "Bootstrap"],
        desc: "Regal is a fake watch website I decided to make after seeing how nice Rolex's site is. React/CSS is fully coded by me (with the help of libraries). The UI/UX design is inspired by Rolex.",
        link:"https://github.com/SuKaiwen/Watchsite"
    },
    {
        name: "Track my Brain",
        date: 2019,
        image: brain,
        tags: ["JS", "HTML/CSS", "Algorithms", "React"],
        desc: "Our team developed a Chrome extension under a request of a client at a major telecommunication company that tracks activities on the Chrome browser, which allows the user to see what they've spent their time browsing on.",
        link: "https://bitbucket.org/peterliang/usyd19p38/src/master/"
    },
]

export default data;