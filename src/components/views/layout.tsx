import React from 'react'
import SidebarComponent from './sidebar'

import MainContent from './mainContent'

import '../../styles/layout.scss'

const LayoutComponent: React.FC = () => {
    return (
        <div className="layout">
            <SidebarComponent />
            <MainContent />
        </div>
    )
}

export default LayoutComponent