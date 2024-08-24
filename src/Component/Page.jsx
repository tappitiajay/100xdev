import { AppBar, Box, Button, Card, CardContent, CardMedia, Container, Grid, Link, Toolbar, Typography } from '@mui/material';
import { styled } from '@mui/system';
import React from 'react';

// Styled component for the logo
const Logo = styled('img')({
  height: '40px', // Adjust height as needed
  marginRight: '16px',
});

const AnimeWorldChannelPage = () => {
  return (
    <div>
      {/* Top Bar with Signup and Login */}
      <AppBar position="fixed" color="default" sx={{ top: 0 }}>
        <Toolbar>
          <Logo src=".Images/1.png" alt="One Piece Logo" />
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            AnimeWorld
          </Typography>
          <Button color="primary" variant="contained" sx={{ marginRight: 2 }}>Signup</Button>
          <Button color="primary" variant="outlined">Login</Button>
        </Toolbar>
      </AppBar>

      {/* Adjust padding to account for the fixed AppBar */}
      <Toolbar />

      {/* Channel Section */}
      <Container sx={{ marginTop: 4 }}>
        <Typography variant="h4" gutterBottom>
          <Link href="https://www.youtube.com/results?search_query=%40AnimeWorld_1917" target="_blank" rel="noopener">
            @AnimeWorld_1917
          </Link>
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          One Piece Videos Only - Subscribe for more!
        </Typography>
        <Button
          color="error"
          variant="contained"
          sx={{ marginTop: 2 }}
          href="https://www.youtube.com/results?search_query=%40AnimeWorld_1917"
          target="_blank"
          rel="noopener"
        >
          Subscribe
        </Button>

        {/* One Piece Description */}
        <Box sx={{ marginTop: 4 }}>
          <Typography variant="h5" gutterBottom>
            About One Piece
          </Typography>
          <Typography variant="body1" color="textPrimary" paragraph>
            One Piece is a globally renowned anime and manga series created by Eiichiro Oda. It follows the epic adventures of Monkey D. Luffy, a young pirate with the ability to stretch his body like rubber after eating a mysterious Devil Fruit. Luffy's goal is to find the legendary treasure known as "One Piece" and become the Pirate King.
          </Typography>
          <Typography variant="body1" color="textPrimary" paragraph>
            The story is set in a vast world filled with dangerous seas, mysterious islands, and powerful foes. Along the way, Luffy assembles a diverse and loyal crew, known as the Straw Hat Pirates, each with their own dreams and unique abilities. Together, they face formidable enemies, uncover ancient secrets, and experience heartwarming moments of friendship and courage.
          </Typography>
          <Typography variant="body1" color="textPrimary" paragraph>
            One Piece is celebrated for its intricate world-building, rich character development, and long-running storyline, which has captivated fans for over two decades. With over 1,000 episodes and counting, it remains one of the most popular and influential anime series of all time, inspiring a dedicated global fanbase and leaving a lasting impact on the world of animation and storytelling.
          </Typography>
        </Box>

        {/* Content Grid */}
        <Grid container spacing={4} sx={{ marginTop: 4 }}>
          {/* Example Video Card */}
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image="./Images/one-piece.png"
                alt="One Piece Video"
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  One Piece Episode 1000
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Watch the epic milestone episode of One Piece.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Repeat similar Grid items for more videos */}
        </Grid>
      </Container>
    </div>
  );
};

export default AnimeWorldChannelPage;