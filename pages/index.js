import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
export default function Home() {
	return (
		<>
			<Head>
				<title>Ninja List | Home</title>
				<meta name="keyword" contnet="ninjas" />
			</Head>
			<div className={styles.container}>
				<h1 className={styles.title}>Home page</h1>
				<p className={styles.text}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, amet voluptates eum ut voluptate
					reprehenderit mollitia ipsum eius facilis placeat maiores vitae nihil consectetur id explicabo
					delectus
				</p>
				<p className={styles.text}>
					cum corrupti natus illum voluptas corporis porro? Illo dicta laborum id necessitatibus reiciendis.
				</p>
				<Link href="/ninjas">
					<a className={styles.btn}>See Ninja Listing</a>
				</Link>
			</div>
		</>
	);
}
