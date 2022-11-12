  const _card = document.getElementById('card')
    _card.innerHTML = ''

    fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then((data) => {
            console.log(data)

            //    data.slice(0, 1).forEach((val) => {
            //        let temp = new store(val.image, val.description, val.price, val.category)
            //       _card.appendChild(temp.create())
            //    })

            data.map((val) => {

                const temp = new store(val.image, val.title, val.price, val.category)
                _card.appendChild(temp.create())

            })




        })


    class store {
        constructor(img, title, price, address) {
            debugger
            this.img = img
            this.title = title
            this.price = price
            this.address = address

        }


        create() {
            let create = document.createElement('article')
            create.classList.add('products')
            create.innerHTML = `
           
                <figure id="fig">
                    <img class="img" src="${this.img}" alt="">
                </figure>
                <section class="title">
                    <h3 class="disc">${this.title}</h3>
                    <div class="_div">${this.price}</div>
                    <address class="_address">${this.address}</address>
                </section>
        
        `

            return create
        }

    }

