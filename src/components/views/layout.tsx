import React from 'react'
import SidebarComponent from './sidebar'
import { BrowserRouter as Router } from 'react-router-dom'
import MainContent from './mainContent'

import '../../styles/layout.scss'

const LayoutComponent: React.FC = () => {
    return (
        <div className="layout">
            <Router>

                <SidebarComponent />
                <MainContent />

            </Router>
        </div>
    )
}

export default LayoutComponent