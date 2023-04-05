import React from 'react'
import SidebarLeft from "../../components/SidebarLeft";
import Main from "./Main.js"

const Dashboard = () => {
  return (
    <div>
        <div className="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">
            <SidebarLeft />
            <div className="h-screen flex-grow-1 overflow-y-lg-auto w-100">
            <Main />
            </div>
        </div>
    </div>
  )
}

export default Dashboard
