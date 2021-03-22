import React from 'react';

const profileBlockStyle = {
    fontFamily: "sans-serif",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
}

const imgStyle = {
    width: "200px",
    backgroundColor: "red",
    borderRadius: "100px"
}

const descriptionStyle = {
    fontSize: "25px",
    textAlign: "center"
};

const descriptionTextStyle = {
    fontSize: "20px",
    color: "green"
};

const listStyle= {
    padding: "16px 40px",
    width: "300px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    textAlign: "center",
    backgroundColor: "#f3f6f9"
};

const listItemStyle= {
    display: "flex",
    listStyleType: "none",
    flexDirection: "column",
    fontSize: "20px",
};


export default function Profile({user}) {
    return (
    <div style={{...profileBlockStyle}}>
    <div style={{...descriptionStyle}}>
        <img
        src={user.avatar}
        alt="user avatar"
        style={{...imgStyle}}
        />
        <p>{user.name}</p>
        <p style={{...descriptionTextStyle}}>@{user.tag}</p>
        <p style={{...descriptionTextStyle}}>{user.location}</p>
    </div>
    <ul style={{...listStyle}}>
        <li style={{...listItemStyle}}>
            <span>Followers</span>
            <span>{user.stats.followers}</span>
        </li>

        <li style={{...listItemStyle}}>
            <span>Views</span>
            <span>{user.stats.views}</span>
        </li>

        <li style={{...listItemStyle}}>
            <span>Likes</span>
            <span>{user.stats.likes}</span>
        </li>
    </ul>
    </div>
)};

