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
            var nextLevel = '<h5>What Room is the Issue in?</h5>\
                            <label><input type="button" name="air-issue" value="Living Room" class="btn btn-info btn-sm" onclick="airIssuePollen(this.value);" /></label>\
                            <label><input type="button" name="air-issue" value="Dining Room" class="btn btn-primary btn-sm" onclick="airIssuePollen(this.value);" /></label>\
                            <label><input type="button" name="air-issue" value="Bedroom" class="btn btn-primary btn-sm" onclick="airIssuePollen(this.value);" /></label>\
                            <label><input type="button" name="air-issue" value="Baby Room" class="btn btn-primary btn-sm" onclick="airIssuePollen(this.value);" /></label>';
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

        'Mold': function () {
            var nextLevel = '<h5>Where is the mold?</h5>\
                            <label><input type="button" name="air-issue" value="Basement" class="btn btn-info btn-sm" onclick="airIssueMold(this.value);" /></label>\
                            <label><input type="button" name="air-issue" value="Attic" class="btn btn-primary btn-sm" onclick="airIssueMold(this.value);" /></label>\
                            <label><input type="button" name="air-issue" value="Kitchen" class="btn btn-info btn-sm" onclick="airIssueMold(this.value);" /></label>';
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

        'Bacteria/Viruses': function () {
            return '';
        },

        'Hazardous Volatile Organic Compounts (VOCs)': function () {
            var nextLevel = '<h5>What type?</h5>\
                            <label><input type="button" name="air-issue" value="Formaldehyde" class="btn btn-info btn-sm" onclick="airIssueVOC(this.value);" /></label>\
                            <label><input type="button" name="air-issue" value="Paint" class="btn btn-primary btn-sm" onclick="airIssueVOC(this.value);" /></label>\
                            <label><input type="button" name="air-issue" value="Cleaning Products" class="btn btn-info btn-sm" onclick="airIssueVOC(this.value);" /></label>';
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

        'Smoke': function () {
            var nextLevel = '<h5>Where did the smoke come from?</h5>\
                            <label><input type="button" name="air-issue" value="Smoking" class="btn btn-info btn-sm" onclick="airIssueSmoke(this.value);" /></label>\
                            <label><input type="button" name="air-issue" value="Fire Damage" class="btn btn-primary btn-sm" onclick="airIssueSmoke(this.value);" /></label>\
                            <label><input type="button" name="air-issue" value="Chimney" class="btn btn-info btn-sm" onclick="airIssueSmoke(this.value);" /></label>';
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
            var nextLevel = '<h5>Where do you have these symptoms?</h5>\
                            <label><input type="button" name="air-issue" value="Kitchen" class="btn btn-primary btn-sm" onclick="unknownIssueFlulikeSymptoms(this.value);" /></label>\
                            <label><input type="button" name="air-issue" value="Basement" class="btn btn-info btn-sm" onclick="unknownIssueFlulikeSymptoms(this.value);" /></label>\
                            <label><input type="button" name="air-issue" value="Attic" class="btn btn-primary btn-sm" onclick="unknownIssueFlulikeSymptoms(this.value);" /></label>';
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



function airIssuePollen(issue) {
    var issues = {
        'Living Room': function () {
            var nextLevel = 'Your main living area can easily be filled with the yearly attack of the spring and summer pollen. Honestly, \
                            nobody can escape this fact. If you have your windows open then the pollen will naturally come in and settle on \
                            all surfaces. Your best bet is to keep the windows closed and have an air purifier running that can capture any \
                            pollen that comes in through the door. Also if you have great airflow through your house you can let the pollen \
                            flow in one window and out the next. However, some pollen will become trapped in corners of the house that dont \
                            allow air to flow freely.\
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

        'Dining Room': function () {
            var nextLevel = 'Pollen in the dining room can be a nuisance just like other areas of your home. Many people like to keep their \
                            dining table and china cabinet clean. Your best bet is to keep the windows closed and have an air purifier running \
                            that can capture any pollen that comes in through the door. Also if you have great airflow through your house you \
                            can let the pollen flow in one window and out the next. You will have to do some minor dusting if you keep your \
                            window open at a minimum. I am not suggesting that an air purifier can solve your problems because it cant a \
                            really strong pollen count can overwhelm an air purifier easily and it wont be able to keep up the pace if the \
                            windows are wide open.\
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
            var nextLevel = 'If your bed is covered in the yellow dust of pollen then you have a serious problem. You will be sleeping in this \
                            bed for around 8 hours every night. When you pull the covers over the pollen is reintroduced into the air and then \
                            you breathe it right in and that will usually be enough to turn your allergies on. You will wake up with runny nose, \
                            swollen eyes and all the other symptoms. You could also have pollen on and inside of your dresser. Nobody wants their \
                            clothes covered in pollen because that will do the exact same thing. An air purifier in your bedroom is mandatory in \
                            my opinion and can help out this situation and several others.\
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

        'Baby Room': function () {
            var nextLevel = 'The apple of your eye needs protection from pollen as well. You will always try to guard your child from all the \
                            bad things in the world, but pollen is very persistent. Using a high quality air purifier is key to cleaning their \
                            air and giving you piece of mind. This will also help with other issues that you will find in their rooms (off-gasing, \
                            dust, bad smells).\
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




function airIssueMold(issue) {
    var issues = {
        'Basement': function () {
            var nextLevel = 'Finding mold in your basement is a very bad sign. Most people cant even find mold, they just believe there is mold because of an odd smell and \
                            they are probably right if they have evidence of water damage. Many people have basements where they simply arent well suited. Some parts of the \
                            world have high “water tables” and when the water table is high enough to hit your house the water will win and will find a way inside because \
                            concrete is actually porous. I believe it is porous for just that reason. If you get a flood water will seep through it and leave your home and \
                            if stream hits your home it wont end up “moving” your home and breaking your foundation. I suggest that you wear a mask with a N95 rated filter \
                            and do a little investigative work on the water damage. You want to find the root cause before you bother replacing a rug or a single piece of \
                            drywall just to have it happen again.\
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
            var nextLevel = 'Water damage or humidity in your attic can provide a great place for mold growth. You could see this if you have a bad roof, ice dams, improper \
                            level of insulation, improper airflow and no bathroom ventilation. You will have to go up into your attic yourself to figure out what the issue is. \
                            Fortunately, there are several things you can do to figure out these issues. Check for a breeze, check the temperature, make sure your bathroom fans \
                            vent to the outside of the house and make sure your insulation “R rating” is right for your climate zone. If your roof tiles are bad you will have leaks. \
                            If your airflow is bad then heat will gather in your roof and melt snow that will go backwards under the tiles and end up in the attic. If your bathroom \
                            fans dont have a hose that goes to the outside of the house then the moisture from the shower will be trapped in the attic. Situations like these you can \
                            avoid because mold can go unnoticed in many attics.\
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
            var nextLevel = 'Finding mold in your kitchen can be a sign of many possible problems, but the most important thing to realize is you have water damage. The water may \
                            not be a one time thing. A small leak in a sink, dishwasher, refrigerator ice maker, coffee machine, etc... several water sources can be found in your \
                            kitchen and that doesnt even count the water pipes in the walls. If you found the mold you can start to tell where the water is coming from or originated \
                            from. Make sure you use a N95 filtered mask when you do this. You will be disturbing the mold and it will go airborne again. Keep small children and older \
                            adults away from the area when you do this. Once you find the problem see if you can fix it yourself or if you need to call a professional.\
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



function airIssueVOC(issue) {
    var issues = {
        'Formaldehyde': function () {
            var nextLevel = 'This particular compound, which is well known with the term “off-gasing” is a big problem for many people that dont understand why it is so strong. \
                            Many new materials like carpets, cabinets, foam mattresses, etc... will have a significant amount of off-gasing that needs to occur after they are \
                            unwrapped. The finishing products make an incredible smell that needs to air out of your home. The worst part is having this in the middle of the winter \
                            when you dont want to open your windows....., but you will have too.\
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

        'Paint': function () {
            var nextLevel = 'Everybody knows that when you spray paint that you should use a mask because the molecules that you could breathe in are toxic. However, when people \
                            are painting by hand nobody wears anything. It is something people can forget about when they think about paint. The storage of paint is something else \
                            that people dont think about. Even when paint is sealed small amounts of VOCs are released over time and they can have a significant effect in a small area. \
                            If you do have to store paint in your home keep it as far away from living areas as possible. Also make sure that you have firmly closed them and it would \
                            even be better if you were able to wrap them in a sealed bag.\
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

        'Cleaning Products': function () {
            var nextLevel = 'Cleaning materials are made of all kinds of bad things most of the time. Their are some good “green” companies available now, but for the most part a \
                            lot of these products are toxic. Many people are allergic to the smell or just dont like the smell of them. When you use them the smell takes a while to \
                            leave, but when you store them you really arent sealing them closed. You probably store them under your kitchen and bathroom sink and in your basement if \
                            you have one. When it is in your sink you will have a slow leak of VOCs and people that are susceptible to that will have issues that they will have a hard \
                            time tracking down. If you find your issues are stronger when you are in these areas then you may be susceptible to hazardous VOCs. \
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



function airIssueSmoke(issue) {
    var issues = {
        'Smoking': function () {
            var nextLevel = 'If you are a smoker or live with a smoker then you will need to take extra measures to make sure as little of the smell enters or stays in the \
                            house. The best way to reduce smoke smell is to smoke outside of the house in clothing that doesnt absorb these smells (wool). Of course in the \
                            summer it is hard to not wear cotton, which will absorb this smell easily. If a person if smoking in your home then their really isnt much you \
                            can do. You can buy an air purifier that concentrates on removing smells, but it will cost you a lot of money because these air filters fill up \
                            quick when absorbing smells. I personally think you should smoke outside if you have this issue and it will reduce it enough to make it bearable \
                            for people without any major health issues. If somebody has COPD or lung disease in your home then no harmful smells should be inside the house \
                            and they should be using a top quality air purification device.\
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

        'Fire Damage': function () {
            var nextLevel = 'One of the first things you should do when you have fire damage is call a restoration crew and if the damage is bad a structural engineer. A \
                            restoration crew will have powerful ionic air purifiers that will release negative ions (ozone) that will attach themselves to the smoke particles \
                            and then drop to the ground. This will remove the smoke smell from the area. If there is a lot of damage then you should call a structural engineer \
                            to make sure the structure is stable.\
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

        'Chimney': function () {
            var nextLevel = 'Smoke from the chimney is something that many people know is possible, but is largely ignored because its an open fireplace. Heat is supposed to \
                            felt in the immediate area, but you shouldnt be filling your home full of smoke. The flue is supposed to suck of this smoke and allow it to exit the \
                            home safely. If you have logs that have a lot of loose bark it is more likely for cinders to pop off the fire and land on the floor (This could cause \
                            a fire). If this happens enough smoke can become captured by your home. Also if your chimney isnt properly sealed smoke may not properly exit the home \
                            and reenter the walls before it reaches the top of the chimney. You can stop cinders from escaping by using a gate and having a large stone surface \
                            for them to land on. If your chimney is failing you will need to contact a professional to see if it can be patched or if you need to tear down and \
                            rebuild your fireplace.\
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



function unknownIssueFlulikeSymptoms(issue) {
    var issues = {
        'Basement': function () {
            var nextLevel = '<p>If you feel like you are getting sick in certain parts of your home or just somewhere in your home in general this \
                            is a big warning sign that you have a mold issue created by water damage. In your basement you will want to check your \
                            walls and floor for water damage of any kind. If you have a finished basement, I would suggest that you go to the part \
                            of the wall that is on the high side of the “grade” of the yard. If the grade of your yard doesnt route water properly \
                            around your home water will hit your foundation and will find a crack to get inside or make one over time. If you are \
                            wearing proper N95 rated air filter masks then you can cut a small hole into the drywall and check if mold is visible. \
                            Once you have confirmed this it is time to call a professional mold remediation specialists.</p> \
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
            var nextLevel = '<p>If you feel like you are getting sick in certain parts of your home or just somewhere in your home in general this \
                            is a big warning sign that you have a mold issue created by water damage. Your kitchen is full of water sources and \
                            chances for mold to grow is near infinite. The most common way for this to happen is leaking pipe connections. It \
                            could be your sink, garbage disposal, or the dishwasher. You should check these fittings if you suspect that your \
                            issue is within this area of your house. Another issue you might find is the water spilling on the countertop will \
                            hit the wall and disappear. If this collect somewhere mold will have a chance to grow secretly. Once you have confirmed \
                            this is the issue it is time to call a professional mold remediation specialists.</p> \
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
            var nextLevel = '<p>If you feel like you are getting sick in certain parts of your home or just somewhere in your home in general \
                            this is a big warning sign that you have a mold issue created by water damage. Not many people go into their attic \
                            unless it is a living area or they are storing stuff up there. As you know many roofs go well past their expiration \
                            dates and people do not realize it. Slowly water will find its way through the roof and allow your insulation get wet. \
                            This is all you need to do to create a great environment for mold growth. If you do disturb this area the mold will \
                            spread throughout the attic maybe find its way down into your living areas through a HVAC system or unknown holes. \
                            When you purchase your home always check the date of your roof and allow about 20 years before you roofer look at it \
                            again.</p> \
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