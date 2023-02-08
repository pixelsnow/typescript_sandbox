import axios from "axios";

console.log("Location app starts...");

// Two different ways to specify type
const form = <HTMLFormElement>document.querySelector("form")!;
const address = document.querySelector("#address")! as HTMLInputElement;

type GoogleGeoResponse = {
  results: { geometry: { location: { lat: number; lng: number } } }[];
};

function searchLocationHandler(e: Event) {
  e.preventDefault();
  const location = address.value;

  axios
    .get<GoogleGeoResponse>(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(
        location
      )}&key=AIzaSyAuyPWb0vgdZ3j5PZ6ptox5pFoEUMoYMao`
    )
    .then((response) => console.log(response.data.results[0].geometry.location))
    .catch((err) => console.log(err));
}

form.addEventListener("submit", searchLocationHandler);
