let main_div= document.querySelector(".maindiv");


let input = document.createElement("button");
input.style.display='flex';
input.style.justifyContent='center';
input.style.alignItems='center';
input.textContent ="New Grid";
input.style.height='40px';
input.style.width='100px';
input.style.fontFamily="Times New Roman";
input.style.color='white';
input.style.fontSize='large';
input.style.backgroundColor='rgb(0,0,0,0.85)';
input.style.borderRadius='10px';
input.style.margin='0 auto';
input.style.marginBottom='20px';


main_div.appendChild(input);

let n = 16;

for(let i=0;i<n;i++)
{
    let new_div = document.createElement("div");
    new_div.classList.add('division');
    new_div.style.aspectRatio='16/1';

    for(let j=0;j<n;j++)
    {
        let temp_div=document.createElement("div");
        temp_div.style.minHeight = '10px';
        temp_div.style.minWidth='10px';
        temp_div.style.border='1px solid black';
        temp_div.style.flex='1 1 auto';
        temp_div.style.aspectRatio='1';
        temp_div.classList.add('singular');

        new_div.appendChild(temp_div);
    }

    main_div.appendChild(new_div);
}

function rand_big()
{
    return Math.random()*255;
}

let big = document.querySelectorAll(".division");

for(const iter of big)
{
    iter.style.display='flex';
}

let small = document.querySelectorAll(".singular");

for(const i of small)
{

    i.addEventListener('mouseenter', ()=>
    {

        i.style.backgroundColor = 'rgba('+rand_big()+','+rand_big()+','+rand_big()+')';
    });

}

input.addEventListener('click', ()=>
    {

        let chota = document.querySelectorAll(".singular");

        for(const i of chota)
        {
            i.remove();
        }

        let bada = document.querySelectorAll(".division");

        for(const iter of bada)
        {
            iter.remove();
        }

        console.log("hello")


        let n = prompt("Enter a number:");
        while(n>100)
        {
            n = prompt("number cant exceed 100:");
        }

        for(let i=0;i<n;i++)
            {
                let new_div = document.createElement("div");
                new_div.style.aspectRatio=n;
            
                new_div.classList.add('division');
            
                for(let j=0;j<n;j++)
                {
                    let temp_div=document.createElement("div");
                    temp_div.style.minHeight = '10px';
                    temp_div.style.minWidth='10px';
                    temp_div.style.border='1px solid black';
                    temp_div.style.flex='1 1 auto';
            
                    temp_div.classList.add('singular');
            
            
            
                    new_div.appendChild(temp_div);
                }
            
            
            
            
                main_div.appendChild(new_div);
            }
            
            let big = document.querySelectorAll(".division");
            
            for(const iter of big)
            {
                iter.style.display='flex';
            }
            
            let small = document.querySelectorAll(".singular");

            let op = 0;
            
            for(const i of small)
            {
                i.addEventListener('mouseenter', ()=>
                {
                    i.style.backgroundColor = 'rgb('+rand_big()+','+rand_big()+','+rand_big()+','+(op+0.1)+')';
                });
            }
    }

);


