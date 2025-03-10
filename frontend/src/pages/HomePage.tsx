import HomeStats from "../panes/HomeStats"
import HomeButtons from "../panes/HomeButtons"

import "../styles/pages/HomePage.scss"

interface HomePageProps {
    className: string
}

function HomePage({ className }: HomePageProps) {
    return (
        <div className={className + " homePage"}>
            <HomeStats className="leftPane" />
            <HomeButtons className="rightPane" />
        </div>
    )
}

export default HomePage