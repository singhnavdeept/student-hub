document.addEventListener("DOMContentLoaded", function() {
    var importantLinksData = [
        { title: "LifeHacker.co.uk", url: "https://example.com/LifeHacker.co.uk" },
        { title: " Coursera.org", url: "https://example.com/Coursera.org" },
        { title: " WebMD.com", url: "https://example.com/WebMD.com" },
        { title: "  TheBookPond.com", url: "https://example.com/TheBookPond.com" },
        { title: "  MentalFloss.com", url: "https://example.com/MentalFloss.com" },
        { title: "  The Ultimate Health Food Guide", url: "https://example.com/The Ultimate Health Food Guide" }
    ];

    var happeningsContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus rutrum, mi sit amet aliquam rhoncus, ex ipsum venenatis risus.";

    var feeContent = "Please find the fee details for the current quarter below:<br> Tuition Fee: $1000<br> Books & Supplies: $200";

    var eventsData = [
        { title: "Annual Company Retreat", date: "April 15, 2024", location: "Beach Resort" },
        { title: "Monthly Team Building Event", date: "April 25, 2024", location: "Company Office" }
    ];

    var messagesData = [
        { sender: "John Doe", subject: "Regarding Meeting", date: "March 18, 2024", content: "Hi, can we schedule a meeting to discuss the upcoming project?" },
        { sender: "Jane Smith", subject: "Project Update", date: "March 20, 2024", content: "Just wanted to inform you that the project deadline has been extended by a week." }
    ];

    var announcementsData = [
        { title: "New Policy Implementation", date: "March 15, 2024", content: "We are introducing a new telecommuting policy effective next month. Please review the details on the HR portal." },
        { title: "Employee Recognition Awards", date: "March 22, 2024", content: "Nominations for the Employee Recognition Awards are now open. Nominate your colleagues for their outstanding contributions." }
    ];
//above section is  for
    // Function to populate important links
    function populateLinks() {
        var linksList = document.getElementById("linksList");
        importantLinksData.forEach(function(link) {
            var listItem = document.createElement("li");
            var anchor = document.createElement("a");
            anchor.textContent = link.title;
            anchor.href = link.url;
            anchor.target = "_blank";
            listItem.appendChild(anchor);
            linksList.appendChild(listItem);
        });
    }

    
    function populateEvents() {
        var eventsList = document.getElementById("eventsList");
        eventsData.forEach(function(event) {
            var listItem = document.createElement("li");
            listItem.innerHTML = "<strong>" + event.title + "</strong><br>Date: " + event.date + "<br>Location: " + event.location;
            eventsList.appendChild(listItem);
        });
    }

    // Function to populate messages
    function populateMessages() {
        var messagesList = document.getElementById("messagesList");
        messagesData.forEach(function(message) {
            var listItem = document.createElement("li");
            listItem.innerHTML = "<strong>From: " + message.sender + "</strong><br>Subject: " + message.subject + "<br>Date: " + message.date + "<br>" + message.content;
            messagesList.appendChild(listItem);
        });
    }

    // Function to populate announcements
    function populateAnnouncements() {
        var announcementsList = document.getElementById("announcementsList");
        announcementsData.forEach(function(announcement) {
            var listItem = document.createElement("li");
            listItem.innerHTML = "<strong>" + announcement.title + "</strong><br>Date: " + announcement.date + "<br>" + announcement.content;
            announcementsList.appendChild(listItem);
        });
    }

    // Populate sections
    populateLinks();
    document.getElementById("happeningsContent").innerHTML = happeningsContent;
    document.getElementById("feeContent").innerHTML = feeContent;
    populateEvents();
    populateMessages();
    populateAnnouncements();
});
