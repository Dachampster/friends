//basic code that compares your answers with a pre-made ahmed character
var ahmed = {
        name: "ahmed",
        scores: [3, 5, 2, 5, 1,]
    };
    $("#submit").on("click", function () {
        //right now i just validate if a name is in.
        //a missing score value translates to -4 to punish you for not filling it out
        if ($("#name").val()) {
            var user = {
                name: $("#name").val(),
                scores: [$("#q1").val() || -4, $("#q2").val() || -4, $("#q3").val() || -4, $("#q4").val() || -4, $("#q5").val() || -4]
            };
            var totalscore = [];
            let displayscore = $("<p>");
            for (let i = 0; i < user.scores.length; i++) {
                var match = Math.abs(ahmed.scores[i] - user.scores[i]);
                totalscore.push(match);
                $(displayscore).append(user.scores[i] + " ");
            }
            $("#userAnswer").append(displayscore);
            //injecting some es6 into this old assignment
            const reducer = (accumulator, currentValue) => accumulator + currentValue;
            var perc = Math.abs((totalscore.reduce(reducer) * 10) - 100);
            alert("You matched " + perc + "% with ahmed!");
        }
        else {
            alert("At least submit a name!");
        }


    })
