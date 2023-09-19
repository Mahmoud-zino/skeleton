import { render } from '@testing-library/svelte';
import { describe, it, expect, beforeAll } from 'vitest';

import RecursiveTreeView from '$lib/components/TreeView/RecursiveTreeView.svelte';
import type { TreeViewNode } from './types.js';


const nodes: TreeViewNode[] = [
    {
        id: 'programming',
        content: 'programming',
        value: 'programming',
        children: [
            {
                id: 'language',
                content: 'language',
                value: 'language',
                children: [
                    {
                        id: 'javascript',
                        content: 'javascript',
                        value: 'javascript'
                    },
                    {
                        id: 'c#',
                        content: 'c#',
                        value: 'c#'
                    },
                    {
                        id: 'rust',
                        content: 'rust',
                        value: 'rust'
                    },
                ]
            },
            {
                content: 'database',
                value: 'database',
                id: 'database',
                children: [
                    {
                        id: 'mongodb',
                        content: 'mongodb',
                        value: 'mongodb'
                    },
                    {
                        id: 'mssql',
                        content: 'mssql',
                        value: 'mssql'
                    },
                    {
                        id: 'casandra',
                        content: 'casandra',
                        value: 'casandra'
                    },
                ]
            },
            {
                content: 'framework',
                value: 'framework',
                id: 'framework',
                children: [
                    {
                        id: 'svelte',
                        content: 'svelte',
                        value: 'svelte'
                    },
                    {
                        id: 'angular',
                        content: 'angular',
                        value: 'angular'
                    },
                    {
                        id: 'react',
                        content: 'react',
                        value: 'react'
                    },
                ]
            },
        ]
    },
    {
        content: 'books',
        value: 'books',
        id: 'books',
        children: [
            {
                id: 'clean code',
                content: 'clean code',
                value: 'clean code',
                children: [
                    {
                        id: 'clean code - section 1',
                        content: 'clean code - section 1',
                        value: 'clean code - section 1'
                    },
                    {
                        id: 'clean code - section 2',
                        content: 'clean code - section 2',
                        value: 'clean code - section 2'
                    },
                    {
                        id: 'clean code - section 3',
                        content: 'clean code - section 3',
                        value: 'clean code - section 3'
                    },
                ]
            },
            {
                id: 'structure',
                content: 'structure',
                value: 'structure',
                children: [
                    {
                        id: 'structure - section 1',
                        content: 'structure - section 1',
                        value: 'structure - section 1'
                    },
                    {
                        id: 'structure - section 2',
                        content: 'structure - section 2',
                        value: 'structure - section 2'
                    },
                    {
                        id: 'structure - section 3',
                        content: 'structure - section 3',
                        value: 'structure - section 3'
                    },
                ]
            },
            {
                id: 'clean coder',
                content: 'clean coder',
                value: 'clean coder',
                children: [
                    {
                        id: 'clean coder - section 1',
                        content: 'clean coder - section 1',
                        value: 'clean coder - section 1'
                    },
                    {
                        id: 'clean coder - section 2',
                        content: 'clean coder - section 2',
                        value: 'clean coder - section 2'
                    },
                    {
                        id: 'clean coder - section 3',
                        content: 'clean coder - section 3',
                        value: 'clean coder - section 3'
                    },
                ]
            },
        ]
    },
    {
        id: 'series',
        content: 'series',
        value: 'series',
        children: [
            {
                id: 'Mr. Robot',
                content: 'Mr. Robot',
                value: 'Mr. Robot',
                children: [
                    {
                        id: 'Mr. Robot - season 1',
                        content: 'Mr. Robot - season 1',
                        value: 'Mr. Robot - season 1'
                    },
                    {
                        id: 'Mr. Robot - season 2',
                        content: 'Mr. Robot - season 2',
                        value: 'Mr. Robot - season 2'
                    },
                    {
                        id: 'Mr. Robot - season 3',
                        content: 'Mr. Robot - season 3',
                        value: 'Mr. Robot - season 3'
                    },
                ]
            },
            {
                id: 'silicon valley',
                content: 'silicon valley',
                value: 'silicon valley',
                children: [
                    {
                        id: 'silicon valley - season 1',
                        content: 'silicon valley - season 1',
                        value: 'silicon valley - season 1'
                    },
                    {
                        id: 'silicon valley - season 2',
                        content: 'silicon valley - season 2',
                        value: 'silicon valley - season 2'
                    },
                    {
                        id: 'silicon valley - season 3',
                        content: 'silicon valley - season 3',
                        value: 'silicon valley - season 3'
                    },
                ]
            },
            {
                id: 'code monkeys',
                content: 'code monkeys',
                value: 'code monkeys',
                children: [
                    {
                        id: 'code monkeys - season 1',
                        content: 'code monkeys - season 1',
                        value: 'code monkeys - season 1'
                    },
                    {
                        id: 'code monkeys - season 2',
                        content: 'code monkeys - season 2',
                        value: 'code monkeys - season 2'
                    },
                    {
                        id: 'code monkeys - season 3',
                        content: 'code monkeys - season 3',
                        value: 'code monkeys - season 3'
                    },
                ]
            },
        ]
    },
];

describe('no_selection', () => {
    describe('render', () => {
        it('should render with only one level', () => {
            const oneLevelNode: TreeViewNode[] = [
                {
                    id: 'programming',
                    content: 'programming',
                    value: 'programming',
                },
                {
                    content: 'books',
                    value: 'books',
                    id: 'books',
                },
                {
                    id: 'series',
                    content: 'series',
                    value: 'series',
                }
            ];

            const { getByTestId } = render(RecursiveTreeView, {
                props: {
                    nodes: oneLevelNode
                }
            });
            
            const tree = getByTestId('tree');

            expect(tree).toBeTruthy();
            // assert count of children
            expect(tree.querySelectorAll('details').length).toEqual(3);
        });

        it('should render with multi levels', () => {
            const { getByTestId } = render(RecursiveTreeView, {
                props: {
                    nodes: nodes
                }
            });

            const tree = getByTestId('tree');

            expect(tree).toBeTruthy();
            // assert count of children
            expect(tree.querySelectorAll('details').length).toEqual(39);
        });
    });

    describe('expanded nodes', () => {
        it('should init nodes with correct expanded state', () => {
            const expandedNodes: string[] = ['programming', 'books', 'clean coder'];
            const { getByTestId } = render(RecursiveTreeView, {
                props: {
                    nodes: nodes,
                    expandedNodes: expandedNodes
                }
            });

            const tree = getByTestId('tree');
            // query all tree items content
            const contentItems = [...tree.querySelectorAll('div.tree-item-content')] as HTMLDivElement[];

            // assert nodes are expanded
            expandedNodes.forEach(id => {
                const summary = contentItems.find(item => item.textContent?.includes(id))?.closest('summary');
                expect(summary?.getAttribute('aria-expanded')).toEqual('true');
            });
        });

        it('should update expand state dynamically', async () => {
            const { getByTestId, component } = render(RecursiveTreeView, {
                props: {
                    nodes: nodes,
                    expandedNodes: []
                }
            });

            const tree = getByTestId('tree');
            // query all tree items content
            const contentItems = [...tree.querySelectorAll('div.tree-item-content')] as HTMLDivElement[];
            // query summary containing the text 'programming'
            const summary = contentItems.find(item => item.textContent?.includes('programming'))?.closest('summary');

            // assert node is expanded
            expect(summary?.getAttribute('aria-expanded')).toEqual('false');
            await component.$set({ expandedNodes: ['programming'] });
            expect(summary?.getAttribute('aria-expanded')).toEqual('true');
        });
    });

    describe('disabled nodes', () => {
        it('should init nodes with correct disabled state', () => {
            const disabledNodes: string[] = ['programming', 'books', 'clean coder'];
            const { getByTestId } = render(RecursiveTreeView, {
                props: {
                    nodes: nodes,
                    disabledNodes: disabledNodes
                }
            });

            const tree = getByTestId('tree');
            // query all tree items content
            const contentItems = [...tree.querySelectorAll('div.tree-item-content')] as HTMLDivElement[];

            // assert node is disabled
            disabledNodes.forEach(id => {
                const details = contentItems.find(item => item.textContent?.includes(id))?.closest('details');
                expect(details?.getAttribute('aria-disabled')).toEqual('true');
            });
        });

        it('should update disable state dynamically', async () => {
            const { getByTestId, component } = render(RecursiveTreeView, {
                props: {
                    nodes: nodes,
                    disabledNodes: []
                }
            });
            const tree = getByTestId('tree');
            // query all tree items content
            const contentItems = [...tree.querySelectorAll('div.tree-item-content')] as HTMLDivElement[];
            const details = contentItems.find(item => item.textContent?.includes('programming'))?.closest('details');

            // assert node is disabled / enabled
            expect(details?.getAttribute('aria-disabled')).toEqual('false');
            await component.$set({ disabledNodes: ['programming'] });
            expect(details?.getAttribute('aria-disabled')).toEqual('true');
        });
    });
});
