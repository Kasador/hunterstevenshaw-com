export default function Utils() {
    console.log('event listener added!')
    const nav = document.getElementById('NavDesktop');
    nav?.addEventListener('click', () => {
        console.log('Nav was clicked!')
        alert('Nav was clicked!')
    })
} 