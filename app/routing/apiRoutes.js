var friendsList = require("../data/friends.js");

// app.get('/api/friends', function(req, res){
//     res.json(friends);
//   });

module.exports = function (app) {
    app.post("/api/friends", function (req, res) {
        var userData = req.body;
        var userScores = userData.scores;

    
        var bestFriend = {
            name: "",
            photo: "",
            bestFriendDifference : 1000
        }
         var totalDifference=0;
        // Generate userTotal
        // for (let k = 0; k < userInput.length; k++) {
        //     userTotal += userInput.scores[k];

        // }

        //Compare scores 
        for (var i = 0; i < friendsList.length; i++) {
            
            console.log(friendsList.name);
             totalDifference = 0;

            // console.log(bestFriendDifference);
            // console.log(friendScores);
            // console.log(userTotal);

            
            for (var j = 0; j < friendsList.length; j++) {
                // finalScore += friendScores[j];
                totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friendsList[i].scores[j]));

            
            if (totalDifference <= bestFriend.bestFriendDifference) {
                 
                bestFriend.name = friendsList[i].name;
                bestFriend.photo = friendsList[i].photo;
                bestFriendDifference = totalDifference;
            }
        }
    }
        friendsList.push(userData);

        console.log(friendsList);

        
       res.json(bestFriend);





    })
}