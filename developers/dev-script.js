
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
                            <button class="btn btn-primary px-4">Hire</button> 
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
                    <i onclick="closeChat()" class="fa fa-close" style="font-size:18px;color:#ffa9a9"></i>
                    </div>
                    <h5>${profile.first_name} </h5>
                    <div class="chat-socmed">
                    <a href=""><i class="fa fa-facebook" style="font-size:18px"></i></a>
                    <a href=""><i class="fa fa-twitter" style="font-size:18px"></i></a>
                    <a href=""><i class="fa fa-linkedin" style="font-size:18px"></i></a>
                    </div>
                    
                </div>
                <div class="chat-field">
                    <div class="text-left d-flex ">
                        <div class="">
                        <img src="profile/${profile.id}/profile-img.jpg" width="40" class="rounded-circle img-crop"> 
                        </div>
                        <div class="small p-2 ml-3" style="width: 70%; background-color: cornflowerblue; border-radius: 10px;">
                            Hello! You can also try to reach me at my social media accounts by clicking icons above! :)
                        </div>
                    </div>
                </div>
                <form action="" class="pt-3">
                    <input type="text" name="message" id="" placeholder="Type message here...">
                    <input type="submit">
                </form>
            </div>
        `;

        
        document.querySelector('.chatbox-sec').innerHTML = chat_str;
    });
}