import React from "react";
import Card from "./Card";
import image1 from '../assets/react 250.png'
import image2 from '../assets/java.png'
import image3 from '../assets/Docker-Logo.png'
const cards = [
{
    id:1,
    title: 'CURSO REACT',
    image: image1,
    instructor: "Benito Samuel Lopez Razo"
},
{
    id:2,
    title: 'CURSO JAVA',
    image: image2,
    instructor: "Angela Rios Luna"
},
{
    id:3,
    title: 'CURSO DOCKERS',
    image: image3,
    instructor: "Valentin Jimenez Jarquin"
}
]
export default function Cards(){
    return(
        <div className="container d-flex justify-content-center aling-items-center h-100 ">
            <div className="row">
                {
                   cards.map(c =>(
                <div className="col-md-4" key={cards.id}> 
                    <Card
                        key={c.id}
                        id={c.id}
                        title={c.title}
                        image={c.image}
                        instructor = {c.instructor}
                    />
                </div>
                    ))
                 
                }
            </div>
        </div>
    );
}