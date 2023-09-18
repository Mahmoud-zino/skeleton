<script lang="ts">
    import TreeViewItem from './TreeViewItem.svelte';
    import RecursiveTreeViewItem from "./RecursiveTreeViewItem.svelte";
    import type { TreeViewNode } from './types.js';

	// this can't be passed using context, since we have to pass it to recursive children.
	/** Provide data-driven nodes. */
	export let nodes: TreeViewNode[] = [];

    export let expandedNodes : string[] = [];
    export let disabledNodes : string[] = [];

    // Locals
    let group: unknown;
    let name = '';
    
    function toggleNode(node: TreeViewNode, open: boolean) {
        if(!node.children?.length) return;
        if(open) {
            // node is not registered as opened
            if(!expandedNodes.includes(node.id)) {
                expandedNodes.push(node.id);
                expandedNodes = expandedNodes;
            }  
        } else {
            // node is registered as open
            if(expandedNodes.includes(node.id)) {
                expandedNodes.splice(expandedNodes.indexOf(node.id), 1);
                expandedNodes = expandedNodes;
            }
        }
    }
</script>

{#if nodes && nodes.length > 0}
	{#each nodes as node, i}
		<TreeViewItem
			hideLead={!node.lead}
			hideChildren={!node.children || node.children.length === 0}
            open={expandedNodes.includes(node.id)}
            on:toggle={(e) => toggleNode(node, e.detail.open)}
            disabled={disabledNodes.includes(node.id)}
        >
			{@html node.content}
			<svelte:fragment slot="lead">
				{@html node.lead}
			</svelte:fragment>
			<svelte:fragment slot="children">
				<RecursiveTreeViewItem nodes={node.children} 
                    bind:expandedNodes={expandedNodes}
                    bind:disabledNodes={disabledNodes}/>
			</svelte:fragment>
		</TreeViewItem>
	{/each}
{/if}