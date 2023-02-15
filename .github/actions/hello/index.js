const core=require('@actions/core');
const github=require('@actions/github');
const name=core.getInput('who-to-greet');
try {
    throw( new Error("some error message"));
    console.log("hello{}")
    const time = new Date();
    core.setOutput("time", time.toTimeString());
    console.log(JSON.stringify(github),null, '\t');
} catch(error){
    core.setFailed( error.message );
}
