/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import mapboxgl from 'mapbox-gl'
import { useEffect, useRef, useState } from 'react'
import { Tour } from '../../types/tours'
import { isDaytime } from '../../utils'

mapboxgl.accessToken = 'pk.eyJ1IjoidGVydGl1c29saXZpZXIiLCJhIjoiY21hbDZqampwMDRsMTJqc2xubW5hcWUwZCJ9.wxVDKj25NR_ZPy0U-vmR_Q'

interface MapProps {
	coordinates?: string
	renderTourMap?: boolean
	tour?: Tour | null
}
// @ts-expect-error coordinates is declared but its value is never read.
export const MapElement = ({ coordinates = '-24.927938, 31.524910', renderTourMap = false, tour = null }: MapProps) => {
	const mapContainerRef = useRef(null)
	const [geojson, setGeojson] = useState<any>({
		type: 'FeatureCollection',
		features: [],
	})
	const initMap = () => {
		tour?.itinerary_summary.forEach((item: any) => {
			console.log(item)
			const temp: any = {
				type: 'Feature',
				geometry: {
					type: 'Point',
					coordinates: item.coordinates,
				},
				properties: {
					title: item.label,
					description: item.description,
				},
			}
			geojson.features.push(temp)
		})

		setGeojson(geojson)

		const map = new mapboxgl.Map({
			container: mapContainerRef.current as any,
			style: isDaytime() ? 'mapbox://styles/mapbox/navigation-day-v1' : 'mapbox://styles/mapbox/navigation-night-v1',
			center: geojson.features[0].geometry.coordinates,
			zoom: 3,
		})

		// add markers to map
		for (const feature of geojson.features) {
			// create a HTML element for each feature
			const el = document.createElement('div')
			el.className = 'marker'

			// make a marker for each feature and add it to the map
			new mapboxgl.Marker(el)
				.setLngLat(feature.geometry.coordinates)
				.setPopup(
					new mapboxgl.Popup({ offset: 25 }) // add popups
						.setHTML(`
							<h5 class="m-0">${feature.properties.title}</h5>
							<p class="m-0">${feature.properties.description}</p>
						`)
				)
				.addTo(map)
		}
	}
	useEffect(() => {
		initMap()
	}, [])

	return <div className='map-container' id='map' ref={mapContainerRef}></div>
}
