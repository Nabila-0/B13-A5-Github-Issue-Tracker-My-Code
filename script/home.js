let currentTab = 'all';

const activeTab = ["text-white", "bg-[#4A00FF]", "hover:bg-blue-600"];
const inactiveTab = ["text-[#64748B]", "bg-white", "border",
    "border-[#E4E4E7]"];


// getting  three sections by ID 

const allContainer = document.getElementById("all_container");
const openContainer = document.getElementById("open_container");
const closedContainer = document.getElementById("closed_container");


// function for Switching three Buttons 

function switchTab (tab) {
    
    const tabs = ["all", "open", "closed"];

    currentTab = tab;


    // for of loop for Removing & Adding inactive & active tab's style to the three buttons

    for (const t of tabs) {
        const tabName = document.getElementById(t + "_tab");

        if (t === tab) {
            tabName.classList.remove(...inactiveTab);
            tabName.classList.add(...activeTab);
        }
        else {
            tabName.classList.remove(...activeTab);
            tabName.classList.add(...inactiveTab);
        }
    }


    const sections = [allContainer, openContainer, closedContainer];


    // for of loop for adding hidden class initially to all the sections 

    for (const section of sections) {
        section.classList.add("hidden");
    }


    // if-else conditon for removing hidden class from all the sections by clicking the three buttons


    if (tab === "all") {
        allContainer.classList.remove("hidden");
    }

    else if (tab === "open") {
        openContainer.classList.remove("hidden");
    }

    else {
        closedContainer.classList.remove("hidden");
    }

    
}

switchTab(currentTab);


// getting  Card Count by ID 

const cardCount = document.getElementById("card_count");


