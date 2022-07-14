import DivTwo from './DivTwo'

const DivOne = (props) => {

    return (
        <div>
            <DivTwo changeText={props.changeText} tardis={props.tardis} changeSecond={props.changeSecond} />
        </div>
    )
}

export default DivOne