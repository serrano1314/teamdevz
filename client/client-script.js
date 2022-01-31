let job_container = document.querySelector('.my-job-container');
let job_card = document.querySelector('.my-job-container').querySelector('.job-row');
job_card.style.display = "none";

let job_card2 = job_card.cloneNode(true)
job_card2.querySelector('.jobName').innerText = 'test2';
job_card2.querySelector('.jobDescription').innerText = 'test2';
job_card2.querySelector('.employerName').innerText = 'test2';
job_card2.querySelector('.jobType').innerText = 'test2';
job_card2.querySelector('.budget').innerText = 'test2';
job_card2.style.display = "flex";


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