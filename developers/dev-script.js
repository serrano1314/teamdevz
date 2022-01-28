
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
                            <button class="btn btn-outline-primary px-4 ms-3">Contact</button> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
profile_card.insertAdjacentHTML('beforeend',str2);
});


