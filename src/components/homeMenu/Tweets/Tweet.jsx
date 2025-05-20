export default function Tweet({tweet,deleteTweet}){

    return(
        <>
        <div class=' flex flex-row gap-2 p-5 w-auto h-20 items-center'>
            <img src={tweet.img} className=' w-10 h-10 rounded-full'></img>
            <p>{tweet.authorName}</p>
            <p class='opacity-50'>{tweet.authorUsername}</p>
            <p class='opacity-50'>{tweet.date}</p>
            <button onClick={()=>deleteTweet(tweet.id)} className="ml-50 opacity-50 h-auto w-20">Delete</button>
        </div>

        <div class='h-auto flex flex-col space-y-4 items-center'>
            <p>{tweet.content}</p>
            <img src={tweet.imgcont} class='w-75 h-auto'/>
        </div>
        <div class='flex flex-row gap-11 my-5'>
            <p class='opacity-75'>{tweet.likes} likes </p>
            <p class='opacity-75'>{tweet.replies} replies</p>
            <p class='opacity-75'>{tweet.retweets} retweets</p>
        </div>
        <div class='bg-gray-100 w-auto h-0.5 '></div>
        </>
    )
}