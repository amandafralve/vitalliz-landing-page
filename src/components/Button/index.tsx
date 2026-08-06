import styles from "./styles.module.css"

type ButtonProps = {
    icon?: React.ReactNode;
    iconPosition?: "left" | "right";
    text: string;
    color?: "blue" | "white"| "whiteAnimated" | "transparent" | "language";
    size?: "sm" | "md" | "lg";
} & React.ComponentProps<'button'>

export function Button({ 
    icon,
    iconPosition = "left", 
    text, 
    color="blue",
    size = "md",
    ...props}: ButtonProps
) {
    return (
        <button
            className={`${styles.button} ${styles[color]} ${styles[size]}`}
            {...props}
        >
            {icon && iconPosition === "left" && (
                <span className={styles.iconWrapper}>{icon}</span>
            )}

            <span className={styles.textWrapper}>{text}</span>

            {icon && iconPosition === "right" && (
                <span className={styles.iconWrapper}>{icon}</span>
            )}
        </button>
    );
}