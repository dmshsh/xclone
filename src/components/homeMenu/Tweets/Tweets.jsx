import Tweet from "./Tweet"
export default function Tweets( {tweets,deleteTweet} ) {
  if (!tweets || !Array.isArray(tweets)) {
    return <p>No tweets available</p>; 
  }

  return (
    <>
      {tweets.map((tweet) => (
        <Tweet tweet={tweet} key={tweet.id} deleteTweet={deleteTweet} />
      ))}
    </>
  );
}
