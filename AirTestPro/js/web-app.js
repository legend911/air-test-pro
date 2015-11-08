/*
First level Questions/Answers
*/

function airQuality() {
    var beginning = '<h5>What Issues or Symptoms are you having?</h5>\
                    <label><input type="button" name="air-issue" value="Allergy Symptoms" class="btn btn-info btn-sm" onclick="unknownIssue(this.value);" /></label>\
                    <label><input type="button" name="air-issue" value="Flu-like Symptoms" class="btn btn-primary btn-sm" onclick="unknownIssue(this.value);" /></label>\
                    <label><input type="button" name="air-issue" value="Bad Smells" class="btn btn-info btn-sm" onclick="unknownIssue(this.value);" /></label>\
                    <label><input type="button" name="air-issue" value="Hard Time Breathing" class="btn btn-primary btn-sm" onclick="unknownIssue(this.value);" /></label>\
                    <label><input type="button" name="air-issue" value="Dust" class="btn btn-info btn-sm" onclick="airIssue(this.value);" /></label>\
                    <label><input type="button" name="air-issue" value="Pollen" class="btn btn-primary btn-sm" onclick="airIssue(this.value);" /></label>\
                    <label><input type="button" name="air-issue" value="Mold" class="btn btn-info btn-sm" onclick="airIssue(this.value);" /></label>\
                    <label><input type="button" name="air-issue" value="Bacteria/Viruses" class="btn btn-primary btn-sm" onclick="airIssue(this.value);" /></label>\
                    <label><input type="button" name="air-issue" value="Hazardous Volatile Organic Compounts (VOCs)" class="btn btn-info btn-sm" onclick="airIssue(this.value);" /></label>\
                    <label><input type="button" name="air-issue" value="Smoke" class="btn btn-primary btn-sm" onclick="airIssue(this.value);" /></label>\
                    <label><input type="button" name="air-issue" value="Smog" class="btn btn-info btn-sm" onclick="airIssue(this.value);" /></label>';
    function updateMessage() {
        var el = document.getElementById('questions');
        el.innerHTML = beginning;
    }

    return updateMessage();

}

function airQualityImage() {
    var lateralLevel = '<a href="index.html" class="thumbnail"><img alt="Company Logo" src="img/SmallLogo.png" />';
    function updateImage() {
        var el = document.getElementById('output');
        el.innerHTML = lateralLevel;
    }

    return updateImage();

}

/*
Second level Questions/Answers
*/
function airIssue(issue) {
    var issues = {
        'Dust': function () {
            var nextLevel = '<h5>What Room is the Issue in?</h5>\
                            <label><input type="button" name="air-issue" value="Living Room" class="btn btn-info btn-sm" onclick="airIssueDust(this.value);" /></label>\
                            <label><input type="button" name="air-issue" value="Dining Room" class="btn btn-primary btn-sm" onclick="airIssueDust(this.value);" /></label>\
                            <label><input type="button" name="air-issue" value="Kitchen" class="btn btn-info btn-sm" onclick="airIssueDust(this.value);" /></label>\
                            <label><input type="button" name="air-issue" value="Bedroom" class="btn btn-primary btn-sm" onclick="airIssueDust(this.value);" /></label>\
                            <label><input type="button" name="air-issue" value="Office" class="btn btn-info btn-sm" onclick="airIssueDust(this.value);" /></label>\
                            <label><input type="button" name="air-issue" value="Baby Room" class="btn btn-primary btn-sm" onclick="airIssueDust(this.value);" /></label>\
                            <label><input type="button" name="air-issue" value="Basement" class="btn btn-info btn-sm" onclick="airIssueDust(this.value);" /></label>\
                            <label><input type="button" name="air-issue" value="Attic" class="btn btn-primary btn-sm" onclick="airIssueDust(this.value);" /></label>';
            function updateMessage() {
                var el = document.getElementById('questions');
                el.innerHTML = nextLevel;
            }

            var lateralLevel = '<a href="index.html" class="thumbnail"><img alt="Company Logo" src="img/SmallLogo.png" />';
            function updateImage() {
                var el = document.getElementById('output');
                el.innerHTML = lateralLevel;
            }
            return  updateImage(), updateMessage();
        },

        'Pollen': function () {
            return '';
        },

        'Mold': function () {
            return '';
        },

        'Bacteria/Viruses': function () {
            return '';
        },

        'Hazardous Volatile Organic Compounds (VOCs)': function () {
            return '';
        },

        'Smoke': function () {
            return '';
        },

        'Smog': function () {
            return '';
        },

        'default': function () {
            return 'Default Value';
        }
    };

    return (issues[issue] || issues['default'])();
}

function unknownIssue(issue) {
    var issues = {
        'Allergy Symptoms': function () {
            var nextLevel = '<h5>Where do you have these symptoms?</h5>\
                            <label><input type="button" name="air-issue" value="Living Room" class="btn btn-info btn-sm" onclick="unknownIssueAllergySymptoms(this.value);" /></label>\
                            <label><input type="button" name="air-issue" value="Kitchen" class="btn btn-primary btn-sm" onclick="unknownIssueAllergySymptoms(this.value);" /></label>\
                            <label><input type="button" name="air-issue" value="Bedroom" class="btn btn-info btn-sm" onclick="unknownIssueAllergySymptoms(this.value);" /></label>\
                            <label><input type="button" name="air-issue" value="Basement" class="btn btn-primary btn-sm" onclick="unknownIssueAllergySymptoms(this.value);" /></label>\
                            <label><input type="button" name="air-issue" value="Outside" class="btn btn-info btn-sm" onclick="unknownIssueAllergySymptoms(this.value);" /></label>\
                            <label><input type="button" name="air-issue" value="Work" class="btn btn-primary btn-sm" onclick="unknownIssueAllergySymptoms(this.value);" /></label>';
            function updateMessage() {
                var el = document.getElementById('questions');
                el.innerHTML = nextLevel;
            }

            var lateralLevel = '<a href="index.html" class="thumbnail"><img alt="Company Logo" src="img/SmallLogo.png" />';
            function updateImage() {
                var el = document.getElementById('output');
                el.innerHTML = lateralLevel;
            }
            return updateImage(), updateMessage();
        },

        'Flu-like Symptoms': function () {
            return '';
        },

        'Bad Smells': function () {
            return '';
        },

        'Hard Time Breathing': function () {
            return '';
        },

        'default': function () {
            return 'Default Value';
        }
    };

    return (issues[issue] || issues['default'])();
}

/*
Third Level Questions/Answers
*/

function airIssueDust(issue) {
    var issues = {
        'Living Room': function () {
            var nextLevel = '<h5>Where Do You See the Dust?</h5>\
                            <label><input type="button" name="air-issue" value="Window" class="btn btn-info btn-sm" onclick="livingRoomDust(this.value);" /></label>\
                            <label><input type="button" name="air-issue" value="Couch" class="btn btn-primary btn-sm" onclick="livingRoomDust(this.value);" /></label>\
                            <label><input type="button" name="air-issue" value="TV" class="btn btn-info btn-sm" onclick="livingRoomDust(this.value);" /></label>\
                            <label><input type="button" name="air-issue" value="Bookcase" class="btn btn-primary btn-sm" onclick="livingRoomDust(this.value);" /></label>\
                            <label><input type="button" name="air-issue" value="Picture Frames" class="btn btn-info btn-sm" onclick="livingRoomDust(this.value);" /></label>\
                            <label><input type="button" name="air-issue" value="Lamps" class="btn btn-primary btn-sm" onclick="livingRoomDust(this.value);" /></label>\
                            <label><input type="button" name="air-issue" value="Wood Floor" class="btn btn-info btn-sm" onclick="livingRoomDust(this.value);" /></label>\
                            <label><input type="button" name="air-issue" value="Carpet" class="btn btn-primary btn-sm" onclick="livingRoomDust(this.value);" /></label>';
            function updateMessage() {
                var el = document.getElementById('questions');
                el.innerHTML = nextLevel;
            }
            
        
            var lateralLevel = '<a href="airpurifierreviews.html" class="thumbnail"><img alt="Indoor Air Quality Test" src="img/SmallLogo.png" />';
            function updateImage() {
                var el = document.getElementById('output');
                el.innerHTML = lateralLevel;
            }
            return updateImage(), updateMessage();
        },

        'Dining Room': function () {
            var nextLevel = '<h5>Where Do You See the Dust?</h5>\
                            <label><input type="button" name="air-issue" value="Window" class="btn btn-info btn-sm" onclick="diningRoomDust(this.value);" /></label>\
                            <label><input type="button" name="air-issue" value="Dining Table" class="btn btn-primary btn-sm" onclick="diningRoomDust(this.value);" /></label>\
                            <label><input type="button" name="air-issue" value="China Cabinet" class="btn btn-info btn-sm" onclick="diningRoomDust(this.value);" /></label>\
                            <label><input type="button" name="air-issue" value="Chandelier" class="btn btn-primary btn-sm" onclick="diningRoomDust(this.value);" /></label>\
                            <label><input type="button" name="air-issue" value="Carpet" class="btn btn-info btn-sm" onclick="diningRoomDust(this.value);" /></label>\
                            </label><label><input type="button" name="air-issue" value="Wood Floor" class="btn btn-primary btn-sm" onclick="diningRoomDust(this.value);" /></label>';
            function updateMessage() {
                var el = document.getElementById('questions');
                el.innerHTML = nextLevel;
            }
        
            var lateralLevel = '<a href="airpurifierreviews.html" class="thumbnail"><img alt="Indoor Air Quality Test" src="img/SmallLogo.png" />';
            function updateImage() {
                var el = document.getElementById('output');
                el.innerHTML = lateralLevel;
            }
            return updateImage(), updateMessage();
        },

        'Kitchen': function () {
            var nextLevel = '<h5>Where Do You See the Dust?</h5>\
                            <label><input type="button" name="air-issue" value="Appliances" class="btn btn-info btn-sm" onclick="kitchenDust(this.value);" /></label>\
                            <label><input type="button" name="air-issue" value="Countertop" class="btn btn-primary btn-sm" onclick="kitchenDust(this.value);" /></label>\
                            <label><input type="button" name="air-issue" value="Wood Floor" class="btn btn-info btn-sm" onclick="kitchenDust(this.value);" /></label>\
                            <label><input type="button" name="air-issue" value="Window" class="btn btn-primary btn-sm" onclick="kitchenDust(this.value);" /></label>';
            function updateMessage() {
                var el = document.getElementById('questions');
                el.innerHTML = nextLevel;
            }
        
            var lateralLevel = '<a href="airpurifierreviews.html" class="thumbnail"><img alt="Indoor Air Quality Test" src="img/SmallLogo.png" />';
            function updateImage() {
                var el = document.getElementById('output');
                el.innerHTML = lateralLevel;
            }
            return updateImage(), updateMessage();
        },

        'Bedroom': function () {
            var nextLevel = '<h5>Where Do You See the Dust?</h5>\
                            <label><input type="button" name="air-issue" value="Window" class="btn btn-info btn-sm" onclick="bedroomDust(this.value);" /></label>\
                            <label><input type="button" name="air-issue" value="Dresser" class="btn btn-primary btn-sm" onclick="bedroomDust(this.value);" /></label>\
                            <label><input type="button" name="air-issue" value="Bed" class="btn btn-info btn-sm" onclick="bedroomDust(this.value);" /></label>\
                            <label><input type="button" name="air-issue" value="Picture Frames" class="btn btn-primary btn-sm" onclick="bedroomDust(this.value);" /></label>\
                            <label><input type="button" name="air-issue" value="Lamps" class="btn btn-info btn-sm" onclick="bedroomDust(this.value);" /></label>\
                            <label><input type="button" name="air-issue" value="Carpet" class="btn btn-primary btn-sm" onclick="bedroomDust(this.value);" /></label>\
                            <label><input type="button" name="air-issue" value="Wood Floor" class="btn btn-info btn-sm" onclick="bedroomDust(this.value);" /></label>';
            function updateMessage() {
                var el = document.getElementById('questions');
                el.innerHTML = nextLevel;
            }

            var lateralLevel = '<a href="airpurifierreviews.html" class="thumbnail"><img alt="Indoor Air Quality Test" src="img/SmallLogo.png" />';
            function updateImage() {
                var el = document.getElementById('output');
                el.innerHTML = lateralLevel;
            }
            return updateImage(), updateMessage();
        },


        'Basement': function () {
            var nextLevel = '<p>The basement is an area that is usually not well defined. It is simply a copy of the area above, but usually with less headroom and major utilities \
                            and appliances located in closed areas. Their is little air movement in the basement so when air pressure follows you downstairs all the dust travels with \
                            it and doesnt escape. Cleaning the basement of this dust is crucial especially if you use it alot. You will do your laundry down here usually and your \
                            furnace/HVAC and water heater will probably be here too. Nobody will move the furnace and water heater and a ton of dust will collect around and under \
                            these objects. You will have to take mindfully clean these. The furnace is something that actually benefits from cleaning to make it more effiecent. You \
                            should look into how to do this properly. You should move your washer and dryer and dust under there because sometimes lint will fall out of the dryer and \
                            these are objects that are not moved often. Air purifier will help in areas like these, but they are best if kept running 24/7 because of the lack if air movement.</p> \
                            <br /> <label><input type="button" name="restart" value="Restart Application" class="btn btn-success btn-sm" onclick="airQuality();" /></label>';
            function updateMessage() {
                var el = document.getElementById('questions');
                el.innerHTML = nextLevel;
            }

            var lateralLevel = '<a href="airpurifierreviews.html" class="thumbnail"><img alt="Indoor Air Quality Test" src="img/SmallLogo.png" />';
            function updateImage() {
                var el = document.getElementById('output');
                el.innerHTML = lateralLevel;
            }
            return updateImage(), updateMessage();
        },

        'Attic': function () {
            var nextLevel = '<p>The attic and dust is something that is going to happen if it is a crawl space where it just holds insulation. If you have converted your attic \
                            to a living space then things are a bit different. This part of the house is not near the door so air exchange happens less. You could open the \
                            windows every now and then, but who knows what will blow in and just become trapped. I like homes that have so many areas to be cleaned through \
                            an HVAC air purification system. This way air that is brought in from the house is filtered and air blown in is also filtered. You can filter \
                            for dust, pollen and viruses.</p> \
                            <br /> <label><input type="button" name="restart" value="Restart Application" class="btn btn-success btn-sm" onclick="airQuality();" /></label>';
            function updateMessage() {
                var el = document.getElementById('questions');
                el.innerHTML = nextLevel;
            }

            var lateralLevel = '<a href="airpurifierreviews.html" class="thumbnail"><img alt="Indoor Air Quality Test" src="img/SmallLogo.png" />';
            function updateImage() {
                var el = document.getElementById('output');
                el.innerHTML = lateralLevel;
            }
            return updateImage(), updateMessage();
        },

        'default': function () {
            return 'Default Value';
        }
    };

    return (issues[issue] || issues['default'])();
}


function unknownIssueAllergySymptoms(issue) {
    var issues = {
        'Living Room': function () {
            var nextLevel = '<p>You may find several things within your living room that can affect your allergies. First dust is very likely \
                            to collect here because of the amount of electronics that emit electrical waves that attract dust. You will also \
                            have a lot of furniture for dust to hide underneath. Air flow is obstructed by large objects. That is why it is \
                            pivotal to capture these particles before they reach the ground. A strong air purifier with good air filtration \
                            will help out a lot. You will also get pollen coming in through windows and doors during the Spring and Summer</p> \
                            <br /> <label><input type="button" name="restart" value="Restart Application" class="btn btn-success btn-sm" onclick="airQuality();" /></label>';
            function updateMessage() {
                var el = document.getElementById('questions');
                el.innerHTML = nextLevel;
            }


            var lateralLevel = '<a href="airpurifierreviews.html" class="thumbnail"><img alt="Indoor Air Quality Test" src="img/SmallLogo.png" />';
            function updateImage() {
                var el = document.getElementById('output');
                el.innerHTML = lateralLevel;
            }
            return updateImage(), updateMessage();
        },

        'Kitchen': function () {
            var nextLevel = '<p>If you can say that your allergies are truly worse in your kitchen you may have some serious issues looming behind \
                            your cabinetry. Water sources from the sink and dishwasher can leak and provide a place for mold to grow. Since it is \
                            beneath a cabinet it has warmth of the house and you wont be bothering it most likely because it is out of sight. This \
                            can be potentially dangerous because the problem can grow without you knowing it. It is best to do a mold test in this \
                            situation before you do anything drastic. I would suggest you take off the front of the cabinet on the floor wherever \
                            you think their may be a water leak or where water may gather that is spilled against a wall.</p> \
                            <br /> <label><input type="button" name="restart" value="Restart Application" class="btn btn-success btn-sm" onclick="airQuality();" /></label>';
            function updateMessage() {
                var el = document.getElementById('questions');
                el.innerHTML = nextLevel;
            }

            var lateralLevel = '<a href="airpurifierreviews.html" class="thumbnail"><img alt="Indoor Air Quality Test" src="img/SmallLogo.png" />';
            function updateImage() {
                var el = document.getElementById('output');
                el.innerHTML = lateralLevel;
            }
            return updateImage(), updateMessage();
        },

        'Bedroom': function () {
            var nextLevel = '<p>Solving allergy problems within your bedroom are much more manageable than other areas of your home. You only have \
                            to deal with particles that collects under your bed and furniture. However, some people are more allergic than others. \
                            Everybody has dust mites and other mites that living with your bed sheets. Its not really the bug that you are allergic \
                            too, but their fecal matter. It may sound disgusting but a protein within it and even from other larger animals is known \
                            to cause allergic reactions for many people.</p> \
                            <br /> <label><input type="button" name="restart" value="Restart Application" class="btn btn-success btn-sm" onclick="airQuality();" /></label>';
            function updateMessage() {
                var el = document.getElementById('questions');
                el.innerHTML = nextLevel;
            }

            var lateralLevel = '<a href="airpurifierreviews.html" class="thumbnail"><img alt="Indoor Air Quality Test" src="img/SmallLogo.png" />';
            function updateImage() {
                var el = document.getElementById('output');
                el.innerHTML = lateralLevel;
            }
            return updateImage(), updateMessage();
        },


        'Basement': function () {
            var nextLevel = '<p>In the darkness of your basement lurk many issues just waiting to pop it. Its kinda of scary because they all involve \
                            water. Once water and heat collect on a surface that a bacteria or mold can grow on you have issues almost immediately. You \
                            should check for water damage inside and outside. You may notice that a piece of the wall is moist or the floor seems a bit \
                            wet. On the outside you may notice water pooling on the edge of your foundation or that a hill is pointing water toward your house.</p> \
                            <br /> <label><input type="button" name="restart" value="Restart Application" class="btn btn-success btn-sm" onclick="airQuality();" /></label>';
            function updateMessage() {
                var el = document.getElementById('questions');
                el.innerHTML = nextLevel;
            }

            var lateralLevel = '<a href="airpurifierreviews.html" class="thumbnail"><img alt="Indoor Air Quality Test" src="img/SmallLogo.png" />';
            function updateImage() {
                var el = document.getElementById('output');
                el.innerHTML = lateralLevel;
            }
            return updateImage(), updateMessage();
        },

        'Outside': function () {
            var nextLevel = '<p>If you are outside then you are left to the elements. Spring and Fall can be quite bad for allergy sufferers and many will \
                            run to the pharmacy shelves for over the counter medications. This is always and option, but not everybody gets results from these.</p> \
                            <br /> <label><input type="button" name="restart" value="Restart Application" class="btn btn-success btn-sm" onclick="airQuality();" /></label>';
            function updateMessage() {
                var el = document.getElementById('questions');
                el.innerHTML = nextLevel;
            }

            var lateralLevel = '<a href="airpurifierreviews.html" class="thumbnail"><img alt="Indoor Air Quality Test" src="img/SmallLogo.png" />';
            function updateImage() {
                var el = document.getElementById('output');
                el.innerHTML = lateralLevel;
            }
            return updateImage(), updateMessage();
        },

        'Work': function () {
            var nextLevel = '<p>Having symptoms at work can be absolutely miserable. You have no control over the environment and you cant legally tear \
                            down the walls for clues to the root case. Most people in this situation are forced to try out medications that may provide \
                            some relief or none at all. Their is nothing wrong with you “sniffing out” the cause of the issue. Most allergy symptoms happen \
                            because of an allergen in the immediate area. Search the area for water damage that may be old. The walls, ceilings, vents could all \
                            be likely suspects in your investigation. If you come across something strange alert your companies health advisor or your boss of \
                            the situation and state their may be an issue that is causing people in the workplace to be sick. Most businesses want their \
                            employees to be as healthy as possible so they can work well. They should be more than happy to have this looked at by the \
                            maintenance crew to get a clue into what you have found.</p> \
                            <br /> <label><input type="button" name="restart" value="Restart Application" class="btn btn-success btn-sm" onclick="airQuality();" /></label>';
            function updateMessage() {
                var el = document.getElementById('questions');
                el.innerHTML = nextLevel;
            }

            var lateralLevel = '<a href="airpurifierreviews.html" class="thumbnail"><img alt="Indoor Air Quality Test" src="img/SmallLogo.png" />';
            function updateImage() {
                var el = document.getElementById('output');
                el.innerHTML = lateralLevel;
            }
            return updateImage(), updateMessage();
        },

        'default': function () {
            return 'Default Value';
        }
    };

    return (issues[issue] || issues['default'])();
}

/*
Fourth Level Questions/Answers
*/

function livingRoomDust(issue) {
    var issues = {
        'Window': function () {
            var nextLevel = '<h5>Has it been opened?</h5>\
                            <label><input type="button" name="air-issue" value="Yes" class="btn btn-info btn-sm" onclick="livingRoomDustWindow(this.value);" /></label>\
                            <label><input type="button" name="air-issue" value="No" class="btn btn-primary btn-sm" onclick="livingRoomDustWindow(this.value);" /></label>';
            function updateMessage() {
                var el = document.getElementById('questions');
                el.innerHTML = nextLevel;
            }

            var lateralLevel = '<a href="airpurifierreviews.html" class="thumbnail"><img alt="Indoor Air Quality Test" src="img/SmallLogo.png" />';
            function updateImage() {
                var el = document.getElementById('output');
                el.innerHTML = lateralLevel;
            }
            return updateImage(), updateMessage();
        },

        'Couch': function () {
            var nextLevel = '<p>80% of the dust in your home is your own skin particles. Its something you dont think about, but it is even worse if you dont remove the \
                            skin daily by washing. A couch is warm and comfy, but it is like a brush for your body. Also when you sit on the coach you will notice on a \
                            sunlit morning that those particles fly into the air and possibly float for hours before they land somewhere else.</p> \
                            <br /> <label><input type="button" name="restart" value="Restart Application" class="btn btn-success btn-sm" onclick="airQuality();" /></label>';
            function updateMessage() {
                var el = document.getElementById('questions');
                el.innerHTML = nextLevel;
            }

            var lateralLevel = '<a href="airpurifierreviews.html" class="thumbnail"><img alt="Indoor Air Quality Test" src="img/SmallLogo.png" />';
            function updateImage() {
                var el = document.getElementById('output');
                el.innerHTML = lateralLevel;
            }
            return updateImage(), updateMessage();
        },

        'TV': function () {
            var nextLevel = '<p>The TV naturally attracts airborne dust with its negative charge. It is the reason the stand is always covered in dust before you see it in \
                            other places and is thicker.</p> \
                            <br /> <label><input type="button" name="restart" value="Restart Application" class="btn btn-success btn-sm" onclick="airQuality();" /></label>';
            function updateMessage() {
                var el = document.getElementById('questions');
                el.innerHTML = nextLevel;
            }

            var lateralLevel = '<a href="airpurifierreviews.html" class="thumbnail"><img alt="Indoor Air Quality Test" src="img/SmallLogo.png" />';
            function updateImage() {
                var el = document.getElementById('output');
                el.innerHTML = lateralLevel;
            }
            return updateImage(), updateMessage();
        },

        'Bookcase': function () {
            var nextLevel = '<p>Natural airborne dust will settle in places like this naturally over time. It is not disturbed often and is usually out of the main traffic \
                            area. However, you might have issues with book lice, which are 1/16 of an inch long. They like the mold that occurs on books because of its composition. \
                            Old books will have a lot of this and you are sure to see one in a variety of colors crawl across the page. Reducing the humidity will stop the mold that \
                            occurs on these books and other paper substances in your home.</p> \
                            <br /> <label><input type="button" name="restart" value="Restart Application" class="btn btn-success btn-sm" onclick="airQuality();" /></label>';
            function updateMessage() {
                var el = document.getElementById('questions');
                el.innerHTML = nextLevel;
            }

            var lateralLevel = '<a href="airpurifierreviews.html" class="thumbnail"><img alt="Indoor Air Quality Test" src="img/SmallLogo.png" />';
            function updateImage() {
                var el = document.getElementById('output');
                el.innerHTML = lateralLevel;
            }
            return updateImage(), updateMessage();
        },

        'Picture Frames': function () {
            var nextLevel = '<p>The amount of dust on picture frames is usually minimal. It can tell you the difference between what is collected on the floor in comparison to the walls. \
                            These should be cleaned periodically.</p> \
                            <br /> <label><input type="button" name="restart" value="Restart Application" class="btn btn-success btn-sm" onclick="airQuality();" /></label>';
            function updateMessage() {
                var el = document.getElementById('questions');
                el.innerHTML = nextLevel;
            }

            var lateralLevel = '<a href="airpurifierreviews.html" class="thumbnail"><img alt="Indoor Air Quality Test" src="img/SmallLogo.png" />';
            function updateImage() {
                var el = document.getElementById('output');
                el.innerHTML = lateralLevel;
            }
            return updateImage(), updateMessage();
        },


        'Lamps': function () {
            var nextLevel = '<p>Lamps can have a lot of dust collect on them because of the negative charge they put emit. It is similar to why the TV is always dusty. In this \
                            situation it allows the cloth lamp shade to become engrossed with dust as you have seen in many old homes.</p> \
                            <br /> <label><input type="button" name="restart" value="Restart Application" class="btn btn-success btn-sm" onclick="airQuality();" /></label>';
            function updateMessage() {
                var el = document.getElementById('questions');
                el.innerHTML = nextLevel;
            }

            var lateralLevel = '<a href="airpurifierreviews.html" class="thumbnail"><img alt="Indoor Air Quality Test" src="img/SmallLogo.png" />';
            function updateImage() {
                var el = document.getElementById('output');
                el.innerHTML = lateralLevel;
            }
            return updateImage(), updateMessage();
        },

        'Wood Floor': function () {
            var nextLevel = '<p>Dust will collect on wood floors and be seen and a lot of people dont like that and put down carpet. The problem here is if you see the dust you \
                            will clean it and you will have less allergens in your home. If you have carpet you will not clean it as often and when you do it will not clean as well \
                            and it will actually be dispersed into the air making your problems worse.</p> \
                            <br /> <label><input type="button" name="restart" value="Restart Application" class="btn btn-success btn-sm" onclick="airQuality();" /></label>';
            function updateMessage() {
                var el = document.getElementById('questions');
                el.innerHTML = nextLevel;
            }

            var lateralLevel = '<a href="airpurifierreviews.html" class="thumbnail"><img alt="Indoor Air Quality Test" src="img/SmallLogo.png" />';
            function updateImage() {
                var el = document.getElementById('output');
                el.innerHTML = lateralLevel;
            }
            return updateImage(), updateMessage();
        },

        'Carpet': function () {
            var nextLevel = '<p>If you can actually seen the dust in your carpet you have a serious problem. You should be vacuuming your carpet at least once a week. The hardest \
                            part is not spreading the dust while trying to clean it, but I can show how to do that properly.</p> \
                            <br /> <label><input type="button" name="restart" value="Restart Application" class="btn btn-success btn-sm" onclick="airQuality();" /></label>';
            function updateMessage() {
                var el = document.getElementById('questions');
                el.innerHTML = nextLevel;
            }

            var lateralLevel = '<a href="airpurifierreviews.html" class="thumbnail"><img alt="Indoor Air Quality Test" src="img/SmallLogo.png" />';
            function updateImage() {
                var el = document.getElementById('output');
                el.innerHTML = lateralLevel;
            }
            return updateImage(), updateMessage();
        },

        'default': function () {
            return 'Default Value';
        }
    };

    return (issues[issue] || issues['default'])();
}


function diningRoomDust(issue) {
    var issues = {

        'Window': function () {
            var nextLevel = '<h5>Has it been opened?</h5>\
                            <label><input type="button" name="air-issue" value="Yes" class="btn btn-info btn-sm" onclick="diningRoomDustWindow(this.value);" /></label>\
                            <label><input type="button" name="air-issue" value="No" class="btn btn-primary btn-sm" onclick="diningRoomDustWindow(this.value);" /></label>';
            function updateMessage() {
                var el = document.getElementById('questions');
                el.innerHTML = nextLevel;
            }

            var lateralLevel = '<a href="airpurifierreviews.html" class="thumbnail"><img alt="Indoor Air Quality Test" src="img/SmallLogo.png" />';
            function updateImage() {
                var el = document.getElementById('output');
                el.innerHTML = lateralLevel;
            }
            return updateImage(), updateMessage();
        },

        'Dining Table': function () {
            var nextLevel = '<p>Tables are just like any other flat surface that is within your home. The more surface area that is available the more dust will collect \
                            upon it. Keeping your table clean is a daily effort if you eat on it. If you dont use it that often then you will find yourself having to give \
                            it a quick cleanup every couple of weeks. However, the use of an mid-grade air purifier can help the situation by cleaning the area within the \
                            area, but I only find this optimal during the winter when the windows are usually closed.</p> \
                            <br /> <label><input type="button" name="restart" value="Restart Application" class="btn btn-success btn-sm" onclick="airQuality();" /></label>';
            function updateMessage() {
                var el = document.getElementById('questions');
                el.innerHTML = nextLevel;
            }

            var lateralLevel = '<a href="airpurifierreviews.html" class="thumbnail"><img alt="Indoor Air Quality Test" src="img/SmallLogo.png" />';
            function updateImage() {
                var el = document.getElementById('output');
                el.innerHTML = lateralLevel;
            }
            return updateImage(), updateMessage();
        },

        'China Cabinet': function () {
            var nextLevel = '<p>The particular issue that people have with dust on china cabinets is the fact that they want their fine china to remain dustless and be a \
                            showpiece in the room. You will also have the issue on unseen dust collecting on top of the cabinet that will come down once it is disturbed by \
                            an object that doesnt attract it. The big issue with tall objects is the fact that if you dont have moving air your house then particulates will \
                            fall on surfaces within your house quicker. Once they call on an object then the process of capturing them while they are suspended in the air is \
                            over. You will have to restart to hand cleaning with products such as a "Swiffer Mop" or a vacuum. I will say if you use a vacuum then you will \
                            be disturbing the particulates and putting them back in the air. This is good for capturing it but very bad for your allergies in the short term.</p> \
                            <br /> <label><input type="button" name="restart" value="Restart Application" class="btn btn-success btn-sm" onclick="airQuality();" /></label>';
            function updateMessage() {
                var el = document.getElementById('questions');
                el.innerHTML = nextLevel;
            }

            var lateralLevel = '<a href="airpurifierreviews.html" class="thumbnail"><img alt="Indoor Air Quality Test" src="img/SmallLogo.png" />';
            function updateImage() {
                var el = document.getElementById('output');
                el.innerHTML = lateralLevel;
            }
            return updateImage(), updateMessage();
        },

        'Chandelier': function () {
            var nextLevel = '<p>The chandelier is something that many people dont think about. Because of this it will be able to gather a lot of dust over time without \
                            anybody noticing until the dust starts collecting below it. This happens with people who have fans in their house. If you dont use it during the \
                            Winter and then you turn it on in the Summer you will get a "dusting" and your allergies will not like it. Unfortunately, part of the process \
                            of relieving your allergies involves cleaning every now and then. At the moment we cant stop particulates from entering our house through the \
                            windows and doors. We obviously cant stop our bodies from shedding skins, which is 80% of the particulates in the air in our home. Therefore, \
                            we are forced to clean up after ourselves. I suggest that you clean your chandelier every 2-3 months and up to every month during the Summer.</p> \
                            <br /> <label><input type="button" name="restart" value="Restart Application" class="btn btn-success btn-sm" onclick="airQuality();" /></label>';
            function updateMessage() {
                var el = document.getElementById('questions');
                el.innerHTML = nextLevel;
            }

            var lateralLevel = '<a href="airpurifierreviews.html" class="thumbnail"><img alt="Indoor Air Quality Test" src="img/SmallLogo.png" />';
            function updateImage() {
                var el = document.getElementById('output');
                el.innerHTML = lateralLevel;
            }
            return updateImage(), updateMessage();
        },

        'Carpet': function () {
            var nextLevel = '<p>If you can actually see the dust in your carpet you have a serious problem. You should be vacuuming your carpet once a week. \
                            The hardest part is not spreading the dust while trying to clean it. You will have to use a high quality vacuum that uses a HEPA \
                            air filter. You can actually find some lower level models at your local retail store that will do a good job for small issues. If \
                            you have a bad respiratory issue then you will need something that is more capable of containing particulates when the brush is \
                            rotating.</p> \
                            <br /> <label><input type="button" name="restart" value="Restart Application" class="btn btn-success btn-sm" onclick="airQuality();" /></label>';
            function updateMessage() {
                var el = document.getElementById('questions');
                el.innerHTML = nextLevel;
            }

            var lateralLevel = '<a href="airpurifierreviews.html" class="thumbnail"><img alt="Indoor Air Quality Test" src="img/SmallLogo.png" />';
            function updateImage() {
                var el = document.getElementById('output');
                el.innerHTML = lateralLevel;
            }
            return updateImage(), updateMessage();
        },

        'Wood Floor': function () {
            var nextLevel = '<p>Dust will collect on wood floors and be seen and a lot of people dont like that and put down carpet. The problem here is if you see the dust \
                            you will clean it and you will have less allergens in your home. If you have carpet you will not clean it as often and when you do it will not clean \
                            as well and it will actually be dispersed into the air making your problems worse.</p> \
                            <br /> <label><input type="button" name="restart" value="Restart Application" class="btn btn-success btn-sm" onclick="airQuality();" /></label>';
            function updateMessage() {
                var el = document.getElementById('questions');
                el.innerHTML = nextLevel;
            }

            var lateralLevel = '<a href="airpurifierreviews.html" class="thumbnail"><img alt="Indoor Air Quality Test" src="img/SmallLogo.png" />';
            function updateImage() {
                var el = document.getElementById('output');
                el.innerHTML = lateralLevel;
            }
            return updateImage(), updateMessage();
        },

        'default': function () {
            return 'Default Value';
        }

    };

    return (issues[issue] || issues['default'])();
}


function kitchenDust(issue) {
    var issues = {

        'Window': function () {
            var nextLevel = '<h5>Has it been opened?</h5>\
                            <label><input type="button" name="air-issue" value="Yes" class="btn btn-info btn-sm" onclick="kitchenDustWindow(this.value);" /></label>\
                            <label><input type="button" name="air-issue" value="No" class="btn btn-primary btn-sm" onclick="kitchenDustWindow(this.value);" /></label>';
            function updateMessage() {
                var el = document.getElementById('questions');
                el.innerHTML = nextLevel;
            }

            var lateralLevel = '<a href="airpurifierreviews.html" class="thumbnail"><img alt="Indoor Air Quality Test" src="img/SmallLogo.png" />';
            function updateImage() {
                var el = document.getElementById('output');
                el.innerHTML = lateralLevel;
            }
            return updateImage(), updateMessage();
        },

        'Appliances': function () {
            var nextLevel = '<p>It is very common to see a massive amount of dust around your household appliances within the kitchen. The refrigerator is the worst \
                            culprit because you are unlikely to clean around it and under it. Once dust floats into these nooks and crannies it is very hard for an air \
                            purification system to remove it. Plus the electrical charge draws it to these areas. I suggest that you try your best to clean the overall \
                            air and clean around these appliances once every 3-6 months depending on how bad it is. </p> \
                            <br /> <label><input type="button" name="restart" value="Restart Application" class="btn btn-success btn-sm" onclick="airQuality();" /></label>';
            function updateMessage() {
                var el = document.getElementById('questions');
                el.innerHTML = nextLevel;
            }

            var lateralLevel = '<a href="airpurifierreviews.html" class="thumbnail"><img alt="Indoor Air Quality Test" src="img/SmallLogo.png" />';
            function updateImage() {
                var el = document.getElementById('output');
                el.innerHTML = lateralLevel;
            }
            return updateImage(), updateMessage();
        },

        'Countertop': function () {
            var nextLevel = '<p>It is quite hard for dust to collect on countertops. They are used way to often for that to happen normally. If you do see some dust on \
                            some unused areas or under appliances then will benefit from cleaning the air that is in the area more often. I would suggest cleaning under \
                            these items every month as well.</p> \
                            <br /> <label><input type="button" name="restart" value="Restart Application" class="btn btn-success btn-sm" onclick="airQuality();" /></label>';
            function updateMessage() {
                var el = document.getElementById('questions');
                el.innerHTML = nextLevel;
            }

            var lateralLevel = '<a href="airpurifierreviews.html" class="thumbnail"><img alt="Indoor Air Quality Test" src="img/SmallLogo.png" />';
            function updateImage() {
                var el = document.getElementById('output');
                el.innerHTML = lateralLevel;
            }
            return updateImage(), updateMessage();
        },

        'Wood Floor': function () {
            var nextLevel = '<p>Dust will collect on wood floors and be seen and a lot of people dont like that and put down carpet. The problem here is if you see the \
                            dust you will clean it and you will have less allergens in your home. If you have carpet you will not clean it as often and when you do it \
                            will not clean as well and it will actually be dispersed into the air making your problems worse.</p> \
                            <br /> <label><input type="button" name="restart" value="Restart Application" class="btn btn-success btn-sm" onclick="airQuality();" /></label>';
            function updateMessage() {
                var el = document.getElementById('questions');
                el.innerHTML = nextLevel;
            }

            var lateralLevel = '<a href="airpurifierreviews.html" class="thumbnail"><img alt="Indoor Air Quality Test" src="img/SmallLogo.png" />';
            function updateImage() {
                var el = document.getElementById('output');
                el.innerHTML = lateralLevel;
            }
            return updateImage(), updateMessage();
        },

        'default': function () {
            return 'Default Value';
        }

    };

    return (issues[issue] || issues['default'])();
}



function bedroomDust(issue) {
    var issues = {
        'Window': function () {
            var nextLevel = '<h5>Has it been opened?</h5>\
                            <label><input type="button" name="air-issue" value="Yes" class="btn btn-info btn-sm" onclick="bedrooomDustWindow(this.value);" /></label>\
                            <label><input type="button" name="air-issue" value="No" class="btn btn-primary btn-sm" onclick="bedroomDustWindow(this.value);" /></label>';
            function updateMessage() {
                var el = document.getElementById('questions');
                el.innerHTML = nextLevel;
            }

            var lateralLevel = '<a href="airpurifierreviews.html" class="thumbnail"><img alt="Indoor Air Quality Test" src="img/SmallLogo.png" />';
            function updateImage() {
                var el = document.getElementById('output');
                el.innerHTML = lateralLevel;
            }
            return updateImage(), updateMessage();
        },

        'Bed': function () {
            var nextLevel = '<p>Dust on your bed is a bad thing. It is going to happen if you have an irregular amount of dust in your room and it has nowhere to \
                            go. Simply using an air purifier will help with this. You dont need anything expensive or high quality for this type of issue.</p> \
                            <br /> <label><input type="button" name="restart" value="Restart Application" class="btn btn-success btn-sm" onclick="airQuality();" /></label>';
            function updateMessage() {
                var el = document.getElementById('questions');
                el.innerHTML = nextLevel;
            }

            var lateralLevel = '<a href="airpurifierreviews.html" class="thumbnail"><img alt="Indoor Air Quality Test" src="img/SmallLogo.png" />';
            function updateImage() {
                var el = document.getElementById('output');
                el.innerHTML = lateralLevel;
            }
            return updateImage(), updateMessage();
        },


        'Picture Frames': function () {
            var nextLevel = '<p>The amount of dust on picture frames is usually minimal. It can tell you the difference between what is collected on the floor in comparison \
                            to the walls. These should be cleaned periodically.</p> \
                            <br /> <label><input type="button" name="restart" value="Restart Application" class="btn btn-success btn-sm" onclick="airQuality();" /></label>';
            function updateMessage() {
                var el = document.getElementById('questions');
                el.innerHTML = nextLevel;
            }

            var lateralLevel = '<a href="airpurifierreviews.html" class="thumbnail"><img alt="Indoor Air Quality Test" src="img/SmallLogo.png" />';
            function updateImage() {
                var el = document.getElementById('output');
                el.innerHTML = lateralLevel;
            }
            return updateImage(), updateMessage();
        },


        'Lamps': function () {
            var nextLevel = '<p>Lamps can have a lot of dust collect on them because of the negative charge they put emit. It is similar to why the TV is always dusty. In \
                            this situation it allows the cloth lamp shade to become engrossed with dust as you have seen in many old homes.</p> \
                            <br /> <label><input type="button" name="restart" value="Restart Application" class="btn btn-success btn-sm" onclick="airQuality();" /></label>';
            function updateMessage() {
                var el = document.getElementById('questions');
                el.innerHTML = nextLevel;
            }

            var lateralLevel = '<a href="airpurifierreviews.html" class="thumbnail"><img alt="Indoor Air Quality Test" src="img/SmallLogo.png" />';
            function updateImage() {
                var el = document.getElementById('output');
                el.innerHTML = lateralLevel;
            }
            return updateImage(), updateMessage();
        },

        'Wood Floor': function () {
            var nextLevel = '<p>Dust will collect on wood floors and be seen and a lot of people dont like that and put down carpet. The problem here is if you see the dust \
                            you will clean it and you will have less allergens in your home. If you have carpet you will not clean it as often and when you do it will not clean \
                            as well and it will actually be dispersed into the air making your problems worse.</p> \
                            <br /> <label><input type="button" name="restart" value="Restart Application" class="btn btn-success btn-sm" onclick="airQuality();" /></label>';
            function updateMessage() {
                var el = document.getElementById('questions');
                el.innerHTML = nextLevel;
            }

            var lateralLevel = '<a href="airpurifierreviews.html" class="thumbnail"><img alt="Indoor Air Quality Test" src="img/SmallLogo.png" />';
            function updateImage() {
                var el = document.getElementById('output');
                el.innerHTML = lateralLevel;
            }
            return updateImage(), updateMessage();
        },

        'Carpet': function () {
            var nextLevel = '<p>If you can actually seen the dust in your carpet you have a serious problem. You should be vacuuming your carpet at least once a week. The \
                            hardest part is not spreading the dust while trying to clean it, but I can show how to do that properly.</p> \
                            <br /> <label><input type="button" name="restart" value="Restart Application" class="btn btn-success btn-sm" onclick="airQuality();" /></label>';
            function updateMessage() {
                var el = document.getElementById('questions');
                el.innerHTML = nextLevel;
            }

            var lateralLevel = '<a href="airpurifierreviews.html" class="thumbnail"><img alt="Indoor Air Quality Test" src="img/SmallLogo.png" />';
            function updateImage() {
                var el = document.getElementById('output');
                el.innerHTML = lateralLevel;
            }
            return updateImage(), updateMessage();
        },

        'default': function () {
            return 'Default Value';
        }
    };

    return (issues[issue] || issues['default'])();
}

/*
Fifth Level Questions/Answers
*/

function livingRoomDustWindow(issue) {
    var issues = {
        'Yes': function () {
            var nextLevel = '<p>80% of dust in the air is made of skin particles within a home. However, when a window is open dust can contain many different components and the \
                            natural air pressure  outside is greater than the pressure inside. This creates negative air pressure and pulls whats outside in. This is normal to see \
                            in every home when the window is open.</p> \
                            <br /> <label><input type="button" name="restart" value="Restart Application" class="btn btn-success btn-sm" onclick="airQuality();" /></label>';
            function updateMessage() {
                var el = document.getElementById('questions');
                el.innerHTML = nextLevel;
            }

            var lateralLevel = '<a href="airpurifierreviews.html" class="thumbnail"><img alt="Indoor Air Quality Test" src="img/SmallLogo.png" />';
            function updateImage() {
                var el = document.getElementById('output');
                el.innerHTML = lateralLevel;
            }
            return updateImage(), updateMessage();
        },

        'No': function () {
            var nextLevel = '<p>Since the window has been mainly closed only a small amount of dust can be attributed to outside factors. People enter their home through the door \
                            all the time, but that is only a small amount as well. This dust is mainly from your own body. 80% of the dust in every home is human skin cells. Amazingly \
                            we shed skin at a fast rate. This is the same way dogs are able to track humans very easily.</p> \
                            <br /> <label><input type="button" name="restart" value="Restart Application" class="btn btn-success btn-sm" onclick="airQuality();" /></label>';
                function updateMessage() {
                var el = document.getElementById('questions');
                el.innerHTML = nextLevel;
            }

                var lateralLevel = '<a href="airpurifierreviews.html" class="thumbnail"><img alt="Indoor Air Quality Test" src="img/SmallLogo.png" />';
            function updateImage() {
                var el = document.getElementById('output');
                el.innerHTML = lateralLevel;
            }
            return updateImage(), updateMessage();
        },

        'default': function () {
            return 'Default Value';
        }
    };

    return (issues[issue] || issues['default'])();
}

function diningRoomDustWindow(issue) {
    var issues = {
        'Yes': function () {
            var nextLevel = '<p>80% of dust in the air is made of skin particles within a home. However, when a window is open dust can contain many different components and the natural \
                            air pressure  outside is greater than the pressure inside. This creates negative air pressure and pulls whats outside in. This is normal to see in every home \
                            when the window is open.</p> \
                            <br /> <label><input type="button" name="restart" value="Restart Application" class="btn btn-success btn-sm" onclick="airQuality();" /></label>';
            function updateMessage() {
                var el = document.getElementById('questions');
                el.innerHTML = nextLevel;
            }

            var lateralLevel = '<a href="airpurifierreviews.html" class="thumbnail"><img alt="Indoor Air Quality Test" src="img/SmallLogo.png" />';
            function updateImage() {
                var el = document.getElementById('output');
                el.innerHTML = lateralLevel;
            }
            return updateImage(), updateMessage();
        },

        'No': function () {
            var nextLevel = '<p>Since the window has been mainly closed only a small amount of dust can be attributed to outside factors. People enter their home through the door all the \
                            time, but that is only a small amount as well. This dust is mainly from your own body. 80% of the dust in every home is human skin cells. Amazingly we shed skin \
                            at a fast rate. This is the same way dogs are able to track humans very easily.</p> \
                            <br /> <label><input type="button" name="restart" value="Restart Application" class="btn btn-success btn-sm" onclick="airQuality();" /></label>';
            function updateMessage() {
                var el = document.getElementById('questions');
                el.innerHTML = nextLevel;
            }

            var lateralLevel = '<a href="airpurifierreviews.html" class="thumbnail"><img alt="Indoor Air Quality Test" src="img/SmallLogo.png" />';
            function updateImage() {
                var el = document.getElementById('output');
                el.innerHTML = lateralLevel;
            }
            return updateImage(), updateMessage();
        },

        'default': function () {
            return 'Default Value';
        }
    };

    return (issues[issue] || issues['default'])();
}

function kitchenDustWindow(issue) {
    var issues = {
        'Yes': function () {
            var nextLevel = '<p>80% of dust in the air is made of skin particles within a home. However, when a window is open dust can contain many different components and the natural \
                            air pressure  outside is greater than the pressure inside. This creates negative air pressure and pulls whats outside in. This is normal to see in every home \
                            when the window is open.</p> \
                            <br /> <label><input type="button" name="restart" value="Restart Application" class="btn btn-success btn-sm" onclick="airQuality();" /></label>';
            function updateMessage() {
                var el = document.getElementById('questions');
                el.innerHTML = nextLevel;
            }

            var lateralLevel = '<a href="airpurifierreviews.html" class="thumbnail"><img alt="Indoor Air Quality Test" src="img/SmallLogo.png" />';
            function updateImage() {
                var el = document.getElementById('output');
                el.innerHTML = lateralLevel;
            }
            return updateImage(), updateMessage();
        },

        'No': function () {
            var nextLevel = '<p>Since the window has been mainly closed only a small amount of dust can be attributed to outside factors. People enter their home through the door all \
                            the time, but that is only a small amount as well. This dust is mainly from your own body. 80% of the dust in every home is human skin cells. Amazingly we \
                            shed skin at a fast rate. This is the same way dogs are able to track humans very easily.</p> \
                            <br /> <label><input type="button" name="restart" value="Restart Application" class="btn btn-success btn-sm" onclick="airQuality();" /></label>';
            function updateMessage() {
                var el = document.getElementById('questions');
                el.innerHTML = nextLevel;
            }

            var lateralLevel = '<a href="airpurifierreviews.html" class="thumbnail"><img alt="Indoor Air Quality Test" src="img/SmallLogo.png" />';
            function updateImage() {
                var el = document.getElementById('output');
                el.innerHTML = lateralLevel;
            }
            return updateImage(), updateMessage();
        },

        'default': function () {
            return 'Default Value';
        }
    };

    return (issues[issue] || issues['default'])();
}


function bedroomDustWindow(issue) {
    var issues = {
        'Yes': function () {
            var nextLevel = '<p>80% of dust in the air is made of skin particles within a home. However, when a window is open dust can contain many different components and the natural \
                            air pressure  outside is greater than the pressure inside. This creates negative air pressure and pulls whats outside in. This is normal to see in every home \
                            when the window is open.</p> \
                            <br /> <label><input type="button" name="restart" value="Restart Application" class="btn btn-success btn-sm" onclick="airQuality();" /></label>';
            function updateMessage() {
                var el = document.getElementById('questions');
                el.innerHTML = nextLevel;
            }

            var lateralLevel = '<a href="airpurifierreviews.html" class="thumbnail"><img alt="Indoor Air Quality Test" src="img/SmallLogo.png" />';
            function updateImage() {
                var el = document.getElementById('output');
                el.innerHTML = lateralLevel;
            }
            return updateImage(), updateMessage();
        },

        'No': function () {
            var nextLevel = '<p>Since the window has been mainly closed only a small amount of dust can be attributed to outside factors. People enter their home through the door all the \
                            time, but that is only a small amount as well. This dust is mainly from your own body. 80% of the dust in every home is human skin cells. Amazingly we shed skin \
                            at a fast rate. This is the same way dogs are able to track humans very easily.</p> \
                            <br /> <label><input type="button" name="restart" value="Restart Application" class="btn btn-success btn-sm" onclick="airQuality();" /></label>';
            function updateMessage() {
                var el = document.getElementById('questions');
                el.innerHTML = nextLevel;
            }

            var lateralLevel = '<a href="airpurifierreviews.html" class="thumbnail"><img alt="Indoor Air Quality Test" src="img/SmallLogo.png" />';
            function updateImage() {
                var el = document.getElementById('output');
                el.innerHTML = lateralLevel;
            }
            return updateImage(), updateMessage();
        },

        'default': function () {
            return 'Default Value';
        }
    };

    return (issues[issue] || issues['default'])();
}