document.getElementById("fix-mobile-btn").addEventListener("click", function (event) {
    // event.preventDefault();
    alert("Board updated successfully");
    const dailyTask = getInnerTextById("daily-task");
    const totalTask = getInnerTextById("total-task");
    const fiestTitle = document.getElementById("title-1").innerText;
    const currentTime = new Date().toLocaleTimeString();
    
   
    if (dailyTask > 0) {
        const sum = dailyTask - 1;
        const totalSum = totalTask + 1;
        if (sum === 0) {
            alert("Congrates!!! You have completed all the current task");
        }

        setInnerText("daily-task", sum);
        setInnerText("total-task", totalSum);
    }

    const container = document.getElementById("new-peragraphs");

    const p = document.createElement("p");
    p.innerHTML = `
        <p class="bg-[#F4F7FF] text-#000000 rounded-lg p-3 mb-5 mx-7">
            You have Complete The Task ${fiestTitle} at ${currentTime}
        </p>
    `;

    container.appendChild(p);
    document.getElementById("fix-mobile-btn").disabled = true;
    document.getElementById("fix-mobile-btn").style.backgroundColor = "lightgray"
})