//  A.I. Disclaimer: All work for this assignment was completed by myself and entirely without the use of artificial intelligence tools such as ChatGPT, MS Copilot, other LLMs, etc.

//  cashRegister Object 
let cashRegister = {
    total: 0,         // Stores total price 
    itemCount: 0,     // Stores item count

    // Add item cost to total 
    add: function(itemCost) {
        this.total += itemCost;
    },

    // Reset total and item count to 0
    reset: function() {
        this.total = 0;
        this.itemCount = 0;
    }
};

//  Scan Function prompts user for item cost and adds to total 
function scan() {
    let itemCountInput = document.getElementById("itemCount").value;
    cashRegister.itemCount = parseInt(itemCountInput);
    
    let text = "<ul>"; // Start unorder list

    for (let i = 0; i < cashRegister.itemCount; i++) {
        let itemCost = parseFloat(prompt(`Enter cost for item ${i + 1}:`));

            cashRegister.add(itemCost);
            text += `<li>Item ${i + 1}: $${itemCost}</li>`;
    }

    text += "</ul>"; // End list 
    document.getElementById("scannedItems").innerHTML = text; // Display list 
}

//  PrintTotal Function displays total
function printTotal() {
    document.getElementById("totalDisplay").innerHTML = cashRegister.total;
}

//Reset All Function sets all values to empty
function resetAll() {
    document.getElementById("itemCount").value = "";  
    document.getElementById("scannedItems").innerHTML = ""; 
    document.getElementById("totalDisplay").textContent = "$0";
    cashRegister.reset();
}

//  Event Listeners for all buttons
document.getElementById("scan").addEventListener("click", scan);
document.getElementById("printTotal").addEventListener("click", printTotal);
document.getElementById("resetAll").addEventListener("click", resetAll);
