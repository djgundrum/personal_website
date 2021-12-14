import styles from "./headings.module.css";

interface TextProps {
	children: JSX.Element | string;
}

export const LargeHeading = (props: TextProps) => (
	<div className={styles.large}>{props.children}</div>
);

export const MediumHeading = (props: TextProps) => (
	<div className={styles.medium}>{props.children}</div>
);

export const SmallHeading = (props: TextProps) => (
	<div className={styles.small}>{props.children}</div>
);
