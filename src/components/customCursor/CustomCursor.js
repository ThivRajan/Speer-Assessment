import React, { useRef, useEffect } from 'react'
import './CustomCursor.css'

export const CustomCursor = ({ showCursor }) => {
	const cursorRef = useRef(null)

	useEffect(() => {
		document.addEventListener('mousemove', (event) => {
			const { clientX, clientY } = event
			if (!cursorRef.current) return;
			const mouseX = clientX - cursorRef.current.clientWidth / 2
			const mouseY = clientY - cursorRef.current.clientHeight / 2
			cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`
		})
	})

	return showCursor
		? <div className="cursor" ref={cursorRef}>CLICK</div>
		: <div ref={cursorRef}></div>
}

export default CustomCursor;