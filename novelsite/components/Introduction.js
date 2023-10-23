import React from 'react';

export default function Header() {
	return (
		<div className="container mx-auto py-12 px-8 md:ml-40">
			<div className="mb-10 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-5xl dark:text-white -mr-20">
				<h2>Introduction</h2>
			</div>
			<div className="text-xl lg:ml-20 max-w-full">
				<p>Visual narrative games are video games that focus on storytelling
				through visuals, using cutscenes, dialogue, and character interactions
				to advance the narrative. They are based on the visual novel genre of
				literature. A notable example is &quot;Ace Attorney&quot;, a Japanese visual
				novel based game. </p><p>Interactive storytelling is a form of digital
				entertainment in which the storyline is not predetermined. The author
				creates the setting, characters, and situation which the narrative must
				address, but the user (also reader or player) experiences a unique story
				based on their interactions and choices.</p>
			</div>
			<div className="font-bold text-xl lg:ml-40 mt-8 shadow-2xl">
				Therefore, our goal was to produce a playable game which combines the
				above characteristics.
			</div>
		</div>
	);
}
