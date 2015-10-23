/*
First level Questions/Answers
*/

function airQuality() {
    var beginning = '<h5>What Issues or Symptoms are you having?</h5><label><input type="button" name="air-issue" value="Allergy Symptoms" onclick="unknownIssue(this.value);" /></label><label><input type="button" name="air-issue" value="Flu-like Symptoms" onclick="unknownIssue(this.value);" /></label><label><input type="button" name="air-issue" value="Bad Smells" onclick="unknownIssue(this.value);" /></label><label><input type="button" name="air-issue" value="Hard Time Breathing" onclick="unknownIssue(this.value);" /></label><label><input type="button" name="air-issue" value="Dust" onclick="airIssue(this.value);" /></label><label><input type="button" name="air-issue" value="Pollen" onclick="airIssue(this.value);" /></label><label><input type="button" name="air-issue" value="Mold" onclick="airIssue(this.value);" /></label><label><input type="button" name="air-issue" value="Bacteria/Viruses" onclick="airIssue(this.value);" /></label><label><input type="button" name="air-issue" value="Hazardous Volatile Organic Compounts (VOCs)" onclick="airIssue(this.value);" /></label><label><input type="button" name="air-issue" value="Smoke" onclick="airIssue(this.value);" /></label><label><input type="button" name="air-issue" value="Smog" onclick="airIssue(this.value);" /></label>';
    function updateMessage() {
        var el = document.getElementById('questions');
        el.innerHTML = beginning;
    }

    return updateMessage();

}

function airQualityImage() {
    var lateralLevel = '<a href="index.html" class="thumbnail"><img alt="Company Logo" src="img/SmallLogo.png" />'
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
            var nextLevel = '<h5>What Room is the Issue in?</h5><label><input type="button" name="air-issue" value="Living Room" onclick="airIssueDust(this.value);" /></label><label><input type="button" name="air-issue" value="Dining Room" onclick="airIssueDust(this.value);" /></label><label><input type="button" name="air-issue" value="Kitchen" onclick="airIssueDust(this.value);" /></label><label><input type="button" name="air-issue" value="Bedroom" onclick="airIssueDust(this.value);" /></label><label><input type="button" name="air-issue" value="Office" onclick="airIssueDust(this.value);" /></label><label><input type="button" name="air-issue" value="Baby Room" onclick="airIssueDust(this.value);" /></label><label><input type="button" name="air-issue" value="Basement" onclick="airIssueDust(this.value);" /></label><label><input type="button" name="air-issue" value="Attic" onclick="airIssueDust(this.value);" /></label>';
            function updateMessage() {
                var el = document.getElementById('questions');
                el.innerHTML = nextLevel;
            }

            var lateralLevel = '<a href="index.html" class="thumbnail"><img alt="Company Logo" src="img/SmallLogo.png" />'
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
            var nextLevel = '<h5>Where do you have these symptoms?</h5><label><input type="button" name="air-issue" value="Living Room" onclick="unknownIssueArea(this.value);" /></label>';
            function updateMessage() {
                var el = document.getElementById('questions');
                el.innerHTML = nextLevel;
            }
            return updateMessage();
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
            var nextLevel = '<h5>Where Do You See the Dust?</h5><label><input type="button" name="air-issue" value="Window" onclick="livingRoomDust(this.value);" /></label><label><input type="button" name="air-issue" value="Couch" onclick="livingRoomDust(this.value);" /></label><label><input type="button" name="air-issue" value="TV" onclick="livingRoomDust(this.value);" /></label><label><input type="button" name="air-issue" value="Bookcase" onclick="livingRoomDust(this.value);" /></label><label><input type="button" name="air-issue" value="Picture Frames" onclick="livingRoomDust(this.value);" /></label><label><input type="button" name="air-issue" value="Lamps" onclick="livingRoomDust(this.value);" /></label><label><input type="button" name="air-issue" value="Wood Floor" onclick="livingRoomDust(this.value);" /></label><label><input type="button" name="air-issue" value="Carpet" onclick="livingRoomDust(this.value);" /></label>';
            function updateMessage() {
                var el = document.getElementById('questions');
                el.innerHTML = nextLevel;
            }
            
        
            var lateralLevel = '<a href="airpurifierreviews.html" class="thumbnail"><img alt="Indoor Air Quality Test" src="img/SmallLogo.png" />'
            function updateImage() {
                var el = document.getElementById('output');
                el.innerHTML = lateralLevel;
            }
            return updateImage(), updateMessage();
        },

        'Dining Room': function () {
            var nextLevel = '<h5>Where Do You See the Dust?</h5><label><input type="button" name="air-issue" value="Window" onclick="diningRoomDust(this.value);" /></label><label><input type="button" name="air-issue" value="Dining Table" onclick="diningRoomDust(this.value);" /></label><label><input type="button" name="air-issue" value="China Cabinet" onclick="diningRoomDust(this.value);" /></label><label><input type="button" name="air-issue" value="Chandelier" onclick="diningRoomDust(this.value);" /></label><label><input type="button" name="air-issue" value="Carpet" onclick="diningRoomDust(this.value);" /></label></label><label><input type="button" name="air-issue" value="Wood Floor" onclick="diningRoomDust(this.value);" /></label>';
            function updateMessage() {
                var el = document.getElementById('questions');
                el.innerHTML = nextLevel;
            }
        
            var lateralLevel = '<a href="airpurifierreviews.html" class="thumbnail"><img alt="Indoor Air Quality Test" src="img/SmallLogo.png" />'
            function updateImage() {
                var el = document.getElementById('output');
                el.innerHTML = lateralLevel;
            }
            return updateImage(), updateMessage();
        },

        'Kitchen': function () {
            var nextLevel = '<h5>Where Do You See the Dust?</h5><label><input type="button" name="air-issue" value="Appliances" onclick="kitchenDust(this.value);" /></label><label><input type="button" name="air-issue" value="Countertop" onclick="kitchenDust(this.value);" /></label><label><input type="button" name="air-issue" value="Wood Floor" onclick="kitchenDust(this.value);" /></label><label><input type="button" name="air-issue" value="Window" onclick="kitchenDust(this.value);" /></label>'
            function updateMessage() {
                var el = document.getElementById('questions');
                el.innerHTML = nextLevel;
            }
        
            var lateralLevel = '<a href="airpurifierreviews.html" class="thumbnail"><img alt="Indoor Air Quality Test" src="img/SmallLogo.png" />'
            function updateImage() {
                var el = document.getElementById('output');
                el.innerHTML = lateralLevel;
            }
            return updateImage(), updateMessage();
        },

        'Bedroom': function () {
            var nextLevel = '<h5>Where Do You See the Dust?</h5><label><input type="button" name="air-issue" value="Window" onclick="bedroomDust(this.value);" /></label><label><input type="button" name="air-issue" value="Dresser" onclick="bedroomDust(this.value);" /></label><label><input type="button" name="air-issue" value="Bed" onclick="bedroomDust(this.value);" /></label><label><input type="button" name="air-issue" value="Picture Frames" onclick="bedroomDust(this.value);" /></label><label><input type="button" name="air-issue" value="Lamps" onclick="bedroomDust(this.value);" /></label><label><input type="button" name="air-issue" value="Carpet" onclick="bedroomDust(this.value);" /></label><label><input type="button" name="air-issue" value="Wood Floor" onclick="bedroomDust(this.value);" /></label>'
            function updateMessage() {
                var el = document.getElementById('questions');
                el.innerHTML = nextLevel;
            }

            var lateralLevel = '<a href="airpurifierreviews.html" class="thumbnail"><img alt="Indoor Air Quality Test" src="img/SmallLogo.png" />'
            function updateImage() {
                var el = document.getElementById('output');
                el.innerHTML = lateralLevel;
            }
            return updateImage(), updateMessage();
        },


        'Basement': function () {
            var nextLevel = '<p>The basement is an area that is usually not well defined. It is simply a copy of the area above, but usually with less headroom and major utilities and appliances located in closed areas. Their is little air movement in the basement so when air pressure follows you downstairs all the dust travels with it and doesnt escape. Cleaning the basement of this dust is crucial especially if you use it alot. You will do your laundry down here usually and your furnace/HVAC and water heater will probably be here too. Nobody will move the furnace and water heater and a ton of dust will collect around and under these objects. You will have to take mindfully clean these. The furnace is something that actually benefits from cleaning to make it more effiecent. You should look into how to do this properly. You should move your washer and dryer and dust under there because sometimes lint will fall out of the dryer and these are objects that are not moved often. Air purifier will help in areas like these, but they are best if kept running 24/7 because of the lack if air movement.</p>'
            function updateMessage() {
                var el = document.getElementById('questions');
                el.innerHTML = nextLevel;
            }

            var lateralLevel = '<a href="airpurifierreviews.html" class="thumbnail"><img alt="Indoor Air Quality Test" src="img/SmallLogo.png" />'
            function updateImage() {
                var el = document.getElementById('output');
                el.innerHTML = lateralLevel;
            }
            return updateImage(), updateMessage();
        },

        'Attic': function () {
            var nextLevel = '<p></p>'
            function updateMessage() {
                var el = document.getElementById('questions');
                el.innerHTML = nextLevel;
            }

            var lateralLevel = '<a href="airpurifierreviews.html" class="thumbnail"><img alt="Indoor Air Quality Test" src="img/SmallLogo.png" />'
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
            var nextLevel = '<h5>Has it been opened?</h5><label><input type="button" name="air-issue" value="Yes" onclick="livingRoomDustWindow(this.value);" /></label><label><input type="button" name="air-issue" value="No" onclick="livingRoomDustWindow(this.value);" /></label>'
            function updateMessage() {
                var el = document.getElementById('questions');
                el.innerHTML = nextLevel;
            }

            var lateralLevel = '<a href="airpurifierreviews.html" class="thumbnail"><img alt="Indoor Air Quality Test" src="img/SmallLogo.png" />'
            function updateImage() {
                var el = document.getElementById('output');
                el.innerHTML = lateralLevel;
            }
            return updateImage(), updateMessage();
        },

        'Couch': function () {
            var nextLevel = '<p>80% of the dust in your home is your own skin particles. Its something you dont think about, but it is even worse if you dont remove the skin daily by washing. A couch is warm and comfy, but it is like a brush for your body. Also when you sit on the coach you will notice on a sunlit morning that those particles fly into the air and possibly float for hours before they land somewhere else.</p><br /> <a href="index.html">Restart Web Application'
            function updateMessage() {
                var el = document.getElementById('questions');
                el.innerHTML = nextLevel;
            }

            var lateralLevel = '<a href="airpurifierreviews.html" class="thumbnail"><img alt="Indoor Air Quality Test" src="img/SmallLogo.png" />'
            function updateImage() {
                var el = document.getElementById('output');
                el.innerHTML = lateralLevel;
            }
            return updateImage(), updateMessage();
        },

        'TV': function () {
            var nextLevel = '<p>The TV naturally attracts airborne dust with its negative charge. It is the reason the stand is always covered in dust before you see it in other places and is thicker.</p><br /> <a href="index.html">Restart Web Application'
            function updateMessage() {
                var el = document.getElementById('questions');
                el.innerHTML = nextLevel;
            }

            var lateralLevel = '<a href="airpurifierreviews.html" class="thumbnail"><img alt="Indoor Air Quality Test" src="img/SmallLogo.png" />'
            function updateImage() {
                var el = document.getElementById('output');
                el.innerHTML = lateralLevel;
            }
            return updateImage(), updateMessage();
        },

        'Bookcase': function () {
            var nextLevel = '<p>Natural airborne dust will settle in places like this naturally over time. It is not disturbed often and is usually out of the main traffic area. However, you might have issues with book lice, which are 1/16 of an inch long. They like the mold that occurs on books because of its composition. Old books will have a lot of this and you are sure to see one in a variety of colors crawl across the page. Reducing the humidity will stop the mold that occurs on these books and other paper substances in your home.</p><br /> <a href="index.html">Restart Web Application'
            function updateMessage() {
                var el = document.getElementById('questions');
                el.innerHTML = nextLevel;
            }

            var lateralLevel = '<a href="airpurifierreviews.html" class="thumbnail"><img alt="Indoor Air Quality Test" src="img/SmallLogo.png" />'
            function updateImage() {
                var el = document.getElementById('output');
                el.innerHTML = lateralLevel;
            }
            return updateImage(), updateMessage();
        },

        'Picture Frames': function () {
            var nextLevel = '<p>The amount of dust on picture frames is usually minimal. It can tell you the difference between what is collected on the floor in comparison to the walls. These should be cleaned periodically.</p><br /> <a href="index.html">Restart Web Application'
            function updateMessage() {
                var el = document.getElementById('questions');
                el.innerHTML = nextLevel;
            }

            var lateralLevel = '<a href="airpurifierreviews.html" class="thumbnail"><img alt="Indoor Air Quality Test" src="img/SmallLogo.png" />'
            function updateImage() {
                var el = document.getElementById('output');
                el.innerHTML = lateralLevel;
            }
            return updateImage(), updateMessage();
        },


        'Lamps': function () {
            var nextLevel = '<p>Lamps can have a lot of dust collect on them because of the negative charge they put emit. It is similar to why the TV is always dusty. In this situation it allows the cloth lamp shade to become engrossed with dust as you have seen in many old homes.</p><br /> <a href="index.html">Restart Web Application'
            function updateMessage() {
                var el = document.getElementById('questions');
                el.innerHTML = nextLevel;
            }

            var lateralLevel = '<a href="airpurifierreviews.html" class="thumbnail"><img alt="Indoor Air Quality Test" src="img/SmallLogo.png" />'
            function updateImage() {
                var el = document.getElementById('output');
                el.innerHTML = lateralLevel;
            }
            return updateImage(), updateMessage();
        },

        'Wood Floor': function () {
            var nextLevel = '<p>Dust will collect on wood floors and be seen and a lot of people dont like that and put down carpet. The problem here is if you see the dust you will clean it and you will have less allergens in your home. If you have carpet you will not clean it as often and when you do it will not clean as well and it will actually be dispersed into the air making your problems worse.</p><br /> <a href="index.html">Restart Web Application'
            function updateMessage() {
                var el = document.getElementById('questions');
                el.innerHTML = nextLevel;
            }

            var lateralLevel = '<a href="airpurifierreviews.html" class="thumbnail"><img alt="Indoor Air Quality Test" src="img/SmallLogo.png" />'
            function updateImage() {
                var el = document.getElementById('output');
                el.innerHTML = lateralLevel;
            }
            return updateImage(), updateMessage();
        },

        'Carpet': function () {
            var nextLevel = '<p>If you can actually seen the dust in your carpet you have a serious problem. You should be vacuuming your carpet at least once a week. The hardest part is not spreading the dust while trying to clean it, but I can show how to do that properly.</p><br /> <a href="index.html">Restart Web Application'
            function updateMessage() {
                var el = document.getElementById('questions');
                el.innerHTML = nextLevel;
            }

            var lateralLevel = '<a href="airpurifierreviews.html" class="thumbnail"><img alt="Indoor Air Quality Test" src="img/SmallLogo.png" />'
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
            var nextLevel = '<h5>Has it been opened?</h5><label><input type="button" name="air-issue" value="Yes" onclick="diningRoomDustWindow(this.value);" /></label><label><input type="button" name="air-issue" value="No" onclick="diningRoomDustWindow(this.value);" /></label>'
            function updateMessage() {
                var el = document.getElementById('questions');
                el.innerHTML = nextLevel;
            }

            var lateralLevel = '<a href="airpurifierreviews.html" class="thumbnail"><img alt="Indoor Air Quality Test" src="img/SmallLogo.png" />'
            function updateImage() {
                var el = document.getElementById('output');
                el.innerHTML = lateralLevel;
            }
            return updateImage(), updateMessage();
        },

        'Dining Table': function () {
            var nextLevel = '<p>Tables are just like any other flat surface that is within your home. The more surface area that is available the more dust will collect upon it. Keeping your table clean is a daily effort if you eat on it. If you dont use it that often then you will find yourself having to give it a quick cleanup every couple of weeks. However, the use of an mid-grade air purifier can help the situation by cleaning the area within the area, but I only find this optimal during the winter when the windows are usually closed.</p><br /> <a href="index.html">Restart Web Application'
            function updateMessage() {
                var el = document.getElementById('questions');
                el.innerHTML = nextLevel;
            }

            var lateralLevel = '<a href="airpurifierreviews.html" class="thumbnail"><img alt="Indoor Air Quality Test" src="img/SmallLogo.png" />'
            function updateImage() {
                var el = document.getElementById('output');
                el.innerHTML = lateralLevel;
            }
            return updateImage(), updateMessage();
        },

        'China Cabinet': function () {
            var nextLevel = '<p></p><br /> <a href="index.html">Restart Web Application'
            function updateMessage() {
                var el = document.getElementById('questions');
                el.innerHTML = nextLevel;
            }

            var lateralLevel = '<a href="airpurifierreviews.html" class="thumbnail"><img alt="Indoor Air Quality Test" src="img/SmallLogo.png" />'
            function updateImage() {
                var el = document.getElementById('output');
                el.innerHTML = lateralLevel;
            }
            return updateImage(), updateMessage();
        },

        'Chandelier': function () {
            var nextLevel = '<p></p><br /> <a href="index.html">Restart Web Application'
            function updateMessage() {
                var el = document.getElementById('questions');
                el.innerHTML = nextLevel;
            }

            var lateralLevel = '<a href="airpurifierreviews.html" class="thumbnail"><img alt="Indoor Air Quality Test" src="img/SmallLogo.png" />'
            function updateImage() {
                var el = document.getElementById('output');
                el.innerHTML = lateralLevel;
            }
            return updateImage(), updateMessage();
        },

        'Carpet': function () {
            var nextLevel = '<p>If you can actually seen the dust in your carpet you have a serious problem. You should be vacuuming your carpet at least once a week. The hardest part is not spreading the dust while trying to clean it, but I can show how to do that properly.</p><br /> <a href="index.html">Restart Web Application'
            function updateMessage() {
                var el = document.getElementById('questions');
                el.innerHTML = nextLevel;
            }

            var lateralLevel = '<a href="airpurifierreviews.html" class="thumbnail"><img alt="Indoor Air Quality Test" src="img/SmallLogo.png" />'
            function updateImage() {
                var el = document.getElementById('output');
                el.innerHTML = lateralLevel;
            }
            return updateImage(), updateMessage();
        },

        'Wood Floor': function () {
            var nextLevel = '<p>Dust will collect on wood floors and be seen and a lot of people dont like that and put down carpet. The problem here is if you see the dust you will clean it and you will have less allergens in your home. If you have carpet you will not clean it as often and when you do it will not clean as well and it will actually be dispersed into the air making your problems worse.</p><br /> <a href="index.html">Restart Web Application'
            function updateMessage() {
                var el = document.getElementById('questions');
                el.innerHTML = nextLevel;
            }

            var lateralLevel = '<a href="airpurifierreviews.html" class="thumbnail"><img alt="Indoor Air Quality Test" src="img/SmallLogo.png" />'
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
            var nextLevel = '<h5>Has it been opened?</h5><label><input type="button" name="air-issue" value="Yes" onclick="kitchenDustWindow(this.value);" /></label><label><input type="button" name="air-issue" value="No" onclick="kitchenDustWindow(this.value);" /></label>'
            function updateMessage() {
                var el = document.getElementById('questions');
                el.innerHTML = nextLevel;
            }

            var lateralLevel = '<a href="airpurifierreviews.html" class="thumbnail"><img alt="Indoor Air Quality Test" src="img/SmallLogo.png" />'
            function updateImage() {
                var el = document.getElementById('output');
                el.innerHTML = lateralLevel;
            }
            return updateImage(), updateMessage();
        },

        'Appliances': function () {
            var nextLevel = '<p>It is very common to see a massive amount of dust around your household appliances within the kitchen. The refrigerator is the worst culprit because you are unlikely to clean around it and under it. Once dust floats into these nooks and crannies it is very hard for an air purification system to remove it. Plus the electrical charge draws it to these areas. I suggest that you try your best to clean the overall air and clean around these appliances once every 3-6 months depending on how bad it is. </p><br /> <a href="index.html">Restart Web Application'
            function updateMessage() {
                var el = document.getElementById('questions');
                el.innerHTML = nextLevel;
            }

            var lateralLevel = '<a href="airpurifierreviews.html" class="thumbnail"><img alt="Indoor Air Quality Test" src="img/SmallLogo.png" />'
            function updateImage() {
                var el = document.getElementById('output');
                el.innerHTML = lateralLevel;
            }
            return updateImage(), updateMessage();
        },

        'Countertop': function () {
            var nextLevel = '<p>It is quite hard for dust to collect on countertops. They are used way to often for that to happen normally. If you do see some dust on some unused areas or under appliances then will benefit from cleaning the air that is in the area more often. I would suggest cleaning under these items every month as well.</p><br /> <a href="index.html">Restart Web Application'
            function updateMessage() {
                var el = document.getElementById('questions');
                el.innerHTML = nextLevel;
            }

            var lateralLevel = '<a href="airpurifierreviews.html" class="thumbnail"><img alt="Indoor Air Quality Test" src="img/SmallLogo.png" />'
            function updateImage() {
                var el = document.getElementById('output');
                el.innerHTML = lateralLevel;
            }
            return updateImage(), updateMessage();
        },

        'Wood Floor': function () {
            var nextLevel = '<p>Dust will collect on wood floors and be seen and a lot of people dont like that and put down carpet. The problem here is if you see the dust you will clean it and you will have less allergens in your home. If you have carpet you will not clean it as often and when you do it will not clean as well and it will actually be dispersed into the air making your problems worse.</p><br /> <a href="index.html">Restart Web Application'
            function updateMessage() {
                var el = document.getElementById('questions');
                el.innerHTML = nextLevel;
            }

            var lateralLevel = '<a href="airpurifierreviews.html" class="thumbnail"><img alt="Indoor Air Quality Test" src="img/SmallLogo.png" />'
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
            var nextLevel = '<h5>Has it been opened?</h5><label><input type="button" name="air-issue" value="Yes" onclick="bedrooomDustWindow(this.value);" /></label><label><input type="button" name="air-issue" value="No" onclick="bedroomDustWindow(this.value);" /></label>'
            function updateMessage() {
                var el = document.getElementById('questions');
                el.innerHTML = nextLevel;
            }

            var lateralLevel = '<a href="airpurifierreviews.html" class="thumbnail"><img alt="Indoor Air Quality Test" src="img/SmallLogo.png" />'
            function updateImage() {
                var el = document.getElementById('output');
                el.innerHTML = lateralLevel;
            }
            return updateImage(), updateMessage();
        },

        'Bed': function () {
            var nextLevel = '<p>Dust on your bed is a bad thing. It is going to happen if you have an irregular amount of dust in your room and it has nowhere to go. Simply using an air purifier will help with this. You dont need anything expensive or high quality for this type of issue.</p><br /> <a href="index.html">Restart Web Application'
            function updateMessage() {
                var el = document.getElementById('questions');
                el.innerHTML = nextLevel;
            }

            var lateralLevel = '<a href="airpurifierreviews.html" class="thumbnail"><img alt="Indoor Air Quality Test" src="img/SmallLogo.png" />'
            function updateImage() {
                var el = document.getElementById('output');
                el.innerHTML = lateralLevel;
            }
            return updateImage(), updateMessage();
        },


        'Picture Frames': function () {
            var nextLevel = '<p>The amount of dust on picture frames is usually minimal. It can tell you the difference between what is collected on the floor in comparison to the walls. These should be cleaned periodically.</p><br /> <a href="index.html">Restart Web Application'
            function updateMessage() {
                var el = document.getElementById('questions');
                el.innerHTML = nextLevel;
            }

            var lateralLevel = '<a href="airpurifierreviews.html" class="thumbnail"><img alt="Indoor Air Quality Test" src="img/SmallLogo.png" />'
            function updateImage() {
                var el = document.getElementById('output');
                el.innerHTML = lateralLevel;
            }
            return updateImage(), updateMessage();
        },


        'Lamps': function () {
            var nextLevel = '<p>Lamps can have a lot of dust collect on them because of the negative charge they put emit. It is similar to why the TV is always dusty. In this situation it allows the cloth lamp shade to become engrossed with dust as you have seen in many old homes.</p><br /> <a href="index.html">Restart Web Application'
            function updateMessage() {
                var el = document.getElementById('questions');
                el.innerHTML = nextLevel;
            }

            var lateralLevel = '<a href="airpurifierreviews.html" class="thumbnail"><img alt="Indoor Air Quality Test" src="img/SmallLogo.png" />'
            function updateImage() {
                var el = document.getElementById('output');
                el.innerHTML = lateralLevel;
            }
            return updateImage(), updateMessage();
        },

        'Wood Floor': function () {
            var nextLevel = '<p>Dust will collect on wood floors and be seen and a lot of people dont like that and put down carpet. The problem here is if you see the dust you will clean it and you will have less allergens in your home. If you have carpet you will not clean it as often and when you do it will not clean as well and it will actually be dispersed into the air making your problems worse.</p><br /> <a href="index.html">Restart Web Application'
            function updateMessage() {
                var el = document.getElementById('questions');
                el.innerHTML = nextLevel;
            }

            var lateralLevel = '<a href="airpurifierreviews.html" class="thumbnail"><img alt="Indoor Air Quality Test" src="img/SmallLogo.png" />'
            function updateImage() {
                var el = document.getElementById('output');
                el.innerHTML = lateralLevel;
            }
            return updateImage(), updateMessage();
        },

        'Carpet': function () {
            var nextLevel = '<p>If you can actually seen the dust in your carpet you have a serious problem. You should be vacuuming your carpet at least once a week. The hardest part is not spreading the dust while trying to clean it, but I can show how to do that properly.</p><br /> <a href="index.html">Restart Web Application'
            function updateMessage() {
                var el = document.getElementById('questions');
                el.innerHTML = nextLevel;
            }

            var lateralLevel = '<a href="airpurifierreviews.html" class="thumbnail"><img alt="Indoor Air Quality Test" src="img/SmallLogo.png" />'
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
            var nextLevel = '<p>80% of dust in the air is made of skin particles within a home. However, when a window is open dust can contain many different components and the natural air pressure  outside is greater than the pressure inside. This creates negative air pressure and pulls whats outside in. This is normal to see in every home when the window is open.</p> <br /> <a href="index.html">Restart Web Application</a>'
            function updateMessage() {
                var el = document.getElementById('questions');
                el.innerHTML = nextLevel;
            }

            var lateralLevel = '<a href="airpurifierreviews.html" class="thumbnail"><img alt="Indoor Air Quality Test" src="img/SmallLogo.png" />'
            function updateImage() {
                var el = document.getElementById('output');
                el.innerHTML = lateralLevel;
            }
            return updateImage(), updateMessage();
        },

        'No': function () {
            var nextLevel = '<p>Since the window has been mainly closed only a small amount of dust can be attributed to outside factors. People enter their home through the door all the time, but that is only a small amount as well. This dust is mainly from your own body. 80% of the dust in every home is human skin cells. Amazingly we shed skin at a fast rate. This is the same way dogs are able to track humans very easily.</p> <br /> <a href="index.html">Restart Web Application</a>'
                function updateMessage() {
                var el = document.getElementById('questions');
                el.innerHTML = nextLevel;
            }

            var lateralLevel = '<a href="airpurifierreviews.html" class="thumbnail"><img alt="Indoor Air Quality Test" src="img/SmallLogo.png" />'
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
            var nextLevel = '<p>80% of dust in the air is made of skin particles within a home. However, when a window is open dust can contain many different components and the natural air pressure  outside is greater than the pressure inside. This creates negative air pressure and pulls whats outside in. This is normal to see in every home when the window is open.</p> <br /> <a href="index.html">Restart Web Application</a>'
            function updateMessage() {
                var el = document.getElementById('questions');
                el.innerHTML = nextLevel;
            }

            var lateralLevel = '<a href="airpurifierreviews.html" class="thumbnail"><img alt="Indoor Air Quality Test" src="img/SmallLogo.png" />'
            function updateImage() {
                var el = document.getElementById('output');
                el.innerHTML = lateralLevel;
            }
            return updateImage(), updateMessage();
        },

        'No': function () {
            var nextLevel = '<p>Since the window has been mainly closed only a small amount of dust can be attributed to outside factors. People enter their home through the door all the time, but that is only a small amount as well. This dust is mainly from your own body. 80% of the dust in every home is human skin cells. Amazingly we shed skin at a fast rate. This is the same way dogs are able to track humans very easily.</p> <br /> <a href="index.html">Restart Web Application</a>'
            function updateMessage() {
                var el = document.getElementById('questions');
                el.innerHTML = nextLevel;
            }

            var lateralLevel = '<a href="airpurifierreviews.html" class="thumbnail"><img alt="Indoor Air Quality Test" src="img/SmallLogo.png" />'
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
            var nextLevel = '<p>80% of dust in the air is made of skin particles within a home. However, when a window is open dust can contain many different components and the natural air pressure  outside is greater than the pressure inside. This creates negative air pressure and pulls whats outside in. This is normal to see in every home when the window is open.</p> <br /> <a href="index.html">Restart Web Application</a>'
            function updateMessage() {
                var el = document.getElementById('questions');
                el.innerHTML = nextLevel;
            }

            var lateralLevel = '<a href="airpurifierreviews.html" class="thumbnail"><img alt="Indoor Air Quality Test" src="img/SmallLogo.png" />'
            function updateImage() {
                var el = document.getElementById('output');
                el.innerHTML = lateralLevel;
            }
            return updateImage(), updateMessage();
        },

        'No': function () {
            var nextLevel = '<p>Since the window has been mainly closed only a small amount of dust can be attributed to outside factors. People enter their home through the door all the time, but that is only a small amount as well. This dust is mainly from your own body. 80% of the dust in every home is human skin cells. Amazingly we shed skin at a fast rate. This is the same way dogs are able to track humans very easily.</p> <br /> <a href="index.html">Restart Web Application</a>'
            function updateMessage() {
                var el = document.getElementById('questions');
                el.innerHTML = nextLevel;
            }

            var lateralLevel = '<a href="airpurifierreviews.html" class="thumbnail"><img alt="Indoor Air Quality Test" src="img/SmallLogo.png" />'
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
            var nextLevel = '<p>80% of dust in the air is made of skin particles within a home. However, when a window is open dust can contain many different components and the natural air pressure  outside is greater than the pressure inside. This creates negative air pressure and pulls whats outside in. This is normal to see in every home when the window is open.</p> <br /> <a href="index.html">Restart Web Application</a>'
            function updateMessage() {
                var el = document.getElementById('questions');
                el.innerHTML = nextLevel;
            }

            var lateralLevel = '<a href="airpurifierreviews.html" class="thumbnail"><img alt="Indoor Air Quality Test" src="img/SmallLogo.png" />'
            function updateImage() {
                var el = document.getElementById('output');
                el.innerHTML = lateralLevel;
            }
            return updateImage(), updateMessage();
        },

        'No': function () {
            var nextLevel = '<p>Since the window has been mainly closed only a small amount of dust can be attributed to outside factors. People enter their home through the door all the time, but that is only a small amount as well. This dust is mainly from your own body. 80% of the dust in every home is human skin cells. Amazingly we shed skin at a fast rate. This is the same way dogs are able to track humans very easily.</p> <br /> <a href="index.html">Restart Web Application</a>'
            function updateMessage() {
                var el = document.getElementById('questions');
                el.innerHTML = nextLevel;
            }

            var lateralLevel = '<a href="airpurifierreviews.html" class="thumbnail"><img alt="Indoor Air Quality Test" src="img/SmallLogo.png" />'
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