import React from "react";
import MusicNoteIcon from '@mui/icons-material/MusicNote';
export default function VideoFooter() {
  return (
    <div className="videoFooter">
      <div className="videoFooter_text">
        <h3>@channel Name</h3>
        <p>This is a good video for guys</p>
        <MusicNoteIcon className="videoFooter_icons"/>
       </div>
    </div>
  );
}
