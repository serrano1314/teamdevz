let a = 1;
let profile_card = document.querySelector('.profile-container');
dev_profile.forEach(profile => {
    let str = `
        <div class="profile-card">
        <table class="table table-borderless">
        <tr>
        <td style="width: 150px;" rowspan = "3">
            <img src="profile/${profile.id}/profile-img.jpg" alt="">
                <a style="color:#fff; font-size: small;" href="profile/${profile.id}/profile.html">View Profile</a>
        </td>
        <td colspan="2">
            <div class="name">
                <h4>${profile.first_name + ' ' + profile.last_name}</h4> 
            </div> 
            </td>
        
        </tr>
        <tr>
            <td rowspan="2">
                <h6>${profile.bio}</h6> 
            </td>
            <td style="width: 300px;">
                <h6>${profile.skills.join(' | ')}</h6> 
            </td>
        </tr>
        <tr>
        <td>
            <button class="btn btn-success">Hire</button>
            <button class="btn btn-secondary">Contact</button>
        </td>
        </tr>
        </table>
        </div>
    `;
    
profile_card.insertAdjacentHTML('beforeend',str);
});


