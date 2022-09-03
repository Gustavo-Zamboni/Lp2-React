const Feedback = (props) => {
    return (
        <div className="div-flex justify-content-evenly m-2">
            <button type="button" className="btn btn-primary" onClick={props.funcaoOK}>
                {props.textoOK}
            </button>
            <button type="button" className="btn btn-danger" onClick={props.funcaoOK}>
                {props.textoNOK}
            </button>
        </div>
    )
}

export default Feedback