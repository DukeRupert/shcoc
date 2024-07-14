<script lang="ts">
    import type { Block } from "../types";
    import Hero from "./Hero.svelte";
    import FeatureGrid from "./Feature_Grid.svelte";

    export let data: Block[];

</script>

{#each data as block}
    {#if block.collection === 'shcoc_block_hero'}
        <Hero data={block.item} />
    {:else if block.collection === 'shcoc_block_feature_grid_2x2'}
        <FeatureGrid data={block.item} />
    {/if}
{/each}

