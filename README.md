# CodePen-CodeEditor
 A React-powered CodePen editor, designed for crafting front-end web experiences using HTML, CSS, and pure JavaScript, while adhering to industry best practices and standards.



 <h3>Prerequisites for the project:</h3>
 1. Code Editor (VSCode)
 2. Node (npm)
 3. React
 4. TypeScript
 5. EsLint
 6. NX
 7. MUI npm install @mui/material @mui/styled-engine-sc styled-components --f
 8. set npx nx serve code-pen --watch
 9. npm i codemirror@version5 --f



 <h3>Steps for project setup:</h3>

 1. Install a text editor, for creating the project. Recommended: VSCode
    
    Follow [VSCode_Setup](https://code.visualstudio.com/download)

 2. Intall npm (node-package manager), and setup environment variable to access it from VS-code.
    
    Follow [NPM_Setup](https://nodejs.org/en/learn/getting-started/how-to-install-nodejs) for npm setup.

 3. Follow eslint setup: [EsLint](https://github.com/chauhanaman2748/CodePen-CodeEditor#setup-eslint-in-the-project)

 4. To create a new Nx workspace: [Nx_Setup]()



 # Setup eslint in the project:
    
 1. Run the below command to install eslint.

        npm install eslint --save-dev

 2. Run the below command to setup eslint in the project.

        npx eslint --init

 3. Setup rules at your convinience or, replicate the rules as below:

    i.      How would you like to use ESLint? : `To check syntax, find problems, and enforce code style`

    ii.     What type of modules does your project use? : `JavaScript modules (import/export)`

    iii.    Which framework does your project use? : `React`

    iv.     Does your project use TypeScript? : `Yes`

    v.      Where does your code run? : `Browser`
    
    vi.     How would you like to define a style for your project? : `Answer the setup`
    
    vii.    What format do you want your config file to be in? : `JavaScript`
    
    viii.   What style of indentation do you use? : `Tabs`
    
    ix.     What quotes do you use for strings? : `Single`
    
    x.      What line endings do you use? : `Windows`
    
    xi.     Do you require semicolons? : `No`

 4. Press `Enter`, and this will install the EsLint in the document for react and typescript, and will help to follow industry standards in the project.


 # Setup Nx in the project:

 1. Use the below command to setup nx.

        npx create-nx-workspace my-app

 2. Setup rules at your convinience or, replicate the rules as below:

    i.      Which stack do you want to use? : `react`
    
    ii.     What framework would you like to use? : `none`
    
    iii.    Integrated monorepo, or standalone project?: `Integrated monorepo`

    iv.     Application name : `CodeEditor`
    
    v.     Which bundler would you like to use? : `Vite`
    
    vi.      Test runner to use for end to end (E2E) tests : `Cypress`
    
    vii.     Default stylesheet format : `CSS`
    
    viii.    Enable distributed caching to make your CI faster : `Yes`
