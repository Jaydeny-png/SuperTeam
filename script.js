const teamMembers = [
    {
        ranking: '1.',
        name: 'Micahel Jordan',
        position: 'Shooting Guard',
        position1: 'Guard',
        years: "1984-2003",
        skills: ['Scoring Ability', 'Defensive Skills', 'Leadership'],
        career: 'Michael Jordan is widely regarded as the greatest basketball player of all time, with six NBA championships, five MVP awards, and a legacy that transcends the sport. Known for his scoring prowess, tenacity on defense, and clutch performances, Jordan left an indelible mark on the game.',
        img: ''
    },
    {
        ranking: "2.",
        name: "LeBron James",
        position: "Small Forward/Point Guard",
        position1: "Forward",
        years: "2003-Present",
        skills: ["Scoring", "Playmaking", "Leadership"],
        career: "LeBron James redefined the role of a forward with his versatile skill set, dominating the court with his scoring, playmaking, and leadership abilities.",
        img: ''
    },
    {
        ranking: '3.',
        name: 'Kobe Bryant',
        position: 'Shooting Guard/Small Forward',
        position1: 'Guard',
        years: "1996-2016",
        skills: ['Scoring Ability', 'Footwork', 'Clutch Performances'],
        career: 'Kobe Bryant was a legendary basketball player known for his incredible scoring ability, meticulous footwork, and ability to perform under pressure. Over his 20-year career with the Los Angeles Lakers, he won five NBA championships, two NBA Finals MVP awards, and was an 18-time All-Star, leaving a lasting impact on the game.',
        img: ''
    },
    {
        ranking: '4.',
        name: 'Stephen Curry',
        position: 'Point Guard/Shooting Guard',
        position1: 'Guard',
        years: "2009-present",
        skills: ['Three-Point Shooting', 'Ball Handling', 'Court Vision'],
        career: 'Stephen Curry revolutionized basketball with his exceptional three-point shooting, incredible ball handling, and remarkable court vision. As a cornerstone of the Golden State Warriors, he led the team to multiple NBA championships and won two MVP awards. Currys influence has transformed the game, making the three- point shot a central strategy for teams across the league.',

  },
{
    ranking: '5.',
    name: 'Shaquille ONeal',
    position: 'Center',
    position1: 'Center',
    years: "1992-2011",
    skills: ['Dominant Post Presence', 'Rebounding', 'Shot Blocking'],
    career: 'Shaquille O\'Neal, known for his immense size and strength, dominated the paint during his career. He was a four-time NBA champion, three-time NBA Finals MVP, and a 15-time All-Star. Shaqs powerful play and charismatic personality made him one of the most iconic players in NBA history, leaving a lasting legacy on the game.',
    img: ''
    
},
{
    ranking: '6.',
    name: 'Larry Bird',
    position: 'Small Forward/Power Forward',
    position1: 'Forward',
    years: "1979-1992",
    skills: ['Shooting', 'Passing', 'Rebounding'],
    career: 'Larry Bird was a legendary basketball player renowned for his exceptional shooting, passing, and rebounding skills. Over his 13-year career with the Boston Celtics, he won three NBA championships, two NBA Finals MVP awards, and was a 12-time All-Star. Birds fierce competitiveness and basketball IQ made him one of the greatest players in NBA history.',
    img: ''    
},
{
        ranking: '7.',
        name: 'Magic Johnson',
        position: 'Point Guard',
        position1: 'Guard',
        years: "1979-1996",
        skills: ['Playmaking', 'Leadership', 'Versatility'],
        career: 'Magic Johnson, ranked third, revolutionized basketball as a point guard with his unparalleled playmaking, exceptional leadership, and remarkable versatility. His career with the Los Angeles Lakers, spanning from 1979 to 1996, yielded five NBA championships and three NBA Finals MVP awards. Magic\'s infectious charisma and captivating style of play continue to inspire generations of basketball enthusiasts.',
        img: ''
},
{

        ranking: '8.',
        name: 'Tim Duncan',
        position: 'Power Forward/Center',
        position1: 'Forward',
        years: "1997-2016",
        skills: ['Fundamental Skills', 'Defensive Prowess', 'Leadership'],
        career: 'Tim Duncan, ranked third, was a dominant force in basketball renowned for his fundamental skills, defensive prowess, and exceptional leadership. During his illustrious career with the San Antonio Spurs from 1997 to 2016, Duncan secured five NBA championships and earned three NBA Finals MVP awards. His impact on the game and his teams success are testament to his greatness.',
        img: ''
},
{
        ranking: '9.',
        name: 'Bill Russell',
        position: 'Center/Power Forward',
        position1: 'Center',
        years: "1956-1969",
        skills: ['Defensive Dominance', 'Rebounding', 'Winning Mentality'],
        career: 'Bill Russell, ranked third, was a defensive stalwart and a dominant force in basketball, renowned for his defensive dominance, exceptional rebounding, and winning mentality. During his illustrious career with the Boston Celtics from 1956 to 1969, Russell led the team to an unprecedented 11 NBA championships. His impact on the defensive end of the floor revolutionized the game, and his winning mindset continues to inspire generations of players.',
        img: ''
},
{
        ranking: '10.',
        name: 'Kareem Abdul-Jabbar',
        position: 'Center/Power Forward',
        position1: 'Center',
        years: "1969-1989",
        skills: ['Scoring Prowess', 'Skyhook', 'Shot Blocking'],
        career: 'Kareem Abdul-Jabbar, ranked third, was a basketball icon known for his unparalleled scoring prowess, signature skyhook shot, and shot-blocking ability. Throughout his illustrious career, spanning from 1969 to 1989, Kareem amassed six NBA championships and earned six NBA MVP awards. His impact on the game extended far beyond the court, leaving a lasting legacy as one of the greatest players in basketball history.',
        img: ''
},
  
]





function generateTeamCards() {
    const teamCardsContainer = document.getElementById('teamCards')

    teamMembers.forEach(member => {
        const card = document.createElement('div')
        card.classList.add('col-md-3')


        //background color
        let backgroundColor = ''

        switch (member.position1) {
            case 'Center':
                backgroundColor = '#003087'
                break
            case 'Guard':
                backgroundColor = '#C4CED3'
                break
            case 'Forward':
                backgroundColor = '#E4002C'
                break

        }

        card.style.backgroundColor = backgroundColor


        //Create a list of skills with the <li> tag
        const skillsList = member.skills.map(skill => `<li> ${skill} </li>`).join('')

        card.innerHTML =
            `
      <div class = "card h-100">
          <div class = "card-header">
          <h3><b>${member.ranking}</b> ${member.name} </h3>
          </div>
          
          <div class = "card-body">
          <img style="width: 200px" src=${member.img}><br><br>
              <p><b>Years Played: </b> ${member.years}</p>
              <p><b>Position: </b> ${member.position}</p>
              <p><b>Skills: </b><ul> ${skillsList}</ul></p>              
              <p><b>Career: </b> ${member.career}</p>
              
          </div>
      </div>
      `
        teamCardsContainer.appendChild(card)
    })
}

window.onload = generateTeamCards()