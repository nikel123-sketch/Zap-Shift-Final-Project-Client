import React, { useRef } from 'react';
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { useLoaderData } from 'react-router';

const Coverage = () => {
  const servicesData = useLoaderData();
  console.log(servicesData);
  // map position--
  const position = [23.685, 90.3563]; // Bangladesh

  //   hendleSearch
  const hendleSearch=(e)=>{
    e.preventDefault();
    // console.log('ok')
    const userSearch = e.target.sharch.value;
    // console.log(userSearch)
    const searchDistrict = servicesData.find((c) =>
      c.district.toLowerCase().includes(userSearch.toLowerCase())
    );
    console.log(searchDistrict)

    if (searchDistrict) {
      const coord = [searchDistrict.latitude, searchDistrict.longitude];
      // console.log(coord)
      mapref.current.flyTo(coord, 14);
    }
  }
  const mapref = useRef();
  return (
    <div>
      {/* search */}
      <div>
        <h1 className="font-bold text-3xl">We are available in 64 districts</h1>

        {/* search */}
        <div className=" mt-5 mb-5">
          {/* Search form */}
          <form onSubmit={hendleSearch}>
            <label className="input">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
              <input
                type="search"
                name="sharch"
                className="grow"
                placeholder="Search"
              />
            </label>
          </form>
        </div>
      </div>

      {/* map */}

      <div className="h-[600px] mb-20  rounded-4xl">
        <h1 className="font-bold text-3xl mb-3">
          We deliver almost all over Bangladesh
        </h1>
        {/* map contiener */}
        <MapContainer
          className="h-[600px] rounded-4xl border-1"
          center={position}
          zoom={9}
          scrollWheelZoom={false}
          ref={mapref}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {/* map data */}
          {servicesData.map((data, index) => (
            <Marker key={index} position={[data.latitude, data.longitude]}>
              <Popup>
                <strong>{data.district}</strong> <br /> service area:
                {data.covered_area.join(" ,")}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default Coverage;