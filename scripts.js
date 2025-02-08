
// Get all dr who images
Array.from(document.querySelectorAll('.rs-image.content-item-root__thumbnail-responsive-image picture source:first-of-type'))
	.map(el => el.srcset.split(' ')[0])

// Get all titles
Array.from(document.querySelectorAll('.content-item-root__meta.typo.typo--skylark.typo--bold.content-item-root__meta--with-label'))
	.map(el => el.innerText)

// Get all links
Array.from(document.getElementsByClassName('content-item-root content-item-root--has-hover-state'))
	.map(el => el.href)

// Make ul contents from bbc season page (remember to scroll to bottom before running this)
Array.from(document.getElementsByClassName('content-item-root content-item-root--has-hover-state'))
	.map(el => {
		const href = el.href;
		const imgSrc = el.querySelector('picture source:first-of-type')?.srcset?.split(' ')?.[0];
		const title = el.querySelector('.content-item-root__meta.typo.typo--skylark.typo--bold.content-item-root__meta--with-label')?.innerText;
		return `<li><a href="${href}">${title}</a><img src="${imgSrc}" alt="${title} Image"></li>`;
	})
	.join('');