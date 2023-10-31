import portrait from "../img/portrait.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"

export let colors = ["rgb(0,128,0)", "rgb(0,104,255)"];

export const info = {
    firstName: "Dmytro",
    lastName: "Hliebov",
    initials: "DH", 
    position: "a Front-end developer",
    selfPortrait: portrait, 
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, 
    baseColor: colors[0],
    miniBio: [ 
        {
            emoji: '⌨️',
            text: 'Love to slapping the keyboard until smthng good happens)'
        },
        {
            emoji: '🌎',
            text: 'Based in the Ukraine'
        },
        {
            emoji: "👀",
            text: "Looking for opportunities..."
        },
        {
            emoji: "📧",
            text: "dglebovdev@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://instagram.com/_kapellan_?igshid=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/CommanderCoolDev",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/dmytro-hliebov-9aa614210/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
   

    ],
    bio: "Hello! I'm Dima. I have commercial experience in web development using React and collaborate with foreign teams in two projects. I studied Full Stack course in GOIT and finished Intellias and Edvantis internships, I enjoy long walks in the forest, fantastic books and I believe that I will became cool senior one day. In the end i just need to put one foot after the other right?",
    skills:
    {
        proficientWith: ['javascript', 'react', 'git', 'github', 'bootstrap', 'html5', 'css3', 'figma', 'Jest', 'Material UI', 'Materialize'],
            exposedTo: ['nodejs', 'React', 'Figma']
        }
    ,
    hobbies: [
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'PC games',
            emoji: '👾'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'cooking(sometimes)',
            emoji: '🌶'
        }

    ],
    portfolio: [ 
        {
            title: "Ice-cream store ",
            live: "https://commandercooldev.github.io/Team-Project/", 
            source: "https://github.com/CommanderCoolDev/Ice-cream-store", 
            image: mock1
        },
        {
            title: "Project 2",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: mock2
        },
        {
            title: "Project 3",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: mock3
        },
        {
            title: "Project 4",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: mock4
        },
        {
            title: "Project 5",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: mock5
        }
    ]
}