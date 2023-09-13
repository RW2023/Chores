const fs = require('fs');
const path = require('path');

const createDirectory = (dirPath) => {
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath);
    }
};

const createFile = (filePath, content = '') => {
    fs.writeFileSync(filePath, content);
};

// Create src directory and sub-directories
createDirectory('./src');
createDirectory('./src/assets');
createDirectory('./src/assets/images');
createDirectory('./src/components');
createDirectory('./src/contexts');
createDirectory('./src/routes');
createDirectory('./src/utils');

// Create common files
createFile('./src/index.jsx', "import React from 'react';\\nimport ReactDOM from 'react-dom';\\nimport App from './App';\\n\\nReactDOM.render(<App />, document.getElementById('root'));");
createFile('./src/App.jsx', "import React from 'react';\\n\\nconst App = () => {\\n  return <h1>Hello, world!</h1>;\\n};\\n\\nexport default App;");
createFile('./src/contexts/UserContext.jsx', '');
createFile('./src/utils/api.js', '');
createFile('./src/routes/Home.jsx', "import React from 'react';\\n\\nconst Home = () => {\\n  return <h1>Home</h1>;\\n};\\n\\nexport default Home;");
createFile('./src/routes/Login.jsx', "import React from 'react';\\n\\nconst Login = () => {\\n  return <h1>Login</h1>;\\n};\\n\\nexport default Login;");
createFile('./src/routes/Register.jsx', "import React from 'react';\\n\\nconst Register = () => {\\n  return <h1>Register</h1>;\\n};\\n\\nexport default Register;");

// Create .env file
createFile('./.env', 'REACT_APP_BACKEND_URL=http://localhost:5000');
