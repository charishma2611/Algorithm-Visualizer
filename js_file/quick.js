const button4 = document.getElementById("Button4");

button4.addEventListener("click", quickSortCall.bind(null));

function quickSortCall() {
    num = Number(document.getElementById("arr_sz").value);
    quickSort(0, num - 1);
}

// Function to play the sound
function playSound(soundId) {
    const sound = document.getElementById(soundId);
    if (sound) {
        sound.currentTime = 0; // Reset sound to start
        sound.play();
    }
}

// Function to stop the sound
function stopSound(soundId) {
    const sound = document.getElementById(soundId);
    if (sound) {
        sound.pause();
        sound.currentTime = 0; // Reset sound to the beginning
    }
}

async function partition(start, end) {
    let bars = document.querySelectorAll(".bar");
    let i = start + 1;
    let piv = Number(bars[start].childNodes[0].innerHTML); // Make the first element the pivot
    bars[start].style.backgroundColor = "#6b5b95"; // Initial color for pivot

    for (let j = start + 1; j <= end; j++) {
        // Rearrange the array by putting elements smaller than the pivot on one side
        // and elements greater than the pivot on the other side

        // To pause the execution of code for 100 milliseconds
        await new Promise((resolve) =>
            setTimeout(() => {
                resolve();
            }, 100)
        );

        console.log("j=" + j + " bars[j]= " + Number(bars[j].childNodes[0].innerHTML) + " pivot= " + piv);

        if (Number(bars[j].childNodes[0].innerHTML) < piv) {
            if (j != i) {
                // Play the swap sound before swapping
                playSound("swapSound");

                // Swap bars[j] and bars[i]
                bars[i].style.backgroundColor = "#ffd32a"; // Highlight the bar to be swapped
                bars[j].style.backgroundColor = "#ff4242"; // Highlight the other bar being compared

                // Pause to visualize the swap
                await new Promise((resolve) =>
                    setTimeout(() => {
                        resolve();
                    }, 200)
                );

                // Swap heights and values
                let temp1 = bars[j].style.height;
                let temp2 = bars[j].childNodes[0].innerText;
                bars[j].style.height = bars[i].style.height;
                bars[i].style.height = temp1;
                bars[j].childNodes[0].innerText = bars[i].childNodes[0].innerText;
                bars[i].childNodes[0].innerText = temp2;

                // Pause to visualize the swap completion
                await new Promise((resolve) =>
                    setTimeout(() => {
                        resolve();
                    }, 200)
                );

                // Change the color back to default
                bars[i].style.backgroundColor = "rgb(0, 183, 255)";
                bars[j].style.backgroundColor = "rgb(0, 183, 255)";
            }

            // Change color to indicate bars[j] is part of the sorted region
            bars[j].style.backgroundColor = "rgb(0, 183, 255)"; 
            i += 1;
        }
    }

    // To pause the execution of code for 200 milliseconds before placing the pivot
    await new Promise((resolve) =>
        setTimeout(() => {
            resolve();
        }, 200)
    );

    // Swap the pivot element into its correct position
    let temp1 = bars[start].style.height;
    let temp2 = bars[start].childNodes[0].innerText;
    bars[start].style.height = bars[i - 1].style.height;
    bars[i - 1].style.height = temp1;
    bars[start].childNodes[0].innerText = bars[i - 1].childNodes[0].innerText;
    bars[i - 1].childNodes[0].innerText = temp2;

    // To pause the execution of code for 100 milliseconds
    await new Promise((resolve) =>
        setTimeout(() => {
            resolve();
        }, 100)
    );

    // Return the position of the pivot
    return i - 1;
}

async function quickSort(low, high) {
    let bars = document.querySelectorAll(".bar");

    if (low < high) {
        let j = await partition(low, high);
        
        // Recursively sort the left and right parts
        if (low < j - 1) {
            // To pause the execution of code for 100 milliseconds before continuing
            await new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                }, 100)
            );
            await quickSort(low, j - 1);

            // Highlight sorted section
            for (let i = low; i <= j; i++) {
                bars[i].style.backgroundColor = "#13CE66"; // Green for sorted
            }

            // To pause the execution of code for 100 milliseconds before sorting the right part
            await new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                }, 100)
            );
        }

        await quickSort(j + 1, high);

        // Highlight sorted section for the right side
        for (let i = j + 1; i <= high; i++) {
            bars[i].style.backgroundColor = "#13CE66"; // Green for sorted
        }
    }

    // Stop the sound after sorting is done
    stopSound("compareSound");
    stopSound("swapSound");

    enable();
}

//---charishma k c