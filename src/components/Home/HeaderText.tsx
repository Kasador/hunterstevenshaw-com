import { useEffect } from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter'
useEffect
// https://www.npmjs.com/package/react-simple-typewriter

// type TypeWriterProps = {
//     message?: string
// }

const handleMessageCompletion = () => {
    alert('Message is done!');
    console.log('Message is done!');
}

const HeaderText = () => {
    const [text] = useTypewriter({
        /* Config */
        words: ['Hello...', "I'm Hunter Shaw"],
        loop: 1,
        onLoopDone: () => handleMessageCompletion()
    });

    // const { isType, isDelete, isDelay, isDone } = helper

    return (
        <div id="TypedMessage">
            <span>{text}</span>
            <Cursor cursorBlinking={true} />
        </div>
    )
}

export default HeaderText;