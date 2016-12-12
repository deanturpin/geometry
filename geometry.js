"use strict"

// Don't do anything until page has loaded completely
onload = function() {

	// Create a canvas element
	const canvas = document.createElement("canvas")
	const body = document.getElementsByTagName("body")[0]

	// Add it to the DOM
	body.appendChild(canvas)

	// Define canvas (view port)
	const context = canvas.getContext("2d")

	// Set canvas size
	const width = canvas.width = window.innerWidth * .9
	const height = canvas.height = window.innerHeight * .8

	// Create pixel
	const pixel = context.createImageData(1, 1)

	// Set colour
	pixel.data[0] = 128
	pixel.data[1] = 0
	pixel.data[2] = 0
	pixel.data[3] = 255

	// X axis offset
	var offset = 0

	// Start animation
	requestAnimationFrame(draw)

	// Draw a single frame
	function draw() {

		// Clear the canvas
		context.clearRect(0, 0, width, height)

		// Plot the shape
		for (var x = 0; x < width; ++x) {

			const y = Math.floor(height/2
				* Math.sin((x+offset) * 2 * Math.PI/360)) + height/2

			context.putImageData(pixel, x, y)
		}

		// Move along the X axis
		++offset

		// Get next frame
		requestAnimationFrame(draw)
	}

	// Periodically reload the page
	setInterval(function() {

		if (window.location.href.split("?").pop() === "reload")
			window.location.reload()
	}, 2000)
}
