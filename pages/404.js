import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import React, { useEffect } from "react";

export default function NotFound() {
	const router = useRouter();
	useEffect(() => {
		setTimeout(() => {
			router.push("/");
		}, 3000);
	}, []);

	return (
		<div className="not-found">
			<h1>Oooops...</h1>
			<h2>That page can not be found</h2>
			<p>
				Go back to the{" "}
				<Link href="/">
					<a>Homepage</a>
				</Link>{" "}
			</p>
		</div>
	);
}
