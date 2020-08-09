const containerModalViewGallery = document.querySelector("#container-modal-view-gallery");

const viewAlbumImg = (categoryImg) => {
	let num = 0;
	const albumImages = briefcaseImages.filter((images) => images.category === categoryImg);

	containerModalViewGallery.innerHTML = `<div class="custom-modal-gallery" id="img-1">
			<a class="close-modal-custom" href="#closealbum"><i class="fa fa-close"></i></a>
			<div class="image" id="image-visible-album">
                <a href="#img-1"><img src="./images/briefcase-images/${albumImages[0].imagesSecondary[num].url}" alt=""></a>
			</div>
		</div>`;
};
