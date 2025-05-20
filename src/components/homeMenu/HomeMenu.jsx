import React from "react";
import NewTweet from "./newTweet/NewTweet";
import Tweets from "./Tweets/Tweets";
import SearchBar from "../search/search";
import image from "./photos/images.jpg";
import profile from "./photos/profile.png";
import UserSearch from "../search/searchuser";
class HomeMenu extends React.Component {
  constructor() {
    super();
    this.state = {
      content: "",
      searchQuery: "", 
      searchUser:"",
      tweets: [
        {
          id: 0,
          authorName: "someone",
          authorUsername: "@someone",
          img: profile,
          imgcont: image,
          content: "text",
          date: "9 hours ago",
          replies: 200,
          retweets: 201,
          likes: 500,
        },
        {
          id: 1,
          authorName: "someone",
          authorUsername: "@someone",
          img: profile,
          imgcont: image,
          content: "manytext",
          date: "9 hours ago",
          replies: 200,
          retweets: 201,
          likes: 500,
        },
        {
          id: 2,
          authorName: "someone",
          authorUsername: "@someone",
          img: profile,
          imgcont: image,
          content: "Пmanymanytext",
          date: "9 hours ago",
          replies: 200,
          retweets: 201,
          likes: 500,
        },
      ],
    };
  }

  onChangeTextInput = (e) => {
    this.setState({ content: e.target.value });
  };

  onSearchChange = (value) => {
    this.setState({ searchQuery: value });
  };
  onUserChange=(value)=>{
    this.setState({searchUser:value})
  }

  addToTweets = () => {
    const newTweet = {
      id: this.state.tweets.length,
      authorName: "me",
      authorUsername: "@me",
      img: profile,
      imgcont: image,
      content: this.state.content,
      date: "now",
      replies: 0,
      retweets: 0,
      likes: 0,
    };

    this.setState({
      tweets: [...this.state.tweets, newTweet],
      content: "",
    });
  };

  deleteTweet = (id) => {
    this.setState({
      tweets: this.state.tweets.filter((item) => item.id !== id),
    });
  };

  render() {
    const { tweets, content, searchQuery, searchUser } = this.state;

    const filteredTweets = tweets.filter((tweet) =>
  tweet.content.toLowerCase().includes(searchQuery.toLowerCase()) &&
  tweet.authorUsername.toLowerCase().includes(searchUser.toLowerCase())
);

    return (
      <>
        <div>
          <div className="flex w-150">
            <p className="h-20 w-75 items-center flex justify-center">For you</p>
            <p className="h-20 w-75 items-center flex justify-center">Following</p>
          </div>
          <div className="bg-gray-100 w-auto h-0.5"></div>

          <NewTweet
            content={content}
            onChangeTextInput={this.onChangeTextInput}
            onTweet={this.addToTweets}
          />

          <SearchBar value={searchQuery} onChange={this.onSearchChange} />
          <UserSearch value={searchUser} onchange={this.onUserChange}/>
          <div className="bg-gray-100 w-auto h-0.5"></div>

          <Tweets tweets={filteredTweets} deleteTweet={this.deleteTweet} />
        </div>
      </>
    );
  }
}

export default HomeMenu;
