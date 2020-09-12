const AWS = require('aws-sdk');
const s3 = new AWS.S3();


exports.handler = (event, context) => {
    let computerChoice
    let userChoice = event["choice"]

    switch (userChoice) {
        case "scissors":
            computerChoice = "rock"
            break;
        case "rock":
            computerChoice = "paper"
            break;
        case "paper":
            computerChoice = "scissors"
    }

    const params = {
        Body: `You chose ${userChoice}, but I chose ${computerChoice}. I win!`,
        Bucket: "mtech-rock-paper-scissors",
        Key: laceycrenshaw / results.txt
    }

    s3.putObject(params, function (err, data) {
        if (err) console.log(err, err.stack)
    });
};

