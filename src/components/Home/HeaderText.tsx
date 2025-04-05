type TypeWriterProps = {
    message?: string
}

const HeaderText = ({message}: TypeWriterProps) => {
    return (
        <h1>{message}</h1>
    )
}

export default HeaderText;