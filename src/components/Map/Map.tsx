/* eslint-disable react-hooks/exhaustive-deps */

/* eslint-disable @typescript-eslint/no-explicit-any */
import mapboxgl from 'mapbox-gl'
import { Nullable } from 'primereact/ts-helpers'
import { useEffect, useRef, useState } from 'react'
import { Tour } from '../../types/tours'
import { isDaytime } from '../../utils'

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN

interface MapProps {
	tour?: Tour | null
}

interface MapboxGeoJSONProps {
	type: string
	geometry: {
		type: string
		coordinates: [number, number] // [lng, lat]
	}
	properties: {
		title: string
		description: string
	}
}

interface MapState {
	type: string
	features: MapboxGeoJSONProps[]
}

export const MapElement = ({ tour = null }: MapProps) => {
	const mapContainerRef = useRef(null)
	const [geojson, setGeojson] = useState<MapState | Nullable>(null)
	const initMap = () => {
		const result: MapState = {
			type: 'FeatureCollection',
			features: [],
		}
		tour?.itinerary_summaries.forEach((item: any) => {
			if (item.accomodation.length > 0) {
				console.log('MapElement initMap', item)
				const _lng = Number(JSON.parse(item.accomodation[0].coordinates)[1])
				const _lat = Number(JSON.parse(item.accomodation[0].coordinates)[0])

				const coords: [number, number] = [_lng, _lat]

				console.log('MapElement initMap coords', coords)

				const temp: MapboxGeoJSONProps = {
					type: 'Feature',
					geometry: {
						type: 'Point',
						coordinates: coords,
					},
					properties: {
						title: item.label,
						description: item.description,
					},
				}
				result.features.push(temp)
			}
		})

		setGeojson(result)
	}

	const renderMap = () => {
		const bounds = [
			[Infinity, Infinity], // Southwest coordinates
			[-Infinity, -Infinity], // Northeast coordinates
		]

		if (geojson) {
			// Extend bounds to include each point
			geojson.features.forEach((coord: MapboxGeoJSONProps) => {
				bounds[0][0] = Math.min(bounds[0][0], coord.geometry.coordinates[0])
				bounds[0][1] = Math.min(bounds[0][1], coord.geometry.coordinates[1])
				bounds[1][0] = Math.max(bounds[1][0], coord.geometry.coordinates[0])
				bounds[1][1] = Math.max(bounds[1][1], coord.geometry.coordinates[1])
			})

			const map = new mapboxgl.Map({
				container: mapContainerRef.current as any,
				style: isDaytime() ? 'mapbox://styles/mapbox/navigation-day-v1' : 'mapbox://styles/mapbox/navigation-night-v1',
				center: [(bounds[0][0] + bounds[1][0]) / 2, (bounds[0][1] + bounds[1][1]) / 2],
				zoom: 4,
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
	}
	useEffect(() => {
		if (tour) {
			initMap()
		}
	}, [tour])
	useEffect(() => {
		if (geojson) {
			renderMap()
		}
	}, [geojson])

	return <div className='map-container' id='map' ref={mapContainerRef}></div>
}
