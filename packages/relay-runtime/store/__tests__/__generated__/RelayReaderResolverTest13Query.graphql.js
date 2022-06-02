/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @generated SignedSource<<48236f8e803f61bb22879d691df2dfb3>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest, Query } from 'relay-runtime';
import userAlwaysThrowsTransitivelyResolver from "../../../../relay-test-utils-internal/resolvers/UserAlwaysThrowsTransitivelyResolver.js";
export type RelayReaderResolverTest13Query$variables = {||};
export type RelayReaderResolverTest13Query$data = {|
  +me: ?{|
    +always_throws_transitively: ?$Call<<R>((...empty[]) => R) => R, typeof userAlwaysThrowsTransitivelyResolver>,
  |},
|};
export type RelayReaderResolverTest13Query = {|
  response: RelayReaderResolverTest13Query$data,
  variables: RelayReaderResolverTest13Query$variables,
|};
*/

var node/*: ConcreteRequest*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "RelayReaderResolverTest13Query",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "me",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "fragment": {
              "args": null,
              "kind": "FragmentSpread",
              "name": "UserAlwaysThrowsTransitivelyResolver"
            },
            "kind": "RelayResolver",
            "name": "always_throws_transitively",
            "resolverModule": require('./../../../../relay-test-utils-internal/resolvers/UserAlwaysThrowsTransitivelyResolver.js'),
            "path": "me.always_throws_transitively"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "RelayReaderResolverTest13Query",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "me",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "__typename",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "e7a77b7cf3cba81386eb6666c24919a5",
    "id": null,
    "metadata": {},
    "name": "RelayReaderResolverTest13Query",
    "operationKind": "query",
    "text": "query RelayReaderResolverTest13Query {\n  me {\n    ...UserAlwaysThrowsTransitivelyResolver\n    id\n  }\n}\n\nfragment UserAlwaysThrowsResolver on User {\n  __typename\n}\n\nfragment UserAlwaysThrowsTransitivelyResolver on User {\n  ...UserAlwaysThrowsResolver\n}\n"
  }
};

if (__DEV__) {
  (node/*: any*/).hash = "a1ee24e63b8d0d4ad72a9cdebac45fe9";
}

module.exports = ((node/*: any*/)/*: Query<
  RelayReaderResolverTest13Query$variables,
  RelayReaderResolverTest13Query$data,
>*/);