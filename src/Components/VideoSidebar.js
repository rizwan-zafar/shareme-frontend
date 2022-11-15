import React from "react";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MessageIcon from '@mui/icons-material/Message';
import ShareIcon from '@mui/icons-material/Share';
export default function VideoSidebar({ likes, shares, messages }) {

  const [liked, setLiked] = React.useState(false)
  const [message, setMessage] = React.useState(100)
  const [share, setShare] = React.useState(100)

  
  return (
    <div className="videoSideBar">
      <div className="videoSidebar_button">
        {
          liked ? (<FavoriteIcon fontSize="large" onClick={e => setLiked(false)} />)
            : (<FavoriteBorderIcon fontSize="large" onClick={e => setLiked(true)} />)
        }

        <p>{liked ? likes + 1 : likes}</p>
      </div>
      <div className="videoSidebar_button">
        <MessageIcon fontSize="large" />
        <p>{shares}</p>
      </div>
      <div className="videoSidebar_button">
        <ShareIcon fontSize="large" />
        <p>{messages}</p>
      </div>

    </div>
  )
}
