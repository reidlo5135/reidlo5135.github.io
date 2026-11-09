---
title: Robot Engineering Studio
summary: An engineering and operations tool to watch, drive and configure many ROS 2 robots from one screen, with a 3D world and the SLAM map.
period: 2026-08 – 2026-10
role: Sole designer and developer (GUI, server, 3D world builder)
kind: personal
stack: [React 19, TypeScript, Three.js, Zustand, TanStack Query, NestJS, Electron, Capacitor, ROS 2]
order: 1
---

<!-- TODO: one hero recording (GIF) — driving a robot from the fleet screen -->

## The problem

Working with robots on site meant juggling terminals, rviz, parameter files and logs. I built one tool to watch, drive and configure several robots from a single screen.

## What it does

- **Fleet view** — every robot's state, pose and path on one screen.
- **Teleoperation** — a steering wheel and pedals drawn like the real thing, with P · R · N · D gears that double as the safety interlock. While a mission owns the robot, manual controls lock and say why.
- **2D SLAM map and 3D simulation world** — the map drawn the way rviz draws it, the 3D world with a chase camera; the streamed path, nodes and segments appear on both.
- **3D world builder** — a package (`@res/world-builder`) that turns a SLAM map into a 3D simulation world.
- **Config editor** — parameters as a form or as YAML, both editing one change set.
- **One codebase, many platforms** — web, desktop (Electron), Android and iOS (Capacitor).

## Design decisions

<!-- TODO: two or three -->

## What I learned

<!-- TODO -->
