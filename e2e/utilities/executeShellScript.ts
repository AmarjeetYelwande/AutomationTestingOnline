import childProcess from 'child_process';

export async function executeShellScript(cmd_to_execute: string) {
    return new Promise(function (resolve, reject) {
        childProcess.exec(cmd_to_execute, (err, stdout, stderr) => {
            if (err) {
                reject(err);
            } else {
                resolve({ stdout, stderr });
            }
        });
    });
}
