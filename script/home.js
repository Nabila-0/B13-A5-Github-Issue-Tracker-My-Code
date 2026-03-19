let currentTab = 'all';

const activeTab = ["text-white", "bg-[#4A00FF]", "hover:bg-blue-600"];
const inactiveTab = ["text-[#64748B]", "bg-white", "border",
    "border-[#E4E4E7]"];


// getting  three sections by ID 

const allContainer = document.getElementById("all_container");
const openContainer = document.getElementById("open_container");
const closedContainer = document.getElementById("closed_container");


// function for Switching three Buttons 

function switchTab(tab) {

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

    updateCardCount(tab);

}

switchTab(currentTab);



const loadIssues = () => {
    fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
        .then((res) => res.json())
        .then((json) => {

            displayIssues(json.data);

        });
};


const loadIssueCardDetails = async (id) => {

    const url = `https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`;

    console.log(url);

    const res = await fetch(url);
    const details = await res.json();

    displayIssueCardDetails(details.data);
};


// a function for getting elements from the labels key

const elementsOfAnArray = (array) => {

    // getting elements one by one from the array named labels 

    const arrayElements = array.map((element) => 
        
        
                        `<span class="text-[#D97706] text-[11px] font-medium bg-[#FFF8DB] rounded-[100px] border border-[#FDE68A] px-1 
                        py-1 ">${element.toUpperCase()}</span>
                        `);

    return arrayElements.join(" ");


}



// function for displaying issue card's details modal by clicking a card

const displayIssueCardDetails = (issue) => {

    console.log(issue);


    const issueCardDetailsContainer = document.getElementById("issue_card_details_container");

    issueCardDetailsContainer.innerHTML = `
    
         <div class="upper">

                    <h1 class="text-[24px] text-[#1F2937] font-bold">${issue.title}</h1>

                    <div class="flex items-center gap-2 mt-2">

                        <div>

                        ${issue.status === "open"
            ? `<p class="text-[12px] text-white bg-[#00A96E] font-medium rounded-[100px] px-2 py-1.5"> Opened </p>`

            : `<p class="text-[12px] text-white bg-[#A855F7] font-medium rounded-[100px] px-2 py-1.5"> Closed </p>`
        }

                        </div>
                        

                        <span class="text-[#64748B] text-[4px]"><i class="fa-solid fa-circle"></i></span>

                        <p class="text-[12px] text-[#64748B] font-normal">Opened by 
                        <span class="font-medium">${issue.author}</span></p>

                        <span class="text-[#64748B] text-[4px]"><i class="fa-solid fa-circle"></i></span>

                        <p class="text-[12px] text-[#64748B] font-normal">${new Date(issue.createdAt).toLocaleDateString('en-US')}</p>

                    </div>

                </div>


                <div class="middle">

                    <!-- lebels div  -->

                    <div class="lebels_div flex gap-1 my-6">

                        
                        <div> ${elementsOfAnArray(issue.labels)}
                        </div>

                    </div>
                    

                    <p class="text-base text-[#64748B] font-normal">
                    ${issue.description}</p>

                </div>


                <div class="lower bg-[#F8FAFC] flex items-center 
                gap-32 p-4 rounded-lg my-6">

                    <div class="lower_left">

                        <p class="text-[#64748B] text-base font-normal">Assignee:</p>

                        <h3 class="text-[#1F2937] text-base font-semibold mt-1">${issue.assignee
            ? issue.assignee
            : "Unassigned"
        }</h3>
                    </div>


                    <div class="lower_right">

                        <p class="text-[#64748B] text-base font-normal">Priority:</p>

                        <p class="text-white text-[12px] font-medium bg-[#EF4444] rounded-[100px] py-1.5 px-[15.5px] mt-1">
                        ${issue.priority.toUpperCase()}</p>


                    </div>

                </div>
    `;

    document.getElementById("issue_card_modal").showModal();

};



// function for displayinng issue cards in all, open and closed section

const displayIssues = (issues) => {


    const allContainerDiv = document.getElementById("all_container_div");

    allContainerDiv.innerHTML = "";


    const openContainerDiv = document.getElementById("open_container_div");

    openContainerDiv.innerHTML = "";


    const closedContainerDiv = document.getElementById("closed_container_div");

    closedContainerDiv.innerHTML = "";



    // for Each loop to get issue one by one 

    issues.forEach(issue => {

        // card html 

        let cardHTML = `

            <div class="issue_card shadow-md p-4 border-t-4 rounded-md h-full
            ${issue.status === "open"
                ? 'border-[#00A96E]'
                : 'border-[#A855F7]'
            }"
            onclick="loadIssueCardDetails (${issue.id})">

                <div class="upper flex justify-between">

                    <div class="upper_left">


                        ${issue.status === "open"

                ? `<div class="bg-[#CBFADB] w-6 h-6 rounded-full    flex justify-center items-center">

                    <div class="border-2 border-[#00A96E] border-dashed rounded-full w-4 h-4">
                    </div>
                </div>`

                : `<div class="bg-[#F0E2FF] w-6 h-6 rounded-full relative">

                    <div class="text-[#A855F7] rounded-full w-4 h-4 
                    absolute left-0.5">
                        <i class="fa-regular fa-circle-check"></i>
                    </div>
                </div>`
            }

                </div>

                <div class="upper_right">
                    <span class="text-[#EF4444] text-[12px] font-medium bg-[#FEECEC] py-1.5 px-[25.5px] rounded-[100px]">
                    ${issue.priority.toUpperCase()}
                    </span>
                                </div>
                            </div>


                            
                <div class="middle">

                    <h2 class="text-[#1F2937] text-[14px] font-semibold mt-3 mb-2">
                        ${issue.title}</h2>

                    <p class="text-[#64748B] text-[12px] font-normal">
                        ${issue.description}</p>

                    <!--lebels div  -->

                    <div class="lebels_div mt-3 mb-4">


                        
                        <div> ${elementsOfAnArray(issue.labels)}
                        

                    </div>
                           

                        
                                
                    </div>



                <div class="lower">

                    <hr class="border border-[#E4E4E7] -mx-4">

                    <div class="author_and_createdAt 
                    text-[#64748B] text-[12px] font-normal flex justify-between mt-4 mb-2">

                        <p>
                            #${issue.id} by ${issue.author}</p>

                        <p>${new Date(issue.createdAt).toLocaleDateString('en-US')}</p>

                    </div>

                    <div class="assignee_and_updatedAt 
                    text-[#64748B] text-[12px] font-normal flex justify-between">

                        <p>
                            Assignee:${issue.assignee
                ? issue.assignee : "Unassigned"}
                        </p>

                        <p>Updated:${new Date(issue.updatedAt).toLocaleDateString('en-US')}</p>

                    </div>

                            </div>

                        </div>
            `;

        // display issues in all section

        const allIssueCard = document.createElement("div");

        allIssueCard.innerHTML = cardHTML;

        allContainerDiv.append(allIssueCard);



        // display issues in open section

        if (issue.status === "open") {

            const openIssueCard = document.createElement("div");

            openIssueCard.innerHTML = cardHTML;

            openContainerDiv.append(openIssueCard);
        }



        // display issues in closed section

        if (issue.status === "closed") {

            const closedIssueCard = document.createElement("div");

            closedIssueCard.innerHTML = cardHTML;

            closedContainerDiv.append(closedIssueCard);
        }
    });


    updateCardCount(currentTab);
};

loadIssues();






// function for updating statistics 

function updateCardCount(tab) {


    // getting  Card Count by ID 

    const cardCount = document.getElementById("card_count");

    const allContDiv = document.getElementById("all_container_div");
    const openContDiv = document.getElementById("open_container_div");
    const closedContDiv = document.getElementById("closed_container_div");


    if (tab === "all") {
        cardCount.innerText = allContDiv.children.length;
    }

    else if (tab === "open") {
        cardCount.innerText = openContDiv.children.length;
    }

    else if (tab === "closed") {
        cardCount.innerText = closedContDiv.children.length;
    }

}



// Implementing Search button 

document.getElementById("search_btn")
    .addEventListener("click", () => {

        const input = document.getElementById("search_input");
        const searchValue = input.value.trim().toLowerCase();



        fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=${searchValue}`)
            .then(res => res.json())
            .then(json => {

                const searchedIssueCards = json.data;


                const filterIssueCards = searchedIssueCards.filter((issueCard) =>
                    issueCard.title.toLowerCase().includes(searchValue));


                displayIssues(filterIssueCards);

            });

    });


