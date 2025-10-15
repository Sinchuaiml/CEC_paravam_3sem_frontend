const setdatetime = () => {
    const now = new Date(); 
    const date= now.toLocaleDateString();
    const time = now.toLocaleTimeString({hourCycle: "h12"});
    console.log(time);
    document.getElementById("time").textContent = `time: ${time}`;
    document.getElementById("date").textContent = `Date: ${date}`;
};
setdatetime();

setInterval(setdatetime,1000);
