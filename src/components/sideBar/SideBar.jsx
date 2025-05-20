import { HOME_SVG } from "./photos"
import { EXPLORE_SVG } from "./photos"
import { NOTIFICATIONS_SVG } from "./photos"
import { MESSAGES_SVG } from "./photos"
import { BOOKMARKS_SVG } from "./photos"

import twitter from './photos/twitter.png'; 


export default function SideBar(){
    return(
       <>
            <img src={twitter} class="w-10 h-10 my-3"></img>
            <div class='flex space-x-3 items-center my-3'>
                <HOME_SVG class="w-10 h-10"/>
                <p>Home</p>
            </div>
            <div class='flex space-x-3 items-center my-3'>
                <EXPLORE_SVG class="w-10 h-10"/>
                <p>Explore</p>
            </div>
            <div class='flex space-x-3 items-center my-3'>
                <NOTIFICATIONS_SVG class="w-10 h-10"/>
                <p>Notifications</p>
            </div>
            <div class='flex space-x-3 items-center my-3'>
                <MESSAGES_SVG class="w-10 h-10"/>
                <p>Messages</p>
            </div>
            <div class='flex space-x-3 items-center my-3'>
                <BOOKMARKS_SVG class="w-10 h-10"/>
                <p>Bookmarks</p>
            </div>
            <button class='rounded border h-8 w-50 my-3'>Post</button>
       </>
    )
}