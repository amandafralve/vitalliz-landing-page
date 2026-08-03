import styles from "./styles.module.css"

type ButtonProps = {
    icon?: React.ReactNode;
    text: string;
    color?: "blue" | "white" | "transparent" | "language";
} & React.ComponentProps<'button'>

export function Button({ icon, text, color="blue", ...props}: ButtonProps) {
    return (
        <button className={`${styles.button} ${styles[color]}`} {...props}>
            {icon}{text}
        </button>
    );
}