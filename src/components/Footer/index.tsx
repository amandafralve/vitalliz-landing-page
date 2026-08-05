import { Container } from '../Container';
import styles from './styles.module.css'

export function Footer() {
    return (
        <Container>
            <div className={styles.footer}>
                <h1>Footer</h1>
            </div>
        </Container>
    );
}