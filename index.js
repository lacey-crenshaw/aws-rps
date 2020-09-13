let AWS = require('aws-sdk');
let s3 = new AWS.S3();


exports.handler = (event, context) => {
    let computerChoice,
        userChoice;
    let { choice } = event;

    switch (choice) {
        case "scissors":
            computerChoice = "rock"
            break;
        case "rock":
            computerChoice = "paper"
            break;
        case "paper":
            computerChoice = "scissors"
            break;
        default:
            context.fail("Unknown submission - Please try again.")
    }

    console.log(`You chose ${userChoice}, I chose ${computerChoice}. I win!`);
    let resultFile = `You chose ${userChoice}, I chose ${computerChoice}. I win!`

    s3.putObject({ Body: resultFile, Bucket: 'laceycrenshaw', Key: 'mtech-rock-paper-scissors/laceycrenshaw/results.txt' }, (err, data) => {
        if (err) {
            console.log('unable to update result.txt')
        } else {
            console.log("result.txt successfully updated")
        }
    })
}


