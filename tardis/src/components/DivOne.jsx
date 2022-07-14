const DivOne = (props) => {
    return (
        <div>
            <h3 onClick={props.changeText}>{props.tardis}</h3>
        </div>
    )
}

export default DivOne