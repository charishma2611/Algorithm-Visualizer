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

// Asynchronous SelectionSort function
async function SelectionSort(delay = 600) {
  let bars = document.querySelectorAll(".bar");

  for (let i = 0; i < bars.length - 1; i++) {
      // Find the minimum element in the unsorted part
      let minIdx = i;

      // Highlight the current minimum element
      bars[minIdx].style.backgroundColor = "#ffd32a";

      // Loop to find the minimum element
      for (let j = i + 1; j < bars.length; j++) {
          // Highlight the bars being compared
          bars[j].style.backgroundColor = "#FF4949"; // Red for comparison
          bars[minIdx].style.backgroundColor = "#FF4949"; // Red for comparison
          
          // Play comparison sound
          playSound("compareSound");

          // Pause for visual effect
          await new Promise(resolve => setTimeout(resolve, delay));

          // Compare the heights
          let value1 = parseInt(bars[minIdx].childNodes[0].innerText);
          let value2 = parseInt(bars[j].childNodes[0].innerText);

          // Find the minimum value
          if (value2 < value1) {
              minIdx = j;
          }

          // Reset the color after comparison
          bars[j].style.backgroundColor = "#6b5b95"; // Default color for bars
          bars[minIdx].style.backgroundColor = "#6b5b95"; // Default color for bars
      }

      // Swap the minimum element with the first unsorted element
      if (minIdx !== i) {
          // Play swap sound
          playSound("swapSound");

          // Swap the elements
          await swap(bars[i], bars[minIdx]);

          // Update the bars after the swap
          bars = document.querySelectorAll(".bar");
      }

      // Mark the current element as sorted
      bars[i].style.backgroundColor = "#13CE66"; // Green for sorted
  }

  // Stop the comparison and swap sounds after sorting is done
  stopSound("compareSound");
  stopSound("swapSound");

  enable();
}

// Swap function to swap two bars
async function swap(bar1, bar2) {
  const tempHeight = bar1.style.height;
  const tempValue = bar1.childNodes[0].innerText;

  // Swap heights
  bar1.style.height = bar2.style.height;
  bar2.style.height = tempHeight;

  // Swap values
  bar1.childNodes[0].innerText = bar2.childNodes[0].innerText;
  bar2.childNodes[0].innerText = tempValue;

  // Pause to visualize the swap
  await new Promise(resolve => setTimeout(resolve, 600));
}

// ---charishma kc 