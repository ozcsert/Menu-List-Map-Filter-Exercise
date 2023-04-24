const menu = [
    {
      id: 1,
      title: "Tteokbokki",
      category: "Korea",
      price: 10.99,
      img:
        "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
      desc: `Spicy rice cakes, serving with fish cake.`
    },
    {
      id: 2,
      title: "Chicken Ramen",
      category: "Japan",
      price: 7.99,
      img:
        "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
      desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
    },
    {
      id: 3,
      title: "Bibimbap",
      category: "Korea",
      price: 8.99,
      img:
        "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
      desc: `Boiling vegetables, serving with special hot sauce`
    },
    {
      id: 4,
      title: "Dan Dan Mian",
      category: "China",
      price: 5.99,
      img:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.WwuU7cjzf4v_EY9rASw4-wHaJE%26pid%3DApi&f=1&ipt=84410024f306403413306e9e052547f0eb414ac6e362bdf5af91ef0fcbed9412&ipo=images",
      desc: `Dan dan noodle, serving with green onion `
    },
    {
      id: 5,
      title: "Yangzhou Fried Rice",
      category: "China",
      price: 12.99,
      img:
        "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
      desc: `Yangzhou style fried rice, serving with bean and pickles `
    },
    {
      id: 6,
      title: "Onigiri",
      category: "Japan",
      price: 9.99,
      img:
        "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
      desc: `Rice Sandwich, serving with soy sauce`
    },
    {
      id: 7,
      title: "Jajangmyeon",
      category: "Korea",
      price: 15.99,
      img:
        "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
      desc: `Black bean sauce noodle, serving with green onion `
    },
    {
      id: 8,
      title: "Ma Yi Shang Shu",
      category: "China",
      price: 12.99,
      img:
        "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
      desc: `Hot pepper sauce noodle, serving with soy bean and onion`
    },
    {
      id: 9,
      title: "Doroyaki",
      category: "Japan",
      price: 3.99,
      img:
        "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
      desc: `Red bean paste dessert, serving with honey.`
    }
  ];



//All button 

const btncontainerDOM = document.getElementById("btndiv")
const buttonDOM = document.createElement("button")

buttonDOM.textContent = "All";
buttonDOM.classList.add("btn-item", "btnhvr", "btn" )



btncontainerDOM.appendChild(buttonDOM);

//Korea button

const button2DOM = document.createElement("button")

button2DOM.textContent = "Korea";
button2DOM.classList.add("btn-item", "btnhvr", "btn" )


btncontainerDOM.appendChild(button2DOM);

//Jap button

const button3DOM = document.createElement("button")

button3DOM.textContent = "Japan";
button3DOM.classList.add("btn-item", "btnhvr", "btn" )


btncontainerDOM.appendChild(button3DOM);

//Chinese button

const button4DOM = document.createElement("button")

button4DOM.textContent = "Chinese";
button4DOM.classList.add("btn-item", "btnhvr", "btn" )


btncontainerDOM.appendChild(button4DOM);


let menusection = document.getElementById("menuDiv")


////All Sort
buttonDOM.addEventListener("click", uncoverMenu);

function uncoverMenu() {

    menusection.clear

    let newMenu = menu.map(item => {
        return `<div class="menu-items col-lg-6 col-sm-12">
        <img src=${item.img} alt=${item.desc} class="photo hoverZoomLink">
        <div class="menu-info">
          <div class="menu-title">
            <h4>${item.title}</h4>
            <h4 class="price">${item.price}</h4>
          </div>
          <div class="menu-text">
          ${item.desc}
          </div>
        </div>
        </div>`;
    })

    menusection.innerHTML = newMenu.join('');
}


///Korea Sort

button2DOM.addEventListener("click", uncoverMenu2);

function uncoverMenu2() {  

    let newMenu2 = menu.filter(origin => origin.category === "Korea").map(item => {
        return `<div class="menu-items col-lg-6 col-sm-12">
            <img src=${item.img} alt=${item.desc} class="photo hoverZoomLink">
            <div class="menu-info">
            <div class="menu-title">
                <h4>${item.title}</h4>
                <h4 class="price">${item.price}</h4>
            </div>
            <div class="menu-text">
            ${item.desc}
            </div>
            </div>
        </div>`;
    });
    
    menusection.innerHTML = newMenu2.join('');
}


///Japan Sort 

button3DOM.addEventListener("click", uncoverMenu3);

function uncoverMenu3() {  

    let newMenu3 = menu.filter(origin => origin.category === "Japan").map(item => {
        return `<div class="menu-items col-lg-6 col-sm-12">
            <img src=${item.img} alt=${item.desc} class="photo hoverZoomLink">
            <div class="menu-info">
            <div class="menu-title">
                <h4>${item.title}</h4>
                <h4 class="price">${item.price}</h4>
            </div>
            <div class="menu-text">
            ${item.desc}
            </div>
            </div>
        </div>`;
    });
    
    menusection.innerHTML = newMenu3.join('');
}

///China Sort 

button4DOM.addEventListener("click", uncoverMenu4);

function uncoverMenu4() {  

    let newMenu4 = menu.filter(origin => origin.category === "China").map(item => {
        return `<div class="menu-items col-lg-6 col-sm-12">
            <img src=${item.img} alt=${item.desc} class="photo hoverZoomLink">
            <div class="menu-info">
            <div class="menu-title">
                <h4>${item.title}</h4>
                <h4 class="price">${item.price}</h4>
            </div>
            <div class="menu-text">
            ${item.desc}
            </div>
            </div>
        </div>`;
    });
    
    menusection.innerHTML = newMenu4.join('');
}



