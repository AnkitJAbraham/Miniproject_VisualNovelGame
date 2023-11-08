import React from 'react';

export default function Header() {
	return (
		<div className="container mx-auto py-12 px-8 md:ml-40">
			<div className="mb-10 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-5xl text-white -mr-20">
				<h2>Introduction</h2>
			</div>
			<div className="text-l lg:ml-20 max-w-full">
				<div>
					Visual narrative games are video games that focus on storytelling
					through visuals, using cutscenes, dialogue, and character interactions
					<br />
					to advance the narrative. They are based on the visual novel genre of
					literature.
					<br />
					<br /> A notable example is &quot;
					<span className="italic">Ace Attorney</span>&quot;, a Japanese visual
					novel based game.{' '}
				</div>
				<div>
					Interactive storytelling is a form of digital entertainment in which
					the storyline is not predetermined. <br />
					<br />
					<div>
						The author creates the setting, characters, and situation which the
						narrative must address, but the user (also reader or player)
						experiences <br /> a unique story based on their interactions and
						choices.
					</div>
				</div>
			</div>
			<div className="font-bold text-xl lg:ml-40 mt-8 shadow-2xl">
				Therefore, our goal was to produce a playable game which combines the
				above characteristics.
			</div>
		</div>
	);
}
