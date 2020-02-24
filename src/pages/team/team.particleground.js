export const foregroundOptions = {
  dotColor: 'rgba(255, 255, 255, 0.9)',
  lineColor: 'rgba(255, 255, 255, 0.13)',
  minSpeedX: 0.3,
  maxSpeedX: 0.6,
  minSpeedY: 0.3,
  maxSpeedY: 0.6,
  density: 30000, // One particle every n pixels
  curvedLines: false,
  proximity: 250, // How close two dots need to be before they join
  parallaxMultiplier: 3, // Lower the number is more extreme parallax
  particleRadius: 4 // Dot size
};

export const backgroundOptions = {
  dotColor: 'rgba(255, 255, 255, 0.25)',
  lineColor: 'rgba(255, 255, 255, 0.08)',
  minSpeedX: 0.075,
  maxSpeedX: 0.15,
  minSpeedY: 0.075,
  maxSpeedY: 0.15,
  density: 10000, // One particle every n pixels
  curvedLines: false,
  proximity: 200, // How close two dots need to be before they join
  parallaxMultiplier: 20, // Lower the number is more extreme parallax
  particleRadius: 3 // Dot size
};
