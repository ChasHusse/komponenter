export default function MainButton(props) {


    return (
        <button style={{ background: props.color }} className="mainButton">{props.title}</button>
    )

}