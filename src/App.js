import React from 'react';
import Profile from './Profile';

const user = {
    name: "Jacques Gluke",
    tag: "Gluke",
    location: "Ocho Rios",
    avatar: "https://www.flaticon.com/svg/static/icons/svg/3784/3784184.svg",
    stats: {
      followers: 4376,
      views: 9999,
      likes: 34444
    }
}

export default function App() {
    return (
        <div>
            <Profile 
            user={user}
            />
        </div>
)};