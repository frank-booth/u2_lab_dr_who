import DivTwo from './DivTwo'

const DivOne = (props) => {

    return (
        <div>
             <DivTwo changeText={props.changeText} tardis={props.tardis}/>
        </div>
    )
}

export default DivOne