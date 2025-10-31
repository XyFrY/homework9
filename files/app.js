let hasDownloadedResume = false;

$("resumeBtn").click(function() {
    if (hasDownloadedResume == false){
        alert('Your resume is downloaded successfully!')
    }
    hasDownloadedResume = true;
});


// This should add the skills the list dynamically
$(document).ready(function() {
    let skills = [
        "Some Proficiency in Word and Excel",
        "Basic Skillsin C and Python",
        "Proficiency in a Walkie Stacker",
        "Some Proficiency with power tools",
        "Proficiency in Customer Service",
        "Proficiency in Algebraic Math"
    ];

    function addSkills() {
        const list = $("#skillsList");
        list.empty();

        skills.forEach((skill, index) => {
            const item = $(`
                <li class="list-group-item text-md-center">
                    <span class="skill-name">${skill}</span>
                    <div>
                        <button class="btn btn-sm btn-primary delete-btn">Delete</button> 
                    </div>
                </li>
            `);
            list.append(item.hide().fadeIn(300));
        });
    }

    function addSkill() {
        const newSkill = $("#skillInput").val().trim();

        if (newSkill == ""){
            alert("No Skills Added");
            return;
        }

        if (skills.includes(newSkill)) {
            alert("Skill Already Exists");
            return;
        }

        skills.push(newSkill);
        $("#skillInput").val("");
        addSkills();
    };

    $("#skillsList").on("click", ".delete-btn", function() {
        const $li = $(this).closest("li");
        const index = $li.index();

        $li.slideUp(300, function() {
            skills.splice(index, 1);
            addSkills();
        });
    })

    // This is for the Enter, where it xhould if pressed in the skills then it should be added to the array with jQuery
    // This should also clear the input if the user press esc
    $("#skillInput").keydown(function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            addSkill();
        }

        if (event.key === "Escape"){
            $("#skillInput").val("");
        }
    });
});






function showGreeting(name){
    return "Hello my name is " + name + ". Welcome to my portfolio.";
}

const name = "Yale";

function daysUntilDeadLine(endDate){
    let currentDate = new Date();
    let end = new Date(endDate);
    let timeDifference = end - currentDate;
    let daysDifference = Math.ceil(timeDifference / (1000 * 3600 * 24));

    return daysDifference;
}
let endDate = '2025-12-03';
