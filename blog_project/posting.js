let title = [];
let artical = [];
let image = [];

el = document.querySelector('#post')
if (el) {
    el.addEventListener('submit', (e) => {
        e.preventDefault()

        var titl = document.querySelector('#title').value;
        var artica = document.querySelector('#artical').value;
        var imag = document.querySelector('#myFile').value;

        title.push(titl);
        artical.push(artica);
        image.push(imag)

        localStorage.setItem('title', JSON.stringify(title));
        localStorage.setItem('artical', JSON.stringify(artical));
        localStorage.setItem('image', JSON.stringify(image));
        updateList();
        document.querySelector('#post').reset();
    });
}
if (localStorage.getItem('title') && localStorage.getItem('artical') && localStorage.getItem('image')) {
    title = localStorage.getItem('title');
    artical = localStorage.getItem('artical');
    image = localStorage.getItem('image');

    title = JSON.parse(title);
    artical = JSON.parse(artical);
    image = JSON.parse(image);
}

updateList = () => {
    let storgeTitle = JSON.parse(localStorage.getItem('title'))
    let storgeArtical = JSON.parse(localStorage.getItem('artical'))
    let storgeImage = JSON.parse(localStorage.getItem('image'))
    console.log(`myyyyy: ${storgeTitle}`)
    if (storgeTitle == null && storgeArtical == null && storgeImage == null) {
        var pp = document.createElement('p');

        pp.innerHTML = "PLASE POST SOMTHING";
        document.querySelector('#posting').appendChild(pp);

    }
    for (let i = 0; i < storgeTitle.length; i++) {
        for (let j = 0; j < storgeArtical.length; j++) {
            for (let m = 0; m < storgeImage.length; m++) {
                if (i == j && j == m) {
                    let btn = document.createElement('button');
                    let eachaItemh4 = document.createElement('h4');
                    let eachaItemP = document.createElement('p');
                    let eachaItemImg = document.createElement('Img');

                    eachaItemh4.innerHTML = title[i];
                    eachaItemP.innerHTML = artical[i];
                    eachaItemImg.src = image[i];

                    btn.innerHTML = "delete";
                    btn.id = 'deleted';
                    btn.className = "btn-lg btn-info";

                    document.querySelector('#posting').appendChild(eachaItemImg);
                    document.querySelector('#posting').appendChild(eachaItemh4);
                    document.querySelector('#posting').appendChild(eachaItemP);
                    document.querySelector('#posting').appendChild(btn);

                    document.getElementById("deleted").onclick = function() {
                        let d = localStorage.key(i);
                        var index = title.indexOf(title[i]);
                        var index2 = image.indexOf(image[i]);
                        var index3 = artical.indexOf(artical[i]);

                        if (index > -1 && index2 > -1 && index3 > -1) {
                            title.splice(index, 1);
                            image.splice(index2, 1);
                            artical.splice(index3, 1);

                            localStorage.setItem('title', JSON.stringify(title));
                            localStorage.setItem('image', JSON.stringify(image));
                            localStorage.setItem('artical', JSON.stringify(artical));
                        }
                        location.reload();
                    }
                }
            }
        }
    }
}

if (title.length > 0 && artical.length > 0 && image.length > 0) {
    updateList();
}


/*
    document.querySelector('#myFile').addEventListener("change", () =>{
        const file = document.querySelector('input[type=file]').files[0];
        const reder = new FileReader();
        let image = [reder.result]
        reder.addEventListener("load", () =>{
            localStorage.setItem('image', image);
        })

        reder.readAsDataURL(file)

    });
/*
    document.addEventListener('DOMContentLoaded', () =>{
        const storgeImage = localStorage.getItem('image');

        if (storgeImage){
            document.querySelector("#imgPreview").setAttribute("src", storgeImage)
        }

    });


    console.log('title: '+  title)
    console.log('artical: '+  artical) 
    console.log('image: '+  image) */