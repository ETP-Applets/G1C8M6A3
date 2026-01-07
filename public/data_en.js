const appData = {
    en: {
        "standard-ui": [
            {
                page1: {
                    headers: {
                        title: "",
                    },
                    workingArea: {
                        welcomeText:
                            "Let’s identify polygons as quadrilaterals or regular polygons based on their sides.",
                        startWelcomeText: "Tap “Start” to begin.",
                        startText: "Start"
                    },
                },

                page2: {
                    headers: {
                        title:
                            "Identify the polygon shown. ",
                    },
                    
                    navigationArea: {
                        text: "Tap the correct answer.",
                    },
                    navigatorArea: {
                        button1: { text: "«" },
                        button2: { text: "»" },
                    },
                },

                page3: {
                    headers: {
                        title: "Activity Completed!",
                    },
                   

                    navigationArea: {
                        text: "Tap the correct answer.",
                    },
                    navigatorArea: {
                        button1: { text: "«" },
                        button2: { text: "»" },
                    },
                },


            },
        ],
    },
};

if (typeof module !== "undefined" && module.exports) {
    module.exports = appData;
} else {
    window.appData = appData;
}