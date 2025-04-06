import { useState } from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter'
/* References >>>
    1) https://www.npmjs.com/package/react-simple-typewriter
    2) https://medium.com/@luda9/how-to-use-react-simple-typewriter-945eef9d9d3d
    3) https://codesandbox.io/p/sandbox/react-typewriter-example-mgyclf?file=%2Fsrc%2FApp.js
    4) https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML
    5) https://www.reddit.com/r/reactjs/comments/wo4jb5/react_doesnt_render_correctly_innerhtml/
    6) https://stackoverflow.com/questions/37337289/react-js-set-innerhtml-vs-dangerouslysetinnerhtml
    7) https://www.toptal.com/designers/htmlarrows/punctuation/slash/
    8) https://blog.logrocket.com/using-dangerouslysetinnerhtml-react-application/
*/
// import { Typewriter } from 'react-simple-typewriter';
// type TypeWriterProps = {
//     message?: string
// }

const HeaderText = () => {
    const [bar, setBar] = useState(true);
    const [slash, setSlash] : any = useState(false);
    // const [typed, setTyped] : any = useState(0)

    const handleDone = () => {
        setTimeout(() => {
            setBar(false);
        }, 1000);
        setTimeout(() => {
            setSlash(';');
        }, 1300);

        console.log('Typing is done!')
    };

    const handleType = () => {
        console.log('typing...')
        console.log(text.length, "Text Count");
        console.log(text);
    }

    const [text] = useTypewriter({
        /* Config */
        words: ["<span style='color: #5095c4;'>const</span> <span style='color: #dcdcae;'>HunterShaw</span> = <span style='color: #e1cc37;'>()</span> <span style='color: #5095c4;'>=></span> <span style='color: #e1cc37;'>{</span> \n  <span style='color: #c387bc;'>return</span> (\n      <span style='color: #807d75'><</span><span style='color: #5095c4;'>h1</span><span style='color: #807d75'>></span><span style='color: white;'>Web Developer</span><span style='color: #807d75'><&#47;</span><span style='color: #5095c4;'>h1</span><span style='color: #807d75'>></span>\n  <span style='color: #c387bc;'>)</span>\n<span style='color: #e1cc37;'>}</span>;\n<span style='color: #6a9441;'>// Real Code. Real Solutions. </span>\n<span style='color: #c387bc;'>export default</span> <span style='color: #dcdcae;'>HunterShaw</span>"],
        loop: 1,
        onLoopDone: handleDone,
        onType: handleType,
        typeSpeed: 7
    });
    // const [name] = useTypewriter({
    //     /* Config */
    //     words: ['<Hunter Shaw />'],
    //     loop: 1,
    //     // onLoopDone: () => handleMessageCompletion()
    // });
    // const { isDone } = helper
    // const { isType, isDelete, isDelay, isDone } = helper

    return (
        <div id="TypedMessage">
            {/* <span >{text}</span><span style={{color: '#64a975', fontFamily: 'Consolas', fontWeight: 'bold'}}>{name}</span>
            <Cursor cursorBlinking={true} /> */}
            <article>
                <span>23 24 25 26 27 28 29</span>
            </article>
            <div>
                <span id="IntroText" style={{color: 'white', fontFamily: 'Consolas', fontWeight: 'bold', whiteSpace: 'pre'}} dangerouslySetInnerHTML={{ __html: text }} />
                {bar && <Cursor cursorBlinking={true} />}
                {slash && slash}
                {/* <span  style={{color: '#000'}}>{bracket && bracket}</span> */}
            </div>
        </div>
    )
}

export default HeaderText;

// What I will be making... Just an idea, let's see if I can pull it off. 
// Current issues is figuring out delays, colors, and cursor placement... 

/*
const HunterShaw = () => {
    return (
        <h1>I'm Hunter Shaw</h1>
    )
}

export default HunterShaw;
*/