import styles from "./slide.module.css";
// import {motion} from 'framer-motion'

interface SlideProps {
	children: JSX.Element;
}

export const Slide = (props: SlideProps) => {
	return (
		<div className={styles.slide}>
			<div className={styles.padding}>{props.children}</div>
		</div>
	);
};
