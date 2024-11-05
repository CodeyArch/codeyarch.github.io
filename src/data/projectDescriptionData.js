
const projects = [
    {
        id: 1,
        title: "YANA: Yet Another Notes App",
        description: "Yet Another Notes App is a simple android note app made with the latest android libraries,   " +
            "including Jetpack Compose, Dagger Hilt and Room. \n\n" +
            "The project was inspired by the clean architecture note app created by Phillipp Lackner, one of the first tutorials I followed when learning Jetpack Compose" +
            "\n\nThe project began by following the clean architecture note app tutorial and then expanding on the app with new features, designs and optimisations." +
            "\n\nYANA can be used for taking simplistic but customisable notes on any Android device above version 5.1. \n\n The main features include:\n\n" +
            " - Note creation and editing\n\n" +
            " - Wide range of note background and text colours\n\n" +
            " - Sorting filters and searching to help you find specific notes out of thousands\n\n" +
            " - Note size adjustment\n\n" +
            " - Archive for deleted notes giving you extra safety for those notes you did not mean to remove\n\n" +
            " - Read only feature in settings for extra safety if you only want to read and not edit\n\n" +
            " - Autosave and save on back press to make sure your notes are always up to date - Settings are available to disable this\n\n" +
            " - Font and theme selection for more customisation \n\n",
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
            { src: "../assets/YANA.png", alt: "YANA: App Icon" },
            { src: "../assets/yana_demo.gif", alt: "Yana: Demo 1" },
            { src: "../assets/yana_demo2.gif", alt: "Yana: Demo 2" },
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
            { src: "../assets/maths_challenges_home.png", alt: "Maths Challenges Home" },
            { src: "../assets/maths_challenges_medium.png", alt: "Maths Challenges Medium Mode" },
            { src: "../assets/maths_challenges_game_over.png", alt: "Maths Challenges Game Over" },
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
            "see higher value items and access additional filters and cosmetics. We charged a rate of $3 (USD) monthly on Patreon " +
            "which was considered a very competitive price for the market. Our low pricing and high feature density alongside " +
            "our optimisations for speed and accuracy allowed us to secure over 3000 unique users (both free and paid combined) and " +
            "an overall profit of 4000$ (USD). \n\nThe project may now be discontinued but it was a successful business and a valuable " +
            "experience to all on the Skyblock Tools team. ",
        skillsAndTech: "For my part in this project, I had to use these skills and technologies: \n\n" +
            "- Python \n\n " +
            "- Java \n\n" +
            "- JSON \n\n" +
            "- YouTrack \n\n" +
            "- IntelliJ and Visual Studio Code \n\n",
        teams: "The full Skyblock Tools development and design team can be found here: https://github.com/skyblock-tools \n\n" +
            "We also had a small team of beta testers helping ensure the project was up to the expected quality," +
            " I was in charge of this small team as one of my main roles on this project." ,
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
        description: "Spring Time Sunflower is a short high-risk, high-reward style arcade game made for the Spring 2d Jam 2021 " +
            "about simply growing sunflowers in the spring \n\n" +
            "Players collect water to grow and gain points while avoiding the nasty salt that shrinks the flower. " +
            "Once the flower gets big enough, retire it to the field and gain a points multiplier for the next one!\n\n" +
            "Controls: A+D or arrows to move. Z to harvest and get a new plant\n" +
            "\n" +
            "Gameplay: \n" +
            "\n" +
            "Collect water to gain score.  Avoid salt or you will damage your plant.\n" +
            "\n" +
            "Press Z when your plant is ready to harvest to swap to a new plant and increase your score multiplier! Don't worry the game will tell you when you should do this.\n\n" +
            "This game was my first attempt at a game jam and I had joined the jam late due to originally planning a different jam entirely. As such, I only had 24 hours " +
            "to make all the assets (sound, music and \"art\") and create the scripts. It was a fun way to test my creativity " +
            "and put all I had learnt to use. I'm very proud of what I was able to create in that short time. I ranked #59 out of 91 entries.\n\n" +
            "Had I had more time on this project, I'd have liked to make the UI more appealing and put more effort into the overall appearance of the game " +
            "and perhaps implement levels and modes rather than just one gameplay loop that progressively gets more and more intense." ,
        skillsAndTech: "To make this project successful, I had to use a variety of skills and technologies.\n\n" +
            "- Unity\n\n" +
            "- C#\n\n" +
            "- Visual Studio Code\n\n" +
            "- Audacity\n\n" +
            "- Aseprite \n\n",
        teams: "This project was a solo project and as such there is no team to credit however I had assistance from family for play-testing this game" ,
        roles: "Programmer, Game Designer, Sound Designer, Graphic Designer",
        socialMedia: {
            github: "https://github.com/CodeyArch/Spring-Time-Sunflower",
            itchIO: "https://goobydev.itch.io/spring-time-sunflower",
        },
        images: [
            { src: "../assets/spring_time_sunflower.png", alt: "Spring time sunflower icon" },
            { src: "../assets/spring_time_sunflower_start.png", alt: "Spring time sunflower start menu" },
            { src: "../assets/spring_time_sunflower_gameplay.png", alt: "Spring time sunflower gameplay" },
            { src: "../assets/spring_time_sunflower_gameplay2.png", alt: "Spring time sunflower gameplay 2" },
            { src: "../assets/spring_time_sunflower_game_over.png", alt: "Spring time sunflower game over" },
        ],
    },
    {
        id: 5,
        title: "The Same Level Prototype",
        description: "An aspiring game developer wants to make a game, but the problem is he doesn't know where to start!\n" +
            "\n" +
            "The same level but with many twists. Play through all the different prototypes this game dev experiments with and feel the frustration he feels.\n\n" +
            "The main inspiration for this game is the series of flash games called \"There is only one level\" \n\n"+
            "The game features 19 variations and a skilled player can complete it deathless in under 5 minutes, however, it is perfectly rage inducing for most\n\n" +
            "The most rage inducing part of this project as a whole is the fact that the original source code has all since been lost after an incident with " +
            "OneDrive in which it merged the files from my computer and laptop and corrupted a large portion of my work. The only backup of this project that existed was 2 weeks " +
            "prior to its final release, which only features half the levels and a completely different colour scheme and design. Thanks to that, I learnt a valuable lesson " +
            "and so I now always make multiple backups of important projects. Despite all of that, the full playable game can still be found on my itch.io page.",
        skillsAndTech: "To make this project successful, I had to use a variety of skills and technologies.\n\n" +
            "- Unity\n\n" +
            "- C#\n\n" +
            "- Visual Studio Code\n\n" +
            "- Audacity\n\n",
        teams: "This project was a solo project and as such there is no team to credit however I had assistance from family for play-testing this game " +
            "and I also had the assistance of members of my Discord Server in play-testing, feedback and level designs. The blue colour scheme used in the final release " +
            "is the result of group voting in that server " ,
        roles: "Programmer, Game Designer, Sound Designer, Graphic Designer",
        socialMedia: {
            itchIO: "https://goobydev.itch.io/the-same-level-prototype",
            youtube: "https://www.youtube.com/watch?v=Q8O1JPtMtEA"
        },
        images: [
            { src: "../assets/same_level_prototype.png", alt: "Same Level Prototype Icon" },
            { src: "../assets/same_level_prototype_gameplay.png", alt: "Same Level Prototype Gameplay" },
            { src: "../assets/same_level_prototype_gameplay2.png", alt: "Same Level Prototype Gameplay" },
        ],
    },
    {
        id: 6,
        title: "Small Miscellaneous Games",
        description: "A collection of small and silly games I had created when learning Unity 2D.\n\n" +
            "All of the games here were made following the Complete C# Unity Game Developer 2D 2018 course from GameDev.TV on Udemy\n\n" +
            "You can find their courses here: https://www.udemy.com/user/gamedevtv/ \n\n" +
            "The list of games are as follows: \n\n" +
            "- NullZard The Number Wizard: This is a simple number guessing game in which you have to think of a number between " +
            "1 and 10000 and NullZard will try and guess what you're thinking based on whether your number is higher or lower than his guesses. \n" +
            "This game was the first Unity Project I had completed and shared with others. I chose the character \"NullZard\" " +
            "based on a popular Youtuber I was working alongside called Nullzee. This game was a funny way for me to " +
            "engage with our community and learn the very basics of unity\n\n" +
            "- Dungeon Crawl: This is a simple choose your own adventure style game in which you have to navigate a " +
            "dungeon while the rude and sarcastic narrator berates you for every little thing you do. This game never fully got completed, with only one story path finished, " +
            "however, it was incredibly fun to work on and I enjoyed writing from the narrators POV. it taught me more about how keyboard interactions work and " +
            "how to change the game without needing any scene changes and also taught me that a game can still be fun even when ultra-simplistic. \n\n" +
            "- Super Block Breaker: Perhaps the most difficult game I have ever created, Super Block Breaker is a Breakout style game in which " +
            "you have a paddle and a ball and you need to break all the destructible blocks in the level to progress. This game is incredibly unbalanced, " +
            "with many players never making it past the first level, despite there being 5 levels total, however, " +
            "it is incredibly fun despite being so simplistic. This game taught me a lot about Unity Physics in 2D games " +
            "and multi-scene projects. This was another game in which I got community involvement to decide how the game should look " +
            "and unfortunately (or fortunately depending on your tastes), they voted that pixelated milk had to be the background for the game.  \n\n" +
            "- Galactic Defense: This game is a top-down shooter in which you are a spaceship travelling the galaxy blasting down aliens and other " +
            "spaceships, gaining score and upgrades as you go along. This game was originally designed for PC but I wanted to experiment " +
            "and made it for Android instead (while still technically being PC playable). I had successfully managed to build the project as an APK and " +
            "have it on my phone to play whenever I wanted. I was very proud of this project and ended up submitting it for my college assignment on " +
            "Games Development. This game was based on the laser defender game included in the Udemy course, however, I added my own ideas and expansions " +
            "into the project to truly make the game my own. This game would later be the inspiration for another top-down shooter mini-game as part of the unfinished " +
            "Minigame Mania project \n\n",
        skillsAndTech: "To make this project successful, I had to use a variety of skills and technologies.\n\n" +
            "- Unity\n\n" +
            "- C#\n\n" +
            "- Visual Studio Code\n\n" +
            "- Audacity\n\n",
        teams: "These were solo projects, however, I had plenty of help from the Nullzee's Cave community and the Gooby's Gathering community " +
            "with play-testing, feedback and general design. I also had the tutorials from GameDev.TV to help me with these projects " ,
        roles: "Programmer, Game Designer, Sound Designer, Graphic Designer",
        socialMedia: {
            mediaFire: "https://www.mediafire.com/folder/w3c40xj3s96ug/Games"
        },
        images: [
            { src: "../assets/miscellaneous_games.png", alt: "Miscellaneous Games Collage" },
            { src: "../assets/miscellaneous_dungeon_crawl.png", alt: "Dungeon Crawl" },
            { src: "../assets/miscellaneous_nullzard_the_number_wizard.png", alt: "Nullzard The Number Wizard" },
            { src: "../assets/miscellaneous_super_block_breaker.png", alt: "Super Block Breaker" },
            { src: "../assets/miscellaneous_galactic_defense.png", alt: "Galactic Defense" },
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