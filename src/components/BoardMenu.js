import React from "react";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { showMenu } from "../actions";
import { connect } from "react-redux";

const BoardMenu = props => {
  return (
    <div style={styles.container}>
      <span style={{ marginLeft: "10px", fontWeight: "700", fontSize: "18px" }}>
        Things To Get Done
      </span>
      <span
        style={{
          ...styles.items,
          width: "32px",
          marginLeft: "20px",
          fontSize: "18px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <StarBorderIcon fontSize="inherit" />
      </span>

      <span
        style={{
          float: "left",
          borderLeft: "1px solid hsla(0,0%,100%,.24)",
          height: "16px",
          margin: "8px 8px 12px 4px"
        }}
      ></span>

      <span
        style={{
          ...styles.items,
          fontSize: "14px",
          padding: "6px"
        }}
      >
        Team Awesome
      </span>

      <span
        style={{
          float: "left",
          borderLeft: "1px solid hsla(0,0%,100%,.24)",
          height: "16px",
          margin: "8px 8px 12px 4px"
        }}
      ></span>

      <span
        style={{
          ...styles.items,
          display: "flex",
          alignItems: "center",
          fontSize: "14px",
          padding: "6px"
        }}
      >
        <LockOutlinedIcon fontSize="inherit" style={{ marginRight: "6px" }} />
        Private
      </span>

      <span
        style={{
          float: "left",
          borderLeft: "1px solid hsla(0,0%,100%,.24)",
          height: "16px",
          margin: "8px 8px 12px 4px"
        }}
      ></span>

      <img
        src="https://image.flaticon.com/icons/svg/145/145843.svg"
        alt="user"
        style={{
          height: "32px",
          width: "32px",
          borderRadius: "50%",
          cursor: "pointer"
        }}
      />

      <img
        src="https://image.flaticon.com/icons/svg/145/145848.svg"
        alt="user"
        style={{
          height: "32px",
          width: "32px",
          borderRadius: "50%",
          cursor: "pointer"
        }}
      />

      <img
        src="https://image.flaticon.com/icons/svg/145/145847.svg"
        alt="user"
        style={{
          height: "32px",
          width: "32px",
          borderRadius: "50%",
          cursor: "pointer"
        }}
      />

      <img
        src="https://image.flaticon.com/icons/svg/145/145846.svg"
        alt="user"
        style={{
          height: "32px",
          width: "32px",
          borderRadius: "50%",
          cursor: "pointer"
        }}
      />

      <span
        style={{
          ...styles.items,
          fontSize: "14px",
          padding: "6px",
          marginLeft: "10px",
          display: "flex",
          alignItems: "center"
        }}
      >
        Invite
      </span>

      <span
        style={{
          ...styles.items,
          display: "flex",
          alignItems: "center",
          fontSize: "14px",
          padding: "6px",
          marginLeft: "auto"
        }}
        onClick={props.show}
      >
        <MoreHorizIcon fontSize="inherit" style={{ marginRight: "6px" }} />
        Show Menu
      </span>
    </div>
  );
};

const styles = {
  container: {
    padding: "9px",
    height: "50px",
    display: "flex",
    alignItems: "center",
    color: "white"
  },
  items: {
    color: "white",
    backgroundColor: "hsla(0,0%,100%,.24)",
    padding: "5px",
    borderRadius: "3px",
    cursor: "pointer",
    marginRight: "4px",
    height: "100%"
  }
};

const mapDispatchToProps = dispatch => {
  return {
    show: () => dispatch(showMenu())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(BoardMenu);
