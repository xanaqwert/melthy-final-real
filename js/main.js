/* <!-- *Main javascript* -->
Ini adalah Javascript dari bagian/section Main
<!-- *__________________________Mulai Dari Bagian Main__________________________* -->
*/

const popup = document.querySelector('.chat-popup');
const chatBtn = document.querySelector('.chat-btn');
const submitBtn = document.querySelector('.submit');
const chatArea = document.querySelector('.chat-area');
const inputElm = document.querySelector('input');  

//* Untuk Chat Button    

chatBtn.addEventListener('click', ()=>{
    popup.classList.toggle('show');
})

//* Agar bisa mengirim pesan
submitBtn.addEventListener('click', ()=>{
    let userInput = inputElm.value;

    let temp = `<div class="out-msg">
    <span class="my-msg">${userInput}</span>
    <img src="/assets/images/person/sahl-client.jpeg" class="avatar">
    </div>`;

    chatArea.insertAdjacentHTML("beforeend", temp);
    inputElm.value = '';

})