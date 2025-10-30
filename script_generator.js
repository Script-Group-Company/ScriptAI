const messagesEl = document.getElementById('messages');
const inputEl = document.getElementById('input');
const sendBtn = document.getElementById('send');

function addMessage(text,type){
  const div=document.createElement('div');
  div.className='msg '+type;
  div.textContent=text;
  messagesEl.appendChild(div);
  messagesEl.scrollTop=messagesEl.scrollHeight;
}

/* حالياً محاكاة فقط */
async function sendMessage(){
  const text=inputEl.value.trim();
  if(!text) return;
  addMessage(text,'user');
  inputEl.value='';
  sendBtn.disabled=true;
  
  // لاحقاً هنا تضيف طلب الـ API:
  // const res = await fetch("https://api.openai.com/v1/chat/completions", {...});
  // const data = await res.json();
  // const reply = data.choices[0].message.content;

  await new Promise(r=>setTimeout(r,600)); // محاكاة تأخير
  const reply = "ردّ تجريبي من الذكاء الاصطناعي على: "+text;
  addMessage(reply,'ai');

  sendBtn.disabled=false;
}

sendBtn.onclick=sendMessage;
inputEl.addEventListener('keydown',e=>{
  if(e.key==='Enter'&&!e.shiftKey){
    e.preventDefault();
    sendMessage();
  }
});
