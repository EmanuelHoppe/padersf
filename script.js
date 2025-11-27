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
function submitOrder() {
  if(cart.length===0){ alert("Ihr Warenkorb ist leer!"); return; }
  document.body.innerHTML = "";

  // --- Zurück Button ---
  const backBtn = document.createElement('button');
  backBtn.textContent = 'Zurück';
  backBtn.style.position = 'absolute';
  backBtn.style.top = '10px';
  backBtn.style.right = '10px';
  backBtn.style.background = '#E63946';
  backBtn.style.color = '#fff';
  backBtn.style.border = 'none';
  backBtn.style.padding = '5px 10px';
  backBtn.style.cursor = 'pointer';
  backBtn.style.borderRadius = '5px';
  backBtn.onclick = () => { window.location.href='index.html'; };
  document.body.appendChild(backBtn);

  const container = document.createElement('div');
  container.className='container';
  document.body.appendChild(container);

  // ... hier folgt der restliche Code für Formular und Warenkorb
}


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

  if(!document.getElementById('order-btn')) {
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
function submitOrder() {
  if(cart.length===0){ alert("Ihr Warenkorb ist leer!"); return; }
  document.body.innerHTML = "";

  const container = document.createElement('div');
  container.className='container';
  document.body.appendChild(container);

  let totalPrice = cart.reduce((sum, i) => sum + i.price*i.quantity, 0);

  const form = document.createElement('form');
  form.innerHTML = `
    <h3>Lieferinformationen</h3>
    <input type="text" id="name" placeholder="Name" required>
    <input type="text" id="address" placeholder="Adresse" required>
    <input type="text" id="phone" placeholder="Telefonnummer" required>
    <input type="email" id="email" placeholder="E-Mail" required>
    <label for="payment">Zahlungsmethode wählen:</label>
    <select id="payment" required>
      <option value="">-- Bitte wählen --</option>
      <option value="paypal">PayPal</option>
      <option value="bar">Bar</option>
    </select>
    <input type="hidden" id="distance">
    <input type="hidden" id="paypal_authorization">
    <div id="paypal-button-container" style="margin-top:10px;"></div>
    <button type="submit">Bestellen</button>
  `;
  container.appendChild(form);

  const status = document.createElement('p'); status.id='status'; container.appendChild(status);

  const restaurantLat = 51.696099452961406, restaurantLon = 8.710803876287656;
  let authorizationID = null;

  form.payment.addEventListener('change', e => {
    const ppContainer = document.getElementById('paypal-button-container');
    if(e.target.value==='paypal') {
      ppContainer.innerHTML='';
      const script = document.createElement('script');
      script.src = "https://www.paypal.com/sdk/js?client-id=AQ5WBKDf0hxEb5U_05ObXD5sMzfry1y-UrwpHzQqnDuBjclZqlJjAGZ-Ur0kIsSsve23Yd4IDjSGkJXg&currency=EUR";
      script.onload = () => {
        paypal.Buttons({
          createOrder: (data, actions) => actions.order.create({
            purchase_units: [{ amount: { value: totalPrice.toFixed(2) } }]
          }),
          onApprove: (data, actions) => actions.order.authorize().then(auth => {
            authorizationID = auth.purchase_units[0].payments.authorizations[0].id;
            document.getElementById('paypal_authorization').value = authorizationID;
            status.textContent = "✔ PayPal-Zahlung autorisiert.";
          })
        }).render('#paypal-button-container');
      };
      document.body.appendChild(script);
    } else {
      document.getElementById('paypal-button-container').innerHTML='';
      authorizationID = null;
    }
  });

  form.addEventListener('submit', async e=>{
    e.preventDefault();
    const name=form.name.value.trim();
    const address=form.address.value.trim();
    const phone=form.phone.value.trim();
    const email=form.email.value.trim();
    const payment=form.payment.value;

    if(!name||!address||!phone||!email||!payment){ alert("Bitte alle Felder ausfüllen!"); return; }

    if(payment==='paypal' && !authorizationID){
      status.textContent = "⚠ Bitte zuerst PayPal-Zahlung autorisieren!";
      return;
    }

    status.textContent="Adresse wird geprüft...";
    try{
      const res = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`);
      const data = await res.json();
      if(data.length===0){ status.textContent="❌ Adresse konnte nicht gefunden werden."; return; }

      const customerLat=parseFloat(data[0].lat), customerLon=parseFloat(data[0].lon);
      const distance=haversine(restaurantLat,restaurantLon,customerLat,customerLon);
      if(distance>5){ status.textContent=`❌ Adresse zu weit entfernt (${distance.toFixed(2)} km)`; return; }
      form.distance.value = distance.toFixed(2);

      // --- Formular an admin.php senden ---
      const formData = new FormData(form);
      formData.append('cart', JSON.stringify(cart));
      const response = await fetch('admin.php', { method:'POST', body:formData });
      if(response.ok){
        status.textContent = `✅ Bestellung erfolgreich!`;
        cart=[]; saveCart();
        setTimeout(()=>{ window.location.href='index.html'; }, 2000);
      } else {
        status.textContent = "❌ Fehler beim Senden der Bestellung!";
      }

    } catch(err){ status.textContent="❌ Fehler bei der Adressprüfung."; console.error(err);}
  });

  function haversine(lat1,lon1,lat2,lon2){
    const R=6371; const dLat=(lat2-lat1)*Math.PI/180; const dLon=(lon2-lon1)*Math.PI/180;
    const a=Math.sin(dLat/2)**2 + Math.cos(lat1*Math.PI/180)*Math.cos(lat2*Math.PI/180)*Math.sin(dLon/2)**2;
    const c=2*Math.atan2(Math.sqrt(a),Math.sqrt(1-a)); return R*c;
  }
}

renderMenu();
renderCart();

