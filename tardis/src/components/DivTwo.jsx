import DivThree from './DivThree'

const DivTwo = (props) => {
    return (
        <div>
            <DivThree changeText={props.changeText} tardis={props.tardis}/>
        </div>
    )
}

export default DivTwo