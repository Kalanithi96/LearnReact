export default function Header(props:{user:string}){
    return(
        <header className="header">
            <h4>Current User is {props.user}</h4>
        </header>
    )
}