const path = require('path');
const fs = require('fs');

// Make sure any symlinks in the project folder are resolved:
// https://github.com/facebook/create-react-app/issues/637
const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

const moduleFileExtensions = [
    'web.mjs',
    'mjs',
    'web.js',
    'js',
    'web.ts',
    'ts',
    'web.tsx',
    'tsx',
    'json',
    'web.jsx',
    'jsx'
];

// Resolve file paths in the same order as webpack
const resolveModule = (resolveFn, filePath) => {
    const extension = moduleFileExtensions.find(extension =>
        fs.existsSync(resolveFn(`${filePath}.${extension}`))
    );

    if (extension) {
        return resolveFn(`${filePath}.${extension}`);
    }

    return resolveFn(`${filePath}.js`);
};

module.exports = {
    appPath: resolveApp('.'),
    appDist: resolveApp('dist'),
    appPublic: resolveApp('public'),
    appSrc: resolveApp('src'),
    appIndexJs: resolveModule(resolveApp, 'src/index'),
    appAssets: resolveApp('src/assets'),
    appComponents: resolveApp('src/components'),
    appContainers: resolveApp('src/containers'),
    appStore: resolveApp('src/store'),
    appStyles: resolveApp('src/styles'),
    appUtils: resolveApp('src/utils'),

    dotenv: resolveApp('.env'),
    appTsConfig: resolveApp('tsconfig.json'),
    appJsConfig: resolveApp('jsconfig.json'),

    appNodeModules: resolveApp('node_modules'),
    appPackageJson: resolveApp('package.json')
};
