function updateClock() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    
    let ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    
    hours = String(hours).padStart(2, '0');
    minutes = String(minutes).padStart(2, '0');
    seconds = String(seconds).padStart(2, '0');
    
    let timeString = hours + ':' + minutes + ':' + seconds + ' ' + ampm;

    let day = now.getDate();                    
    let month = now.getMonth() + 1;             
    let year = now.getFullYear();              

    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let dayName = days[now.getDay()];          

    let dateString = dayName + ', ' + day + ' ' + getMonthName(month) + ' ' + year;

    
    document.getElementById('time').textContent = timeString;
    document.getElementById('date').textContent = dateString;
}

function getMonthName(month) {
    let months = ['January' , 'February' , 'March' , 'April' , 'May' , 'June' , 'July' , 'August',
                   'September' , 'October' , 'November', 'December' ];
    return months[month - 1];
}

updateClock();
setInterval(updateClock, 1000);
