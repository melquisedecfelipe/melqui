import boxen from 'boxen'
import chalk from 'chalk'

const name = chalk.blue.bold('Melquisedec Felipe')
const work = chalk.white('Front-End Developer at ') + chalk.yellow.bold('<AmbevTech/>')
const github = chalk.white('GitHub: ') + chalk.gray('https://github.com/') + chalk.white('melquisedecfelipe')
const linkedin = chalk.white('LinkedIn: ') + chalk.gray('https://linkedin.com/in/') + chalk.white('melquisedecfelipe')
const site = chalk.white('Site: ') + chalk.gray('https://') + chalk.white('melquisedec.dev')
const card = chalk.white('Card: ') + chalk.gray('npx melqui')

const info = boxen(
  [
    name,
    '',
    work,
    '',
    github,
    linkedin,
    site,
    '',
    card
  ].join('\n'),
  {
    borderColor: 'black',
    borderStyle: 'bold',
    float: 'center',
    margin: 1,
    padding: 1
  }
)
    
console.log(info)