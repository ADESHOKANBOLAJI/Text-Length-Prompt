var tweet = prompt("What is on your mind?");

if (!tweet) {
    alert("You didn't write anything!");
} else {
    tweet = tweet.trim();
    var tweetCount = tweet.length;

    if (tweetCount > 150) {
        alert("You have exceeded the limit by " + (tweetCount - 150) + " characters.");
    } else {
        alert("You have written " + tweetCount + " characters. You have " + (150 - tweetCount) + " characters remaining.");
    }
}