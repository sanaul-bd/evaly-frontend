// import React from 'react';
// import toast, { Toaster } from 'react-hot-toast';

import { useState } from "react";
import HomeProducts from "../Common Pages/HomeProducts";
import HomeShops from "../Common Pages/HomeShops";

const HomePage = () => {

	const [post, setPost] = useState([]);
	useState(() => {
		fetch("https://jsonplaceholder.typicode.com/todos")
			.then((response) => response.json())
			.then((data) => {
				setPost(data);
				// console.log(data);
			});
	}, [setPost, post]);
	console.log(post);
	console.log("object");

	return (
		<>
			<div className="lg:flex lg:my-4 lg:h-96 w-full">
				<div className="carousel lg:w-4/5 my-3">
					<div id="slide1" className="carousel-item relative w-full">
						<img
							src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg"
							className="w-full"
						/>
						<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
							<a href="#slide4" className="btn btn-circle">
								❮
							</a>
							<a href="#slide2" className="btn btn-circle">
								❯
							</a>
						</div>
					</div>
					<div id="slide2" className="carousel-item relative w-full">
						<img
							src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg"
							className="w-full"
						/>
						<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
							<a href="#slide1" className="btn btn-circle">
								❮
							</a>
							<a href="#slide3" className="btn btn-circle">
								❯
							</a>
						</div>
					</div>
					<div id="slide3" className="carousel-item relative w-full">
						<img
							src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg"
							className="w-full"
						/>
						<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
							<a href="#slide2" className="btn btn-circle">
								❮
							</a>
							<a href="#slide4" className="btn btn-circle">
								❯
							</a>
						</div>
					</div>
					<div id="slide4" className="carousel-item relative w-full">
						<img
							src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg"
							className="w-full"
						/>
						<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
							<a href="#slide3" className="btn btn-circle">
								❮
							</a>
							<a href="#slide1" className="btn btn-circle">
								❯
							</a>
						</div>
					</div>
				</div>

				{/*  */}
				<div className="lg:w-1/5 w-full my-3 ms-2">Timing Add</div>
			</div>
			<hr />
			<HomeProducts />
			<hr />
			<HomeShops />
		</>
	);
};

export default HomePage;
