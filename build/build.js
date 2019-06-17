/**
 * build all for lib
 */

/* eslint-disable import/no-extraneous-dependencies */
const shell = require('shelljs');
const chalk = require('chalk');

const taskList = [{
  script: 'clean',
  msg: 'Clean...',
}, {
  script: 'build:entry',
  msg: 'Build script and style entry...',
  back: 'build entry files completed.',
}, {
  script: 'build:component',
  msg: 'Compile all script...',
}, {
  script: 'build:style',
  msg: 'Compile all style...',
}, {
  script: 'build:style-entry',
  msg: 'Build style entry for lib...',
  back: 'build style entry completed.',
}, {
  script: 'build:library',
  msg: 'Build single file library...',
}];

taskList.forEach((task, index) => {
  console.log(chalk.blue(`${index + 1}. ${task.msg}`));
  if (shell.exec(`npm run ${task.script} --silent`).code !== 0) {
    shell.echo(chalk.red(`Error: Task running failed: ${task.script}`));
    shell.exit(1);
  }
  if (task.back) {
    console.log(chalk.bgGreen(' DONE '), chalk.green(task.back));
  }
  console.log('\n');
});

console.log(`${chalk.bgGreen(' DONE ')} ${chalk.green('Build task completed!')}`);
