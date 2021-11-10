// var getRepoInfo = require('git-repo-info');
 
// var info = getRepoInfo();
 
// console.log(info)

// const exec = require('child_rocess').exec;

const command = 'git fetch && git show-ref' ; 

const { exec } = require('child_process');

exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }

    // fetch and get hash data 
    const data = stdout.split('\n')
                    .filter(item=>item.length > 0 )
                    .map(item => item.split(' ')[0]);

    console.log(data)
    if(data[0] != data[1]){
        console.log('need update')
    }
    else{
        console.log('uptodate ')
    }
    // console.log(`stdout: ${stdout}`);
    // console.error(`stderr: ${stderr}`);


  });
  