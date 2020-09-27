import { Button } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import React from 'react'
import '../css/Misc.css';

function Misc() {
    return (
        <div>
            <input type="text" className="searchBox" placeholder="Search Location" name="search" />
            <Button variant="contained"><SearchIcon /></Button>
        </div>
    )
}

export default Misc
