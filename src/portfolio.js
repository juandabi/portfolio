const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: '',
  title: 'JC.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Juan Cardona',
  role: 'Full-Stack Engineer',
  description:
    'Dedicated and efficient full stack developer with experience in web  applications in Python, Javascript, HTML, CSS and databases. I have a strong background in data analytics, maths and statistics and I am always looking for new challenges to learn and improve my skills.',
  resume: 'https://example.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/jdavidcardona',
    github: 'https://githubhttps://github.com/juandabi.com',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Scrapping web - Jobs from Department of Work and Pensions in UK',
    description:
      'Scrapping details jobs from Department of Work and Pensions Web  and storing them in a PostgreSQL database and packing in an API to get data.',
    stack: ['Python', 'PostgreSQL', 'Data analytics'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 2',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 3',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Git',
  'Python',
  'MySQL',
  'MongoDB',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'jdavidcardonam@gmail.com',
}

export { header, about, projects, skills, contact }
