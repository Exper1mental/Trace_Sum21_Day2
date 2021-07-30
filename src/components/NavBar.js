function NavBar() {
    return (
        // <!-- component -->
        // <!-- Menu based on: https://tailwindcomponents.com/component/responsive-navbar-with-dropdown by Cricksu -->
        // <script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js" defer></script>

        <header class="fixed w-full text-white bg-black bg-opacity-50 backdrop-filter backdrop-blur" style={{zIndex: `2`}}>
            <div x-data="{ open: false }" class="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
                <div class="p-4 flex flex-row items-center justify-between">
                    <a href="#" class="text-lg font-semibold tracking-widest text-white uppercase rounded-lg focus:outline-none focus:shadow-outline">Thomas Delvaux</a>
                    {/* <button class="md:hidden rounded-lg focus:outline-none focus:shadow-outline" @Click="open = !open"> */}
                    <button class="md:hidden rounded-lg focus:outline-none focus:shadow-outline" onClick="open = !open">
                        <svg fill="currentColor" viewBox="0 0 20 20" class="w-6 h-6">
                            <path x-show="!open" fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clip-rule="evenodd"></path>
                            <path x-show="open" fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                        </svg>
                    </button>
                </div>
                {/* <nav :class="{'flex': open, 'hidden': !open}" class="flex-col flex-grow pb-4 md:pb-0 hidden md:flex md:justify-end md:flex-row"> */}
                <nav class="flex-col flex-grow pb-4 md:pb-0 hidden md:flex md:justify-end md:flex-row">
                    <a class="transition duration-300 px-4 py-2 mt-2 text-sm font-light bg-transparent rounded-lg md:mt-0 md:ml-4 hover:bg-gray-200 hover:bg-opacity-20 focus:bg-gray-200 focus:bg-opacity-10 focus:outline-none focus:shadow-outline" href="#hero">Hero</a>
                    <a class="transition duration-300 px-4 py-2 mt-2 text-sm font-light bg-transparent rounded-lg md:mt-0 md:ml-4 hover:bg-gray-200 hover:bg-opacity-20 focus:bg-gray-200 focus:bg-opacity-10 focus:outline-none focus:shadow-outline" href="#about">About</a>
                    <a class="transition duration-300 px-4 py-2 mt-2 text-sm font-light bg-transparent rounded-lg md:mt-0 md:ml-4 hover:bg-gray-200 hover:bg-opacity-20 focus:bg-gray-200 focus:bg-opacity-10 focus:outline-none focus:shadow-outline" href="#ClemBot">ClemBot</a>  
                </nav>
            </div>
        </header>
    );
}

export default NavBar;