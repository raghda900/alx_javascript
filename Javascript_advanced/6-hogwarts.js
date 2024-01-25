const studentHogwarts = function(){
    let privateScore = 0;
    let name = null
    function changeScoreBy(points){
        return privateScore += points;
    };
    function setName(newName){
        name = newName;
    };
    function rewardStudent(points){
        changeScoreBy(1);
    };
    function penalizeStudent(points){
        changeScoreBy(-1);
    };
    function getScore(points){
        return `${name}: ${privateScore}`;
    };
    
    return{setName,rewardStudent,penalizeStudent,getScore}
}

const harry = studentHogwarts();
harry.setName('Harry');
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
console.log(harry.getScore())

const draco = studentHogwarts();
draco.setName('Draco');
draco.rewardStudent();
draco.penalizeStudent();
draco.penalizeStudent();
draco.penalizeStudent();
console.log(draco.getScore())