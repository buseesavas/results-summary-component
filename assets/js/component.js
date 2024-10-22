const summaryData = [
  {
    name: 'reactionScore',
    label: 'Reaction',
    icon: 'assets/images/reaction-icon.svg',
    score: 80,
  },
  {
    name: 'memoryScore',
    label: 'Memory',
    icon: 'assets/images/memory-icon.svg',
    score: 92,
  },
  {
    name: 'verbalScore',
    label: 'Verbal',
    icon: 'assets/images/verbal-icon.svg',
    score: 61,
  },
  {
    name: 'visualScore',
    label: 'Visual',
    icon: 'assets/images/visual-icon.svg',
    score: 73,
  },
];

let totalScore = 0;
for(let i = 0; i < summaryData.length; i++){
  totalScore += summaryData[i].score;
}

let averageScore = Math.ceil(totalScore / summaryData.length);

performanceNumber.innerText = averageScore;



  for (let i = 0; i < summaryData.length; i++){
    const card = document.createElement('div');
    card.className = 'summary-card';
    card.innerHTML = `
      <div>
      <img src="${summaryData[i].icon}" alt="${summaryData[i].label} Icon" class="summary-icon" />
      <h6>${summaryData[i].label}</h6>
      </div>
      <p>${summaryData[i].score}<span> / 100</span></p>
    `;

    summary.appendChild(card);
  }
  

