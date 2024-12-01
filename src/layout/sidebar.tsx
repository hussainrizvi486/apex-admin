import { Cpu as CpuIcon, House as HouseIcon } from "lucide-react"

export const AppSideBar = () => {
    const links = [
        {
            "label": "Home"
        },
        {
            "label": "Projects"
        },
        {
            "label": "Inventory"
        },
        {
            "label": "System Settings"
        },
        {
            "label": "Report"
        },
        {
            "label": "Documents"
        },
    ]
    return (
        <div className="app-sidebar">
            <header className="sidebar-header">
                <div className="sidebar-brand">
                    Apex Software
                </div>
            </header>

            <div className="sidebar-main">
                <div className="sidebar-nav">
                    {links.map((v, i) => <SideBarElement label={v.label} key={i} />)}

                </div>
            </div>
            <div className="sidebar-element"></div>
        </div>
    )
}


const SideBarElement = ({ label = "" }) => {
    return (<div className="sidebar-nav__element">
        <div className="sidebar-nav__element-icon">
            <CpuIcon />
        </div>
        <div className="sidebar-nav__element-label">
            {label}
        </div>
    </div>)
}