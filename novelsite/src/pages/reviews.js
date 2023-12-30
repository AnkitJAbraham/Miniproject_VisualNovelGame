import ContainerBlock from '../components/ContainerBlock';
import React from 'react';
import Reviews from '../components/Reviews';

export default function Game() {
	return (
		<div className="bg-black">
			<ContainerBlock />
			<div className='h-[10vh] invisible'></div>
			<Reviews />
		</div>
	);
}
