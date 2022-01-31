
let profile_card = document.querySelector('.profile-container');
dev_profile.forEach(profile => {
    let str2 = `
        <div class="row profile-card d-flex justify-content-center">
            <div class="col">
                <div class="card p-3 py-4">
                    <div class=""> 
                        <a href="profile/${profile.id}/profile.html">
                        <img src="profile/${profile.id}/profile-img.jpg" width="100" class="rounded-circle img-crop"> 
                        </br><span style="font-size:small;color:#bababa;">Know more about ${profile.first_name} </span>
                        </a>
                    </div>
                    <div class="mt-3"> 
                        <span class="bg-secondary px-2 py-1 rounded text-white">${profile.role}</span>
                        <h4 class="mt-2 mb-0">${profile.first_name + ' ' + profile.last_name}</h4> 
                        <span><h6>${profile.skills.join(' | ')}</h6></span>
                        <div class="px-4 mt-1">
                            <p>${profile.bio}</p>
                        </div>
                        <div class="buttons"> 
                            <button class="btn btn-primary px-4" onclick="openHire()">Hire</button> 
                            <button class="btn btn-outline-primary px-4 ms-3 contact-talent-btn " value="${profile.id}">Contact</button> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
profile_card.insertAdjacentHTML('beforeend',str2);
});

function openChat() {
    document.querySelector(".popup-chat").style.display = "block";
  }
  
function closeChat() {
document.querySelector(".popup-contact").style.display = "none";
}

function closeHire(){
    document.querySelector(".hire-popup").style.display = "none";
}
function openHire(){
    document.querySelector(".hire-popup").style.display = "block";
}

contact_btns = document.querySelectorAll('.contact-talent-btn');


for (let i=0; i<contact_btns.length; i++) {
    contact_btns[i].addEventListener("click", function() {
        document.querySelector('.chatbox-sec').innerHTML = "";
        let profile = dev_profile[i];
        let id = contact_btns[i].value;
        chat_str = `
        <div class="popup-contact">
        <div class="other-contact-info text-dark pt-2">
            <div class="close-chat">
            <i onclick="closeChat()" class="bi bi-x m-1" style="font-size:25px;color:#ffa9a9"></i>
            </div>
            <h5>${profile.first_name} </h5>
            <div class="chat-socmed">
            <a href="https://fb.com/" target="_blank"><i class="bi bi-facebook" style="font-size:18px"></i></a>
            <a href="https://twitter.com/" target="_blank"><i class="bi bi-twitter" style="font-size:18px"></i></a>
            <a href="https://linkedin.com/in/" target="_blank"><i class="bi bi-linkedin" style="font-size:18px"></i></a>
            </div>
            
        </div>
        <div class="chat-field">
            <div class="text-left d-flex ">
                <div class="">
                <img src="profile/${profile.id}/profile-img.jpg" width="40" class="rounded-circle img-crop"> 
                </div>
                <div class="conversation">
                    <div class="small p-2 ml-3 bubble">
                        Hello! You can also try to reach me at my social media accounts by clicking icons above! :)
                    </div>
                    <div class="small bubble sent-bubble d-none">
                        test
                    </div>
                </div>
            </div>
        </div>
        <div class="message-form" class="pt-3">
            <input type="text" name="message" id="myMessage" placeholder=" Type message here..." autocomplete="off">
            <button onclick="sendMessage()" class="sendMessage" id="sendMessage" type="button" style="border:none;background-color:#00000000">
            <i class="bi bi-send" style="font-size:18px;color:blue;""></i>
            </button>
            
        </div>
    </div>
        `;

        document.querySelector('.chatbox-sec').innerHTML = chat_str;
        myMessageInput = document.getElementById('myMessage')
        myMessageInput.focus()
        
        myMessageInput.addEventListener("keydown", function(event) {
            if (event.key === "Enter") {
                sendMessage();
            }
        });
    });
}

document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        closeHire();
        closeChat()
    }
});

function sendMessage(){
    message = document.getElementById('myMessage').value;
    if(!message) return;
    document.getElementById('myMessage').value = "";
    new_bubble = document.createElement('div');
    new_bubble.classList.add('small');
    new_bubble.classList.add('bubble')
    new_bubble.classList.add('sent-bubble')
    new_bubble.innerText = message;
    document.querySelector('.conversation').appendChild(new_bubble)
    chat_field = document.querySelector('.chat-field');
    chat_field.scrollTop = chat_field.scrollHeight;
};