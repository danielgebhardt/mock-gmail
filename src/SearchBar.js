import React, {useRef} from 'react';
import TextField from '@mui/material/TextField';

const SearchBar = (props) => {

    const searchBarRef = useRef(null);

    const searchForEmails = (event) => {
        if (event.key === 'Enter') {
            props.searchEmails(searchBarRef.current.value);
            props.setCompose(false);
        }
    }

    return (
        <div className="searchBox">
            <TextField id="outlined-basic" fullWidth variant="outlined" inputRef={searchBarRef} type="text"
                       placeholder="Search all emails" onKeyPress={searchForEmails}/>
        </div>
    );
}

export default SearchBar;

