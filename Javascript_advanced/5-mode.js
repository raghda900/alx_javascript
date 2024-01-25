function changeMode(size, weight, transform, background, color){
    let style = {
        'font-size' : size + 'px', 
        'font-weight' : weight, 
        'text-transform' : transform, 
        'background-color' : background,  
        'color' : color
    }
    return function(){
        const html = document.querySelectorAll('*')
        for(let i=0; i< html.length; i++)
        {
            html[i].style.fontSize = style['font-size']
            html[i].style.fontWeight = style['font-weight']
            html[i].style.textTransform = style['text-transform']
            html[i].style.backgroundColor = style["background-color"]
            html[i].style.color = style['color']
        }

    };
};


function main(){
    const spooky = changeMode(9, "bold", "uppercase", "pink", "green");
    const darkMode = changeMode(12, "bold", "capitalize", "black", "white");
    const screamMode = changeMode(12, "normal", "lowercase", "white", "black");

    const para = document.createElement("p");
    para.innerText = "Welcome Holberton!";
    document.body.appendChild(para);

    const spbutton = document.createElement("button");
    spbutton.innerText = "Spooky";
    document.body.appendChild(spbutton);

    
    const dmbutton = document.createElement("button");
    dmbutton.innerText = "Dark mode";
    document.body.appendChild(dmbutton);

    
    const scmbutton = document.createElement("button");
    scmbutton.innerText = "Scream mode";
    document.body.appendChild(scmbutton);

    spbutton.addEventListener("click", spooky);
    dmbutton.addEventListener("click", darkMode);
    scmbutton.addEventListener("click", screamMode);


}

main();