
try {
    //throw( new Error("some error message"));
    const core=require('@actions/core');
    const github=require('@actions/github');
    const name=core.getInput('who-to-greet');
    core.debug('Debug message: ');
    core.warning('Debug message: ');
    core.error('Error message: ');
    core.setSecret(name) ;
    console.log(`hello ${name}`)
    const time = new Date();
    core.setOutput("time", time.toTimeString());
    console.log(JSON.stringify(github),null, '\t');
} catch(error){
    core.setFailed( error.message );
}
