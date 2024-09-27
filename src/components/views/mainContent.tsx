import React from 'react'
import { MaincontentModel } from '../../definitions/mainContent.def'
import './../../styles/main-content.scss'
const MainContent: React.FC<MaincontentModel> = () => {
    return (
        <main className="main-content">
            <h1>Main Content Area</h1>
            <p>This is where your main content goes.</p>
        </main>
    )
}

export default MainContent