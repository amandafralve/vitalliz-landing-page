import styles from './styles.module.css'
import { Container } from '../Container';

export function About() {
    return (
        <Container>
            <div className={styles.aboutUs}>
                <h1>Sobre nós</h1>
            </div>
        </Container>
    );
}