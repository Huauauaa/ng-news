import { TargetOptions } from '@angular-builders/custom-webpack';
import * as fs from 'fs';
import * as path from 'path';

function readFile(filePath: string) {
    const buffer = fs.readFileSync(path.resolve(__dirname, filePath));
    return buffer.toString().trim();
}

export default (targetOptions: TargetOptions, indexHtml: string) => {
    const branch = readFile('./.git/HEAD').match(/[^\/]+(?!.*\/)/)?.[0];
    const commit = readFile(`./.git/refs/heads/${branch}`);
    return indexHtml.replace('GIT_VERSION', `${branch}:${commit}`);
};
