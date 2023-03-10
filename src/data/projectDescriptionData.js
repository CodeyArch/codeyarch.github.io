
const projects = [
    {
        id: 1,
        title: "YANA: Yet Another Notes App",
        description: "Yet Another Notes App is a simple android note app made with the latest android libraries,   " +
            "including Jetpack Compose, Dagger Hilt and Room. \n\n" +
            "The project was inspired by the clean architecture note app created by Phillipp Lackner, one of the first tutorials I followed when learning Jetpack Compose "
            +
            "The project was inspired by the clean architecture note app created by Phillipp Lackner, one of the first tutorials I followed when learning Jetpack Compose "+
            "The project was inspired by the clean architecture note app created by Phillipp Lackner, one of the first tutorials I followed when learning Jetpack Compose ",
        skillsAndTech: "To make this project successful, I had to use a variety of skills and technologies.\n\n" +
            "- Kotlin \n\n " +
            "- Jetpack Compose \n\n" +
            "- Room Database \n\n" +
            "- Dagger Hilt \n\n" +
            "- Android Studio \n\n" +
            "- Google Play Console \n\n" +
            "",
        teams: "As this was a solo project, there is no team to credit here, however, I feel it is worth mentioning that this project would not have been possible without Phillipp Lackner" +
            " and his Clean Architecture Note App.\n\n You can find this here: https://github.com/philipplackner/CleanArchitectureNoteApp" ,
        roles: "Android Developer, Designer, Project Manager ",
        socialMedia: {
            github: "https://github.com/CodeyArch/YANA",
            googlePlay: "https://play.google.com/store/apps/details?id=me.goobydev.composenotes"
        },
        images: [
            { src: "../assets/YANA.png", alt: "YANA: App Icon" }, // TODO: Images
            { src: "https://via.placeholder.com/600x600", alt: "Image 2" },
            { src: "https://via.placeholder.com/500x500", alt: "Image 3" },
        ],
    },
    {
        id: 2,
        title: "Maths Challenges V1",
        description: "Maths Challenges is an android app written with xml and Kotlin with the aim to teach young children basic numeracy\n\n" +
            "The app has users complete quizzes of varying difficulty. " +
            "The quizzes has users answer 10 randomly generated questions with numbers from 1 to 12 " +
            "doing simple division, addition, subtraction and multiplication. \n\n" +
            "The goal is to get the most amount of questions right in the shortest time possible in order to " +
            "train your mental arithmetic. If you get a question correct, you are awarded with a point and a delightful " +
            "ring, if you get a question incorrect then you are given a short buzz sound. When the quiz ends, " +
            "you are given some confetti to celebrate! \n\n" +
            "It features 3 difficulty modes, with each difficulty giving you less and less time to solve the 10 questions." +
            " Easy mode has no time limit, medium mode has a 20 second time limit and hard mode has a 10 second time limit." +
            " The app also supports full tablet compatibility so you can use the android device of your preference.\n\n" +
            "This project was initially completed to fulfill an assignment and then later expanded on to provide a greater" +
            " user experience and to further understand the technology being used. ",
        skillsAndTech: "To make this project successful, I had to use a variety of skills and technologies.\n\n" +
            "- Kotlin \n\n " +
            "- XML \n\n" +
            "- SharedPreferences \n\n" +
            "- Android Studio \n\n" +
            "",
        teams: "This was a solo project, however, I had many friends and family provide beta testing and " +
            "this project would not have gone as well without them" ,
        roles: "Android Developer, Designer, Project Manager",
        socialMedia: {
            github: "https://github.com/CodeyArch/Maths_challenges",
        },
        images: [
            { src: "../assets/maths_challenges.png", alt: "Maths Challenges Icon" },
            { src: "https://via.placeholder.com/300x300", alt: "Image 5" },
            { src: "https://via.placeholder.com/300x300", alt: "Image 6" },
        ],
    },
    {
        id: 3,
        title: "Skyhouse",
        description: "Skyhouse is an all-in one flipping solution for Hypixel Skyblock designed by Skyblock Tools" +
            " a small team with members from around the world. \n\n" +
            "Skyhouse allowed users to make profit reselling auctions on Hypixel Skyblock by showing them profitable flips" +
            " on both an in-game modification and website. Skyhouse has a wide range of auction and profit based features including:\n\n" +
            " - BIN to BIN flipping (Buy-It-Now)\n\n" +
            " - Auction to BIN flipping\n\n" +
            " - Creation GUI and profit estimation\n\n" +
            " - Filters and profit margin configurations \n\n" +
            " - Skyblock Bits to Coins\n\n" +
            " - Themes, presets and the ability to customise\n\n" +
            "Skyhouse featured both a free option and a paid option called Skyhouse+.\n Skyhouse+ allowed users with a valid token to " +
            "see higher value items and access additional filters and cosmetics. We charged a rate of 3$ (USD) monthly on Patreon" +
            "which was considered a very competitive price for the market. Our low pricing and high feature density alongside " +
            "our optimisations for speed and accuracy allowed us to secure over 3000 unique users (both free and paid combined) and " +
            "an overall profit of 4000$ (USD). \n\nThe project may now be discontinued but it was a successful business and a valuable " +
            "experience to all on the Skyblock Tools team ",
        skillsAndTech: "For my part in this project, I had to use these skills and technologies\n\n" +
            "- Python \n\n " +
            "- Java \n\n" +
            "- JSON \n\n" +
            "- YouTrack \n\n" +
            "- IntelliJ and Visual Studio Code \n\n",
        teams: "The full Skyblock Tools development and design team can be found here: https://github.com/skyblock-tools \n\n" +
            "We also had a small team of beta testers helping ensure the project was up to the expected quality," +
            " I was in charge of this small team as one of my main roles on this project" ,
        roles: "Quality Insurance Lead, Developer/Designer, Community Management, Technical Support ",
        socialMedia: {
            github: "https://github.com/skyblock-tools",
        },
        images: [
            { src: "../assets/skyhouse.png", alt: "Skyhouse Logo" },
            { src: "../assets/skyhouseContributors.png", alt: "Skyhouse Home page and contributors" },
            { src: "../assets/skyhouseFlips.png", alt: "Skyhouse flips list" },
            { src: "../assets/skyhouseBits.png", alt: "Skyhouse bits to coins" },
            { src: "../assets/skyhouseWeb.png", alt: "Skyhouse website frontend" },
        ],
    },
    {
        id: 4,
        title: "Spring Time Sunflower",
        description: "This is a description for project 4."+
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin auctor neque ut leo dapibus, in ullamcorper sapien facilisis. " +
            "Quisque sagittis dolor sed nisi consequat ultrices. Duis faucibus libero ac enim varius vestibulum. Sed euismod tellus quis mi tincidunt elementum. " +
            "Nam quis ante vitae orci egestas varius. Vestibulum suscipit enim non aliquam suscipit. " +
            "Sed non tristique lorem. Sed finibus orci lectus, at bibendum quam laoreet in. Nulla consequat libero in lorem euismod, sed hendrerit velit bibendum.",
        skillsAndTech: "To make this project successful, I had to use a variety of skills and technologies.\n\n" +
            "- Kotlin \n\n " +
            "- Jetpack Compose \n\n" +
            "- Room Database \n\n" +
            "- Dagger Hilt \n\n" +
            "- Android Studio \n\n" +
            "- Google Play Console \n\n" +
            "",
        teams: "" ,
        roles: "Android Developer, Designer, Project Manager",
        socialMedia: {
            github: "https://github.com/CodeyArch/Spring-Time-Sunflower",
            itchIO: "https://goobydev.itch.io/spring-time-sunflower",
        },
        images: [
            { src: "../assets/spring_time_sunflower.png", alt: "Spring time sunflower icon" },
            { src: "https://via.placeholder.com/300x300", alt: "Image 5" },
            { src: "https://via.placeholder.com/300x300", alt: "Image 6" },
        ],
    },
    {
        id: 5,
        title: "The Same Level Prototype",
        description: "This is a description for project 5."+
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin auctor neque ut leo dapibus, in ullamcorper sapien facilisis. " +
            "Quisque sagittis dolor sed nisi consequat ultrices. Duis faucibus libero ac enim varius vestibulum. Sed euismod tellus quis mi tincidunt elementum. " +
            "Nam quis ante vitae orci egestas varius. Vestibulum suscipit enim non aliquam suscipit. " +
            "Sed non tristique lorem. Sed finibus orci lectus, at bibendum quam laoreet in. Nulla consequat libero in lorem euismod, sed hendrerit velit bibendum.",
        skillsAndTech: "To make this project successful, I had to use a variety of skills and technologies.\n\n" +
            "- Kotlin \n\n " +
            "- Jetpack Compose \n\n" +
            "- Room Database \n\n" +
            "- Dagger Hilt \n\n" +
            "- Android Studio \n\n" +
            "- Google Play Console \n\n" +
            "",
        teams: "" ,
        roles: "Android Developer, Designer, Project Manager",
        socialMedia: {
            github: "https://github.com/CodeyArch",
            itchIO: "https://goobydev.itch.io/the-same-level-prototype",
        },
        images: [
            { src: "../assets/same_level_prototype.png", alt: "Image 4" },
            { src: "https://via.placeholder.com/300x300", alt: "Image 5" },
            { src: "https://via.placeholder.com/300x300", alt: "Image 6" },
        ],
    },
    {
        id: 6,
        title: "Small Miscellaneous Games",
        description: "This is a description for project 6."+
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin auctor neque ut leo dapibus, in ullamcorper sapien facilisis. " +
            "Quisque sagittis dolor sed nisi consequat ultrices. Duis faucibus libero ac enim varius vestibulum. Sed euismod tellus quis mi tincidunt elementum. " +
            "Nam quis ante vitae orci egestas varius. Vestibulum suscipit enim non aliquam suscipit. " +
            "Sed non tristique lorem. Sed finibus orci lectus, at bibendum quam laoreet in. Nulla consequat libero in lorem euismod, sed hendrerit velit bibendum.",
        skillsAndTech: "To make this project successful, I had to use a variety of skills and technologies.\n\n" +
            "- Kotlin \n\n " +
            "- Jetpack Compose \n\n" +
            "- Room Database \n\n" +
            "- Dagger Hilt \n\n" +
            "- Android Studio \n\n" +
            "- Google Play Console \n\n" +
            "",
        teams: "" ,
        roles: "Android Developer, Designer, Project Manager",
        socialMedia: {
            github: "https://github.com/CodeyArch",

        },
        images: [
            { src: "../assets/miscellaneous_games.png", alt: "Image 4" },
            { src: "https://via.placeholder.com/300x300", alt: "Image 5" },
            { src: "https://via.placeholder.com/300x300", alt: "Image 6" },
        ],
    },

    {
        id: 7,
        title: "Project 7",
        description: "This is a description for project 7."+
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin auctor neque ut leo dapibus, in ullamcorper sapien facilisis. " +
            "Quisque sagittis dolor sed nisi consequat ultrices. Duis faucibus libero ac enim varius vestibulum. Sed euismod tellus quis mi tincidunt elementum. " +
            "Nam quis ante vitae orci egestas varius. Vestibulum suscipit enim non aliquam suscipit. " +
            "Sed non tristique lorem. Sed finibus orci lectus, at bibendum quam laoreet in. Nulla consequat libero in lorem euismod, sed hendrerit velit bibendum.",
        skillsAndTech: "To make this project successful, I had to use a variety of skills and technologies.\n\n" +
            "- Kotlin \n\n " +
            "- Jetpack Compose \n\n" +
            "- Room Database \n\n" +
            "- Dagger Hilt \n\n" +
            "- Android Studio \n\n" +
            "- Google Play Console \n\n" +
            "",
        teams: "" ,
        roles: "Android Developer, Designer, Project Manager",
        socialMedia: {
            github: "https://github.com/CodeyArch",
        },
        images: [
            { src: "https://via.placeholder.com/300x300", alt: "Image 4" },
            { src: "https://via.placeholder.com/300x300", alt: "Image 5" },
            { src: "https://via.placeholder.com/300x300", alt: "Image 6" },
        ],
    },
];

// Projects List: YANA, React Portfolio Template, Maths Challenges V1, Spring Time Sunflower, The Same Level Prototype

export default projects;