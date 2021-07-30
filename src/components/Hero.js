import React from "react";
import me from "./img/Picture.jpg";

function Welcome() {
    return (
        <section
            id="hero"
            class="h-full text-white text-center grid place-items-center"
        >
            <div class="px-4 bg-black bg-opacity-50 rounded mt-5 py-12 backdrop-filter backdrop-blur" style={{zIndex: `1`}}>
                <img src={me} class="mx-auto rounded-full p-5 mt-16 flex-auto object-scale-down md:h-96" />
                <p class="text-lg font-bold italic uppercase tracking-wider">Clemson University</p>
                <h1 class="font-bold text-6xl md:text-8xl md:ml-10 md:mr-10 leading-none">Thomas Delvaux</h1>
                <p class="pt-3 pb-1 text-base font-light uppercase tracking-wider">Fountain Inn, SC</p>
                <p class="font-mono text-lg"><i>Major:</i> Mechanical Engineering • <i>Minor:</i> Mathematics</p>
                
                <div class="flex justify-center mt-8 mb-10">
                    <a
                        href="https://www.linkedin.com/in/thomas-delvaux/"
                        rel="noopener noreferrer"
                        target="_blank"
                        class="mt-3 mb-4 text-gray-800 bg-gray-200 font-bold px-5 py-3 hover:bg-gray-700 hover:text-white rounded text-lg"
                    >LinkedIn</a>
                    <a
                        href="https://github.com/Exper1mental"
                        rel="noopener noreferrer"
                        target="_blank"
                        class="ml-6 mt-3 mb-4 text-gray-800 bg-gray-200 font-bold px-5 py-3 hover:bg-gray-700 hover:text-white rounded text-lg"
                    >GitHub</a>
                </div>
            </div>
        </section>
);
}

export default Welcome;