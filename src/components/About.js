import React from "react";
import Hike from "./img/hike-mental-fitness.jpg";
import DataScience from "./img/dataScience_underratedJob_00.png";
import Gunter from "./img/GunterSnowPhotobomb.jpg";

function About() {
    return (
        <section id="about" class="bg-gradient-to-r from-gray-500 to-gray-800 pt-10" style={{zIndex: `1`}}>
            <h2 class="text-center text-xl font-bp;d text-gray-300">About Me</h2>
            <ul class="grid p-10 gap-10 md:grid-cols-3">
                <li class="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 bg-gray-900 shadow rounded-lg overflow-hidden">
                    <img src={Hike} alt="discovery" class="w-full" />
                    <div class="p-6 md:p-8 text-gray-300">
                        <h3 class="font-bold">Hiking</h3>
                        <p>I love discovering and hiking places I've never been before.</p>
                    </div>
                </li>
                <li class="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 bg-gray-900 shadow rounded-lg overflow-hidden">
                    <img src={DataScience} class="w-full" />
                    <div class="p-6 md:p-8 text-gray-300">
                        <h3 class="font-bold">Data Science</h3>
                        <p>One of my favorite topics to learn about.</p>
                    </div>
                </li>
                <li class="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 bg-gray-900 shadow rounded-lg overflow-hidden">
                    <img src={Gunter} class="w-full" />
                    <div class="p-6 md:p-8 text-gray-300">
                        <h3 class="font-bold">Gunter</h3>
                        <p>My favorite german shepherd!</p>
                    </div>
                </li>
            </ul>
        </section>
);
}

export default About;