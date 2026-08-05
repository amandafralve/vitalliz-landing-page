import { Container } from '../Container';

import styles from './styles.module.css'

export function Project() {
    return (
        <Container>
            <div className={styles.project}>
                <h1>Projeto</h1>
            </div>
        </Container>
    );
}