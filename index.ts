/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

// Initialize and add the map
function initMap(): void {
  // The location of Uluru
  const uluru = { lat: 47.6062, lng: -122.3321 };

  //custom image
  const image = 'https://i.imgur.com/wQhC67A.png';

  // The map, centered at Uluru
  const map = new google.maps.Map(
    document.getElementById('map') as HTMLElement,
    {
      //mapId: "8e0a97af9386fef",
      zoom: 10,
      center: uluru,
    }
  );

  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    label: {
      text: 'samrit',
      color: 'white',
    },
    position: uluru,
    map: map,
    icon: image,
  });
}

declare global {
  interface Window {
    initMap: () => void;
  }
}
window.initMap = initMap;
export {};
