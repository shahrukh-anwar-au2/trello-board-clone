import React from "react";
import { Icon, Card, Button } from "@material-ui/core";
import Textarea from "react-textarea-autosize";
import { connect } from "react-redux";
import { addList, addCard } from "../actions";
const uuidv4 = require("uuid/v4");

class TrelloActionButton extends React.Component {
  state = {
    formOpen: false,
    text: ""
  };

  openForm = () => {
    this.setState({
      formOpen: true
    });
  };

  closeForm = () => {
    this.setState({
      formOpen: false
    });
  };

  handleInputChange = e => {
    this.setState({
      text: e.target.value
    });
  };

  handleAddList = () => {
    const { text } = this.state;
    if (text) {
      const newList = {
        id: uuidv4(),
        title: text,
        cards: []
      };
      this.props.addList(newList);
      fetch("https://trelloboard-clone-api.herokuapp.com/addlist", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newList)
      })
        .then(res => res.json())
        .then(result => console.log(result));
      this.setState({
        text: ""
      });
    }

    return;
  };

  handleAddCard = () => {
    const { listID } = this.props;
    const { text } = this.state;
    if (text) {
      const newCard = {
        text: text,
        id: uuidv4()
      };
      this.props.addCard(listID, newCard);
      fetch(`https://trelloboard-clone-api.herokuapp.com/addcard/${listID}`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(newCard)
      })
        .then(res => res.json())
        .then(result => console.log(result));
      this.setState({
        text: ""
      });
    }

    return;
  };

  renderAddButton = () => {
    const { list } = this.props;
    const buttonText = list ? "Add another list" : "Add another card";
    const buttonTextOpacity = list ? 1 : 0.5;
    const buttonTextColor = list ? "white" : "inherit";
    const buttonTextBackground = list ? "hsla(0,0%,100%,.3)" : "inherit";

    return (
      <div
        onClick={this.openForm}
        style={{
          ...styles.openFormButtongroup,
          opacity: buttonTextOpacity,
          color: buttonTextColor,
          background: buttonTextBackground
        }}
      >
        <Icon>add</Icon>
        <p>{buttonText}</p>
      </div>
    );
  };

  renderForm = () => {
    const { list } = this.props;

    const placeholder = list
      ? "Enter list title..."
      : "Enter a title for this card...";

    const buttonTitle = list ? "Add List" : "Add Card";

    return (
      <div>
        <Card
          style={{
            minHeight: 85,
            minWidth: 272,
            padding: "6px 8px 2px"
          }}
        >
          <Textarea
            placeholder={placeholder}
            autoFocus
            onBlur={this.closeForm}
            value={this.state.text}
            onChange={this.handleInputChange}
            style={{
              resize: "none",
              width: "100%",
              overflow: "hidden",
              outline: "none",
              border: "none"
            }}
          />
        </Card>
        <div style={styles.formButtonGroup}>
          <Button
            onMouseDown={list ? this.handleAddList : this.handleAddCard}
            variant="contained"
            style={{ color: "white", backgroundColor: "#61BD4F" }}
          >
            {buttonTitle}
          </Button>
          <Icon style={{ marginLeft: 8, cursor: "pointer" }}>close</Icon>
        </div>
      </div>
    );
  };

  render() {
    return this.state.formOpen ? this.renderForm() : this.renderAddButton();
  }
}

const styles = {
  openFormButtongroup: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    borderRadius: 3,
    height: 36,
    width: 272,
    paddingLeft: 10
  },
  formButtonGroup: {
    marginTop: 8,
    display: "flex",
    alignItems: "center"
  }
};

const mapDispatchToProps = dispatch => {
  return {
    addList: list => dispatch(addList(list)),
    addCard: (listID, card) => dispatch(addCard(listID, card))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(TrelloActionButton);
