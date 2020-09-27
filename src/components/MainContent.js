import React from 'react'
import '../css/MainContent.css';

function MainContent({ headerName, CustomComponent }) {
    return (
        <div className="mainContent">            
            <CustomComponent  />
        </div>
    )
}

export default MainContent
