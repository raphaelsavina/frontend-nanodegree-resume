var bio = {
    "name": "Raphaël Savina",
    "role": "Resume Faker",
    "welcomeMessage": "This is not based on a true story...",
    "contacts": {
        "mobile": "1 555 123 123",
        "email": "raphael@savina.net",
        "github": "raphaelsavina",
        "twitter": "@raphaelsavina",
        "location": "Paris"
    },
    "skills": ["HTML", "CSS", "Javascript", "JQuery", "Filling Up Resume"],
    "biopic": "images/fry.jpg",
};
bio.display = function() {
    // prepend name and role
    var headerStringTop = HTMLheaderName.replace("%data%", bio.name)
    					+ HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(headerStringTop);
    // create and append the contact string for header and footer
    var contactsString = HTMLmobile.replace("%data%", bio.contacts.mobile)
    					+ HTMLemail.replace("%data%", bio.contacts.email)
    					+ HTMLgithub.replace("%data%", bio.contacts.github)
    					+ HTMLtwitter.replace("%data%", bio.contacts.twitter)
    					+ HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts").append(contactsString);
    $("#footerContacts").append(contactsString);
    // last part of bio: pic, welcome message and iterate through skills
    var headerStringbottom = HTMLbioPic.replace("%data%", bio.biopic)
    						+ HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage)
    						+ HTMLskillsStart;
    $("#header").append(headerStringbottom);
    for (skill in bio.skills) {
        $("#skills").append(HTMLskills.replace("%data%", bio.skills[skill]));
    }
}

var work = {
    "jobs": [{
        "employer": "Corner Pizza Joint",
        "title": "Four Cheese Taster",
        "location": "Milan",
        "dates": "2002-2006",
        "description": "Making the world a better place, one four cheese pizza at a time."
    }, {
        "employer": "Delicious Bakery",
        "title": "Pies Cutter",
        "location": "Vienna",
        "dates": "2006-2010",
        "description": "Cutting pieces of pie, 1/8 at a time, making the world a better place."
    }]
};
work.display = function() {
    // iterate through the work data and append
    for (job in work.jobs) {
        var workString = HTMLworkEmployer.replace("%data%", work.jobs[job].employer)
        				+ HTMLworkTitle.replace("%data%", work.jobs[job].title)
        				+ HTMLworkLocation.replace("%data%", work.jobs[job].location)
        				+ HTMLworkDates.replace("%data%", work.jobs[job].dates)
        				+ HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $("#workExperience").append(HTMLworkStart);
        $(".work-entry:last").append(workString);
    }
}

var projects = {
    "projects": [{
        "title": "Easter",
        "dates": "2015",
        "description": "Chasing and eating eggs that have been hidden in the garden.",
        "images": ["images/easter_1.png", "images/easter_2.png"]
    }, {
        "title": "Christmas",
        "dates": "2015",
        "description": "Christmas Tree, Snowman, Santa.. and wrapped presents under the tree.",
        "images": ["images/xmas_1.png", "images/xmas_2.png"]
    }]
};
projects.display = function() {
    // itterate through projects and append
    for (project in projects.projects) {
    	var projectString = HTMLprojectTitle.replace("%data%", projects.projects[project].title)
    						+ HTMLprojectDates.replace("%data%", projects.projects[project].dates)
    						+ HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $("#projects").append(HTMLprojectStart);
        $(".project-entry:last").append(projectString);
        // itterate trhough the images array
        for (image in projects.projects[project].images) {
            $(".project-entry:last").append(HTMLprojectImage.replace("%data%", projects.projects[project].images[image]));
        }
    }
}

var education = {
    "schools": [{
        "name": "Pre-Life High School",
        "location": "San Francisco",
        "degree": "Tr MD",
        "majors": ["Breathing", "Eating", "Social Interactions"],
        "dates": 1971,
        "url": "http://time.com/photography/life/"
    }, {
        "name": "Life University",
        "location": "Tokyo",
        "degree": "MaD EfI",
        "majors": ["Acrobatics", "Juggling"],
        "dates": 2000,
        "url": "http://uoflife.com/"
    }],
    "onlineCourses": [{
        "title": "Internet 101",
        "school": "Google",
        "date": 2001,
        "url": "http://www.google.com"
    }, {
        "title": "Navigation with the Internet",
        "school": "Google Maps",
        "date": 2002,
        "url": "http://maps.google.com"
    }, {
        "title": "Introduction to Internet Videos",
        "school": "YouTube",
        "date": 2007,
        "url": "http://www.youtube.com"
    }]
};
education.display = function() {
    $("#education").append(HTMLschoolStart);
    // itterate through schools
    for (school in education.schools) {
        var schoolString = HTMLschoolName.replace("%data%", education.schools[school].name).replace("#", education.schools[school].url)
        					+ HTMLschoolDegree.replace("%data%", education.schools[school].degree)
        					+ HTMLschoolDates.replace("%data%", education.schools[school].dates)
        					+ HTMLschoolLocation.replace("%data%", education.schools[school].location);
        $(".education-entry").append(schoolString);
        //  build the string for the majors
        var majorsList = "";
        for (major in education.schools[school].majors) {
            majorsList = majorsList + ", " + education.schools[school].majors[major];
        };
        // append majors but without the last 2 characters (extra comma and space)
        $(".education-entry").append(HTMLschoolMajor.replace("%data%", majorsList.substr(2)));
    }
    $("#education").append(HTMLonlineClasses);
    $("#education").append(HTMLschoolStart);
    // itterate through online courses
    for (course in education.onlineCourses) {
        var onlineCourseString = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title)
        							+ HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school)
        							+ HTMLonlineDates.replace("%data%", education.onlineCourses[course].date)
        							+ HTMLonlineURL.replace("%data%", education.onlineCourses[course].url).replace("#", education.onlineCourses[course].url);
        $(".education-entry:last").append(onlineCourseString);
    }
}

//Build the page by calling each of the display functions
bio.display();
education.display();
projects.display();
work.display();

//Add the map
$("#mapDiv").append(googleMap);
