function ClemBot() {
    return (
        <section id="ClemBot" class="text-gray-400 bg-black body-font">
            <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
                    <img class="object-cover object-center rounded" alt="ClemBot" src="https://github.com/ClemBotProject/ClemBot/blob/master/Branding/ClemBot.png?raw=true" />
                </div>
                <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Check out ClemBot!</h1>
                    <p class="mb-8 leading-relaxed">In the Computer Science discord, some of us students have created a cool discord bot named ClemBot! He can tell you the weather, evaluate code, help manage your servers, and lots of other neat features.</p>
                    <div class="flex justify-center">
                        <a
                            href="https://github.com/ClemBotProject/ClemBot"
                            rel="noopener noreferrer"
                            target="_blank"class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                        >GitHub</a>
                        <a
                            href="https://discord.gg/QNRbC6k"
                            rel="noopener noreferrer"
                            target="_blank"
                            class="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
                        >Discord</a>
                    </div>
                </div>
            </div>
        </section>
);
}

export default ClemBot;