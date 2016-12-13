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
	const pixelSize = 5
	const pixel = context.createImageData(pixelSize, pixelSize)

	// Set pixel colour
	for (var p = 0; p < pixelSize; ++p) {

		pixel.data[p*4 + 0] = 0
		pixel.data[p*4 + 1] = 0
		pixel.data[p*4 + 2] = 0
		pixel.data[p*4 + 3] = 255
	}

	// Revolution offset
	var rd = 0

	// Start animation
	requestAnimationFrame(draw)

	// Draw a single frame
	function draw() {

		const xm = document.getElementById("x").value
		const ym = document.getElementById("y").value
		const trail = document.getElementById("trail").value

		// Clear the canvas
		context.clearRect(0, 0, width, height)

		// Plot the shape
		const d = 2 * Math.PI / 600
		for (var r = 0; r < trail; r += d) {

				// Calculate coordinates
				var x = width/2 + Math.floor(Math.cos(r*xm + rd) * width/2)
				var y = height/2 + Math.floor(Math.sin(r*ym + rd) * height/2)

				// Write pixel
				context.putImageData(pixel, x, y)
		}

		// Move around a bit
		rd += d*4

		// Get next frame
		requestAnimationFrame(draw)
	}

	// Periodically reload the page
	setInterval(function() {

		if (window.location.href.split("?").pop() === "reload")
			window.location.reload()
	}, 2000)
}
