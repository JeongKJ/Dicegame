import Screen from "./Screen"

export default function Border({color}){
    return(
        <div className="minicontain">
        <h2></h2>
        <Screen color={color} />
        <h2>합</h2>
        <p></p>
        <h2>결과</h2>
        <p></p>
        </div>
    )
}