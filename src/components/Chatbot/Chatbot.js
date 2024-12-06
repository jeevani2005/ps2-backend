import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hello, how may I assist you?' }, // Default greeting message
  ]);
  const [userInput, setUserInput] = useState('');
  const [suggestedQuestions, setSuggestedQuestions] = useState([
    'What recipes can I try?',
    'What ingredients do you have?',
    'Looking for a quick recipe?',
    'Which cuisine do you prefer?',
    'Any dietary restrictions?',
    'Are you looking for something spicy?',
    'Looking for healthy meals?',
    'What about a vegetarian recipe?',
    'Craving dessert?',
    'Want a beginner recipe?',
    'Need help with advanced recipes?',
  ]);
  
  // Handle sending messages
  const handleSendMessage = () => {
    if (userInput.trim()) {
      const newMessages = [
        ...messages,
        { sender: 'user', text: userInput },
        { sender: 'bot', text: getBotResponse(userInput) },
      ];
      setMessages(newMessages);
      setUserInput(''); // Clear input field
    }
  };

  // Simulate bot response based on user input
  const getBotResponse = (input) => {
    const lowerInput = input.toLowerCase();

    // Recipe-related responses with input validation
    if (lowerInput.includes('recipe')) {
      return 'I can suggest a recipe for you! What ingredients do you have?';
    } else if (lowerInput.includes('ingredients')) {
      return 'Please provide a list of ingredients you have, and I will suggest a recipe.';
    } else if (lowerInput.includes('quick')) {
      return 'How much time do you have for cooking? I can suggest a quick recipe!';
    } else if (lowerInput.includes('cuisine')) {
      return 'Which cuisine are you interested in? For example, Italian, Indian, or Mexican.';
    } else if (lowerInput.includes('diet')) {
      return 'Do you have any dietary preferences? For instance, vegan, vegetarian, gluten-free, etc.';
    } else if (lowerInput.includes('spicy')) {
      return 'Would you like a spicy dish? Let me know your spice tolerance!';
    } else if (lowerInput.includes('healthy')) {
      return 'I can suggest healthy recipes! Are you looking for something light and nutritious?';
    } else if (lowerInput.includes('vegetarian')) {
      return 'Do you prefer a vegetarian recipe? I can suggest something based on your preferences.';
    } else if (lowerInput.includes('dessert')) {
      return 'Are you looking for a sweet dessert? Let me know if you want something light or indulgent!';
    }

    // Cuisine-specific questions with validation
    else if (lowerInput.includes('indian')) {
      return 'Indian cuisine offers a wide variety of flavors! Would you like a curry, biryani, or something else?';
    } else if (lowerInput.includes('italian')) {
      return 'Italian food is famous for pizza and pasta. Would you prefer a pizza or pasta dish?';
    } else if (lowerInput.includes('mexican')) {
      return 'Mexican food is always delicious! Tacos, burritos, or quesadillas – what would you like to try?';
    } else if (lowerInput.includes('chinese')) {
      return 'How about Chinese cuisine? Do you want fried rice, noodles, or a stir-fry?';
    }

    // Cooking skills-related questions
    else if (lowerInput.includes('beginner')) {
      return 'I can recommend simple and easy recipes for beginners! Would you like a beginner-friendly dish?';
    } else if (lowerInput.includes('advanced')) {
      return 'Looking for an advanced recipe? I can suggest something challenging for experienced chefs!';
    }

    // Other general questions with validation
    else if (lowerInput.includes('platform')) {
      return 'This platform helps you discover recipes based on your preferences, ingredients, dietary needs, and more!';
    } else if (lowerInput.includes('how')) {
      return 'You can ask me for recipe suggestions based on what ingredients you have, or I can suggest cuisines, dietary preferences, and more!';
    }

    // Default response for unrecognized input
    else {
      return 'I am not sure how to respond to that. Can you please ask something related to recipes or cuisines?';
    }
  };

  // Handle user click on suggested questions
  const handleSuggestedQuestion = (question) => {
    const newMessages = [
      ...messages,
      { sender: 'user', text: question },
      { sender: 'bot', text: getBotResponse(question) },
    ];
    setMessages(newMessages);
  };

  return (
    <Box
      sx={{
        padding: 3,
        width: '400px',
        margin: 'auto',
        backgroundColor: '#f9f9f9',
        borderRadius: '16px',
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
        transition: 'all 0.3s ease-in-out',
      }}
    >
      <Typography variant="h6" sx={{ marginBottom: 2, textAlign: 'center', fontWeight: 'bold' }}>
        Chatbot
      </Typography>

      <Box
        sx={{
          height: '300px',
          overflowY: 'auto',
          marginBottom: 2,
          padding: '10px',
          backgroundColor: '#fff',
          borderRadius: '12px',
          boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.1)',
          display: 'flex',
          flexDirection: 'column-reverse',
        }}
      >
        {messages.map((message, index) => (
          <Box
            key={index}
            sx={{
              display: 'flex',
              justifyContent: message.sender === 'user' ? 'flex-end' : 'flex-start',
              marginBottom: 1,
            }}
          >
            <Box
              sx={{
                padding: '8px 12px',
                backgroundColor: message.sender === 'user' ? '#B2D8B2' : '#D8D8D8',
                borderRadius: '12px',
                maxWidth: '60%',
                transition: 'all 0.2s ease-in-out',
                '&:hover': {
                  transform: 'scale(1.05)',
                },
              }}
            >
              <Typography variant="body1">{message.text}</Typography>
            </Box>
          </Box>
        ))}
      </Box>

      <Box sx={{ marginBottom: 2 }}>
        <Typography variant="body2" sx={{ textAlign: 'center', marginBottom: 1 }}>
          Choose a question:
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, justifyContent: 'center' }}>
          {suggestedQuestions.map((question, index) => (
            <Chip
              key={index}
              label={question}
              onClick={() => handleSuggestedQuestion(question)}
              sx={{
                cursor: 'pointer',
                backgroundColor: '#B2D8B2',
                color: 'white',
                '&:hover': {
                  backgroundColor: '#4CAF50',
                },
              }}
            />
          ))}
        </Box>
      </Box>

      <Box sx={{ display: 'flex' }}>
        <TextField
          label="Type your message"
          variant="outlined"
          fullWidth
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          sx={{
            marginRight: 1,
            '& .MuiOutlinedInput-root': {
              borderRadius: '12px',
            },
          }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleSendMessage}
          sx={{
            borderRadius: '12px',
            padding: '10px 20px',
            '&:hover': {
              backgroundColor: '#4CAF50',
            },
          }}
        >
          Send
        </Button>
      </Box>
    </Box>
  );
};

export default Chatbot;
