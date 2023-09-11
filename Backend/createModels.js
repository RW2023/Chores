const fs = require('fs');
const path = require('path');

// Create 'models' directory if it doesn't exist
const modelsDir = path.join(__dirname, 'models');
if (!fs.existsSync(modelsDir)) {
    fs.mkdirSync(modelsDir);
}

// Schema contents
const kidSchema = `const mongoose = require('mongoose');
// Kid schema content here
module.exports = mongoose.model('Kid', kidSchema);`;

const choreSchema = `const mongoose = require('mongoose');
// Chore schema content here
module.exports = mongoose.model('Chore', choreSchema);`;

const rewardSchema = `const mongoose = require('mongoose');
// Reward schema content here
module.exports = mongoose.model('Reward', rewardSchema);`;

// Write the schema files
fs.writeFileSync(path.join(modelsDir, 'Kid.js'), kidSchema);
fs.writeFileSync(path.join(modelsDir, 'Chore.js'), choreSchema);
fs.writeFileSync(path.join(modelsDir, 'Reward.js'), rewardSchema);

console.log('Folder structure and schema files have been created successfully.');
