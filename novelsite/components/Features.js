import React from 'react';

export default function Features() {
	return (
		<>
			<div className="text-3xl md:text-left text-center font-extrabold leading-none tracking-tight md:text-4xl text-[#faebd7]">
				Features
			</div>
			<div className="text-l py-6 px-10">
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
		</>
	);
}
