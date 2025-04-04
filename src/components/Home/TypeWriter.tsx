type TypeWriterProps = {
    message?: string
}

const TypeWriter = ({message}: TypeWriterProps) => {
    return (
        <h1>{message}</h1>
    )
}

export default TypeWriter;