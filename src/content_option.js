const logotext = "YS";
const meta = {
    title: "Yajan Singh",
    description: "I'm Yajan Singh, an enthusiastic software architect and a full stack developer.",
};

const introdata = {
    title: "Hi, I'm Yajan Singh",
    animated: {
        first: "Software Engineer",
        second: "Software Architect",
        third: "Full Stack Developer",
        fourth: "Leader",
        fifth: "Computer Science Specialist",
        sixth: "Inovator",
        // add more if you'd like but make sure to update /src/pages/home/index.js Line 29
    },
    description: "Dedicated technology enthusiast with an insatiable curiosity for unraveling the complexities of our digital world.",
    your_img_url: "https://cdn.discordapp.com/attachments/651234311164526640/1146527992433098872/ezgif.com-video-to-gif.gif",
    // https://i.ibb.co/wRjcnGL/me.jpg
};

const dataabout = {
    title: "Who am I?",
    aboutme: "Hello there! I'm Yajan, and I'm passionate about crafting exceptional software solutions. With a deep-rooted love for technology and a knack for problem-solving, I've dedicated my career to mastering the art and science of software engineering. I have experience working with most of the industry leading languages and frameworks, and I'm always looking to learn more. I'm currently working as a Software Engineer at Ecamion, where I'm helping to build the next generation of battery storage solutions. I'm also a Computer Science Specialist at the University of Toronto, where I'm learning about the latest and greatest in the world of computer science. I'm always looking for new opportunities to learn and grow, so feel free to reach out!",
};
const worktimeline = [{
    jobtitle: "Software Engineer",
    where: "Ecamion",
    date: "2022 - Present",
},
{
    jobtitle: "Intermediate Software Engineer",
    where: "Quantitech LLC",
    date: "2021",
},
{
    jobtitle: "Software Engineer Intern",
    where: "Relay",
    date: "2020",
},
{
    jobtitle: "Full Stack Developer",
    where: "CodeHex",
    date: "2019",
},
];

const skills = [{
    name: "GoLang",
},

{
    name: "C/C++",
},

{
    name: "Java/Javascript",
},

{
    name: "Bash / Shell Scripting",
},

{
    name: "React/Flutter",
},

{
    name: "Database Design and Optimization",
},

{
    name: "CSP [AWS, GCP, Azure]",
},

{
    name: "Kubernetes/Docker",
},
];

const dataportfolio = [{
    img: "https://www.researchgate.net/publication/348502722/figure/fig2/AS:982335168212994@1611218363330/One-dimensional-convolutional-neural-network-1D-CNN-architecture-for-the-timeseries.png",
    description: "Convoluted Neural Network that classifies images based on 5 fundamental emotions",
    link: "https://github.com/yajan-singh/ML-HappySadCNN",
},
{
    img: "https://repository-images.githubusercontent.com/191494531/afe0b380-8d36-11e9-9258-a726f36cb8d8",
    description: "Windows application to scrape Facebook Marketplace for data",
    link: "https://github.com/yajan-singh/fb_scraper",
},
// {
//     img: "https://picsum.photos/400/?grayscale",
//     description: "The wisdom of life consists in the elimination of non-essentials.",
//     link: "#",
// },
{
    img: "https://bashlogo.com/img/logo/jpg/full_colored_light.jpg",
    description: "A bash learning tool using ss64",
    link: "https://github.com/yajan-singh/bash-assist",
},
// {
//     img: "https://picsum.photos/400/300/?grayscale",
//     description: "The wisdom of life consists in the elimination of non-essentials.",
//     link: "#",
// },
{
    img: "https://miro.medium.com/v2/resize:fit:1080/1*TQmcAHc-r9t0pXqZlYC1qg.png",
    description: "A Discord bot that allows for stripe payment integration within any discord server",
    link: "https://github.com/yajan-singh/go-discord-bot",
},

{
    img: "https://i.stack.imgur.com/08u77.png",
    description: "Machine Learning model that classifies handwritten digits",
    link: "https://github.com/yajan-singh/ML-MNIST",
},
// {
//     img: "https://picsum.photos/400/300/?grayscale",
//     description: "The wisdom of life consists in the elimination of non-essentials.",
//     link: "#",
// },
// {
//     img: "https://picsum.photos/400/?grayscale",
//     description: "The wisdom of life consists in the elimination of non-essentials.",
//     link: "#",
// },
{
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5cNVYpwX4cPmeKqybYyvSDTwFuH7mUI9ttQ&usqp=CAU",
    description: "Job Application Tracker",
    link: "https://github.com/yajan-singh/JobApplicationTrackerBackend",
},
    // {
    //     img: "https://picsum.photos/400/?grayscale",
    //     description: "The wisdom of life consists in the elimination of non-essentials.",
    //     link: "#",
    // },
    // {
    //     img: "https://picsum.photos/400/700/?grayscale",
    //     description: "The wisdom of life consists in the elimination of non-essentials.",
    //     link: "#",
    // },
];

const contactConfig = {
    YOUR_EMAIL: "yajansingh08@gmail.com",
    description: "Looking forward to hearing from you!",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_hlklp4h",
    YOUR_TEMPLATE_ID: "template_f43p1rn",
    YOUR_USER_ID: "8ZQcPQA0pQMuU68VG", //Public Key
};

const socialprofils = {
    github: "https://github.com/yajan-singh",
    linkedin: "https://www.linkedin.com/in/yajansingh/",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};