function calculateLove(){
    const name1 = document.getElementById("name1").value.trim();
    const name2 = document.getElementById("name2").value.trim();

    if (name1 === "" || name2 === "") {
        alert("Please enter both names.");
    } else {
        const lovePercentage = Math.floor(Math.random() * 101);

        const result = document.getElementById("result");

        // Correct string interpolation syntax
        result.innerHTML = `${name1} and ${name2}'s love percentage: ${lovePercentage}%`;

        // Update the conditions for love percentage
        if (lovePercentage < 30) {
            result.innerHTML += "<br> Not a great match. Keep looking!";
        } else if (lovePercentage < 70) {
            result.innerHTML += "<br> There is potential. Give it a try!";
        } else {
            result.innerHTML += "<br> Great match! Love is in the air!";
        }
    }
}
