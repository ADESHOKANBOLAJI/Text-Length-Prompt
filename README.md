# Text Length Prompt

This project is a simple JavaScript application that takes user input via a prompt, calculates the number of characters entered, and provides feedback on the remaining characters out of a 150-character limit.

## Features

- **User Input Handling:** Prompts the user to enter text and calculates the text length.
- **Dynamic Feedback:**
  - Displays the number of characters written.
  - Shows the remaining characters available (or notifies if the limit is exceeded).
- **Error Handling:**
  - Alerts the user if no input is provided.
  - Trims unnecessary whitespace for accurate character count.

## Project Structure

```
Text-Length-Prompt/
│
├── index.html          # Main HTML file to run the app in a browser
├── script.js           # JavaScript file containing the application logic
├── Play.js             # Additional JavaScript more of a test code
├── Play Full Code.js   # Complete code for enhanced use cases
└── README.md           # Project documentation
```

## How to Use

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/ADESHOKANBOLAJI/Text-Length-Prompt.git
   cd Text-Length-Prompt
   ```

2. **Open the Application:**
   - Open `index.html` in your browser.

3. **Test the Prompt:**
   - A prompt will appear asking, *"What is on your mind?"*
   - Enter your text and press **OK**.
   - Feedback will be displayed via alerts, showing character count and remaining limit.

## Example Scenarios

### Input
```
User types: "JavaScript is awesome!"
```

### Output
```
You have written 23 characters. You have 127 characters remaining.
```

### Exceeding the Limit
```
User types: "This is a very long message that exceeds the 150-character limit to demonstrate how the app handles overflow text..."
```

Output:
```
You have exceeded the limit by 24 characters.
```

### No Input
If the user leaves the input blank or cancels the prompt:
```
You didn't write anything!
```

## Technologies Used

- **HTML:** Provides the structure of the web page.
- **JavaScript:** Implements the text length calculation and feedback logic.

## Possible Enhancements

- Add a live character counter using a text input field.
- Create a styled user interface with CSS.
- Allow customization of the character limit through a settings panel.

## Contributing

Contributions are welcome! Please fork this repository, make changes, and submit a pull request for review.

## License

This project is open-source and licensed under the [MIT License](LICENSE).
