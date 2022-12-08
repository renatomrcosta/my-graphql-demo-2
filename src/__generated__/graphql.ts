/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Album = {
  __typename?: 'Album';
  artistId: Scalars['Int'];
  artists: Artist;
  id: Scalars['Int'];
  name: Scalars['String'];
};

export type Artist = {
  __typename?: 'Artist';
  albums: Array<Album>;
  id: Scalars['Int'];
  /** badassName */
  name: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  albums: Array<Album>;
  artists: Array<Artist>;
  songs: Array<Song>;
};

export type Song = {
  __typename?: 'Song';
  artist: Artist;
  artistId: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['String'];
};

export type SongsQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type SongsQueryQuery = { __typename?: 'Query', songs: Array<{ __typename?: 'Song', id: number, name: string, artist: { __typename?: 'Artist', id: number, name: string } }> };


export const SongsQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SongsQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"songs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"artist"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<SongsQueryQuery, SongsQueryQueryVariables>;