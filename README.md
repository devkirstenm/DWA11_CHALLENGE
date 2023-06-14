# Tally App with Redux-inspired State Management ✨

## Challenge Objective ✅

The challenge was to implement a Redux-inspired store to manage the state of a basic counting Tally App.

## Application 📱

This codebase provides a simplified implementation of Redux-inspired state management for a Tally App.

The Tally App allows users to perform basic counting operations, such as incrementing, decrementing, and resetting the count.

## User Stories 📝

The user stories for this application, written in Gherkin syntax, are as follows:

1. **Increment the counter by one** 🔢

   - Given no interactions have been performed yet
   - When the "getState" method is run and logged to the console
   - Then the state should show a count of 0

2. **Increment the counter by one** 🔢

   - Given no interactions have been performed yet
   - When an "ADD" action is dispatched
   - And another "ADD" action is dispatched
   - Then the state should show a count of 2

3. **Decrement the counter by one** 🔢

   - Given the current count in the state is 2
   - When a "SUBTRACT" action is dispatched
   - Then the state should display a count of 1

4. **Resetting the Tally Counter** 🔄

   - Given the current count in the state is 1
   - When a "RESET" action is dispatched
   - Then the state should display a count

## How to Use 🚀

To use the Tally App with Redux-inspired state management:

1. Download the code from the Git repository by clicking on the "Download ZIP" button.

2. Open the downloaded code in Visual Studio Code or your preferred code editor.

3. Open the console in your web browser.

4. Observe the console output to see the state changes based on the dispatched actions.

## Technologies Used 🛠️

Visual Studio Code

### Programming Languages 💻

- HTML
- JavaScript

## Credits 👏

Challenge provided by provided by [Codespace](https://www.codespace.co.za/) as part of the Dynamic Web Apps Module (DWA_11: Functional Programming)
