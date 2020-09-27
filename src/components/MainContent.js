import React from 'react'
import '../css/MainContent.css';

function MainContent({ headerName, CustomComponent }) {
    return (
        <div className="mainContent">
            <div className="main_content_header">
                {headerName}
            </div>
            <CustomComponent  />
        </div>
    )
}

export default MainContent
