import React from 'react';

export default function Features() {
	return (
		<div className="container mx-auto py-8 px-8 md:ml-40">
			<div className="mb-10 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-5xl text-white md:text-right mr-32">
				<h2>Features</h2>
			</div>
			<div className="text-xl lg:ml-20">
				<ol className="list-disc">
					<li>
						Implement branching storylines with weighted choices, ensuring
						player decisions have meaningful consequences on the narrative
						progression.
					</li>
					<li>
						Multiple decision points throughout the story, with many of them
						carrying weightage (consequences), and others with differing paths
						each time.
					</li>
					<li>
						The result of the game&apos;s climax would be the determination of all
						the weighted values, paths and decisions taken, with multiple story
						endings.
					</li>
				</ol>
			</div>
		</div>
	);
}
