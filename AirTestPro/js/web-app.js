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
            var nextLevel = '<h5>Where Do You See the Dust?</h5><label><input type="button" name="air-issue" value="Window" onclick="livingRoomDust(this.value);" /></label><label><input type="button" name="air-issue" value="Couch" onclick="???(this.value);" /></label><label><input type="button" name="air-issue" value="TV" onclick="???(this.value);" /></label><label><input type="button" name="air-issue" value="Bookcase" onclick="???(this.value);" /></label><label><input type="button" name="air-issue" value="Picture Frames" onclick="???(this.value);" /></label><label><input type="button" name="air-issue" value="Lamps" onclick="???(this.value);" /></label><label><input type="button" name="air-issue" value="Wood Floor" onclick="???(this.value);" /></label><label><input type="button" name="air-issue" value="Carpet" onclick="???(this.value);" /></label>';
            function updateMessage() {
                var el = document.getElementById('questions');
                el.innerHTML = nextLevel;
            }
            
        
            var lateralLevel = '<a href="airpurifierreviews.html" class="thumbnail"><img alt="Indoor Air Quality Test" src="img/test1.jpg" />'
            function updateImage() {
                var el = document.getElementById('output');
                el.innerHTML = lateralLevel;
            }
            return updateImage(), updateMessage();
        },

        'Dining Room': function () {
            var nextLevel = '<h5>Where Do You See the Dust?</h5><label><input type="button" name="air-issue" value="Window" onclick="???(this.value);" /></label><label><input type="button" name="air-issue" value="Table" onclick="???(this.value);" /></label><label><input type="button" name="air-issue" value="China Cabinet" onclick="???(this.value);" /></label><label><input type="button" name="air-issue" value="Wine Holder" onclick="???(this.value);" /></label><label><input type="button" name="air-issue" value="Chandelier" onclick="???(this.value);" /></label><label><input type="button" name="air-issue" value="Carpet" onclick="???(this.value);" /></label>';
            function updateMessage() {
                var el = document.getElementById('questions');
                el.innerHTML = nextLevel;
            }
        
            var lateralLevel = '<a href="airpurifierreviews.html" class="thumbnail"><img alt="Indoor Air Quality Test" src="img/test1.jpg" />'
            function updateImage() {
                var el = document.getElementById('output');
                el.innerHTML = lateralLevel;
            }
            return updateImage(), updateMessage();
        },

        'Kitchen': function () {
            var nextLevel = '<h5>Where Do You See the Dust?</h5><label><input type="button" name="air-issue" value="Window" onclick="???(this.value);" />'
            function updateMessage() {
                var el = document.getElementById('questions');
                el.innerHTML = nextLevel;
            }
        
            var lateralLevel = '<a href="airpurifierreviews.html" class="thumbnail"><img alt="Indoor Air Quality Test" src="img/test1.jpg" />'
            function updateImage() {
                var el = document.getElementById('output');
                el.innerHTML = lateralLevel;
            }
            return updateImage(), updateMessage();
        },

        'Bedroom': function () {
            var nextLevel = '<h5>Where Do You See the Dust?</h5><label><input type="button" name="air-issue" value="Window" onclick="???(this.value);" />'
            function updateMessage() {
                var el = document.getElementById('questions');
                el.innerHTML = nextLevel;
            }

            var lateralLevel = '<a href="airpurifierreviews.html" class="thumbnail"><img alt="Indoor Air Quality Test" src="img/test1.jpg" />'
            function updateImage() {
                var el = document.getElementById('output');
                el.innerHTML = lateralLevel;
            }
            return updateImage(), updateMessage();
        },

        'Office': function () {
            var nextLevel = '<h5>Where Do You See the Dust?</h5><label><input type="button" name="air-issue" value="Window" onclick="???(this.value);" />'
            function updateMessage() {
                var el = document.getElementById('questions');
                el.innerHTML = nextLevel;
            }

            var lateralLevel = '<a href="airpurifierreviews.html" class="thumbnail"><img alt="Indoor Air Quality Test" src="img/test1.jpg" />'
            function updateImage() {
                var el = document.getElementById('output');
                el.innerHTML = lateralLevel;
            }
            return updateImage(), updateMessage();
        },

        'Office': function () {
            var nextLevel = '<h5>Where Do You See the Dust?</h5><label><input type="button" name="air-issue" value="Window" onclick="???(this.value);" />'
            function updateMessage() {
                var el = document.getElementById('questions');
                el.innerHTML = nextLevel;
            }

            var lateralLevel = '<a href="airpurifierreviews.html" class="thumbnail"><img alt="Indoor Air Quality Test" src="img/test1.jpg" />'
            function updateImage() {
                var el = document.getElementById('output');
                el.innerHTML = lateralLevel;
            }
            return updateImage(), updateMessage();
        },

        'Baby Room': function () {
            var nextLevel = '<h5>Where Do You See the Dust?</h5><label><input type="button" name="air-issue" value="Window" onclick="???(this.value);" />'
            function updateMessage() {
                var el = document.getElementById('questions');
                el.innerHTML = nextLevel;
            }

            var lateralLevel = '<a href="airpurifierreviews.html" class="thumbnail"><img alt="Indoor Air Quality Test" src="img/test1.jpg" />'
            function updateImage() {
                var el = document.getElementById('output');
                el.innerHTML = lateralLevel;
            }
            return updateImage(), updateMessage();
        },

        'Basement': function () {
            var nextLevel = '<h5>Where Do You See the Dust?</h5><label><input type="button" name="air-issue" value="Window" onclick="???(this.value);" />'
            function updateMessage() {
                var el = document.getElementById('questions');
                el.innerHTML = nextLevel;
            }

            var lateralLevel = '<a href="airpurifierreviews.html" class="thumbnail"><img alt="Indoor Air Quality Test" src="img/test1.jpg" />'
            function updateImage() {
                var el = document.getElementById('output');
                el.innerHTML = lateralLevel;
            }
            return updateImage(), updateMessage();
        },

        'Attic': function () {
            var nextLevel = '<h5>Where Do You See the Dust?</h5><label><input type="button" name="air-issue" value="Gable Vents" onclick="???(this.value);" />'
            function updateMessage() {
                var el = document.getElementById('questions');
                el.innerHTML = nextLevel;
            }

            var lateralLevel = '<a href="airpurifierreviews.html" class="thumbnail"><img alt="Indoor Air Quality Test" src="img/test1.jpg" />'
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

            var lateralLevel = '<a href="airpurifierreviews.html" class="thumbnail"><img alt="Indoor Air Quality Test" src="img/test1.jpg" />'
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

            var lateralLevel = '<a href="airpurifierreviews.html" class="thumbnail"><img alt="Indoor Air Quality Test" src="img/test1.jpg" />'
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

            var lateralLevel = '<a href="airpurifierreviews.html" class="thumbnail"><img alt="Indoor Air Quality Test" src="img/test1.jpg" />'
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