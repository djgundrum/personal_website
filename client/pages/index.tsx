import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Navigation } from "@components/navigation/navigation";
import { motion } from "framer-motion";
import { Slide } from "@components/layouts/slide/slide";

const Home: NextPage = () => {
	return (
		<motion.div
			className={styles.container}
			initial={{ opacity: 0, translateX: "20px" }}
			animate={{ opacity: 1, translateX: "20px" }}
			exit={{ opacity: 0, translateX: "-20px" }}>
			<Slide>
				<div>Declan</div>
			</Slide>
			<Navigation selected="home" />
		</motion.div>
	);
};

export default Home;
