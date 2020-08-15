let setImg5 = document.querySelector("#setImg-5");
let setImg13 = document.querySelector("#setImg-13");
let setImg21 = document.querySelector("#setImg-21");

let onMouseEfect5 = document.querySelector("#onMouseEfect-5");
let onMouseEfect13 = document.querySelector("#onMouseEfect-13");
let onMouseEfect21 = document.querySelector("#onMouseEfect-21");

/***********VIEW IMAGES PORTAFOLIO*********/
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

/***********EFECTO ONMOUSE*********/

const filterDataImg = (idImg) => {
	switch (idImg) {
		case "setImg-5":
			return briefcaseImages[4];
		case "setImg-13":
			return briefcaseImages[12];
		case "setImg-21":
			return briefcaseImages[20];
	}
};

const onMouseImgOver = (img) => {
	const dataImg = filterDataImg(img.id);
	setTimeout(() => {
		img.src = `../images/briefcase-images/${dataImg.urlSecond}`;
	}, 300);
};

const onMouseImgOut = (img) => {
	const dataImg = filterDataImg(img.id);
	setTimeout(() => {
		img.src = `../images/briefcase-images/${dataImg.urlPrimary}`;
	}, 300);
};

onMouseEfect5.addEventListener("mouseover", () => onMouseImgOver(setImg5));
onMouseEfect5.addEventListener("mouseout", () => onMouseImgOut(setImg5));

onMouseEfect13.addEventListener("mouseover", () => onMouseImgOver(setImg13));
onMouseEfect13.addEventListener("mouseout", () => onMouseImgOut(setImg13));

onMouseEfect21.addEventListener("mouseover", () => onMouseImgOver(setImg21));
onMouseEfect21.addEventListener("mouseout", () => onMouseImgOut(setImg21));
