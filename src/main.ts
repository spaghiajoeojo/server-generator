import { execSync } from 'child_process';
import { printLogo } from '@/logo';

async function run() {
  try {
    const chalk = (await import('chalk')).default;
    await printLogo();
    const inquirer = (await import('inquirer')).default;
    const { projectPath, installDeps } = await inquirer.prompt([
      {
        name: 'projectPath',
        message: 'What\'s the name of your project?',
        default: 'express-server',
      },
      {
        name: 'installDeps',
        type: 'confirm',
        message: 'Do you want to install dependencies now?',
        default: false,
      },
    ]);
    console.log('Generating project...');
    // @ts-ignore
    execSync(`git clone --depth 1 ${import.meta.env.VITE_APP_GIT_REPO} ${projectPath}`);

    process.chdir(projectPath);
    console.log('Setting things up...');

    execSync(`npm pkg set name=${projectPath}`);

    execSync('npx rimraf ./.git');

    if (installDeps) {
      console.log('Installing dependencies...');
      execSync('npm install');
    }
    console.log('Project initialized. You can start coding running:');
    console.log(chalk.hex('#88c0bf')(`cd ${projectPath}`));
    console.log(chalk.hex('#88c0bf')('npm run dev'));
  } catch (error) {
    console.log(error);
  }
}

run();
