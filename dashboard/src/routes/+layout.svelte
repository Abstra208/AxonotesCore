<script lang="ts">
    import "../app.css";
    import LightSwitch from "$lib/components/LightSwitch.svelte";
    import AuthButton from "$lib/components/AuthButton.svelte";
    import { onMount } from "svelte";

    let page = "/";
    let isMain = true;
    let isDashboard = false;
    const {children} = $props();

    onMount(() => {
        page = window.location.pathname;
    });
</script>

<div class="from-primary-700/10 dark:to-primary-700/20 flex min-h-screen flex-col bg-gradient-to-br to-transparent dark:from-transparent">
    {#if isMain}
        <header></header>
        <footer></footer>
    {:else}
        <header class="absolute left-0 top-0 z-20 flex w-full items-center justify-end p-2">
            <AuthButton />
            <LightSwitch />
        </header>

        <footer class="absolute bottom-0 p-4 text-center text-sm">
            © {new Date().getFullYear()} Axonotes. All rights reserved.
        </footer>
    {/if}

    <main>
        {@render children()}
    </main>
</div>
