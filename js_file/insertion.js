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

// Asynchronous InsertionSort function
async function InsertionSort(delay = 600) {
    let bars = document.querySelectorAll(".bar");
    
    // Provide lightgreen colour to 0th bar
    bars[0].style.backgroundColor = "#13CE66";
    for (var i = 1; i < bars.length; i += 1) {
    
        // Assign i-1 to j
        var j = i - 1;
    
        // To store the integer value of ith bar to key
        var key = parseInt(bars[i].childNodes[0].innerHTML);
    
        // To store the ith bar height to height
        var height = bars[i].style.height;
        
        // Provide darkblue color to the ith bar
        bars[i].style.backgroundColor = "#ffd32a";
        
        // Play comparison sound when an element is selected for insertion
        playSound("compareSound");
        
        // To pause the execution of code for 600 milliseconds
        await new Promise((resolve) =>
        setTimeout(() => {
            resolve();
        }, 600));
    
        // For placing selected element at its correct position
        while (j >= 0 && parseInt(bars[j].childNodes[0].innerHTML) > key) {
            
            // Provide darkblue color to the jth bar
            bars[j].style.backgroundColor = "#ff4242";
            
            // Play swap sound when bars are swapped
            playSound("swapSound");
            
            // For placing jth element over (j+1)th element
            bars[j + 1].style.height = bars[j].style.height;
            bars[j + 1].childNodes[0].innerText =
            bars[j].childNodes[0].innerText;
    
            // Assign j-1 to j
            j = j - 1;
    
            // To pause the execution of code for 600 milliseconds
            await new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                }, 600)
            );
            
            // Provide lightgreen color to the sorted part
            for(var k=i;k>=0;k--){
                bars[k].style.backgroundColor = "#13CE66";
            }
        }
    
        // Placing the selected element to its correct position
        bars[j + 1].style.height = height;
        bars[j + 1].childNodes[0].innerHTML = key;
        
        // To pause the execution of code for 600 milliseconds
        await new Promise((resolve) =>
        setTimeout(() => {
            resolve();
        }, 600)
        );
        
        // Provide light green color to the ith bar
        bars[i].style.backgroundColor = "#13CE66";
    }
    
    // Stop the comparison and swap sound after sorting is done
    stopSound("compareSound");
    stopSound("swapSound");
    
    enable();
}

// --- charishma k c