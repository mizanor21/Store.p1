let dataSet;
fetch("../data.json")
    .then((res) => res.json())
    .then((data) => {
        dataSet = data;
        displayData(data);
    });
function displayData(data) {
    console.log(data);
    const cardContainer = document.getElementById('homepage-content');
    data.forEach(element => {
        const { id, img, name, price } = element;
        const divContainer = document.createElement('div');
        divContainer.classList.add("card", "bg-base-100", "shadow-2xl", "p-4");
        divContainer.innerHTML = `
            <figure class="">
                <img
                  src="${img}"
                  alt="Shoes"
                  class="rounded-lg w-full h-[300px]"
                />
              </figure>

              <div class="mt-[20px]">
                <div class="flex justify-between">
                  <h2 class="card-title">${name}</h2>
                  <div class="flex text-lg">
                    <span class="mr-4"
                      ><i class="fa-solid fa-heart text-slate-500"></i
                    ></span>
                    <span
                      ><i class="fa-solid fa-square-minus text-red-700"></i
                    ></span>
                  </div>
                </div>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <h3 class="card-title">Price: ${price}</h3>
                <div class="mt-2 flex justify-between">
                  <label
                    for="my-modal-3"
                    class="btn btn-outline btn-primary w-[45%] mx-auto flex justify-center items-center"
                  >
                    <i class="fa-solid fa-circle-info mr-2"></i> See Details
                  </label>

                  <button
                    class="btn btn-outline btn-secondary w-[45%] mx-auto block"
                  >
                    <i class="fa-solid fa-bag-shopping mr-2"></i>Buy Now
                  </button>
                </div>
              </div>
        `;
        cardContainer.appendChild(divContainer);

    });

}