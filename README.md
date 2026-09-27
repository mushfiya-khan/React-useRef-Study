# React useRef & forwardRef Practice

This is a small React practice project to understand how `useRef` and `forwardRef` work together.

## Concepts Learned

* `useRef()`
* `forwardRef()`
* Passing a ref from a parent component to a child component
* Accessing a DOM element using `ref.current`
* Handling button click events

## Project Structure

* `App.jsx` — Creates and uses the ref
* `Test.jsx` — Receives the ref using `forwardRef`

## How It Works

The `App` component creates a ref using `useRef()` and passes it to the `Test` component.

The `Test` component uses `forwardRef()` to receive the ref and attach it to a `<div>`.

Clicking the **Console** button displays the referenced DOM element in the browser console.

## Technologies

* React
* JavaScript
* Vite
* HTML
* CSS

## Purpose

This project was created as part of my React learning journey to practice working with refs and component communication.
