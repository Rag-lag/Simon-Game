# Simon Game

A web-based implementation of the classic Simon electronic memory game. Test your memory by repeating the increasingly complex pattern of colors and sounds.

## Description

Simon is an electronic game of short-term memory skill. The game creates a series of tones and lights and requires the user to repeat the sequence. If the user succeeds, the series becomes progressively longer and more complex. Once the user fails, the game is over.

## Features

- Interactive colored buttons (red, blue, green, yellow)
- Sound feedback for each button press
- Visual animations for button interactions
- Progressive difficulty levels
- Game over animation and restart functionality
- Score tracking
- Responsive heading animations

## Demo

You can play it here: https://rag-lag.github.io/Simon-Game/

## Technologies Used

- HTML5
- CSS3
- JavaScript
- jQuery

## How to Play

1. Click anywhere on the screen to start the game
2. Watch and listen to the pattern played by the game
3. Repeat the pattern by clicking the buttons in the correct order
4. The pattern gets longer after each successful round
5. If you make a mistake, the game ends
6. Click anywhere to restart and try again

## Project Structure

```
simon-game/
├── index.html
├── styles.css
├── game.js
└── sounds/
    ├── blue.mp3
    ├── green.mp3
    ├── red.mp3
    ├── wrong.mp3
    └── yellow.mp3
```

## Game Logic

- The game generates a random sequence of colors
- Each color has an associated sound
- Players must replicate the sequence exactly
- The sequence increases by one color after each successful round
- The game ends if the player makes a mistake
- Score is tracked by levels completed

## Features in Detail

### Visual Feedback

- Buttons flash when activated
- Background flashes red on game over
- Level number display
- Heading animations for game states

### Audio Feedback

- Unique sound for each color
- Error sound for incorrect sequences

### Interactive Elements

- Clickable colored buttons
- Full-screen click to start/restart
- Responsive button animations

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Future Enhancements

- High score tracking
- Multiple difficulty levels
- Speed settings
- Mobile responsive design
- Sound on/off toggle
- Color blind mode

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

- Inspired by the classic Simon electronic game
- jQuery library
