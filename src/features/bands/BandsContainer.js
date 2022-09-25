import React from "react";
import BandInput from "./BandInput";
import { useDispatch, useSelector } from "react-redux";
import { bandAdded } from "./bandsSlice";

function BandsContainer() {
	const dispatch = useDispatch();
	const bands = useSelector((state) => state.bands.entities)

	function onBandSubmit(band) {
		dispatch(bandAdded(band));
	}

	const bandNames = bands.map((band, index) => (
		<li key={index}>{band}</li>
	))

  return (
		<div>
			<BandInput onBandSubmit={onBandSubmit} />
			<ul>
				{bandNames}
			</ul>
		</div>
	)
}

export default BandsContainer;
