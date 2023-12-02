import React from 'react';

export default function Features() {
	return (
		<div className="h-[85vh] md:mt-20 md:h-auto">
			<div className="md:mt-0 mt-10 text-3xl md:text-left text-center font-extrabold leading-none tracking-tight md:text-4xl text-[#faebd7]">
				Features
			</div>
			<div className="text-base md:py-8 pt-20 px-10 flex flex-col md:space-y-5 space-y-10 md:text-left text-center">
				<div>
					Implement branching storylines with weighted choices, ensuring player
					decisions have meaningful consequences on the narrative progression.
				</div>

				<div>
					Multiple decision points throughout the story, with many of them
					carrying weightage (consequences), and others with differing paths
					each time.
				</div>

				<div>
					The result of the game&apos;s climax would be the determination of all
					the weighted values, paths and decisions taken, with multiple story
					endings.
				</div>
			</div>
		</div>
	);
}
