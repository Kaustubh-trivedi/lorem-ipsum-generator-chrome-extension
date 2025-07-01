# Lorem Ipsum Generator Chrome Extension

This project is a simple **Lorem Ipsum Generator** built using **React** and **Vite**. It allows the user to generate Lorem Ipsum text with a configurable number of paragraphs (from 1 to 30). The user can copy the generated text with a single click, and upon successful copy, a checkmark icon will appear briefly to indicate the action was successful.

## Features
- **Generate Lorem Ipsum**: Generate Lorem Ipsum text with a user-defined number of paragraphs (1 to 30).
- **Copy to Clipboard**: Copy the generated text to the clipboard with a button click.
- **UI Feedback**: Display a checkmark for a few seconds after the text is successfully copied.
- **Minimal and Responsive Design**: The user interface is clean and minimal, with a muted, earthy color palette.

## Prerequisites
Before you start, ensure you have the following installed:
- **Node.js** (preferably the latest LTS version)
- **npm** (comes with Node.js)

## Installation

1. Clone the repository:
   ```bash
  git clone https://github.com/Kaustubh-trivedi/lorem-ipsum-generator-chrome-extension.git
    ```

2. Navigate to the project directory:
  ```bash
  cd lorem-ipsum-chrome-extension
  ```

3. Install dependencies:
  ```bash
  npm install  
  ```

4. Run the development server:
  ```bash
  npm run dev
  ```

The app will be running at http://localhost:3000

## Building the Chrome Extension

1. After developing and testing the extension locally, you can build the project for production:
  ```bash
  npm run build
  ```
2. Navigate to the Chrome extensions page:

    >In Chrome, go to chrome://extensions/

    >Enable Developer Mode.

    >Click Load unpacked.

    >Select the dist folder from the project directory.

3. You should now see the extension in your browser, and you can start using it!