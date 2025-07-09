import archery from "../assets/archery.png"
import dog from "../assets/dogs.png"
import travel from "../assets/mitravel.png"
import recipe from "../assets/recipes.png"
import netflix from "../assets/netflix-2.png"

export const projects = [
    {
        id: "1",
        title:  "Archery Club",
        image:  archery,
        tools:  ["HTML", 
                "CSS"
                ],
        description:"Built as a class project, this is a mockup website for a potential Archery Club. Includes web pages where future members can learn about intructors, the facility and offered services. ",
        code:   "https://github.com/brittrohrer/archery",
        live:   "https://brittrohrer.github.io/archery/",

    },
    {
        id: "2",
        title:  "Adopt A Dog",
        image:  dog,
        tools:  ["HTML", 
                "CSS", 
                "JavaScript"
                ],
        description: "Another class project to mock a pet adoption site. Includes the dog selection and checkout form.",
        code:   "https://github.com/brittrohrer/html200-adopt-a-dog",
        live:   "https://brittrohrer.github.io/html200-adopt-a-dog/",

    },
    {
        id: "3",
        title:  "Travel Michigan",
        image:  travel,
        tools:  ["Bootstrap", 
                "SCSS",
                "API", 
                "Vue"
                ],
        description: "A course long project for users of the site to learn about Michigan and why to travel there. ",
        code:   "https://github.com/brittrohrer/course-project",
        live:   "https://brohrer-travel-michigan.netlify.app/",

    },
    {
        id: "4",
        title:  "Family Recipes",
        image:  recipe,
        tools:  ["Bootstrap", 
                "SCSS", 
                "Vue"
                ],
        description:    "A personal project that takes our handwritten recipes and gathers them to a single location for everyone in our family to easlily access. ",
        code:   "https://github.com/brittrohrer/family-recipes",
        live:   "https://brohrer-family-recipes.netlify.app",

    },
    {
        id: "5",
        title:  "Netflix Clone",
        image:  netflix,
        tools:  ["Bootstrap", 
                "SCSS", 
                "Vue",
                "JavaScript"
                ],
        description:    "A replica of a popular streaming service's desktop version website.  ",
        code:   "https://github.com/brittrohrer/clone-netflix",
        live:   "https://brohrer-net-clone.netlify.app/",

    },

]
