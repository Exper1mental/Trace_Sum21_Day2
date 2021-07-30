function Welcome() {
    return (
        // <!-- component -->
        // <!-- Menu based on: https://tailwindcomponents.com/component/responsive-navbar-with-dropdown by Cricksu -->
        // <script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js" defer></script>

        // <video autoplay muted loop id="myVideo" style = {{
        //     position: `fixed`,
        //     top: `0`,
        //     left: `0`,
        //     width: `100%`,
        //     height: `100%`,
        //     objectFit: `cover`,
        //     objectPosition: `center`,
        //     zIndex: `-1` }} >
        //     <source src="Images/wave.mp4" type="video/mp4">
        //     Your browser does not support the video tag.
        // </video>

        <section
            id="welcome"
            class="h-screen text-white bg-gray=900 text-center grid place-items-center"
        >
            <div class = "bg-black bg-opacity-0 rounded" style={{zIndex: `0`}}>
                <h1 class = "font-bold italic text-black text-7xl md:text-9xl inline-block mt-3 mb-3 ml-5 mr-5">Welcome!</h1>
            </div>
        </section>
);
}

export default Welcome;