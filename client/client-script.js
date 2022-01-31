let job_container = document.querySelector('.my-job-container');
let job_card = document.querySelector('.my-job-container').querySelector('.job-row');
job_card.style.display = "none";


jobs.forEach(job => {
    let cloneCard = job_card.cloneNode(true)
    cloneCard.querySelector('.jobName').innerText = job.job_name;
    cloneCard.querySelector('.jobDescription').innerText = job.job_description;
    cloneCard.querySelector('.employerName').innerText = job.employer_name;
    cloneCard.querySelector('.jobType').innerText = job.type;
    cloneCard.querySelector('.budget').innerText = '₱ '+job.budget;
    cloneCard.style.display = "flex";
      
    job_container.appendChild(cloneCard);
});

function openHire(){
    document.querySelector(".hire-popup").style.display = "block";
}
function closeHire(){
    document.querySelector(".hire-popup").style.display = "none";
}
document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        closeHire();
    }
});