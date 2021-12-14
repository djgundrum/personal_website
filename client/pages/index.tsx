import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { Navigation } from "@components/navigation/navigation";
import { motion } from "framer-motion";
import { Slide } from "@components/layouts/slide/slide";
import * as rounded_triangle from "../public/icons/rounded_downward_triangle.svg";
// import * as rounded_triangle from "@icons/rounded_downwoard_triangle.svg";
import Image from "next/image";
import { WhiteCircle } from "@components/text/circle/white_circle";
import { LargeHeading, SmallHeading } from "@components/text/heading/headings";

const Home: NextPage = () => {
	return (
		<motion.div
			initial="initial"
			animate="animate"
			exit={{ opacity: 0, translateX: "-20px" }}>
			<div className={styles.landing_container}>
				<div>
					<Slide>
						<div className={styles.text_holder}>
							<SmallHeading>Welcome to my site. My name is</SmallHeading>
							<LargeHeading>Declan Gundrum</LargeHeading>
							<SmallHeading>
								<span>Software Engineer | Entrepreneur</span>
							</SmallHeading>
						</div>
					</Slide>
					<div className={styles.rounded_triangle_holder}>
						<div className={styles.rounded_triangle}>
							<Image src={rounded_triangle} layout="responsive" />
						</div>
					</div>
				</div>
			</div>
			<Navigation selected="home" />
		</motion.div>
	);
};

export default Home;
