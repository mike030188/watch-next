import React from 'react';
import useDeviceDetect from '../../hooks/useDeviceDetect';
import { Stack } from '@mui/material';

const Advertisement = () => {
	const device = useDeviceDetect();

	if (device == 'mobile') {
		return (
			<Stack className={'container'}>
				<Stack className={'video-frame'}>
					<video
						autoPlay
						muted
						loop
						playsInline
						preload="auto"
						style={{ width: '100%', height: '100%', objectFit: 'cover' }}
					>
						<source src="/video/ads1.mp4" type="video/mp4" />
					</video>
				</Stack>
			</Stack>
		);
	} else {
		return (
			<Stack className={'container'}>
				<Stack className={'video-frame'}>
					<video
						autoPlay
						muted
						loop
						playsInline
						preload="auto"
						style={{ width: '100%', height: '100%', objectFit: 'cover' }}
					>
						<source src="/video/ads1.mp4" type="video/mp4" />
					</video>
				</Stack>
			</Stack>
		);
	}
};

export default Advertisement;
