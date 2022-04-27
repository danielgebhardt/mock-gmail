import React, {useRef} from 'react';

const SearchBar = (props) => {

    const searchBarRef = React.createRef();

    const searchForEmails = (event) => {
        if(event.key === 'Enter') {
            props.searchEmails(searchBarRef.current.value);
            props.setCompose(false);
        }
    }

    return (<input ref={searchBarRef} type="text" placeholder="Search all emails" onKeyPress={searchForEmails} />);
    }

export default SearchBar;

