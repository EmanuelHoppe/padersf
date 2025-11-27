const menuData = [
  // Pizza
  {
    category: 'pizza',
    name: 'Pizza Margherita',
    description: 'Mit Tomatensoße & Käse',
    image: 'https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_960_720.jpg',
    sizes: { "22er": 5.50, "28er": 7.50 }
  },
  {
    category: 'pizza',
    name: 'Pizza Funghi',
    description: 'Mit Tomatensoße, Käse & Pilzen',
    image: '[Bild-URL hier]',
    sizes: { "22er": 6.00, "28er": 8.50 }
  },
  {
    category: 'pizza',
    name: 'Pizza Salami',
    description: 'Mit Tomatensoße, Käse & Truthahnsalami',
    image: '[Bild-URL hier]',
    sizes: { "22er": 6.00, "28er": 8.50 }
  },
  {
    category: 'pizza',
    name: 'Pizza Schinken',
    description: 'Mit Tomatensoße, Käse & Putenschnken',
    image: '[Bild-URL hier]',
    sizes: { "22er": 6.00, "28er": 8.50 }
  },
  {
    category: 'pizza',
    name: 'Pizza Brokkoli]',
    description: 'Mit Tomatensoße, Käse & Brokkoli',
    image: '[Bild-URL hier]',
    sizes: { "22er": 6.00, "28er": 8.50 }
  },
  {
    category: 'pizza',
    name: 'Pizza Thunfisch',
    description: 'Mit Tomatensoße, Käse, Thunfisch & Zwiebeln',
    image: '[Bild-URL hier]',
       sizes: { "22er": 6.50, "28er": 9.00 }
  },
  {
    category: 'pizza',
    name: 'Pizza Diavolo',
    description: 'Mit Tomatensoße, Käse,Truthahnsalami, Tomaten, Champignons & Peperoni',
    image: '[Bild-URL hier]',
    sizes: { "22er": 7.00, "28er": 10.00 }
  },
  {
    category: 'pizza',
    name: 'Pizza Hollondaise',
    description: 'Mit Tomatensoße, Käse, Hähnchenbrust, Brokkoli, Mais & Sauce Hollondaise',
    image: '[Bild-URL hier]',
    sizes: { "22er": 7.00, "28er": 10.00 }
  },
  {
    category: 'pizza',
    name: 'Unsere Pizza',
    description: 'Mit Tomatensoße, Käse, Drehspießfleisch, Zwiebeln, Mais & Sauce Hollondaise',
    image: '[Bild-URL hier]',
    sizes: { "22er": 7.00, "28er": 10.00 }
  },
  {
    category: 'pizza',
    name: 'Pizza Sucuk',
    description: 'Mit Tomatensoße, Käse, Knoblauchwurst & Peperoni',
    image: '[Bild-URL hier]',
    sizes: { "22er": 7.00, "28er": 10.00 }
  },

  // Snacks
  {
    category: 'snacks',
    name: 'Pommes',
    description: 'Knusprige goldgelbe Pommes',
    image: 'https://cdn.pixabay.com/photo/2017/07/16/10/43/french-fries-2506415_960_720.jpg',
    sizes: { "klein": 2.50 , "Groß": 4.00}
  },
  {
    category: 'snacks',
    name: 'Bratwurst',
    description: 'Qualitäts-Wurst vom Rind',
    image: '[Bild-URL hier]',
    sizes: { "Standard": 5.00 }
  },
  {
    category: 'snacks',
    name: 'Currywurst',
    description: 'Qualitäts-Wurst vom Rind',
    image: '[Bild-URL hier]',
    sizes: { "Standard": 6.00 }
  },
  {
    category: 'snacks',
    name: 'Mantaplatte',
    description: 'Qualitäts-Wurst vom Rind mit Pommes',
    image: '[Bild-URL hier]',
    sizes: { "Standard": 8.00 }
  },
  {
    category: 'snacks',
    name: '7 Chicken Nuggets',
    description: 'mit Pommes',
    image: '[Bild-URL hier]',
    sizes: { "Standard": 8.00 }
  },
  {
    category: 'snacks',
    name: 'Schnitzel &quot;Wiener Art&quot;',
    description: '180g Geflügel-Schnitzel mit Pommes & Salat',
    image: '[Bild-URL hier]',
    sizes: { "Standard": 9.00 }
  },
  

  // Burger
  {
    category: 'burger',
    name: 'Hamburger',
    description: 'vom Rind 120g',
    image: 'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_960_720.jpg',
    sizes: { "Einzeln": 6.00, "Menü": 10.00 }
  },
  {
    category: 'burger',
    name: 'Cheeseburger',
    description: 'vom Rind 120g',
    image: '[Bild-URL hier]',
    sizes: { "Einzeln": 7.00, "Menü": 11.00 }
  },
  {
    category: 'burger',
    name: 'Crispy Chickenburger',
    description: 'Crispy-Chicken Patty 135g',
    image: '[Bild-URL hier]',
    sizes: { "Einzeln": 7.00, "Menü": 11.00 }
  },

  // Drehspieß
  {
    category: 'drehspieß',
    name: 'Drehspieß Tasche',
    description: 'mit Salat & eine Sauce nach Wahl im Fladenbrot',
    image: 'https://cdn.pixabay.com/photo/2021/06/28/08/50/kebab-6370180_960_720.jpg',
    sizes: { "Normal": 7.00 }
  },
  {
    category: 'drehspieß',
    name: 'Drehspieß Box',
    description: 'mit Pommes oder Salat',
    image: '[Bild-URL hier]',
    sizes: { "Normal": 0.00 }
  },
  {
    category: 'drehspieß',
    name: 'Drehspieß Teller',
    description: 'mit Pommes & Salat',
    image: '[Bild-URL hier]',
    sizes: { "Normal": 0.00 }
  },
  {
    category: 'drehspieß',
    name: 'Drehspieß Überbacken',
    description: 'mit Tomaten-Sahnesauce, Käse, Pommes & Salat',
    image: '[Bild-URL hier]',
    sizes: { "Normal": 0.00 }
  },

  // Lahmacun
  {
    category: 'lahmacun',
    name: 'Lahmacun',
    description: 'mit Salat & Sauce',
    image: 'https://cdn.pixabay.com/photo/2023/01/26/12/36/lahmacun-7745722_960_720.jpg',
    sizes: { "Einfach": 4.00, "Mit Käse": 5.00 }
  },
  {
    category: 'lahmacun',
    name: 'Lahmacun Spezial',
    description: 'mit Drehspießfl., Salat & 1 Sauce nach Wahl',
    image: '[Bild-URL hier]',
    sizes: { "Einfach": 0.00, "Mit Käse": 0.00 }
  },
  {
    category: 'lahmacun',
    name: 'Lahmacun Überbacken',
    description: 'mit Drehspießfl., Tomaten-Sahnesauce & Salat',
    image: '[Bild-URL hier]',
    sizes: { "Einfach": 0.00, "Mit Käse": 0.00 }
  },

  // Dürüm
  {
    category: 'dürüm',
    name: 'Drehspieß Dürüm',
    description: 'mit Salat, Sauce & Hähnchen oder Kalb',
    image: 'https://cdn.pixabay.com/photo/2021/07/12/08/55/durum-6405445_960_720.jpg',
    sizes: { "Normal": 6.50, "Groß": 8.00 }
  },
  {
    category: 'dürüm',
    name: 'Tavuk Sis Dürüm',
    description: 'mit Salat',
    image: '[Bild-URL hier]',
    sizes: { "Normal": 0.00, "Groß": 0.00 }
  },
  {
    category: 'dürüm',
    name: 'Adana Dürüm',
    description: 'Hackspieß (auf Wunsch Scharf)',
    image: '[Bild-URL hier]',
    sizes: { "Normal": 0.00, "Groß": 0.00 }
  },
  {
    category: 'dürüm',
    name: 'Lammspieß Dürüm',
    description: 'mit Salat',
    image: '[Bild-URL hier]',
    sizes: { "Normal": 0.00, "Groß": 0.00 }
  },

  // Grill
  {
    category: 'grill',
    name: 'Tavuk Sis Kebap',
    description: 'Hänchenspieß',
    image: 'https://cdn.pixabay.com/photo/2017/03/10/13/50/barbecue-2139585_960_720.jpg',
    sizes: { "Portion": 9.00 }
  },
  {
    category: 'grill',
    name: 'Adana Spieß',
    description: 'Hackspieß (auf Wunsch Scharf)',
    image: '[Bild-URL hier]',
    sizes: { "Portion": 0.00 }
  },
  {
    category: 'grill',
    name: 'Lamm Spieß Teller',
    description: '[Beschreibung hier]',
    image: '[Bild-URL hier]',
    sizes: { "Portion": 0.00 }
  },
  {
    category: 'grill',
    name: 'Gemischte Grillplatte',
    description: '[Beschreibung hier]',
    image: '[Bild-URL hier]',
    sizes: { "Portion": 0.00 }
  },

  //Veggie
  {
    category: 'veggie',
    name: 'Veggie Tasche',
    description: 'mit Salat, Weißkäse & Sauce nach Wahl im Fladenbrot',
    image: '[Bild-URL hier]',
    sizes: { "Portion": 0.00 }
  },
  {
    category: 'veggie',
    name: 'Veggie Dürüm',
    description: 'mit Salat, Weißkäse & Sauce nach Wahl',
    image: '[Bild-URL hier]',
    sizes: { "Portion": 0.00 }
  },
  {
    category: 'veggie',
    name: 'Falafel Tasche',
    description: 'mit Salat & Sauce nach Wahl im Fladenbrot',
    image: '[Bild-URL hier]',
    sizes: { "Portion": 0.00 }
  },
  {
    category: 'veggie',
    name: 'Falafel Dürüm',
    description: 'mit Salat & Sauce',
    image: '[Bild-URL hier]',
    sizes: { "Portion": 0.00 }
  },
  {
    category: 'veggie',
    name: 'Falafel Teller',
    description: 'mit Pommes, Salat & Sauce',
    image: '[Bild-URL hier]',
    sizes: { "Portion": 0.00 }
  },

  //Getränke


];
// --- Warenkorb & Menü ---
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let currentCategory = 'pizza';

function filterCategory(cat, event) {
  currentCategory = cat;
  document.querySelectorAll('nav button').forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');
  renderMenu();
}

function renderMenu() {
  const container = document.getElementById('menu');
  container.innerHTML = '';
  menuData.filter(item => item.category === currentCategory).forEach(item => {
    const div = document.createElement('div');
    div.className = 'item';
    div.innerHTML = `
      <img src="${item.image}" alt="${item.name}" />
      <h3>${item.name}</h3>
      <select aria-label="Größe wählen">
        ${Object.entries(item.sizes).map(([size, price]) => `<option value="${size}|${price}">${size} - €${price.toFixed(2)}</option>`).join('')}
      </select>
      <button onclick="addToCart('${item.name}', this.previousElementSibling.value)">In den Warenkorb</button>
    `;
    container.appendChild(div);
  });
}

function addToCart(name, value) {
  const [size, price] = value.split('|');
  const existing = cart.find(i => i.name === name && i.size === size);
  if(existing) existing.quantity += 1;
  else cart.push({name, size, price: parseFloat(price), quantity:1});
  saveCart();
  renderCart();
}

function saveCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

function renderCart() {
  const container = document.getElementById('cart-items');
  container.innerHTML = '';
  cart.forEach((item,index)=>{
    const div = document.createElement('div');
    div.className='cart-item';
    div.innerHTML = `${item.quantity}x ${item.name} (${item.size}) - €${(item.price*item.quantity).toFixed(2)} <button onclick="removeItem(${index})">&times;</button>`;
    container.appendChild(div);
  });

  if(!document.getElementById('order-btn') && cart.length>0) {
    const orderBtn = document.createElement('button');
    orderBtn.id = 'order-btn';
    orderBtn.textContent = 'Warenkorb bestellen';
    orderBtn.style.marginTop = '10px';
    orderBtn.style.padding = '10px';
    orderBtn.style.background = '#1D3557';
    orderBtn.style.color = '#fff';
    orderBtn.style.border = 'none';
    orderBtn.style.cursor = 'pointer';
    orderBtn.onclick = submitOrder;
    container.appendChild(orderBtn);
  }
}

function removeItem(index) {
  if(cart[index].quantity>1) cart[index].quantity-=1;
  else cart.splice(index,1);
  saveCart();
  renderCart();
}

// --- Bestellung / Formular ---
// ... (Ihr vorhandener Code bis hier)

// --- Bestellung / Formular ---
function submitOrder() {
  if(cart.length===0){ 
    alert("Ihr Warenkorb ist leer!"); 
    return; 
  }
  
  // ANPASSUNG: Statt das Formular direkt zu rendern, navigieren wir zur Bestellseite.
  window.location.href = 'Bestellen/index.html'; 
  
  // Alle anderen Logikzeilen aus der ursprünglichen submitOrder-Funktion 
  // (Formular-Erstellung, Adressprüfung, Haversine-Berechnung etc.) 
  // MÜSSEN in die Datei Bestellung/index.html verschoben werden, 
  // damit das Formular dort gerendert wird und funktioniert.
}

// ... (Ihr vorhandener Code ab hier)

renderMenu();
renderCart();





