import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
import mathsoc from "../assets/mathsoc.png";
import tntdold from "../assets/tntdold.png"

const PROJECTS = [
    {
        id: 0,
        title: "MathSoc",
        description: "I create contest math videos and do live lessons for my school's math club called MathSoc (inspired by Waterloo).",
        link: "#",
        linkdesc: "Website coming soon!",
        image: mathsoc
    },
    {
        id: 1,
        title: "Try Not to Die",
        description: "A hardcore platformer in which you need to collect coins, dodge obstacles, and reach the end.",
        link: "https://github.com/pblpbl1324/try-not-to-die",
        linkdesc: "View on Github",
        image: project1
    },
    {
        id: 2,
        title: "Shuttle Strike",
        description: "A space shooter featuring enemies, bosses, asteroids, powerups, and more.",
        link: "https://drive.google.com/uc?export=download&id=1j_AeVJaMpHXqit9dp9FoXMxwLaWEi4s2",
        linkdesc: "Download here",
        image: project2
    },
    {
        id: 3,
        title: "FormsTunes",
        description: "The channel that I post my music on! I make electronic songs using FL Studio 12.",
        link: "https://www.youtube.com/c/FormsTunes",
        linkdesc: "View on YouTube",
        image: project3
    },
    {
        id: 4,
        title: "Info Index",
        description: "Info Index is a Youtube channel ran by me and other students. We create educational videos to teach people subjects that we're interested in.",
        link: "https://www.youtube.com/channel/UCU_ac4-HfFnXykqnoCHQD_Q",
        linkdesc: "View here",
        image: project4
    },
    {
        id: 5,
        title: "Try Not to Die (old)",
        description: "The original game I made in Grade 9. ",
        link: "https://pblpbl.itch.io/try-not-to-die",
        linkdesc: "View on itch.io",
        image: tntdold
    }
];

//make this file available for importing
export default PROJECTS;