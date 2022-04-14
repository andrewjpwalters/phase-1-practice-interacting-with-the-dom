// const counter = document.querySelector('#counter')
// const minus = document.querySelector('#minus')
// const plus = document.querySelector('#plus')
// const heart = document.querySelector('#heart')
// const pause = document.querySelector('#pause')
// const comment = document.querySelector('#submit')
// let isPaused = false;
// let seconds = 0;
// let likeNumber = 0

// const startTimer = setInterval(handleTimer, 1000)

// function handleTimer() {
//     if (isPaused === false) {
//         seconds += 1;
//         counter.innerText = seconds
//         likeNumber = 0;
//     } else {
//         clearInterval(setInterval)
//     }
// }

// pause.addEventListener('click', () => {
//     if (isPaused === false) {
//         minus.disabled = true;
//         plus.disabled = true;
//         heart.disabled = true;
//         pause.innerText = 'resume'
//         isPaused = true;
//     } else {
//         minus.disabled = false;
//         plus.disabled = false;
//         heart.disabled = false;
//         pause.innerText = 'pause';
//         isPaused = false
//     }
// })

// minus.addEventListener('click', () => {
//     seconds -= 1;
// })

// plus.addEventListener('click', () => {
//     seconds += 1;
// })

// heart.addEventListener('click', () => {
//     likeNumber += 1
//     const like = document.createElement('li');
//     like.innerText = `${likeNumber} like at ${seconds} seconds`
//     document.querySelector('.likes').appendChild(like)
// })

// comment.addEventListener('click', () => {
//     event.preventDefault()
//     newComment = document.createElement('p')
//     newComment.innerText = document.querySelector('#comment-input').value
//     document.querySelector('#list').append(newComment)
//     document.querySelector('#comment-input').value = ''
// })