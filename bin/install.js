#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const https = require('https');
const os = require('os');

const REPO_BASE = 'https://api.github.com/repos/zolem/dev-team-workflow/contents/.claude/commands';

function getGlobalClaudeDir() {
  // Check if user has custom Claude config directory
  if (process.env.CLAUDE_CONFIG_DIR) {
    return path.join(process.env.CLAUDE_CONFIG_DIR, 'commands');
  }
  
  // Fall back to default locations
  const platform = os.platform();
  const home = os.homedir();
  
  // Default to ~/.claude/commands for all platforms
  return path.join(home, '.claude', 'commands');
}

async function fetchJSON(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'jn-llm-workflow-installer' } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          reject(e);
        }
      });
    }).on('error', reject);
  });
}

async function downloadFile(url, dest) {
  const dir = path.dirname(dest);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', reject);
  });
}

async function downloadDirectory(apiUrl, localPath) {
  const items = await fetchJSON(apiUrl);
  
  for (const item of items) {
    const localFile = path.join(localPath, item.name);
    
    if (item.type === 'file') {
      console.log(`Downloading ${item.path}...`);
      await downloadFile(item.download_url, localFile);
    } else if (item.type === 'dir') {
      await downloadDirectory(item.url, localFile);
    }
  }
}

async function installCommands() {
  console.log('📥 Installing Dev Team Workflow commands globally...');
  
  const globalDir = getGlobalClaudeDir();
  console.log(`Installing to: ${globalDir}`);
  
  try {
    await downloadDirectory(REPO_BASE, globalDir);
    
    console.log('✅ Installation complete!');
    console.log('');
    console.log('Available commands:');
    console.log('  @business-analyst - Interactive brief creation');
    console.log('');
    console.log('Run any command to get started!');
    
  } catch (error) {
    console.error('❌ Installation failed:', error.message);
    console.log('');
    console.log('Manual installation: https://github.com/zolem/dev-team-workflow');
    process.exit(1);
  }
}

async function uninstallCommands() {
  console.log('🗑️  Uninstalling Dev Team Workflow commands...');
  
  const globalDir = getGlobalClaudeDir();
  console.log(`Removing from: ${globalDir}`);
  
  try {
    if (fs.existsSync(globalDir)) {
      fs.rmSync(globalDir, { recursive: true, force: true });
      console.log('✅ Uninstallation complete!');
    } else {
      console.log('ℹ️  No commands found to uninstall.');
    }
  } catch (error) {
    console.error('❌ Uninstallation failed:', error.message);
    process.exit(1);
  }
}

function showHelp() {
  console.log('Dev Team Workflow Commands');
  console.log('');
  console.log('Usage:');
  console.log('  npx dev-team-workflow install   - Install commands globally');
  console.log('  npx dev-team-workflow uninstall - Remove commands');
  console.log('  npx dev-team-workflow help      - Show this help');
  console.log('');
  console.log('Commands will be installed to your global Claude config directory.');
}

async function main() {
  const command = process.argv[2];
  
  switch (command) {
    case 'install':
      await installCommands();
      break;
    case 'uninstall':
      await uninstallCommands();
      break;
    case 'help':
    case '--help':
    case '-h':
      showHelp();
      break;
    default:
      if (!command) {
        // Default to install if no command specified (for backward compatibility)
        await installCommands();
      } else {
        console.log(`Unknown command: ${command}`);
        showHelp();
        process.exit(1);
      }
  }
}

main().catch(console.error);