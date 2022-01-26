let test = "steven"
document.querySelector('.profile-card').innerHTML = `
<table class="table table-borderless">
<tr>
   <td style="width: 150px;" rowspan = "3">
       <img src="profile/0/profile-img.jpg" alt="">
        <a style="color:#fff; font-size: small;" href="#">View Profile</a>
   </td>
   <td colspan="2">
    <div class="name">
        <h4>${dev_profile_test[0].first_name + ' ' + dev_profile_test[0].last_name}</h4> 
    </div> 
    </td>
   
</tr>
<tr>
    <td rowspan="2">
        <h6>${dev_profile_test[0].bio}</h6> 
    </td>
    <td style="width: 300px;">
        <h6>${dev_profile_test[0].skills.join(' | ')}</h6> 
    </td>
</tr>
<tr>
   <td>
    <button class="btn btn-success">Hire</button>
    <button class="btn btn-secondary">Contact</button>
   </td>
</tr>
</table>

`;