export default function Navbar(props) {
    return (
        <nav>
            <ul>
                <li><a href="#">{props.firstLink}</a></li>
                <li><a href="#">{props.secondLink}</a></li>
                <li><a href="#">{props.thirdLink}</a></li>
                <li><a href="#">{props.fourthLink}</a></li>
            </ul>
        </nav>
    )
}