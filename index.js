const {exec} = require('child_process');

// var getRepoInfo = require('git-repo-info');

// var info = getRepoInfo();

// console.log(info)

// const exec = require('child_rocess').exec;

// const command = 'git fetch && git show-ref';


// exec(command, (error, stdout, stderr) => {
//     if (error) {
//         console.error(`exec error: ${error}`);
//         return;
//     }

//     // fetch and get hash data 
//     const data = stdout.split('\n')
//         .filter(item => item.length > 0)
//         .map(item => item.split(' ')[0]);

//     console.log(data)
//     if (data[0] != data[1]) {
//         console.log('need update')
//     } else {
//         console.log('uptodate ')
//     }
//     // console.log(`stdout: ${stdout}`);
//     // console.error(`stderr: ${stderr}`);


// });



const update = ()=>{
    const command = 'git pull';
    exec(command, (error, stdout, stderr) => {
        if(stderr) console.error(`stderr: ${stderr}`);
        if(error) console.error(`exec error: ${error}`);

        if (error) return reject(error);
            // fetch and get hash data 
            const data = stdout.split('\n')
            .filter(item => item.length > 0)
            .map(item => item.split(' ')[0]);
            
            // console.log(data)
            if (data[0] != data[1]) {
                resolve(true);
            } else {
                resolve(false);
            }
    });// exec
}

const checkUpdate = async () => {
    return new Promise((resolve , reject)=>{
        const command = 'git fetch && git show-ref';
        exec(command, (error, stdout, stderr) => {
            if(stderr) console.error(`stderr: ${stderr}`);
            if(error) console.error(`exec error: ${error}`);

            if (error) return reject(error);
                // fetch and get hash data 
                const data = stdout.split('\n')
                .filter(item => item.length > 0)
                .map(item => item.split(' ')[0]);
                
                console.log(data)
                if (data[0] != data[1]) {
                    resolve(true);
                } else {
                    resolve(false);
                }
        });// exec        
    });// promis
};//checkUpdate


const _check = async()=>{
    var needUpdate = await checkUpdate() ;
    if(needUpdate){
        update();
        console.log('needUpdate' , needUpdate)
    }else{
        console.log('needUpdate' , needUpdate)
    }
}

_check()

