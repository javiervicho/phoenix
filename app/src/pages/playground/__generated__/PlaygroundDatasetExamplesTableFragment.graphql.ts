/**
 * @generated SignedSource<<8c42c1b6ff7a0e8134308a80281b58ab>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment, RefetchableFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type PlaygroundDatasetExamplesTableFragment$data = {
  readonly examples: {
    readonly edges: ReadonlyArray<{
      readonly example: {
        readonly id: string;
        readonly revision: {
          readonly input: any;
          readonly output: any;
        };
      };
    }>;
  };
  readonly id: string;
  readonly " $fragmentType": "PlaygroundDatasetExamplesTableFragment";
};
export type PlaygroundDatasetExamplesTableFragment$key = {
  readonly " $data"?: PlaygroundDatasetExamplesTableFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"PlaygroundDatasetExamplesTableFragment">;
};

import PlaygroundDatasetExamplesTableRefetchQuery_graphql from './PlaygroundDatasetExamplesTableRefetchQuery.graphql';

const node: ReaderFragment = (function(){
var v0 = [
  "examples"
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "argumentDefinitions": [
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "after"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "datasetVersionId"
    },
    {
      "defaultValue": 20,
      "kind": "LocalArgument",
      "name": "first"
    }
  ],
  "kind": "Fragment",
  "metadata": {
    "connection": [
      {
        "count": "first",
        "cursor": "after",
        "direction": "forward",
        "path": (v0/*: any*/)
      }
    ],
    "refetch": {
      "connection": {
        "forward": {
          "count": "first",
          "cursor": "after"
        },
        "backward": null,
        "path": (v0/*: any*/)
      },
      "fragmentPathInResult": [
        "node"
      ],
      "operation": PlaygroundDatasetExamplesTableRefetchQuery_graphql,
      "identifierInfo": {
        "identifierField": "id",
        "identifierQueryVariableName": "id"
      }
    }
  },
  "name": "PlaygroundDatasetExamplesTableFragment",
  "selections": [
    {
      "alias": "examples",
      "args": [
        {
          "kind": "Variable",
          "name": "datasetVersionId",
          "variableName": "datasetVersionId"
        }
      ],
      "concreteType": "DatasetExampleConnection",
      "kind": "LinkedField",
      "name": "__PlaygroundDatasetExamplesTable_examples_connection",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "DatasetExampleEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": "example",
              "args": null,
              "concreteType": "DatasetExample",
              "kind": "LinkedField",
              "name": "node",
              "plural": false,
              "selections": [
                (v1/*: any*/),
                {
                  "alias": null,
                  "args": null,
                  "concreteType": "DatasetExampleRevision",
                  "kind": "LinkedField",
                  "name": "revision",
                  "plural": false,
                  "selections": [
                    {
                      "alias": null,
                      "args": null,
                      "kind": "ScalarField",
                      "name": "input",
                      "storageKey": null
                    },
                    {
                      "alias": null,
                      "args": null,
                      "kind": "ScalarField",
                      "name": "output",
                      "storageKey": null
                    }
                  ],
                  "storageKey": null
                }
              ],
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "cursor",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "concreteType": "DatasetExample",
              "kind": "LinkedField",
              "name": "node",
              "plural": false,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "__typename",
                  "storageKey": null
                }
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "PageInfo",
          "kind": "LinkedField",
          "name": "pageInfo",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "endCursor",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "hasNextPage",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    (v1/*: any*/)
  ],
  "type": "Dataset",
  "abstractKey": null
};
})();

(node as any).hash = "ae68770500a29b14f7108d56c146fb99";

export default node;