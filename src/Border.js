import Screen from "./Screen"
export default function Border({ color, team, dice }) {
    
    const role = dice[dice.length - 1];
    return (
        <div className="minicontain">
            <h2>{team}</h2>
        <Screen color={color} dice={role} />
        </div>
    )
}