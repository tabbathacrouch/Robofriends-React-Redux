import React, { useState, useEffect } from "react";
import CardList from "../components/CardList";
import Scroll from "../components/Scroll";
import SearchBox from "../components/SearchBox";
import { useSelector, useDispatch } from "react-redux";
import { setSearchField, requestRobots } from "../actions";
import "../style/App.css";
import Header from "../components/Header";

const App = ({ store }) => {
  const [searchResults, setSearchResults] = useState([]);

  const text = useSelector((state) => state.searchRobots.searchField);

  const robotUsers = useSelector((state) => state.requestRobots.robots);

  const dispatch = useDispatch();

  const onSearchChange = (event) => {
    dispatch(setSearchField(event.target.value));
  };

  useEffect(() => {
    dispatch(requestRobots());
  }, [dispatch]);

  useEffect(() => {
    let filteredRobots = robotUsers.filter((robots) => {
      return robots.name.toLowerCase().includes(text.toLowerCase());
    });
    setSearchResults(filteredRobots);
  }, [text, robotUsers]);

  const newRobot = searchResults;

  return (
    <div className="tc">
      <Scroll>
        <Header />
        <SearchBox SearchChange={onSearchChange} />
      </Scroll>
      {text === "" ? (
        <CardList robots={robotUsers} />
      ) : (
        <CardList robots={newRobot} />
      )}
    </div>
  );
};

export default App;
