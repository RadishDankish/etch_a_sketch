for(let i=0;i<16;i++)
{
    let new_div = document.createElement("div");

    new_div.classList.add('division');

    for(let j=0;j<16;j++)
    {
        let temp_div=document.createElement("div");
        temp_div.style.width = '20px';
        temp_div.style.height='20px';
        temp_div.style.border='1px solid black';
        temp_div.style.flexBasis='1';




        new_div.appendChild(temp_div);
    }

    let main_div= document.querySelector(".maindiv");


    main_div.appendChild(new_div);
}

let big = document.querySelectorAll(".division");

for(const iter of big)
{
    iter.style.display='flex';
}







