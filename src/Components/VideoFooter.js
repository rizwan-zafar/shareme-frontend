import React from "react";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import Ticker from "react-ticker";
export default function VideoFooter({channel,description,title}) {
  return (
    <div className="videoFooter">
      <div className="videoFooter_text">
        <h3>@{channel}</h3>
         
        <div className="videoFooter_ticker">
          <p>{description}</p>
          <MusicNoteIcon className="videoFooter_icons" />
          <Ticker mode="smooth" move={true} speed={5}>
            {({ index }) => (
              <>
                <p>{title}</p>
              </>  ) }
           </Ticker>
        </div>
      </div>



<img className="videoFooter_record" src="https://static.thenounproject.com/png/934821-200.png" alt="" />

    </div>
  );
}
