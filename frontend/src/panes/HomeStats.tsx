
interface HomeStatsProps {
    className: string
}

function HomeStats({ className }: HomeStatsProps) {
    return (
        <div className={className}>
            <h1>Stats</h1>
        </div>
    )
}

export default HomeStats