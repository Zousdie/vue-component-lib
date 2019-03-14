/**
 * build all for lib
 */

/* eslint-disable import/no-extraneous-dependencies */
const shell = require('shelljs');
const chalk = require('chalk');

const taskList = [{
  script: 'clean',
  msg: chalk.green('1. Clean...'),
}, {
  script: 'build:entry',
  msg: chalk.green('2. Build script and style entry...'),
}, {
  script: 'build:script',
  msg: chalk.green('3. Compile all script...'),
}, {
  script: 'build:style',
  msg: chalk.green('4. Compile all style...'),
}, {
  script: 'build:style-entry',
  msg: chalk.green('5. Build style entry for esm and lib...'),
}, {
  script: 'build:lib',
  msg: chalk.green('6. Build single file library...'),
}];

taskList.forEach((task) => {
  console.log(task.msg);
  if (shell.exec(`npm run ${task.script} --silent`).code !== 0) {
    shell.echo(chalk.red(`Error: Task running failed: ${task.script}`));
    shell.exit(1);
  }
  console.log('\n');
});

console.log(`${chalk.bgGreen(' DONE ')} ${chalk.green('Build task completed!')}`);
