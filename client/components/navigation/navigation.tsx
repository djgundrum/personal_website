import * as home_icon from "../../public/icons/cottage_white_24dp.svg";
import * as contact_icon from "../../public/icons/email_white_24dp.svg";
import * as about_icon from "../../public/icons/person_white_24dp.svg";
import * as work_icon from "../../public/icons/code_white_24dp.svg";

import Image from "next/image";
import Link from "next/link";
import styles from "./navigation.module.css";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Selected = "home" | "about" | "work" | "contact";

export const Navigation = (props: { selected: Selected }) => {
	return (
		<>
			<div className={styles.navigation_holder}>
				<div className={styles.links}>
					<Route
						name="Home"
						icon={home_icon}
						selected={props.selected === "home"}
						path="/"
					/>
					<div className={styles.separator}></div>
					<Route
						name="About"
						icon={about_icon}
						selected={props.selected === "about"}
						path="/about"
					/>
					<div className={styles.separator}></div>
					<Route
						name="Work"
						icon={work_icon}
						selected={props.selected === "work"}
						path="/work"
					/>
					<div className={styles.separator}></div>
					<Route
						name="Contact"
						icon={contact_icon}
						selected={props.selected === "contact"}
						path="/contact"
					/>
				</div>
			</div>
		</>
	);
};

interface LinkProps {
	name: string;
	icon: any;
	selected: boolean;
	path: string;
}

const Route = (props: LinkProps) => {
	const [hovering, setHovering] = useState(false);
	const class_name = () => {};

	const mouse_enter = () => setHovering(true);
	const mouse_exit = () => setHovering(false);

	return (
		<div
			className={styles.link}
			onMouseEnter={mouse_enter}
			onMouseLeave={mouse_exit}>
			<Link href={props.path}>
				<a>
					<Image src={props.icon} layout="fill" />
				</a>
			</Link>
			<AnimatePresence initial={false} exitBeforeEnter={true}>
				{hovering && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className={styles.link_tag}>
						{props.name}
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};
