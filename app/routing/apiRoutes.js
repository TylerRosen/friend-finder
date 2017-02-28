var friends = require("../data/friends.js");

function listFriends(app) {
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function(req, res) {

        var match = {
            name: "",
            photo: "",
            friendDifference: 1000
        };

        console.log(req.body);

        // Parses results of survey
        var userData = req.body;
        var userScore = userData.scores;

        console.log(userScores);

    });
};

module.exports = listFriends;