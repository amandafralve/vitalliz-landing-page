import styles from "./styles.module.css"

type ContainerProps = {
    children: React.ReactNode;
    className?: string;
}

export function Container({ children, className = "" }: ContainerProps) {
    return (
        <div className={`${styles.container} ${className}`}>
            <div className={styles.content}>{children}</div>
        </div>
    )
}