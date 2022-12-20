const { default: blogData } = require("../data/blog");

// function About (blogData) {
    // return(

    // )
// }




function About({
    image = "https://via.placeholder.com/215",
    name,
    about,

}) {
    return (
        <aside>
            <img src={image} alt={name} />
            <p>{about}</p>
        </aside>

    )
}

export default About;