<script lang="ts">
    import type { Block } from "../types";
    import Hero from "./Hero.svelte";

    export let data: Block[];

</script>

{#each data as block}
    {#if block.collection === 'shcoc_block_hero'}
        <Hero data={block.item} />
    {/if}
{/each}

