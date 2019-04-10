var surveyArray = require("../app/data/friends");

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
        surveyArray.forEach(function (element, index) {
            var runningSum = 0;
            //set runningSum
            //loop through length of both arrays and compare against one another
            for (i = 0; i < 10; i++) {
                // add absolute value of that number to a running sum
                console.log(newSurvey.scores[i]);
                console.log(element.scores[i]);
                runningSum += Math.abs(parseInt(newSurvey.scores[i]) - parseInt(element.scores[i]));
            };
            console.log(runningSum+" to date runningSum at "+index +" ; "+element);
            //compare agaist current winner tempObject
            //if greater set value of tempObject to runningSum and index to current index
            if (runningSum < tempObject.runningSum) {
                tempObject.index = index;
                tempObject.runningSum = runningSum;
                console.log("switched tempObject");
                console.log(tempObject);
            } else {
                // do nothing
            };

        });
        
        return surveyArray[tempObject.index];
        //return tempObject converted to surveyArray[index] to Api >> modal?
    };
};
// module.exports
// make this available to server.js