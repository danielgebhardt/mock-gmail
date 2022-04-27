import './App.css';
import Emails from './Emails';
import Menu from './Menu';
import SearchBar from "./SearchBar";
import React, {useEffect, useState, useRef} from "react";

function App() {
    const [emails, setEmails] = useState([]);
    const [currentEmail, setCurrentEmail] = useState({});
    const [searchResults, setSearchResults] = useState([]);
    const [compose, setCompose] = useState(false);

    const updateCurrentEmail = (email) => {
        setCurrentEmail(email);
    }

    const clearSearch = () => {
        setSearchResults([]);
    }

    const searchEmails = async (searchString) => {
        const response = await fetch("http://localhost:3001/search?query=" + searchString);
        const data = await response.json();

        if(data.length === 0) {
            data.push("No messages matched your search.");
        }

        setSearchResults(data);
    }

    useEffect(() => {
        const getEmails = async () => {
            const response = await fetch("http://localhost:3001/emails");
            const data = await response.json();
            setEmails(data);
        };

        getEmails();
    }, []);

  return (
    <div className="App">
      <div className="searchBar">
          <SearchBar searchEmails={searchEmails} setCompose={setCompose} />
      </div>
      <div>
        <div className="sideMenu">
            <Menu showCurrentEmail={updateCurrentEmail} clearSearch={clearSearch} setCompose={setCompose}/>
        </div>
        <div className="emailWindow">
            <Emails clearSearch={clearSearch} searchResults={searchResults} currentEmail={currentEmail} showCurrentEmail={updateCurrentEmail} emailList={emails} compose={compose} />
        </div>
      </div>
    </div>
  );
}

export default App;
