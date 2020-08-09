const viewAlbumImg = (categoryImg) => {
	const albumImages = briefcaseImages.filter((images) => images.category === categoryImg);
	console.log("albumImages->", albumImages);
};
