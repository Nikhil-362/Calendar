const currentDate = document.querySelector(".date");
const displayMonth = document.querySelector("p");

const span_Btn = document.querySelectorAll('#icon span');

// btn.forEach(data => console.log(data));


const current = new Date()


cYear = current.getFullYear();
cMonth = current.getMonth()
cDay = current.getDate()

const render =()=>{

    const months = [
        "January", 
        "February", 
        "March", 
        "April", 
        "May", 
        "June", 
        "July", 
        "August", 
        "September", 
        "October", 
        "November", 
        "December"
    ];
    
    displayMonth.innerHTML = `${months[cMonth]} ${cYear}`   
    
    const first_Day = new Date(cYear,cMonth,1).getDay();   // first Day in number
    let lastDateOfPrevMonth = new Date(cYear,cMonth,0).getDate(); //last date of previous Month
    
    const lastDayof_PresentMonth = new Date(cYear,cMonth+1,0).getDay();
    const nextMonth_FirstDay = new Date(cYear,cMonth+1,1).getDate();

    const Month_Last_Date = new Date(cYear, cMonth+1,0).getDate();
    console.log(Month_Last_Date);
    
    let mainCont="";
    
    for (let i = first_Day; i > 0; i--) {
            console.log(`${lastDateOfPrevMonth - i + 1}`);
            mainCont += `<li id="inactive">${lastDateOfPrevMonth - i + 1}</li>`
    }



    for (let i = '1'; i <= Month_Last_Date; i++) {

        let aToday = i === current.getDate() && cYear === current.getFullYear() && cMonth === current.getMonth()?
         "active" : ""

        mainCont += `<li id="${aToday}">${i}</li>`
        
    }

    

    console.log(lastDayof_PresentMonth);
    console.log(nextMonth_FirstDay);

    for (let i = lastDayof_PresentMonth; i < 6; i++) {
        console.log(`${i- lastDayof_PresentMonth + 1}`);

        mainCont += `<li id="inactive">${i- lastDayof_PresentMonth+ 1}</li>`
        
    }
    
    
    console.log(displayMonth);
    
    currentDate.innerHTML = mainCont;
    
}


render()


span_Btn.forEach(span => {
    span.addEventListener("click", (e) => {
        console.log(e.target.id);
        // let check = e.target.id;
        // if(check == "next"){
        //     cMonth = cMonth+1
        //     render()
        // }

        cMonth = e.target.id == 'next'? cMonth+1: cMonth-1;
        console.log(cMonth);
        render()
        
    });
});


