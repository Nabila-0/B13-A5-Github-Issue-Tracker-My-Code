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

    // updateStat();

}

switchTab(currentTab);


// --------------

// getting  Card Count by ID 

const cardCount = document.getElementById("card_count");


//----------------------------------


const loadAllIssues = () => {
    fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
        .then((res) => res.json())
        .then((json) => displayAllIssues(json.data));
};

const displayAllIssues = (allIssues) => {
    // console.log(allIssues);

    const allContainerDiv = document.getElementById("all_container_div");

    allContainerDiv.innerHTML = "";

    allIssues.forEach(issue => {
        console.log(issue);

        const issueCard = document.createElement("div");

        issueCard.innerHTML = `

            <div class="issue_card shadow-md p-4 border-t-4 rounded-md h-full
            ${issue.status === "open"
                ? 'border-[#00A96E]'
                : 'border-[#A855F7]'
            }">

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

                    <!-- two lebels div  -->

                    <div class="two_lebels flex gap-1 mt-3 mb-4">

                        <!-- Bug lebel  -->

                        <div class="text-[#EF4444] text-[12px] font-medium 
                        bg-[#FEECEC] rounded-[100px] border border-[#FECACA] px-2 
                        py-1.5 flex gap-0.5">

                            <span><i class="fa-solid fa-bug"></i></span>

                            <span>BUG</span>
                         </div>

                        <!-- Help wanted lebel  -->

                        <div class="text-[#D97706] text-[12px] font-medium 
                        bg-[#FFF8DB] rounded-[100px] border border-[#FDE68A] px-2 
                        py-1.5 flex gap-0.5">

                            <span><i class="fa-solid fa-life-ring"></i></span>

                                <span>HELP WANTED</span>
                                    </div>

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
                            Assignee:${issue.assignee}
                        </p>

                        <p>Updated:${new Date(issue.updatedAt).toLocaleDateString('en-US')}</p>

                    </div>

                            </div>

                        </div>
            `;


        allContainerDiv.append(issueCard);
    });


};

loadAllIssues();

