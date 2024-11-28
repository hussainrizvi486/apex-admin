import { CircleUserRound } from "lucide-react"

export const AppHeader = () => {
    return <div className="app-header--wrapper">
        <header className="app-header app-container">
            <div className="app-header__brand"><span>Apex</span> Softwares</div>
            <div></div>
            <div>
                <CircleUserRound />
            </div>

        </header>
    </div>
}