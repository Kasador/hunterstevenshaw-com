type TypeWriterProps = {
    message?: string
}

const HeaderText = ({message}: TypeWriterProps) => {
    return (
        <h1 id="TypedMessage">{message}</h1>
    )
}

export default HeaderText;