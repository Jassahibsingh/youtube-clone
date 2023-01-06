import React, { useState } from 'react';
import Header from './Header';
import Sidebar from "./Sidebar";
import RecommendedVideos from "./RecommendedVideos";
import SearchPage from "./SearchPage";
import Video from "./Video"
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';

function App() {
  const [change, setChange] = useState(true);

  const showVideo = (value) => {
    setChange(value)
  }

  return (
    <div className="App">
      <Router>

        <Header showVideo={showVideo} />

        <Switch>
          <Route path="/search/:searchTerm">
            <div className='app__page'>
              <Sidebar />
              <SearchPage />
            </div>
          </Route>
          {change ? <>
            <Route path="/">
              <div className="app__page">
                <Sidebar />
                <RecommendedVideos showVideo={showVideo} />
              </div>
            </Route>
          </> :

            <div className="app__page">
              <Video />
            </div>
          }
        </Switch>
      </Router>
    </div>
  );
}

export default App;
