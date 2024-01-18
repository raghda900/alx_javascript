function repeat(x, theFunction)
{
    // console.log(theFunction)
    while(x>0)
    {
        theFunction();

        x--
    }    
    
}

module.exports.callMeMoby = repeat