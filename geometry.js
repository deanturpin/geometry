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
	const height = canvas.height = window.innerHeight * .9

	// Create pixel
	const pixel = context.createImageData(1, 1)

	// Set colour
	pixel.data[0] = 0
	pixel.data[1] = 0
	pixel.data[2] = 0
	pixel.data[3] = 255

	// X axis offset
	var rd = 0
	var xd = 0

	// Start animation
	requestAnimationFrame(draw)

	// Draw a single frame
	function draw() {

		// Clear the canvas
		context.clearRect(0, 0, width, height)

		// Plot the shape
		const d = 2 * Math.PI / 600
		for (var r = 0; r < 2 * Math.PI/1.1; r += d) {
			for (var c = 1; c < 5000; ++c) {

				var x = xd + width/2 + Math.floor(Math.cos(r + c*rd) * width/2)
				var y = height/2 + Math.floor(Math.sin(r + c*rd/4) * height/2)

				context.putImageData(pixel, x, y)
			}
		}

		// Move along the X axis
		rd += d*4
		// ++xd

		// Get next frame
		requestAnimationFrame(draw)
	}

	// Periodically reload the page
	setInterval(function() {

		if (window.location.href.split("?").pop() === "reload")
			window.location.reload()
	}, 2000)
}
