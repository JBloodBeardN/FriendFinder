var surveyArray = require("../data/friends");

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        // deliver JSON of friends array
        res.json(surveyArray)
    })


    app.post("/api/friends", function (req, res) {
        //this takes in an object of a new survey result
        var newSurvey = req.body;
        var tempObject = compareLogic(newSurvey);
        surveyArray.push(newSurvey);
        res.json(tempObject);
        //save newSurvey object to surveyArray in friends.js
        // this calls function for handling compareLogic(newSurvey)
        // add compareLogic response to res
    });

    function compareLogic(newSurvey) {
        // takes newSurvey and compares against
        // surveyArray in friends.js
        var tempObject = {
            index: 0,
            runningSum: 100
        };
        //create tempObject for housing current winner
        //loop through survayArray Object of previous submissions
        console.log(surveyArray);
        surveyArray.forEach(function (element, index) {
            var runningSum = 0;
            //set runningSum
            //loop through length of both arrays and compare against one another
            for (i = 0; i <= 10; i++) {
                // add absolute value of that number to a running sum
                runningSum += Math.abs(newSurvey.scores[i] - element.scores[i]);
            };
            //compare agaist current winner tempObject
            //if greater set value of tempObject to runningSum and index to current index
            if (runningSum > tempObject.runningSum) {
                tempObject.index = index;
                tempObject.runningSum = runningSum;
            } else {
                // do nothing
            };
        });
        return tempObject;
        //return tempObject to Api >> modal?
    };
};
// module.exports
// make this available to server.js