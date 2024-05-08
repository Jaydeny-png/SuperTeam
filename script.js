const teamMembers = [
  {
    name: 'Lebron James',
    age: 39,
    activelyPlaying: true,
    position: 'Forward',
    skills: ['Dribbling', 'Shooting', 'Passing'],
    strengths: 'Ball control',
    weaknesses: 'none',
    biography:
      'LeBron James is a legendary NBA player known for his versatility, athleticism, leadership, and volouptism. 😍'
  },
  {
    name: 'Michael Jordan',
    age: 61,
    activelyPlaying: false,
    position: 'Point Guard',
    skills: ['Dribbling', 'Shooting', 'Passing'],
    strengths: 'Ball control',
    weaknesses: 'none',
    biography:
      'Michael Jordan, born February 17, 1963, is widely considered the greatest basketball player of all time. He won six NBA championships with the Chicago Bulls, earned five regular-season MVP awards, and is a 14-time NBA All-Star.🐐'
  },
  {
    name: 'Bugs Bunny',
    age: 83,
    activelyPlaying: false,
    position: 'Forward',
    skills: ['Dribbling', 'Shooting', 'Passing'],
    strengths: 'Ball control',
    weaknesses: 'Defense',
    biography:
      'Bugs Bunny is a beloved cartoon character created by Warner Bros. He is known for his wit, charm, and iconic catchphrase, Whats up, Doc?'
  },
  {
    name: 'Daphy Duck',
    age: 'unknown',
    activelyPlaying: false,
    position: 'Forward',
    skills: ['Dribbling', 'Shooting', 'Passing'],
    strengths: 'Ball control',
    weaknesses: 'Inconsistency in shooting',
    biography:
      'Daffy Duck is an animated character created by Warner Bros. Known for his zany and often self-absorbed personality, Daffy is one of the most iconic Looney Tunes characters.'
  },
  {
    name: 'Lola Bunny',
    age: 'unknown',
    activelyPlaying: true,
    position: 'Forward',
    skills: ['Dribbling', 'Shooting', 'Passing'],
    strengths: 'Ball control',
    weaknesses: 'none',
    biography:
      'Lola Bunny is a character from the Looney Tunes franchise. She is known for her athleticism, intelligence, and confident personality.'
  },
  {
    name: 'Sylvester Cat',
    age: 36,
    activelyPlaying: false,
    position: 'Forward',
    skills: ['Dribbling', 'Shooting', 'Passing'],
    strengths: 'Ball control',
    weaknesses: 'Heading Ability',
    biography:
      'Sylvester Cat is a well-known character from the Looney Tunes series. He is often portrayed as a bumbling and clumsy feline, perpetually trying to catch Tweety Bird but failing due to his own incompetence.'
  },
  {
    name: 'Tweety Bird',
    age: 'unknown',
    activelyPlaying: false,
    position: 'Forward',
    skills: ['Dribbling', 'Shooting', 'Passing'],
    strengths: 'Ball control',
    weaknesses: 'Heading Ability',
    biography:
      'Tweety Bird, also known as Tweety, is a beloved yellow canary in the Looney Tunes series. Tweety is known for his cute appearance and cleverness, often outsmarting his enemies, particularly Sylvester the Cat.'
  },
  {
    name: 'Porky Pig',
    age: 'unknown',
    activelyPlaying: false,
    position: 'Forward',
    skills: ['Dribbling', 'Shooting', 'Passing'],
    strengths: 'Ball control',
    weaknesses: 'Heading Ability',
    biography:
      'Porky Pig is a character from the Looney Tunes series. He is known for his stuttering speech and his role as a sidekick to other characters.'
  },
  {
    name: 'Foghorn Leghorn',
    age: 'unknown',
    activelyPlaying: false,
    position: 'Forward',
    skills: ['Dribbling', 'Shooting', 'Passing'],
    strengths: 'Ball control',
    weaknesses: 'Heading Ability',
    biography:
      'Foghorn Leghorn is a character from the Looney Tunes series. He is a large, loudmouthed rooster known for his southern accent and distinctive manner of speaking.'
  },
  {
    name: 'Tasmanian Devil',
    age: 'unknown',
    activelyPlaying: false,
    position: 'Forward',
    skills: ['Dribbling', 'Shooting', 'Passing'],
    strengths: 'Ball control',
    weaknesses: 'Heading Ability',
    biography:
      'Tasmanian Devil is a character from the Looney Tunes series. He is a ferocious, voracious, and dim-witted predator known for his growling voice and insatiable appetite.'
  },
]

function generateTeamCards() {
  const teamCardsContainer = document.getElementById('teamCards')

  teamMembers.forEach(member => {
    const card = document.createElement('div')
    card.classList.add('col-md-4')

    //styling card based on position:
    let backgroundColor

    switch (member.position.toLowerCase()) {
      case 'forward':
        backgroundColor = 'red' // Yellow for forwards
        break
      case 'midfielder':
        backgroundColor = 'blue' // Green for midfielders
        break
      case 'defender':
        backgroundColor = 'yellow' // Blue for defenders
        break
      case 'goalkeeper':
        backgroundColor = '#dc3545' // Red for goalkeepers
        break
      default:
        backgroundColor = '#6c757d' // Gray for other positions
    }

    card.style.backgroundColor = backgroundColor

    //Create a list of Skills with <li> tags
    const skillsList = member.skills
      .map(skill => `<li> ${skill} </li>`).join('')

    card.innerHTML = `
          <div class = "card">
              <div class = "card-header"> ${member.name}</div>
              <div class = "card-body">
                  <p><strong>Position:</strong> ${member.position}</p>
                  <p><strong>Skills:</strong> 
                      <ul>
                          ${skillsList}
                      </ul>
                  </p>
                  <p><strong>Strengths:</strong> ${member.strengths}</p>
                  <p><strong>Weaknesses:</strong> ${member.weaknesses}</p>
                  <p><strong>Biography:</strong> ${member.biography}</p>
              </div>
          </div>
      `

    teamCardsContainer.appendChild(card)
  })
}

window.onload = generateTeamCards()
