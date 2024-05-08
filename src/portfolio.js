const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://rajshekhar26.github.io/cleanfolio',
  title: 'JS.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Divyansh Rastogi',
  role: 'Full Stack Developer',
  description:
    'Computer Science and Engineering graduate from NIT Hamirpur, working as a full stack developer at Escorts Kubota pvt ltd.',
  resume: 'https://example.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/divyansh-rastogi-978092115/',
    github: 'https://www.github.com/divyansh-git',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Slack App clone',
    description:
      'Built Clone of slack app that has features like channel creation, direct messaging, adding chats to favourites, sending attachments.',
    stack: ['React', 'Firebase', 'SemanticUI'],
    sourceCode: 'https://github.com/divyansh-git/Slack-clone-2',
    livePreview: 'https://slack-react-clone-aeccf.web.app/',
  },
  {
    name: 'Contact Management App',
    description:
      'This app allows adding new contact, editing and deletion of existing contact and display of all the contacts added.',
    stack: ['React', 'TypeScript', 'CSS'],
    sourceCode: 'https://github.com/divyansh-git/taiyo_assignment',
    livePreview: 'https://taiyoassignment.netlify.app/',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Redux',
  'SASS',
  'Material UI',
  'Git',
  'AWS',
  'Jmeter'
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'rastogi11204@gmail.com',
}

export { header, about, projects, skills, contact }
