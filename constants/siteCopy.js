const constants = {
    name: 'ian seabock',
    siteTitle: 'Web Developer',
    sentence: 'i write a little code and do other things too.',
    linkedin: 'https://www.linkedin.com/in/seabock/',
    home: [
        {
            title: 'Welcome',
            body: [
                "Hey there, I'm Ian, a seasoned web developer with a passion for crafting seamless digital experiences. I've been in web development for a while, but over the past 8 years, I've been immersed in frameworks like React, Express, and Next.js. My journey began with good old fashioned HTML, CSS and Javascript, then PHP, Python, Ruby on Rails and jQuery, where I honed my skills and set the stage for an exciting evolution in the digital landscape where we are today."
            ]
        },
        {
            title: 'A Little Code',
            body: [
                "I thrive on turning ideas into functional, user-friendly websites. From crafting sleek user interfaces with React to building robust backend systems using Node.js, Express or Next.js, I've enjoyed the ever-changing challenges of web development. My transition from Ruby on Rails and jQuery to these modern tools has been an exciting ride, and I'm always eager to learn and adapt as technology evolves.",
                "If you'd like to use that typewiter effect above, checkout the gist <a target='_blank' href='https://gist.github.com/iseabock/984fcea112233f7284a0c032ee25ca8c'>here</a>. I'll add a gist for these random lifted corners soon too, but I want to make some changes to them first."
            ]
        },
        {
            title: 'Other Things',
            body: [
                "When I step away from the screen, you'll often find me outdoors on a trail, disc golfing or tending to my house plants.",
                'Nature is my sanctuary, and I love hiking, exploring new trails, and soaking in the beauty of the natural world. My passion for the outdoors not only rejuvenates me but also influences my approach to problem-solving and creativity in my coding projects.',
                "I'm blessed to have some amazing disc golf courses in my area, and I love to get out and play a round whenever I can. I've been playing for the past 4 years, and it's probably one of the best ways to get some exercise and enjoy the outdoors.",
                "House plants are another one of my hobbies. There's something rewarding about nurturing a plant and watching it thrive over time. The patience and care I invest in my plants mirror the dedication I bring to writing clean, efficient code."
            ]
        }
    ],
    connect: {
        title: "Let's Connect",
        body: [
            "I'm currently on the market for a new role, so if you're looking for a developer..."
        ]
    },
    technologies: [
        {
            'Hard Skills': [
                'Javascript/ES6',
                'Typescript',
                'ReactJS',
                'Node.js (Express, Next.js, NestJS)',
                'Electron',
                'Postgres',
                'MySQL',
                'NoSQL (MongoDB, Firebase)',
                'AWS/S3',
                'CSS, SCSS, SASS'
            ]
        },
        {
            'Soft Skills': [
                'Ability to effectively recognize strengths on team and delegate tasks accordingly',
                'Active listening',
                'Communicate respectfully and effectively',
                'Team player',
                'Dedicated to helping others be their best'
            ]
        },
        {
            Certificates: ['Certified SCRUM Master, CollabNet']
        }
    ],
    experience: [
        {
            company: 'Scanifly',
            sector: 'B2B Solar Industry',
            title: 'Full Stack Developer (React & NestJS)',
            date: '2022 - 2023',
            technologies: [
                'JavaScript',
                'ReactJS(Hooks)',
                'NestJS',
                'TypeScript',
                'HTML5',
                'CSS3',
                'JSON',
                'AWS'
            ],
            notes: [
                'Worked on many new innovative industry specific features that added considerable value to the product that helped please and retain customers.',
                'Added ability to incorporate third party integrations like GDrive, Box, Dropbox for clients to be able to backup assets created with the software.',
                'Testing always added code and would frequently add tests to existing code that needed coverage',
                'Refactored much of the Javascript to Typescript'
            ]
        },
        {
            company: 'Epic Games',
            sector: 'Gaming',
            title: 'React Developer',
            date: '2021 - 2022',
            technologies: [
                'JavaScript',
                'ReactJS(Hooks)',
                'Express',
                'TypeScript',
                'HTML5',
                'CSS3',
                'JSON',
                'AWS'
            ],
            notes: [
                'Worked on products (Metahuman Creator, Twinmotion)  that were pixel streamed via browser to allow for a wider audience. These products would have had to be installed on a user’s machine otherwise.',
                'Worked on other similar projects for internal use or that have not been released yet.',
                'Migrated all projects from Javascript to Typescript.',
                'Project tech lead to add QR code sharing feature on Twinmotion.',
                'Added an image carousel on Metahuman from scratch to avoid unnecessary dependencies. '
            ]
        },
        {
            company: 'Atlassian',
            sector: 'B2B Tech Productivity',
            title: 'React Developer on short term contract',
            date: '2019 - 2020',
            technologies: [
                'JavaScript',
                'ReactJS(Hooks)',
                'TypeScript',
                'HTML5',
                'CSS3',
                'JSON',
                'AWS'
            ],
            notes: [
                'Working on the pricing team for core Atlassian products.',
                'Due to NDA I can’t get into too much detail on full responsibilities.'
            ]
        },
        {
            company: 'Alchemic LTD',
            sector: 'Visual Effect',
            title: 'Full-stack Software Developer',
            date: '2017 - 2019',
            technologies: [
                'JavaScript',
                'ReactJS',
                'Node.js',
                'Express',
                'Electron',
                'HTML5',
                'CSS3',
                'JSON',
                'Firestore',
                'Elasticsearch'
            ],
            notes: [
                'Responsible for a web app that allows VFX artists to collaborate with each other, and interact with supervising directors.',
                'Used Slack, and Jira APIs to keep VFX artists up to date on projects and issues.',
                'Primary contributor to GUI Electron app used to abstract GIT functions for less technical users.',
                'Contributed to CLI app written in Node.js.'
            ]
        },
        {
            company: 'Stonecrop Technologies',
            sector: 'Supply Chain Management',
            title: 'Full-stack Software Developer',
            date: '2014 - 2017',
            technologies: [
                'Ruby on Rails',
                'jQuery',
                'Postgres',
                'HTML5',
                'CSS3',
                'JSON',
                'AWS',
                'S3'
            ],
            notes: [
                'The application requires multiple user rolls around different stages of cell tower projects.',
                'Main responsibility is writing and maintaining our API to support a mobile app that our warehouse employees used to fulfill orders and contractors used to complete projects.',
                'Secondary responsibility for our warehouse inventory control system that integrated with a third party API.'
            ]
        },
        {
            company: 'MyWebRoom.com',
            sector: 'Social Network',
            title: 'Full-stack Software Developer',
            date: '2013 - 2014',
            technologies: [
                'Ruby on Rails',
                'Postgres',
                'JavaScript',
                'Backbone',
                'JSON',
                'Redis',
                'HTML5',
                'CSS3',
                'Heroku'
            ],
            notes: [
                'Responsible for making mission critical technical decisions, performance optimization and developing new features.',
                'Implemented search within mywebroom.com via Solr.',
                'Rebuilt and added many features to the front-end with BackboneJS.',
                'Introduced Agile methodologies using Scrum to the team with excellent results.'
            ]
        },
        {
            company: 'Message Bus',
            sector: 'Email Delivery Platform',
            title: 'Full-stack Software Developer',
            date: '2011 - 2013',
            technologies: [
                'Ruby on Rails',
                'Node.js',
                'MySQL',
                'Postgres',
                'Redis',
                'JavaScript',
                'AngularJS',
                'JSON',
                'HTML5',
                'CSS3',
                'AWS'
            ],
            notes: [
                'Created an internal tool for managing client accounts in Ruby on Rails.',
                'Worked with Chef Soloist and Chef Server.',
                'Built a single page application client dashboard with AngularJS.'
            ]
        },
        {
            company: 'CNET/CBS Interactive - mySimon.com',
            sector: 'Comparative Shopping',
            title: 'Front-end Developer',
            date: '2007 - 2011',
            technologies: [
                'JavaScript',
                'Python',
                'MySQL',
                'CouchDB',
                'JSON',
                'XML',
                'HTML',
                'HTML5',
                'CSS'
            ],
            notes: [
                'Rebuilt entire front end when the site switched from Java platform to Python.',
                'A/B tested many UX and UI scenarios.',
                'Implemented and managed production of mobile version of mobile.mysimon.com.',
                'Increased front end performance by ~40%.'
            ]
        }
    ]
};

export default constants;
