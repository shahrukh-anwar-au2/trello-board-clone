import React from "react";
import styled from "styled-components";
import CloseIcon from "@material-ui/icons/Close";
import PersonAddOutlinedIcon from "@material-ui/icons/PersonAddOutlined";
import ColorLensOutlinedIcon from "@material-ui/icons/ColorLensOutlined";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import { hideMenu } from "../actions";
import { connect } from "react-redux";

const MenuContainer = styled.div`
  width: 300px;
  height: calc(100vh - 40px);
  position: absolute;
  top: 40px;
  right: 0px;
  background-color: #ebecf0;
  padding: 10px;
  z-index: 7;
`;

class Menu extends React.Component {
  state = {
    backgroundColors: false
  };

  showBackgroundColors = () => {
    this.setState({
      backgroundColors: !this.state.backgroundColors
    });
  };

  changeBodyBackground = e => {
    document.body.style.backgroundColor = e.target.style.backgroundColor;
  };

  render() {
    return (
      <MenuContainer style={{ display: this.props.menu ? "inherit" : "none" }}>
        <div style={{ marginBottom: "20px" }}>
          <span
            style={{
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)"
            }}
          >
            <b>Menu</b>
          </span>

          <CloseIcon
            style={{ float: "right", cursor: "pointer" }}
            onClick={this.props.hide}
          />
        </div>
        <br />

        <div style={{ marginBottom: "5px" }}>
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
        </div>

        <br />

        <div style={{ marginBottom: "5px" }}>
          <span
            style={{
              ...styles.items,
              display: "flex",
              alignItems: "center",
              fontSize: "14px",
              padding: "6px"
            }}
          >
            <PersonAddOutlinedIcon
              fontSize="inherit"
              style={{ marginRight: "6px" }}
            />
            Invite...
          </span>
        </div>

        <br />

        <div
          style={{ marginBottom: "8px", cursor: "pointer" }}
          onClick={this.showBackgroundColors}
        >
          <span
            style={{
              display: "flex",
              alignItems: "center"
            }}
          >
            <ColorLensOutlinedIcon
              fontSize="inherit"
              style={{ marginRight: "8px" }}
            />
            <b>Change Background</b>
          </span>
        </div>

        <div
          style={{
            display: this.state.backgroundColors ? "flex" : "none",
            flexWrap: "wrap",
            justifyContent: "space-around",
            marginBottom: "8px"
          }}
        >
          <span
            style={{
              ...styles.colors,
              backgroundColor: "#519839"
            }}
            onClick={this.changeBodyBackground}
          ></span>
          <span
            style={{
              ...styles.colors,
              backgroundColor: "#0079BF"
            }}
            onClick={this.changeBodyBackground}
          ></span>
          <span
            style={{
              ...styles.colors,
              backgroundColor: "#DCAE6F"
            }}
            onClick={this.changeBodyBackground}
          ></span>
          <span
            style={{
              ...styles.colors,
              backgroundColor: "#89609E"
            }}
            onClick={this.changeBodyBackground}
          ></span>
          <span
            style={{
              ...styles.colors,
              backgroundColor: "#B04632"
            }}
            onClick={this.changeBodyBackground}
          ></span>
          <span
            style={{
              ...styles.colors,
              backgroundColor: "#CD5A91"
            }}
            onClick={this.changeBodyBackground}
          ></span>
          <span
            style={{
              ...styles.colors,
              backgroundColor: "#00AECC"
            }}
            onClick={this.changeBodyBackground}
          ></span>
          <span
            style={{
              ...styles.colors,
              backgroundColor: "#2c3e50"
            }}
            onClick={this.changeBodyBackground}
          ></span>
          <span
            style={{
              ...styles.colors,
              backgroundColor: "#8e44ad"
            }}
            onClick={this.changeBodyBackground}
          ></span>
          <span
            style={{
              ...styles.colors,
              backgroundColor: "#838C91"
            }}
            onClick={this.changeBodyBackground}
          ></span>
          <span
            style={{
              ...styles.colors,
              backgroundColor: "#f39c12"
            }}
            onClick={this.changeBodyBackground}
          ></span>
          <span
            style={{
              ...styles.colors,
              backgroundColor: "#c0392b"
            }}
            onClick={this.changeBodyBackground}
          ></span>
        </div>

        <div style={{ marginBottom: "5px", cursor: "pointer" }}>
          <span
            style={{
              display: "flex",
              alignItems: "center"
            }}
          >
            <SearchOutlinedIcon
              fontSize="inherit"
              style={{ marginRight: "8px" }}
            />
            <b>Filter Cards</b>
          </span>
        </div>
      </MenuContainer>
    );
  }
}

const styles = {
  items: {
    backgroundColor: "rgba(0,0,0,0.15)",
    padding: "5px",
    borderRadius: "3px",
    cursor: "pointer",
    marginRight: "4px",
    height: "100%"
  },
  colors: {
    height: "40px",
    width: "40px",
    borderRadius: "4px",
    cursor: "pointer",
    margin: "2px"
  }
};

const mapStateToProps = state => {
  return {
    menu: state.menu.menuDisplay
  };
};

const mapDispatchToProps = dispatch => {
  return {
    hide: () => dispatch(hideMenu())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Menu);
