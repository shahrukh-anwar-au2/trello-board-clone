import React from "react";
import TrelloList from "./TrelloList";
import { connect } from "react-redux";
import TrelloActionButton from "./TrelloActionButton";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { sort, fetchingLists, fetchedLists } from "../actions";
import styled from "styled-components";
import TrelloHeader from "./TrelloHeader";
import BoardMenu from "./BoardMenu";
import Menu from "./Menu";

const ListsContainer = styled.div`
  display: flex;
  margin: auto 6px;
`;

class App extends React.Component {
  componentDidMount() {
    this.props.fetch();
  }

  onDragEnd = result => {
    const { destination, source, draggableId, type } = result;
    if (!destination) {
      return;
    }

    this.props.sort(
      source.droppableId,
      destination.droppableId,
      source.index,
      destination.index,
      draggableId,
      type
    );
  };

  render() {
    const { lists } = this.props;

    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <div className="App">
          <TrelloHeader />
          <BoardMenu />
          <Menu />
          <Droppable droppableId="all-lists" direction="horizontal" type="list">
            {provided => (
              <ListsContainer
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {lists.map((list, index) => (
                  <TrelloList
                    listID={list.id}
                    key={list.id}
                    title={list.title}
                    cards={list.cards}
                    index={index}
                  />
                ))}
                {provided.placeholder}
                <TrelloActionButton list />
              </ListsContainer>
            )}
          </Droppable>
        </div>
      </DragDropContext>
    );
  }
}

const mapStateToProps = state => {
  return {
    lists: state.lists.lists
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetch: () => {
      dispatch(fetchingLists());
      fetch("https://trelloboard-clone-api.herokuapp.com/lists")
        .then(res => res.json())
        .then(result => dispatch(fetchedLists(result)));
    },
    sort: (
      droppableIdStart,
      droppableIdEnd,
      droppableIndexStart,
      droppableIndexEnd,
      draggableId,
      type
    ) => {
      dispatch(
        sort(
          droppableIdStart,
          droppableIdEnd,
          droppableIndexStart,
          droppableIndexEnd,
          draggableId,
          type
        )
      );
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
