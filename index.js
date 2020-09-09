const AWS = require('aws-sdk');
const s3 = new AWS.S3();


exports.handler = (event, context) => {
    let computerChoice
    let userChoice = event["choice"]

    switch (userChoice) {
        case "rock":
            computerChoice = "paper"
            break;
        case "paper":
            computerChoice = "scissors"
            break;
        case "scissors":
            computerChoice = "rock"
            break;
        default
            break;
    }

    const params = {
        Body: `You chose ${userChoice}, but I chose ${myDict[userChoice]}. I win!`,
        Bucket: "mtech-rock-paper-scissors",
        Key: laceycrenshaw / results.txt
    }

    s3.putObject(params, function (err, data) {
        if (err) console.log(err, err.stack)
    });
};

