const AWS = require('aws-sdk');
const s3 = new AWS.S3();


exports.handler = (event, context) => {
    let computerChoice;
    let userChoice = event["choice"]

    switch (userChoice) {
        case "scissors":
            computerChoice = "rock"
            break;
        case "rock":
            computerChoice = "paper"
            break;
        case "paper":
            computerChoice = "rock"
    }

    console.log(`You chose ${userChoice}, I chose ${computerChoice}. I win!`);
    let resultFile = `You chose ${userChoice}, I chose ${computerChoice}. I win!`
    s3.putObject({
        Body: resultFile,
        Bucket: 'laceycrenshaw',
        Key: 'laceycrenshaw/result.txt'
    }(err, data) => {
        if(err) {
            console.log('error')
        } else {
            console.log(`result.txt updated successfully`)
        }
    })
}



