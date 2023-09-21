<script lang="ts">
    import TreeViewItem from './TreeViewItem.svelte';
    import RecursiveTreeViewItem from "./RecursiveTreeViewItem.svelte";
    import type { TreeViewNode } from './types.js';
    import { getContext, onMount } from 'svelte';

	// this can't be passed using context, since we have to pass it to recursive children.
	/** Provide data-driven nodes. */
	export let nodes: TreeViewNode[] = [];

    export let expandedNodes : string[] = [];
    export let disabledNodes : string[] = [];
    export let checkedNodes : string[] = [];
    
	// Context API
	/** Enable tree-view selection */
	let selection: boolean = getContext('selection');
	/** Enable selection of multiple items. */
	let multiple: boolean = getContext('multiple');

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

    function checkNode(node: TreeViewNode, checked: boolean) {
        if(checked) {
            // node is not registered as checked
            if(!checkedNodes.includes(node.id)) {
                checkedNodes.push(node.id);
                checkedNodes = checkedNodes;
            } 
        } else {
            // node is registered as checked
            if(checkedNodes.includes(node.id)) {
                checkedNodes.splice(checkedNodes.indexOf(node.id), 1);
                checkedNodes = checkedNodes;
            }
        }
    }

    onMount(() => {
        if(selection) {
            // random number as name
            name = String(Math.random());

            if(group === undefined) {

                if(multiple) {
                    group = [];
                    nodes.forEach(node => {
                        if(checkedNodes.includes(node.id) && Array.isArray(group))
                            group.push(node.id);
                    })
                    group = group;
                } else {
                    group = '';
                    nodes.forEach(node => {
                        if(checkedNodes.includes(node.id))
                            group = node.id
                    })
                }
            }
        }
    });
</script>

{#if nodes && nodes.length > 0}
	{#each nodes as node, i}
		<TreeViewItem
			hideLead={!node.lead}
			hideChildren={!node.children || node.children.length === 0}
            open={expandedNodes.includes(node.id)}
            on:toggle={(e) => toggleNode(node, e.detail.open)}
            disabled={disabledNodes.includes(node.id)}
            bind:group
            bind:name
            bind:value={node.id}
            checked={checkedNodes.includes(node.id)}
            on:groupChange={(e) => checkNode(node, e.detail.checked)}
        >
			{@html node.content}
			<svelte:fragment slot="lead">
				{@html node.lead}
			</svelte:fragment>
			<svelte:fragment slot="children">
				<RecursiveTreeViewItem 
                    nodes={node.children} 
                    bind:expandedNodes={expandedNodes}
                    bind:disabledNodes={disabledNodes}
                    bind:checkedNodes={checkedNodes}/>
			</svelte:fragment>
		</TreeViewItem>
	{/each}
{/if}