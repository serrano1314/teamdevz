let merch_info = [
    {
        id: '0',
        name: "Hoodie",
        price: 19.99,
        filename: "Hoodie.jpg"
    },
    {
        id: '1',
        name: "Lanyard",
        price: 5,
        filename: "Lanyard.jpg"
    },
    {
        id: '2',
        name: "Laptop Cover",
        price: 7.99,
        filename: "Laptopcover.jpg"
    },
    {
        id: '3',
        name: "Tshirt",
        price: 14.99,
        filename: "Tshirt1.jpg"
    },
    {
        id: '4',
        name: "Tshirt",
        price: 14.99,
        filename: "Tshirt2.jpg"
    },
    {
        id: '5',
        name: "Tumbler",
        price: 9.99,
        filename: "Tumbler.jpg"
    }
]
merch_con = document.querySelector('.merch-container')
merch_info.forEach(item => {
    merch_str = `
    <div class="merch-card d-flex">
        <div class="inner-merch-card align-self-center text-center px-5">
            <img src="/images/merch/${item.filename}" alt="">
            <div class="font-weight-bold p-1">${item.name} - ${item.price}</div>
            <button type="button" class="btn btn-outline-secondary btn-sm">
                Add to cart
            </button>
        </div>
    </div>
    `;
    merch_con.insertAdjacentHTML('beforeend',merch_str);
});