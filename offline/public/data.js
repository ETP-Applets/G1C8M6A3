const animalTable = {
    animalData: {
        title: "Animal Table",
        tableHeader: {
            header1: "Animal",
            header2: "Number of Animals"
        },
        tableBody: {
            row1: {
                cell1: "Goat",
                cell2: 2
            },
            row2: {
                cell1: "Chicken",
                cell2: 4
            },
            row3: {
                cell1: "Cow",
                cell2: 5
            },
            row4: {
                cell1: "Rabbit",
                cell2: 3
            },
        }
    }
};

// Indonesian version of the animal table (for `id` locale)
const animalTableId = {
    animalData: {
        title: "Tabel Hewan",
        tableHeader: {
            header1: "Hewan",
            header2: "Jumlah Hewan"
        },
        tableBody: {
            row1: {
                cell1: "Kambing",
                cell2: 2
            },
            row2: {
                cell1: "Ayam",
                cell2: 4
            },
            row3: {
                cell1: "Sapi",
                cell2: 5
            },
            row4: {
                cell1: "Kelinci",
                cell2: 3
            },
        }
    }
};

const appData = {
    en: {
        "standard-ui": [
            {
                page1: {
                    Table: animalTable.animalData,
                    headers: {
                        title: "Comparing Data from an Animal Table!",
                    },
                    workingArea: {
                        welcomeText:
                            "We have the Animal Table which shows the number of each animals. We will ",
                        welcomeText1: "look at these numbers",
                        welcomeText2: "compare them",
                        and: "and",
                        welcomeText3: "learn more about them",
                        startWelcomeText: "Tap \'Start\' to begin.",
                        startText: "Start"
                    },
                },

                page2: {
                    Table: animalTable.animalData,
                    feedbackArea: {
                        text1: "Let’s find information about the animals by comparing the numbers in the table.",
                    },
                    feedbackArea1: {
                        text1: "Let’s compare the number of these two animals -",
                        and: "and",
                    },


                    navigationArea: {
                        text: "Tap any two animals.",
                        text2: "Tap »",
                    },
                    navigatorArea: {
                        button1: { text: "«" },
                        button2: { text: "»" },
                    },
                },
                page3: {
                    Table: animalTable.animalData,
                    feedbackArea: {
                        text1: "Which animal is",
                        text1Bold: "more",
                        text11: "in number?"
                    },
                    correctFeedbackArea: {
                        text1: "Yay!",
                        text2: "There are",
                        and: "and",
                        text3: "So,",
                        text4: "are more",
                        text5: "in number than",
                    },
                    wrongFeedbackArea: {
                        text1: "Try again!",
                        text2: "There are",
                        and: "and",
                        text3: "Which animal is more in number?",
                    },
                    navigationArea: {
                        text: "Tap on the correct animal.",
                        text2: "Tap »",
                    },
                    navigatorArea: {
                        button1: { text: "«" },
                        button2: { text: "»" },
                    },
                },
                page4: {
                    Table: animalTable.animalData,
                    feedbackArea: {
                        text1: "How many more",
                        text2: "are there than",
                        text3: "?",

                        hint: "Hint: Count the extra"
                    },
                    correctFeedbackArea: {
                        text1: "Great!",
                        text2: "There",
                        are:"are",
                        is:"is",
                        extra: "extra",
                        text3: "So,",
                        text4: "are more than",
                        text5: "by",
                    },
                    wrongFeedbackArea: {
                        text1: "Oops! Look at the number of",
                        and: "and",
                        text3: "Extra",
                        text4: "Number of ",
                    },
                    navigationArea: {
                        text: "Tap on the correct number.",
                        text2: "Tap »",
                    },
                    navigatorArea: {
                        button1: { text: "«" },
                        button2: { text: "»" },
                    },
                },
                page5: {
                    Table: animalTable.animalData,
                    feedbackArea: {
                        text1: "Let’s compare another set of animals.",
                    },
                    feedbackArea1: {
                        text1: "Let’s compare -",
                        and: "and",
                    },


                    navigationArea: {
                        text: "Tap any two animals.",
                        text2: "Tap »",
                    },
                    navigatorArea: {
                        button1: { text: "«" },
                        button2: { text: "»" },
                    },
                },
                page6: {
                    Table: animalTable.animalData,
                    feedbackArea: {
                        text1: "Out of",
                        and: "and",
                        text1Bold: "which is less",
                        text11: "in number?"
                    },
                    correctFeedbackArea: {
                        text1: "Yay!",
                        text2: "There are",
                        and: "and",
                        text3: "So,",
                        text4: "are less",
                        text5: "in number than",
                    },
                    wrongFeedbackArea: {
                        text1: "Try again!",
                        text2: "There are",
                        and: "and",
                        text3: "Which animal is less in number?",
                    },
                    navigationArea: {
                        text: "Tap on the correct animal.",
                        text2: "Tap »",
                    },
                    navigatorArea: {
                        button1: { text: "«" },
                        button2: { text: "»" },
                    },
                },
                page7: {
                    Table: animalTable.animalData,
                    feedbackArea: {
                        text1: "How many less",
                        text2: "are there than",
                        text3: "?",

                        hint: "Hint: Count the missing"
                    },
                    correctFeedbackArea: {
                        text1: "Great!",
                        text2: "There",
                        are: "are",
                        is: "is",
                        missing: "missing",
                        text3: "So,",
                        text4: "are less than ",
                        text5: "by ",
                    },
                    wrongFeedbackArea: {
                        text1: "Oops! Look at the number of",
                        and: "and",
                        text2:"carefully",
                        text3: "Missing",
                        text4: "Number of ",
                    },
                    navigationArea: {
                        text: "Tap on the correct number.",
                        text2: "Tap »",
                    },
                    navigatorArea: {
                        button1: { text: "«" },
                        button2: { text: "»" },
                    },
                },

                page8:{
                    headers: {
                        title: "Comparing Data from an Animal Table!",
                    },                    
                      workingArea: {
                        header: "Comparing Data from an Animal Table!",
                        title: "Well done!",
                        Text:"You ",
                        TextBold: "compared the animal data ",
                        TextBold1:"and found out which animal is ",
                        TextBold2:"more or less ",
                        TextBy:"by ",
                        TextBold3:"how many",
                        
                        Text3: 'Click \'Start over\' to repeat this activity!',
                        startText: "Start over",
                      },
            }

            },
        ],
    },
    id: {
        "standard-ui": [
            {
                page1: {
                    Table: animalTableId.animalData,
                    headers: {
                        title: "Membandingkan Data dari Tabel Hewan!",
                    },
                    workingArea: {
                        welcomeText:
                            "Kita memiliki Tabel Hewan yang menunjukkan jumlah setiap hewan. Kita akan ",
                        welcomeText1: "melihat angka-angka ini",
                        welcomeText2: "membandingkannya",
                        and: "dan",
                        welcomeText3: "mempelajari lebih banyak tentangnya",
                        startWelcomeText: "Ketuk 'Mulai' untuk memulai",
                        startText: "Mulai"
                    },
                },

                page2: {
                    Table: animalTableId.animalData,
                    feedbackArea: {
                        text1: "Ayo cari informasi tentang hewan-hewan dengan membandingkan angka-angka di tabel.",
                    },
                    feedbackArea1: {
                        text1: "Ayo bandingkan jumlah dua hewan ini -",
                        and: "dan",
                    },


                    navigationArea: {
                        text: "Ketuk dua hewan mana saja.",
                        text2: "Ketuk »",
                    },
                    navigatorArea: {
                        button1: { text: "«" },
                        button2: { text: "»" },
                    },
                },
                page3: {
                    Table: animalTableId.animalData,
                    feedbackArea: {
                        text1: "Hewan mana yang jumlahnya",
                        text1Bold: "lebih banyak",
                        text11: "?"
                    },
                    correctFeedbackArea: {
                        text1: "Yeay!",
                        text2: "Ada",
                        and: "dan",
                        text3: "Jadi,",
                        text4: "jumlah",
                        text5: "lebih banyak daripada",
                    },
                    wrongFeedbackArea: {
                        text1: "Coba lagi!",
                        text2: "Ada",
                        and: "dan",
                        text3: "Hewan mana yang jumlahnya lebih banyak?",
                    },
                    navigationArea: {
                        text: "Ketuk hewan yang benar.",
                        text2: "Ketuk »",
                    },
                    navigatorArea: {
                        button1: { text: "«" },
                        button2: { text: "»" },
                    },
                },
                page4: {
                    Table: animalTableId.animalData,
                    feedbackArea: {
                        text1: "Berapa lebih banyak",
                        text2: "dibandingkan",
                        text3: "?",

                        hint: "Petunjuk: Hitung kelebihan jumlahnya"
                    },
                    correctFeedbackArea: {
                        text1: "Bagus!",
                        text2: "Ada",
                        are:"ada",
                        is:"ada",
                        extra: "lebih",
                        text3: "Jadi,",
                        text4: "jumlah",
                        text5: "lebih banyak daripada",
                    },
                    wrongFeedbackArea: {
                        text1: "Ups! Lihat jumlah",
                        and: "dan",
                        text3: "Selisih",
                        text4: "Jumlah ",
                    },
                    navigationArea: {
                        text: "Ketuk angka yang benar.",
                        text2: "Ketuk »",
                    },
                    navigatorArea: {
                        button1: { text: "«" },
                        button2: { text: "»" },
                    },
                },
                page5: {
                    Table: animalTableId.animalData,
                    feedbackArea: {
                        text1: "Ayo bandingkan kelompok hewan yang lain.",
                    },
                    feedbackArea1: {
                        text1: "Ayo bandingkan -",
                        and: "dan",
                    },


                    navigationArea: {
                        text: "Ketuk dua hewan mana saja.",
                        text2: "Ketuk »",
                    },
                    navigatorArea: {
                        button1: { text: "«" },
                        button2: { text: "»" },
                    },
                },
                page6: {
                    Table: animalTableId.animalData,
                    feedbackArea: {
                        text1: "Dari",
                        and: "dan",
                        text1Bold: "mana yang lebih sedikit",
                        text11: "jumlahnya?"
                    },
                    correctFeedbackArea: {
                        text1: "Yeay!",
                        text2: "Ada",
                        and: "dan",
                        text3: "Jadi,",
                        text4: "jumlah",
                        text5: "lebih sedikit daripada",
                    },
                    wrongFeedbackArea: {
                        text1: "Coba lagi!",
                        text2: "Ada",
                        and: "dan",
                        text3: "Hewan mana yang jumlahnya lebih sedikit?",
                    },
                    navigationArea: {
                        text: "Ketuk hewan yang benar.",
                        text2: "Ketuk »",
                    },
                    navigatorArea: {
                        button1: { text: "«" },
                        button2: { text: "»" },
                    },
                },
                page7: {
                    Table: animalTableId.animalData,
                    feedbackArea: {
                        text1: "Berapa lebih sedikit",
                        text2: "dibandingkan",
                        text3: "?",

                        hint: "Petunjuk: Hitung jumlah yang kurang"
                    },
                    correctFeedbackArea: {
                        text1: "Bagus!",
                        text2: "Ada",
                        are: "ada",
                        is: "ada",
                        missing: "kurang",
                        text3: "Jadi,",
                        text4: "jumlah",
                        text5: "lebih sedikit daripada",
                    },
                    wrongFeedbackArea: {
                        text1: "Ups! Lihat jumlah",
                        and: "dan",
                        text2:"baik-baik",
                        text3: "Selisih",
                        text4: "Jumlah ",
                    },
                    navigationArea: {
                        text: "Ketuk angka yang benar.",
                        text2: "Ketuk »",
                    },
                    navigatorArea: {
                        button1: { text: "«" },
                        button2: { text: "»" },
                    },
                },

                page8:{
                    headers: {
                        title: "Membandingkan Data dari Tabel Hewan!",
                    },                    
                      workingArea: {
                        header: "Membandingkan Data dari Tabel Hewan!",
                        title: "Kerja bagus!",
                        Text:"Kamu telah ",
                        TextBold: "membandingkan data hewan ",
                        TextBold1:"dan menemukan hewan mana yang ",
                        TextBold2:"lebih banyak atau lebih sedikit ",
                        TextBy:"sebesar ",
                        TextBold3:"berapa selisih jumlahnya",
                        
                        Text3: "Klik 'Mulai lagi' untuk mengulang kegiatan ini!",
                        startText: "Mulai lagi",
                      },
            }

            },
        ],
    },
};

if (typeof module !== "undefined" && module.exports) {
    module.exports = appData;
} else {
    window.appData = appData;
}





