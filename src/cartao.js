//esse é mais um componente funcional, sua definição está sendo feita por meio
// de uma função (arrowfunction ou função regular(com function))

const Cartao = props => (
    <div className="card">
        <div className="card-header text-muted">
            {props.cabecalho}
        </div>
        <div className="card-body">
            {props.children}
        </div>
    </div>
)

export default Cartao