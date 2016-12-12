"use strict"

// Don't do anything until page has loaded completely
onload = function() {

	// Create a canvas element
	var canvas = document.createElement("canvas")
	var body = document.getElementsByTagName("body")[0]

	// Add it to the DOM
	body.appendChild(canvas)

	// Define canvas (view port)
	var context = canvas.getContext("2d")

	// Set canvas size
	const width = 400 // window.innerWidth
	const height = 400 // window.innerHeight
	canvas.width = width
	canvas.height = height

	// Create pixel
	const pixel = context.createImageData(1, 1)

	// Set colour
	pixel.data[0] = 128
	pixel.data[1] = 0
	pixel.data[2] = 0
	pixel.data[3] = 255


	var offset = 1

	function draw() {

		// Clear the canvas
		context.clearRect(0, 0, canvas.width, canvas.height)

		for (var x = 0; x < width; ++x) {

			const y = Math.floor(height/2
				* Math.sin((x+offset) * 2 * Math.PI/360)) + height/2

			context.putImageData(pixel, x, y)
		}

		++offset

		requestAnimationFrame(draw)
	}

	requestAnimationFrame(draw)

	// Periodically reload the page
	setInterval(function() {

		if (window.location.href.split("?").pop() === "reload")
			window.location.reload()
	}, 2000)
}
