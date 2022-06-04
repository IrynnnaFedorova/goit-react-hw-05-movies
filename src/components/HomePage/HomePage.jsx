import Container from 'components/Container';
import Title from './Title';
import TrendingMovies from './TrendingMovies';
import s from './HomePage.module.css';

export default function HomePage() {
    return <Container>
        {/* <Title text={'Trending today'} /> */}
        <TrendingMovies/>
    </Container>
}