 const changeButton = document.getElementById("change_button");
    const resetButton = document.getElementById("reset_button");
    const blockInput = document.getElementById("block_id");
    const colorInput = document.getElementById("colour_id");
    const gridItems = document.querySelectorAll(".grid-item");

    // Function to reset all boxes
    function resetGrid() {
      gridItems.forEach(item => {
        item.style.backgroundColor = "transparent";
      });
    }

    // Change color button click
    changeButton.addEventListener("click", () => {
      const blockId = blockInput.value;
      const color = colorInput.value;

      resetGrid(); // first reset all

      const block = document.getElementById(blockId);
      if (block && color) {
        block.style.backgroundColor = color;
      } else {
        alert("Please enter a valid block id (1-9) and a color.");
      }
    });

    // Reset button click
    resetButton.addEventListener("click", resetGrid);