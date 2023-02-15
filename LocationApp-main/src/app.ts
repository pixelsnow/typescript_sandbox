import axios from "axios";

console.log("Location app starts...");

// Two different ways to specify type
const form = <HTMLFormElement>document.querySelector("form")!;
const address = document.querySelector("#address")! as HTMLInputElement;

type GoogleGeoResponse = {
  results: { geometry: { location: { lat: number; lng: number } } }[];
  status: "OK" | "ZERO_RESULTS";
};

function searchLocationHandler(e: Event) {
  e.preventDefault();
  const location = address.value;

  axios
    .get<GoogleGeoResponse>(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(
        location
      )}&key={KEY}`
    )
    .then((response) => {
      if (response.data.status !== "OK") {
        throw new Error("Could not fetch");
      }
      const coordinates = response.data.results[0].geometry.location;
      const map = new google.maps.Map(
        document.getElementById("map") as HTMLElement,
        {
          center: coordinates,
          zoom: 11,
        }
      );
      new google.maps.Marker({ position: coordinates, map: map });
    })
    .catch((err) => console.log(err));
}

form.addEventListener("submit", searchLocationHandler);
