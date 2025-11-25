const express = require('express');
var cors = require('cors');

// activate or tell this app variable to be an express server
const app = express();
app.use(cors());

const router = express.Router();

// making an API using routes
// routes are used to handle browser requests. they look like URLs. 
// when a browser requests a route, it calls a function with (req, res).

router.get("/songs", function (req, res) {
    const songs = [
        {
            title: "We Found Love",
            artist: "Rihanna",
            popularity: 10,
            releaseDate: new Date("2011-09-22"),
            genre: ["electro house"]
        },
        {
            title: "Happy",
            artist: "Pharrell Williams",
            popularity: 10,
            releaseDate: new Date("2013-11-21"),
            genre: ["soul", "new soul"]
        }
    ];

    res.json(songs); // corrected
}); 

// all requests that go to /songs go to /api/songs
app.use('/api', router);

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
