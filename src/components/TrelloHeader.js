import React from "react";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import ViewCompactOutlinedIcon from "@material-ui/icons/ViewCompactOutlined";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import AddIcon from '@material-ui/icons/Add';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';

const TrelloHeader = () => {
  return (
    <nav style={styles.nav}>
      <HomeOutlinedIcon style={{ ...styles.items, width: "32px" }} />
      <span style={{ ...styles.items, display: "flex", alignItems: "center" }}>
        <ViewCompactOutlinedIcon style={{ marginRight: "6px" }} />
        <b>Boards</b>
      </span>
      <span style={{ ...styles.items, display: "flex", alignItems: "center" }}>
        <input
          type="search"
          style={{
            border: "none",
            outline: "none",
            backgroundColor: "transparent",
            height: "100%", width: "155px"
          }}
        />
        <SearchOutlinedIcon />
      </span>

      <img style={{height: "30px", width: "80px", cursor: "pointer", position: "absolute", left: "50%", transform: "translateX(-50%)"}} src="https://d2k1ftgv7pobq7.cloudfront.net/meta/u/res/images/trello-header-logos/af7af6ed478d3460709d715d9b3f74a4/trello-logo-white.svg" alt="logo" />

      <AddIcon style={{ ...styles.items, width: "32px", marginLeft: "auto" }}/>

      <InfoOutlinedIcon style={{ ...styles.items, width: "32px" }}/>

      <NotificationsNoneOutlinedIcon style={{ ...styles.items, width: "32px" }}/>

      <img src="https://image.flaticon.com/icons/svg/145/145843.svg" alt="user" style={{height: "32px", width: "32px", borderRadius: "50%", cursor: "pointer"}}/>
    </nav>
  );
};

const styles = {
  nav: {
    padding: "4px",
    backgroundColor: "rgba(0,0,0,0.15)",
    height: "40px",
    display: "flex",
    alignItems: "center"
  },
  items: {
    color: "white",
    backgroundColor: "hsla(0,0%,100%,.3)",
    padding: "5px",
    borderRadius: "3px",
    cursor: "pointer",
    marginRight: "4px",
    height: "100%"
  }
};

export default TrelloHeader;
