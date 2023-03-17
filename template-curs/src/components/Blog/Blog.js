import { Card, CardContent, CardMedia, Typography } from '@mui/material/';
import "./style.css";

function spawnCards(card) {
    let cards = [];
    for (let i = 0; i < 20; i++) {
        cards.push(card)
    }
    return cards;

}

const Blog = () => {

    let card = <Card className='card'>
        <CardMedia className='cardMedia' image="lilbroomstick.jpg" component="img">

        </CardMedia>
        <CardContent className='cardContent'>
            <Typography component='p' >Lil Broom$tick</Typography>
        </CardContent>

    </Card>



    return (
        <div className='blogContainer'>

            <div className='leftPart'>

            </div>
            <div className='centerContainer'>
                {spawnCards(card)}
            </div>
            <div className='rightPart'>

            </div>
        </div>
    );
}

export default Blog;