var data=["C++","Java","JavaScript"];

var items="";
for(var i=0;i<3;i++)
    {
        items += `<li>${data[i]}</li>`;
    }

    
    document.querySelector("ul").innerHTML=items;