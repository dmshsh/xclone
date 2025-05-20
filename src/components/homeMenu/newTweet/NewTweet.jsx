import profile from '../photos/profile.png'
export default function NewTweet({content,onChangeTextInput,onTweet}){
    return(
        <>  
        <div class='flex'>
            <img src={profile} alt='profile' class='w-15 h-15 rounded-full m-5'/>
            <input onChange={onChangeTextInput} value={content} class='border-none outline-none h-10 my-8'placeholder="What's happening?"></input>
        </div>
        <div class='flex justify-end h-10'><button onClick={onTweet}class='border w-15 h-9 rounded-xl'>Post</button></div>
        </>
    )
}