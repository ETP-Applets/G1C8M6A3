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
                            "Let's identify polygons as quadrilaterals or regular polygons based on their sides.",
                        startWelcomeText: "Tap \"Start\" to begin.",
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
    id: {
        "standard-ui": [
            {
                page1: {
                    headers: {
                        title: "",
                    },
                    workingArea: {
                        welcomeText:
                            "Mari kita identifikasi poligon sebagai segi empat atau poligon beraturan berdasarkan sisinya.",
                        startWelcomeText: "Ketuk \"Mulai\" untuk memulai.",
                        startText: "Mulai"
                    },
                },

                page2: {
                    headers: {
                        title:
                            "Identifikasi poligon yang ditampilkan. ",
                    },

                    navigationArea: {
                        text: "Ketuk jawaban yang benar.",
                    },
                    navigatorArea: {
                        button1: { text: "«" },
                        button2: { text: "»" },
                    },
                },

                page3: {
                    headers: {
                        title: "Aktivitas Selesai!",
                    },
                    navigationArea: {
                        text:
                            "Ketuk \"Mulai Lagi\" untuk berlatih lagi!",
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




