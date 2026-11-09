---
title: PokeSix
summary: A companion for replaying the Pokémon generations — Pokédex, party analysis, items and a save viewer. Started as a Qt 6 desktop app, now rebuilt in multi-platform React.
period: 2026-09 –
role: Sole designer and developer
kind: personal
stack: [TypeScript, React, Vite, Electron, Capacitor, Vitest, Qt 6, C++20]
order: 2
links:
  - label: GitHub
    href: https://github.com/reidlo5135/PokeSix
---

<!-- TODO: party analysis screenshot -->

## What it is

A tool to keep open while replaying the series in order: the Pokédex, type analysis for a six-member party (SixSquad), items and a save-file viewer. Data comes from [PokéAPI](https://pokeapi.co/); no game assets are bundled.

## From Qt 6 to React

The first version was a Qt 6 / C++20 desktop app, released up to v0.5.1. To run the same app on the web, desktop and mobile, I am rebuilding it from scratch in TypeScript and React. The Qt version stays under the `qt6-final` tag and in Releases.

<!-- TODO: what using both stacks taught me -->
