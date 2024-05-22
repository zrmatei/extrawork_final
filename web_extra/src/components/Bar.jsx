import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

function Bar() {
  return (
    <div class="bar">
      <div class="wrap_nr_email">
        <ul id="wrap1">
          <li>+40 771 100 004</li>
          <li>office@extraworkmedia.ro</li>
        </ul>
      </div>
      <div class="wrap_socials">
        <ul id="wrap2">
          <li>
            <a href="https://www.facebook.com/extraworkmedia">
              <FacebookIcon fontSize="medium" />
            </a>
            <a href="https://www.instagram.com/templatesnext">
              <InstagramIcon />
            </a>
            <a href="https://www.youtube.com/channel/UCijQqDceTqmwpzTF-g2pnBQ">
              <YouTubeIcon />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Bar;
