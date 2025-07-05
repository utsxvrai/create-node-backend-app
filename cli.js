#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const { execSync } = require('child_process');

const currentDir = process.cwd();
const TEMPLATES = ['mongoose', 'sequelize'];

const copyRecursive = (src, dest) => {
  const entries = fs.readdirSync(src, { withFileTypes: true });
  if (!fs.existsSync(dest)) fs.mkdirSync(dest);

  for (let entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyRecursive(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
};

const printTemplateTips = (template, targetDir) => {
  console.log('\n📘 Setup Tips:\n');

  if (template === 'mongoose') {
    console.log('🟢 MongoDB Setup');
    console.log('👉 You can use either **local MongoDB** or **MongoDB Atlas**.');
    console.log('👉 In your `.env` file, configure one of the following:\n');

    console.log('🔹 For Local MongoDB:');
    console.log('MONGODB_URI=mongodb://localhost:27017/your-db-name\n');

    console.log('🔹 For MongoDB Atlas (Cloud):');
    console.log('MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/your-db-name\n');

    console.log('📦 Minimal `.env` example:');
    console.log('PORT=3000\n');
  }

  if (template === 'sequelize') {
    console.log('🟡 Sequelize Setup');
    console.log('✅ Sequelize boilerplate created under `src/`\n');

    console.log('🛠 To complete Sequelize setup, run:');
    console.log(`   cd ${targetDir}`);
    console.log('   cd src');
    console.log('   npx sequelize init\n');

    console.log('✏️ Then edit `src/config/config.json` with your DB credentials.');

    console.log('📦 Minimal `.env` example:');
    console.log('PORT=3000\n');
  }

  console.log('🚀 Start your app using:');
  console.log(`   cd ${targetDir}`);
  console.log('   npm run dev\n');
};

const init = async () => {
  const { template, targetDir } = await inquirer.prompt([
    {
      type: 'list',
      name: 'template',
      message: 'Which boilerplate do you want to use?',
      choices: TEMPLATES
    },
    {
      type: 'input',
      name: 'targetDir',
      message: 'Enter project folder name:',
      default: 'my-app'
    }
  ]);

  const templatePath = path.join(__dirname, 'templates', template);
  const targetPath = path.join(currentDir, targetDir);

  if (fs.existsSync(targetPath)) {
    console.error(`❌ Directory "${targetDir}" already exists.`);
    process.exit(1);
  }

  copyRecursive(templatePath, targetPath);
  console.log(`✅ Project created in ${targetDir}`);

  // Automatically run `npm install`
  try {
    console.log('📦 Installing dependencies...');
    execSync('npm install', { stdio: 'inherit', cwd: targetPath });
    console.log('✅ Dependencies installed successfully.\n');
  } catch (err) {
    console.error('❌ npm install failed. Please run it manually inside the project folder.');
  }

  if (template === 'sequelize') {
    try {
      const sequelizeInitPath = path.join(targetPath, 'src');
      console.log('⚙️ Running `npx sequelize init` in `src/`...');
      execSync('npx sequelize init', { stdio: 'inherit', cwd: sequelizeInitPath });
      console.log('✅ Sequelize initialized under `src/`\n');
    } catch (err) {
      console.error('❌ Failed to run `sequelize init`. Please run it manually inside `src/`.');
    }
  }


  printTemplateTips(template, targetDir);
};

init();
