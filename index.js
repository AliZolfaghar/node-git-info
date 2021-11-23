// var getRepoInfo = require('git-repo-info');
 
// var info = getRepoInfo();
 
// console.log(info)


var exec = require('child_process').exec;

function run(command, callback){
    exec(command, function(error, stdout, stderr){ 
        console.log('#ERROR' , error)
        console.log('#ERROR' , stderr)
        callback(stdout); 
    });
};


const cmd = "git fetch && git show-ref";

run(cmd,(result)=>{
    // console.log('execute command : ' , cmd);
    var data = result.split('\n')
                .map(item => item.split(' ')[0])
                .filter(item => item.length > 0 )


    console.log(data)
})