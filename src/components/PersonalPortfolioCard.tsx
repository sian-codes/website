import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import InstaDupe from '../assets/instadupe.png';
import React, {useEffect, useRef, useState} from "react";
import {Box} from "@mui/material";

const cardContent = [{
    image: InstaDupe,
    id: 1,
    title: 'Instagram UI Clone (Styling Test Project)',
    description: 'Recreated Instagram’s core user interface as a front-end styling and layout exercise. Used React to build reusable components such as the feed, profile, navigation bar, and stories layout.',
},
    {
        image: InstaDupe,
        id: 2,
        title: 'Instagram UI Clone (Styling Test Project)',
        description: 'Recreated Instagram’s core user interface as a front-end styling and layout exercise. Used React to build reusable components such as the feed, profile, navigation bar, and stories layout.',
    },
    {
        image: InstaDupe,
        id: 3,
        title: 'Instagram UI Clone (Styling Test Project)',
        description: 'Recreated Instagram’s core user interface as a front-end styling and layout exercise. Used React to build reusable components such as the feed, profile, navigation bar, and stories layout.',
    }
];

function PersonalPortfolioCard() {
    const [selectedCard, setSelectedCard] = React.useState(0);
    const [visibleCards, setVisibleCards] = useState<number[]>([]);
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const observer = new window.IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const index = Number(entry.target.getAttribute('data-index'));
                    if (entry.isIntersecting) {
                        setVisibleCards((prev) =>
                            prev.includes(index) ? prev : [...prev, index]
                        );
                    } else {
                        setVisibleCards((prev) =>
                            prev.filter((i) => i !== index)
                        );
                    }
                });
            },
            {threshold: 0.2} // Adjust threshold as needed
        );
        cardRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });
        return () => observer.disconnect();
    }, []);

    return (
        <Box
            sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                gap: 4,
                overflow: 'auto',
            }}
        >
            {cardContent.map((card, index) => (
                <Card
                    key={card.id}
                    component="div"
                    ref={(el: HTMLDivElement | null) => {cardRefs.current[index] = el;}}
                    data-index={index}
                    sx={{
                        maxWidth: 350,
                        backgroundColor: '#80AF81',
                        color: '#fff',
                        opacity: visibleCards.includes(index) ? 1: 0,
                        transform: visibleCards.includes(index)
                            ? 'translateY(0) scale(1.05)'
                            : 'translateY(40px) scale(0.95)',
                        zIndex: visibleCards.includes(index) ? 10 : 1,
                        transition: 'opacity 1s cubic-bezier(.4,0,.2,1),' +
                            'transform 1s cubic-bezier(.4,0,.2,1), z-index 0.5s',
                    }}
                >
                    <CardActionArea
                        onClick={() => setSelectedCard(index)}
                        data-active={selectedCard === index ? '' : undefined}
                        sx={{
                            height: '100%',
                            '&[data-active]': {
                                backgroundColor: 'action.selected',
                                '&:hover': {
                                    backgroundColor: 'action.hover',
                                },
                            },
                        }}

                    >
                        <CardMedia
                            component="img"
                            height="350"
                            image={card.image}
                            alt="image"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {card.title}
                            </Typography>
                            <Typography variant="body2" sx={{ color: '#fff' }}>
                                {card.description}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            Source Code
                        </Button>
                    </CardActions>
                </Card>
            ))}
        </Box>
    );
}

export default PersonalPortfolioCard;
