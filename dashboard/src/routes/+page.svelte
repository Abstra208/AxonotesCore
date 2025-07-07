<script>
    import "../app.css";

    let isSideOpen = false;

    function ToggleSide() {
        isSideOpen = !isSideOpen;
    }
</script>

<main class="w-screen h-screen">
    <header class="absolute w-full flex items-center py-4">
        <div class="relative flex items-center gap-2 {isSideOpen ? 'pl-8 left-0 top-0 text-xl' : 'pl-0 left-[50vw] top-50 transform -translate-x-[50%] text-4xl'} transition-all duration-500 ease-in-out">
            <img class="{isSideOpen ? 'h-10 w-10' : 'h-20 w-20'} transition-all duration-300 ease-in-out" src="/favicon.png" alt="">
            <h1>Axonotes</h1>
        </div>
    </header>
    <div class="h-full w-full flex flex-col justify-center items-center bg-gray-100">
        <div class="absolute w-[60vw] flex flex-col text-center {isSideOpen ? '-translate-x-[20vw] px-8' : 'translate-x-0'} transition-all duration-500 ease-in-out">
            <h1 class="relative text-2xl {isSideOpen ? '' : 'left-[50%] transform -translate-x-[50%]'}">The Academic Platform That Actually Gets It</h1>
            <p class="relative text-gray-600 {isSideOpen ? '' : 'left-[50%] transform -translate-x-[50%]'}">Stop juggling apps, losing work, and fighting with tools that weren't made for learning.<br> Axonotes is built by students who've felt your pain.</p>
            <button class="relative {isSideOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'} transition-all duration-50 ease-in-out" onclick={ToggleSide}>Get Started</button>
        </div>
    </div>
    <div class="h-full w-[40vw] absolute top-0 right-0 flex flex-col items-center justify-center bg-gray-500 shadow-lg shadow-black {isSideOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'} transition-all duration-500 ease-in-out"
         class:isOpen={isSideOpen}>
        <h1 class="text-2xl">Login</h1>
        <form action="" class="flex flex-col gap-2 w-80">
            <input type="email" placeholder="Username" class="border p-2" />
            <input type="password" placeholder="Password" class="border p-2" />
            <button type="submit" class="bg-blue-500 text-white p-2">Login</button>
        </form>
    </div>
    <footer class="absolute bottom-0 w-full pl-8 py-4 text-xs">
        <div class="flex gap-4">
            <a class="hover:underline" href="https://discord.gg/myBMaaDeQu" target="_blank">Discord</a>
            <a class="hover:underline" href="https://github.com/axonotes/" target="_blank">GitHub</a>
            <a class="hover:underline" href="https://github.com/axonotes/AxonotesCore/issues" target="_blank">Issues</a>
        </div>
    </footer>
</main>