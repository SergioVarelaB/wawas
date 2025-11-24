//ids de producto activas
const instances = [
  { id: 9117785129193, class: 'collar-para-charms' },
  { id: 7412912783510, class: 'collar-de-charms-mini' },
  { id: 7820838174870, class: 'charms-extra-xs' },
  { id: 7319719280790, class: 'charms-extra' },
  { id: 7804532261014, class: 'pechera-y-correa-para-mascota-de-charms' },
  { id: 9117784867049, class: 'correa-de-charms' },
  { id: 8247523573910, class: 'correa-para-gato-y-razas-chicas' },
  { id: 7484253372566, class: 'collar-de-charms-glow-in-the-dark' },
  { id: 9117784867049, class: 'collar-de-gummies' },
  { id: 8289135952022, class: 'llavero-de-charms' },
  { id: 9120268222697, class: 'collar-para-charms' },
];

//obtener el id del producto
const idProduct = __st.rid;

console.log(idProduct, "idProduct")

document.addEventListener('DOMContentLoaded', function () {
  if (instances.some(product => product.id === idProduct)) {
    console.log('Powered by Pixelemos ðŸ’œ')
    customizer(idProduct)

  } else {
    console.log('Powered by Pixelemos ðŸ¤')
  }
}, false);

// Init vars
//const allowedSlugs = ['collar-de-charms','collar-de-charms-mini','charms-extra','collar-de-charms-glow-in-the-dark','charms-prueba','pechera-y-correa-para-mascota-de-charms','charms-extra-xs','correa-de-charms','correa-para-gato-y-razas-chicas']
//const allowedSlugs = ['collar-de-charms','collar-de-charms-mini','collar-de-charms-glow-in-the-dark','charms-prueba','pechera-y-correa-para-mascota-de-charms','charms-extra-xs','correa-de-charms']
//const currentSlug = window.location.pathname.split('/')[2]
const currentSlug = instances.find(instance => instance.id === idProduct).class;
const buyButton = document.querySelector('[id^="ProductSubmitButton"]')
const quantityInput = document.querySelector('[id^="Quantity-Form-template"]')
const $sizeform = document.querySelector('#values-collar-size')
var $charmsArray = [['C', 11], ['H', 12], ['A', 13], ['R', 14], ['M', 15], ['S', 16], ['1', 17], ['2', 18], ['#', 19]]
let verbose = false
let wawasContainer
let currentColor = 4
let phoneNumber = ""
let phonecharm = false
let maxCharms = 9
let minCharms = 5
let maxGummys = 7
let minGummys = 7
let collarSize = 'XS'
let enabledKeyboard = false
let $gummiesArray = []


/* Campos originales */

const charmsKeyboardHTML = `<div class="customizer-accordion">
    <div class="accordion-item active">
      <button id="size-title" class="accordion-header"> 01: Elige el tamaño de tu collar</button>
      <div class="accordion-content">
        <div id="size-container">
          <div class="size-button size-xs" onclick="changeCollarSize('xs')">XS<span class="medidas">17-29cm</span>
          </div>
          <div class="size-button size-s" onclick="changeCollarSize('s')">S<span class="medidas">25-40cm</span></div>
          <div class="size-button size-m" onclick="changeCollarSize('m')">M<span class="medidas">35-46cm</span></div>
          <div class="size-button size-l" onclick="changeCollarSize('l')">L<span class="medidas">40-55cm</span></div>
          <div class="size-button size-xl" onclick="changeCollarSize('xl')">XL<span class="medidas">50-66cm</span>
          </div>
          <div class="size-button size-sml" onclick="changeCollarSize('sml')">S/M/L</div>
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <button class="accordion-header">02: Elige el color de tu collar</button>
      <div class="accordion-content">
        <div class="color-collar">
          <div id="collar1" class="collar-option collar1" data-label="Naranja neón"
       onclick="selectCollar(this); changeCollarColor('collar1','Naranja Neon')"></div>
          <div id="collar2" class="collar-option collar2" data-label="Negro"
              onclick="selectCollar(this); changeCollarColor('collar2','Negro')"></div>
          <div id="collar3" class="collar-option collar3" data-label="Azul Rey"
              onclick="selectCollar(this); changeCollarColor('collar3','Azul Rey')"></div>
          <div id="collar4" class="collar-option collar4" data-label="Amarillo neón"
              onclick="selectCollar(this); changeCollarColor('collar4','Amarillo Neon')"></div>
          <div id="collar5" class="collar-option collar5" data-label="Rosa neón"
              onclick="selectCollar(this); changeCollarColor('collar5','Rosa Neon')"></div>
          <div id="collar6" class="collar-option collar6" data-label="Rojo"
              onclick="selectCollar(this); changeCollarColor('collar6','Rojo')"></div>
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <button class="accordion-header">03: Comienza a personalizar tus Charms!</button>
      <div class="accordion-content">
        <h4 class="elije-charms">Elije tus charms (mínimo 5 - máximo 9)</h4>
        <div id="keyboard-container" class="charms-sml">
    <div class="keyboard charms-keyboard">
    <div class="color-keyboard" style="display:none">
        <div id="color1" class="color-picker color1"  onclick="changeKeysColor('color1')">&nbsp;</div>
        <div id="color2" class="color-picker color2"  onclick="changeKeysColor('color2')">&nbsp;</div>
        <div id="color3" class="color-picker color3"  onclick="changeKeysColor('color3')">&nbsp;</div>
        <div id="color4" class="color-picker color4"  onclick="changeKeysColor('color4')">&nbsp;</div>
        <div id="color5" class="color-picker color5"  onclick="changeKeysColor('color5')">&nbsp;</div>
        <div id="color6" class="color-picker color6"  onclick="changeKeysColor('color6')">&nbsp;</div>
        <div id="color7" class="color-picker color7"  onclick="changeKeysColor('color7')">&nbsp;</div>
        <div id="color8" class="color-picker color8"  onclick="changeKeysColor('color8')">&nbsp;</div>
        <div id="color9" class="color-picker color9"  onclick="changeKeysColor('color9')">&nbsp;</div>
    </div>
    <div class="new-color-keyboard">
        <div id="color11" class="color-picker color11"  onclick="changeKeysColor('color11')">&nbsp;</div>
        <div id="color12" class="color-picker color12"  onclick="changeKeysColor('color12')">&nbsp;</div>
        <div id="color13" class="color-picker color13"  onclick="changeKeysColor('color13')">&nbsp;</div>
        <div id="color14" class="color-picker color14"  onclick="changeKeysColor('color14')">&nbsp;</div>
        <div id="color15" class="color-picker color15"  onclick="changeKeysColor('color15')">&nbsp;</div>
        <div id="color16" class="color-picker color16"  onclick="changeKeysColor('color16')">&nbsp;</div>
        <div id="color17" class="color-picker color17"  onclick="changeKeysColor('color17')">&nbsp;</div>
        <div id="color18" class="color-picker color18"  onclick="changeKeysColor('color18')">&nbsp;</div>
        <div id="color19" class="color-picker color19"  onclick="changeKeysColor('color19')">&nbsp;</div>
        <div id="color20" class="color-picker color20 hidden"  onclick="changeKeysColor('color20')">&nbsp;</div>
        <div id="color21" class="color-picker color21 hidden"  onclick="changeKeysColor('color21')">&nbsp;</div>
    </div>
    <div class="row">
      <div class="keyboard_key color11" id="charm-key-Q" onclick="addCharm('Q')">Q</div>
      <div class="keyboard_key color11" id="charm-key-W" onclick="addCharm('W')">W</div>
      <div class="keyboard_key color11" id="charm-key-E" onclick="addCharm('E')">E</div>
      <div class="keyboard_key color11" id="charm-key-R" onclick="addCharm('R')">R</div>
      <div class="keyboard_key color11" id="charm-key-T" onclick="addCharm('T')">T</div>
      <div class="keyboard_key color11" id="charm-key-Y" onclick="addCharm('Y')">Y</div>
      <div class="keyboard_key color11" id="charm-key-U" onclick="addCharm('U')">U</div>
      <div class="keyboard_key color11" id="charm-key-I" onclick="addCharm('I')">I</div>
      <div class="keyboard_key color11" id="charm-key-O" onclick="addCharm('O')">O</div>
      <div class="keyboard_key color11" id="charm-key-P" onclick="addCharm('P')">P</div>
    </div>
    <div class="row">
      <div class="keyboard_key color11" id="charm-key-A" onclick="addCharm('A')">A</div>
      <div class="keyboard_key color11" id="charm-key-S" onclick="addCharm('S')">S</div>
      <div class="keyboard_key color11" id="charm-key-D" onclick="addCharm('D')">D</div>
      <div class="keyboard_key color11" id="charm-key-F" onclick="addCharm('F')">F</div>
      <div class="keyboard_key color11" id="charm-key-G" onclick="addCharm('G')">G</div>
      <div class="keyboard_key color11" id="charm-key-H" onclick="addCharm('H')">H</div>
      <div class="keyboard_key color11" id="charm-key-J" onclick="addCharm('J')">J</div>
      <div class="keyboard_key color11" id="charm-key-K" onclick="addCharm('K')">K</div>
      <div class="keyboard_key color11" id="charm-key-L" onclick="addCharm('L')">L</div>
      <div class="keyboard_key color11" id="charm-key-Ã‘" onclick="addCharm('Ã‘')">Ã‘</div>
    </div>
    <div class="row"> 
      <div class="keyboard_key color11" id="charm-key-Z" onclick="addCharm('Z')">Z</div>
      <div class="keyboard_key color11" id="charm-key-X" onclick="addCharm('X')">X</div>
      <div class="keyboard_key color11" id="charm-key-C" onclick="addCharm('C')">C</div>
      <div class="keyboard_key color11" id="charm-key-V" onclick="addCharm('V')">V</div>
      <div class="keyboard_key color11" id="charm-key-B" onclick="addCharm('B')">B</div>
      <div class="keyboard_key color11" id="charm-key-N" onclick="addCharm('N')">N</div>
      <div class="keyboard_key color11" id="charm-key-M" onclick="addCharm('M')">M</div>
      <div class="keyboard_key color11" id="charm-key-1" onclick="addCharm('1')">1</div>
      <div class="keyboard_key color11" id="charm-key-2" onclick="addCharm('2')">2</div>
      <div class="keyboard_key color11" id="charm-key-3" onclick="addCharm('3')">3</div>
    </div>
    <div class="row">
      <div class="keyboard_key color11" id="charm-key-4" onclick="addCharm('4')">4</div>
      <div class="keyboard_key color11" id="charm-key-5" onclick="addCharm('5')">5</div>
      <div class="keyboard_key color11" id="charm-key-6" onclick="addCharm('6')">6</div>
      <div class="keyboard_key color11" id="charm-key-7" onclick="addCharm('7')">7</div>
      <div class="keyboard_key color11" id="charm-key-8" onclick="addCharm('8')">8</div>
      <div class="keyboard_key color11" id="charm-key-9" onclick="addCharm('9')">9</div>
      <div class="keyboard_key color11" id="charm-key-0" onclick="addCharm('0')">0</div>
      <div class="keyboard_key color11" >&nbsp;</div>
      <div class="keyboard_key color11" >&nbsp;</div>      
      <div class="keyboard_key color11" id="charm-key-phone" onclick="if(!phonecharm)addCharm('#')"><img src="https://cdn.shopify.com/s/files/1/0500/2946/1654/t/3/assets/phonecharm.png?v=2" width="32" height="32" alt="phone charm"></div>
    </div>
    </div>
  </div>
  </div>
    </div>
    <div class="collar-container">
      <div id="vaciar-collar" onclick="emptyCharms()"><svg aria-hidden="true" focusable="false" data-prefix="far"
          data-icon="trash-alt" class="svg-inline--fa fa-trash-alt fa-w-14" role="img"
          xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path fill="#fff"
            d="M268 416h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12zM432 80h-82.41l-34-56.7A48 48 0 0 0 274.41 0H173.59a48 48 0 0 0-41.16 23.3L98.41 80H16A16 16 0 0 0 0 96v16a16 16 0 0 0 16 16h16v336a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128h16a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16zM171.84 50.91A6 6 0 0 1 177 48h94a6 6 0 0 1 5.15 2.91L293.61 80H154.39zM368 464H80V128h288zm-212-48h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12z">
          </path>
        </svg></div>
      <div class="collar">&nbsp;</div>
      <div id="charm-container">
        <div class="charm">A</div>
        <div class="charm">Ã‘</div>
        <div class="charm">1</div>
        <div class="charm">2</div>
        <div class="charm">3</div>
        <div class="charm">4</div>
        <div class="charm">5</div>
        <div class="charm">6</div>
        <div class="charm">7</div>
      </div>
      <div class="msg-borrar"> Da click a la figura para borrar un charm</div>
    </div>
     <h4 id="phone-title" style="display:none">TelÃ©fono (10 digitos)</h4>
  <input type="phone" id="phone" value="" style="display:none">
  <div id="phone-level" style="display:none">&nbsp;</div>
  <div id="general-values" class="invisible">
  <label for="values-collar-size">TamaÃ±o Collar</label><br>
  <input type="text" id="values-collar-size" value="default"><br>
  <label for="values-collar-color">Color Collar</label><br>
  <input type="text" id="values-collar-color" value="No aplica"><br>
  <label for="values-charms-number">NÃºmero de charms</label><br>
  <input type="number" id="values-charms-number"  value="0"><br>  
  </div>  `

const gummysKeyboardHTML = `<div class="customizer-accordion">
      <div class="accordion-item active">
        <button id="size-title" class="accordion-header"> 01: Elige el tamaño de tu collar</button>
        <div class="accordion-content">
          <div id="size-container">
            <div class="size-button size-xs" onclick="changeGummysCollarSize('xs')">XS</div>
            <div class="size-button size-s" onclick="changeGummysCollarSize('s')">S</div>
            <div class="size-button size-m" onclick="changeGummysCollarSize('m')">M</div>
            <div class="size-button size-l" onclick="changeGummysCollarSize('l')">L</div>
            <div class="size-button size-xl" onclick="changeGummysCollarSize('xl')">XL</div>
          </div>
        </div>
      </div>
      <div class="accordion-item active">
        <button id="size-title" class="accordion-header"> 02: Comienza a personalizar tus Charms!</button>
        <div class="accordion-content">
          <div id="keyboard-container">
            <div class="color-keyboard">
              <div class="color-picker boton-color-rojo" onclick="changeGummiesColor('rojo')">&nbsp;</div>
              <div class="color-picker boton-color-rosa-fuerte" onclick="changeGummiesColor('rosa-fuerte')">&nbsp;</div>
              <div class="color-picker boton-color-rosa-pastel" onclick="changeGummiesColor('rosa-pastel')">&nbsp;</div>
              <div class="color-picker boton-color-lila" onclick="changeGummiesColor('lila')">&nbsp;</div>
              <div class="color-picker boton-color-morado" onclick="changeGummiesColor('morado')">&nbsp;</div>
              <div class="color-picker boton-color-azul-cielo" onclick="changeGummiesColor('azul-cielo')">&nbsp;</div>
              <div class="color-picker boton-color-azul-fuerte" onclick="changeGummiesColor('azul-fuerte')">&nbsp;</div>
              <div class="color-picker boton-color-verde" onclick="changeGummiesColor('verde')">&nbsp;</div>
              <div class="color-picker boton-color-verde-limon" onclick="changeGummiesColor('verde-limon')">&nbsp;</div>
              <div class="color-picker boton-color-amarillo" onclick="changeGummiesColor('amarillo')">&nbsp;</div>
              <div class="color-picker boton-color-naranja" onclick="changeGummiesColor('naranja')">&nbsp;</div>
              <div class="color-picker boton-glitter" onclick="changeGummiesColor('glitter')">&nbsp;</div>
            </div>
            <div class="keyboard">
              <div class="row">
                <div class="keyboard_key gummy gummy-color-rojo" id="gummyKey-Q" onclick="addGummy('Q')">Q</div>
                <div class="keyboard_key gummy gummy-color-rojo" id="gummyKey-W" onclick="addGummy('W')">W</div>
                <div class="keyboard_key gummy gummy-color-rojo" id="gummyKey-E" onclick="addGummy('E')">E</div>
                <div class="keyboard_key gummy gummy-color-rojo" id="gummyKey-R" onclick="addGummy('R')">R</div>
                <div class="keyboard_key gummy gummy-color-rojo" id="gummyKey-T" onclick="addGummy('T')">T</div>
                <div class="keyboard_key gummy gummy-color-rojo" id="gummyKey-Y" onclick="addGummy('Y')">Y</div>
                <div class="keyboard_key gummy gummy-color-rojo" id="gummyKey-U" onclick="addGummy('U')">U</div>
                <div class="keyboard_key gummy gummy-color-rojo" id="gummyKey-I" onclick="addGummy('I')">I</div>
                <div class="keyboard_key gummy gummy-color-rojo" id="gummyKey-O" onclick="addGummy('O')">O</div>
                <div class="keyboard_key gummy gummy-color-rojo" id="gummyKey-P" onclick="addGummy('P')">P</div>
              </div>
              <div class="row">
                <div class="keyboard_key gummy gummy-color-rojo" id="gummyKey-A" onclick="addGummy('A')">A</div>
                <div class="keyboard_key gummy gummy-color-rojo" id="gummyKey-S" onclick="addGummy('S')">S</div>
                <div class="keyboard_key gummy gummy-color-rojo" id="gummyKey-D" onclick="addGummy('D')">D</div>
                <div class="keyboard_key gummy gummy-color-rojo" id="gummyKey-F" onclick="addGummy('F')">F</div>
                <div class="keyboard_key gummy gummy-color-rojo" id="gummyKey-G" onclick="addGummy('G')">G</div>
                <div class="keyboard_key gummy gummy-color-rojo" id="gummyKey-H" onclick="addGummy('H')">H</div>
                <div class="keyboard_key gummy gummy-color-rojo" id="gummyKey-J" onclick="addGummy('J')">J</div>
                <div class="keyboard_key gummy gummy-color-rojo" id="gummyKey-K" onclick="addGummy('K')">K</div>
                <div class="keyboard_key gummy gummy-color-rojo" id="gummyKey-L" onclick="addGummy('L')">L</div>
                <div class="keyboard_key gummy gummy-color-rojo" id="gummyKey-Ã‘" onclick="addGummy('Ã‘')">Ã‘</div>
              </div>
              <div class="row">
                <div class="keyboard_key gummy gummy-color-rojo" id="gummyKey-Z" onclick="addGummy('Z')">Z</div>
                <div class="keyboard_key gummy gummy-color-rojo" id="gummyKey-X" onclick="addGummy('X')">X</div>
                <div class="keyboard_key gummy gummy-color-rojo" id="gummyKey-C" onclick="addGummy('C')">C</div>
                <div class="keyboard_key gummy gummy-color-rojo" id="gummyKey-V" onclick="addGummy('V')">V</div>
                <div class="keyboard_key gummy gummy-color-rojo" id="gummyKey-B" onclick="addGummy('B')">B</div>
                <div class="keyboard_key gummy gummy-color-rojo" id="gummyKey-N" onclick="addGummy('N')">N</div>
                <div class="keyboard_key gummy gummy-color-rojo" id="gummyKey-M" onclick="addGummy('M')">M</div>
                <div class="keyboard_key gummy gummy-color-rojo" id="gummyKey-1" onclick="addGummy('1')">1</div>
                <div class="keyboard_key gummy gummy-color-rojo" id="gummyKey-2" onclick="addGummy('2')">2</div>
                <div class="keyboard_key gummy gummy-color-rojo" id="gummyKey-3" onclick="addGummy('3')">3</div>
              </div>
              <div class="row">
                <div class="keyboard_key gummy gummy-color-rojo" id="gummyKey-4" onclick="addGummy('4')">4</div>
                <div class="keyboard_key gummy gummy-color-rojo" id="gummyKey-5" onclick="addGummy('5')">5</div>
                <div class="keyboard_key gummy gummy-color-rojo" id="gummyKey-6" onclick="addGummy('6')">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 59.38 65.4" id="gummy-6"
                    class="gummy-color-rojo">
                    <defs>
                      <style>
                        .pizza-1 {
                          fill: #93ff2b;
                        }

                        .pizza-2 {
                          fill: #ff0d1a;
                        }

                        .pizza-3 {
                          fill: #ffd500;
                        }

                        .pizza-4 {
                          fill: #d79231;
                        }
                      </style>
                    </defs>
                    <g id="Layer_2" data-name="Layer 2">
                      <g id="Layer_1-2" data-name="Layer 1">
                        <path class="pizza-1"
                          d="M40.93,20.06A46.86,46.86,0,0,0,15.1,21a67.27,67.27,0,0,0-7.4,2.92,2.18,2.18,0,0,1-.23.09Q13.05,34.19,18.6,44.37q3,5.52,6,11c.51,1,2.53,6.13,4.89,7.1l.17.06.13,0,.16,0a2.17,2.17,0,0,0,1.84-.88C38.55,49.29,44,35.86,51.35,23.8A55.42,55.42,0,0,0,40.93,20.06ZM19.69,34.15a4.39,4.39,0,0,1-.52-.13l-.48-.18-.4-.18-.35-.19a4.31,4.31,0,0,1-.63-.42l-.2-.16a5,5,0,0,1-.79-.81,1.56,1.56,0,0,1-.16-.2.91.91,0,0,1-.11-.16,4,4,0,0,1-.22-.34c-.06-.11-.13-.22-.18-.33a2.59,2.59,0,0,1-.14-.29,4.74,4.74,0,0,1-.31-.92,1.68,1.68,0,0,1-.06-.24c0-.12-.05-.25-.07-.38a7,7,0,0,1-.05-.8,5.86,5.86,0,0,1,5.85-5.84,5.4,5.4,0,0,1,1.28.15,4.39,4.39,0,0,1,.52.13,3.41,3.41,0,0,1,.48.18,3.52,3.52,0,0,1,.4.18,3.9,3.9,0,0,1,.35.19,4.31,4.31,0,0,1,.63.42l.2.16a3.24,3.24,0,0,1,.43.4.52.52,0,0,1,.1.11,3.89,3.89,0,0,1,.41.5,2.44,2.44,0,0,1,.23.33,4.68,4.68,0,0,1,.3.54,4.41,4.41,0,0,1,.24.54c0,.1.07.19.1.29a.94.94,0,0,1,0,.16,5.45,5.45,0,0,1,.18.8,7,7,0,0,1,0,.8A5.85,5.85,0,0,1,21,34.3,5.4,5.4,0,0,1,19.69,34.15ZM30.24,51.69a5.79,5.79,0,0,1-1.73-.26l0,0a5.84,5.84,0,1,1,3.41-11.18l0,0a5.84,5.84,0,0,1-1.68,11.44Zm7.18-14.61a6.09,6.09,0,0,1-1-.08,5.82,5.82,0,0,1-.63-.14l-.4-.13a5.84,5.84,0,0,1,2.83-11.3,4.75,4.75,0,0,1,.63.14l.5.16a2.91,2.91,0,0,1,.51.22,4.26,4.26,0,0,1,.62.35l.24.16a2.11,2.11,0,0,1,.36.27,2.91,2.91,0,0,1,.27.24l.26.25a3.33,3.33,0,0,1,.25.28,5.39,5.39,0,0,1,.78,1.22,2.41,2.41,0,0,1,.15.33c0,.12.09.23.13.35a2,2,0,0,1,.07.23,2.25,2.25,0,0,1,.09.35,4.37,4.37,0,0,1,.09.5,6.3,6.3,0,0,1,.05.75,6.19,6.19,0,0,1-.08.95A5.87,5.87,0,0,1,37.42,37.08Z">
                        </path>
                        <path
                          d="M56.53,14.77c-.65-.33-1.31-.64-2-.93l-.25-.11-.06,0c-.7-.31-1.39-.59-2-.84A60,60,0,0,0,33.16,8.44l0-.06v0a5.28,5.28,0,0,0,.91-3,5.37,5.37,0,1,0-10.74,0,5.29,5.29,0,0,0,1,3.06l0,0a.76.76,0,0,0,.08.11c-1.87.17-3.72.44-5.55.79a65.34,65.34,0,0,0-16,5.39A4.81,4.81,0,0,0,0,18.88v0A6.3,6.3,0,0,0,.31,21a2.92,2.92,0,0,0,.19.49,4.75,4.75,0,0,0,.91,1.34,5.2,5.2,0,0,0,2.8,1.55c2.72,2.23,4.14,6.08,5.86,9.22q7.13,13,14.23,26.07c1.28,2.35,2.9,5,4.9,5.59a1.19,1.19,0,0,0,.36.09c1.19.24,2.51-.27,4-2h0l.1-.12,0,0a1.57,1.57,0,0,0,.15-.19c5.7-10.52,10.92-21.29,16.41-31.91.86-1.67,1.94-5.22,3.36-6.61a5.15,5.15,0,0,0,1.52-.08,5.25,5.25,0,0,0,4.22-4.31A5.07,5.07,0,0,0,56.53,14.77Zm-27.78-11a1.65,1.65,0,1,1-1.64,1.64A1.63,1.63,0,0,1,28.75,3.73Z">
                        </path>
                        <path class="pizza-2"
                          d="M17.62,28.46A3.35,3.35,0,0,1,21,25.11a2.93,2.93,0,0,1,.67.07,3.24,3.24,0,0,1,.53.16,3.35,3.35,0,0,1-1.3,6.43,2.93,2.93,0,0,1-.67-.07,2.33,2.33,0,0,1-.53-.16A3.34,3.34,0,0,1,17.62,28.46Z">
                        </path>
                        <path class="pizza-2"
                          d="M26.9,45.85a3.35,3.35,0,0,1,3.34-3.35,3.08,3.08,0,0,1,.68.07,3.24,3.24,0,0,1,.53.16,3.35,3.35,0,0,1-1.3,6.43,3.12,3.12,0,0,1-1-.15l-.24-.08-.29-.14A3.35,3.35,0,0,1,26.9,45.85Z">
                        </path>
                        <path class="pizza-3"
                          d="M32.07,61.45l-.16.31L31.7,62a1.91,1.91,0,0,1-1.89.61l-.13,0-.17-.06c-2.4-.85-4.47-6.16-5-7.13l-6-11Q13,34.19,7.41,24s0,0,.06,0a2.18,2.18,0,0,0,.23-.09A67.27,67.27,0,0,1,15.1,21a46.86,46.86,0,0,1,25.83-1A55.42,55.42,0,0,1,51.35,23.8h0l.07,0C44.12,35.8,38.74,49.1,32.07,61.45ZM23.55,23.22a3.52,3.52,0,0,0-.4-.18,3.41,3.41,0,0,0-.48-.18,4.39,4.39,0,0,0-.52-.13,5.4,5.4,0,0,0-1.28-.15,5.84,5.84,0,0,0-2.58,11.08l.4.18.48.18a4.39,4.39,0,0,0,.52.13A5.4,5.4,0,0,0,21,34.3a5.84,5.84,0,0,0,2.58-11.08Zm8.37,17,0,0a5.84,5.84,0,1,0-3.41,11.18l0,0a5.84,5.84,0,1,0,3.41-11.18Zm11.3-9.77a4.37,4.37,0,0,0-.09-.5,2.25,2.25,0,0,0-.09-.35A2,2,0,0,0,43,29.4c0-.12-.08-.23-.13-.35a2.41,2.41,0,0,0-.15-.33,5.39,5.39,0,0,0-.78-1.22,3.33,3.33,0,0,0-.25-.28L41.4,27a2.91,2.91,0,0,0-.27-.24,2.11,2.11,0,0,0-.36-.27l-.24-.16a4.26,4.26,0,0,0-.62-.35l-.51-.22-.5-.16a4.75,4.75,0,0,0-.63-.14,5.84,5.84,0,0,0-2.83,11.3l.4.13a5.82,5.82,0,0,0,.63.14,6.09,6.09,0,0,0,1,.08,5.87,5.87,0,0,0,5.77-4.9,6.19,6.19,0,0,0,.08-.95A6.3,6.3,0,0,0,43.22,30.48Z">
                        </path>
                        <path class="pizza-2"
                          d="M34.11,30.68a3.37,3.37,0,0,1,3.31-2.8,3.29,3.29,0,0,1,.54.05,4.27,4.27,0,0,1,.54.13l.33.14A3.39,3.39,0,0,1,40,29.25a3.34,3.34,0,0,1-3.26,5.25h0l-.32-.07-.2-.06-.24-.1A3.37,3.37,0,0,1,34.11,30.68Z">
                        </path>
                        <path class="pizza-4"
                          d="M54.52,22.43a3.07,3.07,0,0,1-1.22-.26c-16.89-7.52-31.74-7.61-46.76-.3a3,3,0,1,1-2.62-5.39c16.72-8.15,33.19-8.09,51.82.21a3,3,0,0,1-1.22,5.74Z">
                        </path>
                      </g>
                    </g>
                  </svg>
                </div>
                <div class="keyboard_key gummy gummy-color-rojo" id="gummyKey-7" onclick="addGummy('7')">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45.2 62.35" class="gummy-color-rojo">
                    <defs>
                      <style>
                        .alien-1 {
                          fill: #93ff2b;
                        }
                      </style>
                    </defs>
                    <g id="Layer_2" data-name="Layer 2">
                      <g id="Layer_1-2" data-name="Layer 1">
                        <path
                          d="M45,28a22.21,22.21,0,0,0-8-14.23,22.71,22.71,0,0,0-10.25-5,5.37,5.37,0,1,0-8.37,0A21.74,21.74,0,0,0,9.1,13.06C1.83,18.76-1.11,26.27.37,35.38A30.13,30.13,0,0,0,5.93,48.22,65.85,65.85,0,0,0,17.7,60.57a7.61,7.61,0,0,0,4.87,1.78,7.84,7.84,0,0,0,5.05-1.88c.81-.69,1.62-1.39,2.41-2.1A56.36,56.36,0,0,0,40.75,45.93,28.13,28.13,0,0,0,45.2,31.16,19.77,19.77,0,0,0,45,28ZM22.53,3.72a1.65,1.65,0,1,1,0,3.29,1.65,1.65,0,0,1,0-3.29Z">
                        </path>
                        <path class="alien-1"
                          d="M43,28.15a20.26,20.26,0,0,0-7.33-13A20.3,20.3,0,0,0,24.37,10.3h0c-.58-.05-1.17-.08-1.76-.08H22c-.44,0-.87,0-1.3.08a19.53,19.53,0,0,0-10.4,4.21C3.68,19.74,1,26.61,2.34,35A28.32,28.32,0,0,0,7.56,47,64.08,64.08,0,0,0,19,58.92a5.6,5.6,0,0,0,7.35-.09c.8-.67,1.58-1.35,2.35-2A54.48,54.48,0,0,0,39,44.78,26.22,26.22,0,0,0,43.2,31V30.8A18,18,0,0,0,43,28.15ZM5.78,31.75c0-.48-.08-.95-.09-1.43a1.34,1.34,0,0,1,1.22-1.49A10.59,10.59,0,0,1,19.4,38.54c0,.23.05.47.06.71a1.38,1.38,0,0,1-1.38,1.58L16,41A9.85,9.85,0,0,1,5.78,31.75ZM30.84,47.64a11.11,11.11,0,0,1-6.9,3.55,13.72,13.72,0,0,1-1.43.09,11.19,11.19,0,0,1-8.21-3.54,2.08,2.08,0,0,1,.91-3.47,2,2,0,0,1,2.14.58,7.2,7.2,0,0,0,9.89.51,6.63,6.63,0,0,0,.53-.53,2.15,2.15,0,0,1,3-.11A2.08,2.08,0,0,1,30.84,47.64Zm1.28-7a6.9,6.9,0,0,1-1.28.25c-.53.06-1.07.06-1.48.09L27,40.83a1.37,1.37,0,0,1-1.32-1.47A10.58,10.58,0,0,1,37,28.75a7.56,7.56,0,0,1,1.42.12,1.31,1.31,0,0,1,1,1.22C39.63,35.29,36.91,39.27,32.12,40.66Z">
                        </path>
                      </g>
                    </g>
                  </svg>
                </div>
                <div class="keyboard_key gummy gummy-color-rojo" id="gummyKey-8" onclick="addGummy('8')">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60.77 61.38" class="gummy-color-rojo">
                    <defs>
                      <style>
                        .corazon-1 {
                          fill: #1e1e1c;
                        }

                        .corazon-2 {
                          fill: #ff0d1a;
                        }

                        .corazon-3 {
                          fill: #ffa0f0;
                        }

                        .corazon-4 {
                          fill: #fc0f7d;
                        }
                      </style>
                    </defs>
                    <g id="Layer_2" data-name="Layer 2">
                      <g id="Layer_1-2" data-name="Layer 1">
                        <path class="corazon-1"
                          d="M60.17,21.27A16.65,16.65,0,0,0,49.74,9.72l-.11,0h0a5.35,5.35,0,0,0-1-9.28,4.58,4.58,0,0,0-.91-.28A5.49,5.49,0,0,0,46.6,0a5.36,5.36,0,0,0-5.37,5.37,5.43,5.43,0,0,0,1.21,3.41,16.74,16.74,0,0,0-8.86,3.53A29.19,29.19,0,0,0,30.67,15l-.31.32-.07-.07,0,0-1.59-1.56c-.18-.18-.37-.35-.56-.52s-.37-.33-.56-.49-.57-.46-.86-.68l-.49-.36c-.33-.23-.66-.44-1-.64l-.6-.36L24,10.38l-.73-.33a15.28,15.28,0,0,0-1.6-.58,17.26,17.26,0,0,0-7.78-.42A16.69,16.69,0,0,0,0,25.46v.08A17.31,17.31,0,0,0,5.21,37.91L20.94,53.57l6.58,6.55.26.25a4.35,4.35,0,0,0,.92.64l.33.14.24.08a3.68,3.68,0,0,0,1,.15A3.78,3.78,0,0,0,33,60.25L39.29,54c5.53-5.53,11.25-11.25,16.8-17A15.87,15.87,0,0,0,60.17,21.27ZM46.5,3.69a1.42,1.42,0,0,1,.42.06l.22.07A1.64,1.64,0,0,1,46.6,7,1.42,1.42,0,0,1,46.18,7L46,6.88a1.61,1.61,0,0,1-1.11-1.54A1.65,1.65,0,0,1,46.5,3.69Z">
                        </path>
                        <path class="corazon-2"
                          d="M57.75,21.89c-.06-.24-.13-.47-.2-.7a7,7,0,0,0-.24-.69c-.05-.15-.11-.29-.17-.43a4.87,4.87,0,0,0-.24-.57c-.11-.23-.21-.45-.33-.67a0,0,0,0,0,0,0s0,0,0,0-.14-.27-.22-.4-.21-.36-.32-.54-.22-.35-.34-.52l-.42-.58c-.14-.18-.29-.37-.45-.55a4.48,4.48,0,0,0-.36-.4l-.1-.11c-.16-.18-.33-.36-.51-.53l-.45-.42-.2-.17-.47-.4-.51-.37c-.39-.27-.8-.53-1.22-.77a13,13,0,0,0-1.5-.73l-.26-.1L48.64,12l-.1,0c-.35-.12-.7-.22-1-.31s-.58-.14-.87-.19L46,11.33l-.65-.08-.66,0h-.33a.22.22,0,0,1-.08,0H44c-.3,0-.6,0-.89,0s-.6,0-.89.08a13.15,13.15,0,0,0-1.75.33l-.57.16-.42.13a3.66,3.66,0,0,0-.43.15l-.53.2a14.1,14.1,0,0,0-1.9,1c-.17.1-.34.2-.5.31l-.05,0-.46.32c-.17.12-.34.24-.5.37a27.08,27.08,0,0,0-2.66,2.51l-.92.93a1.7,1.7,0,0,1-1.19.55h0a1.5,1.5,0,0,1-.44-.07h0a1.75,1.75,0,0,1-.83-.54c-.68-.71-1.39-1.41-2.1-2.1a16.46,16.46,0,0,0-3.48-2.62,14,14,0,0,0-1.77-.81c-.19-.07-.37-.14-.56-.19l-.57-.17h0A14.29,14.29,0,0,0,17,11.29a18.21,18.21,0,0,0-2.71.22,14.19,14.19,0,0,0-11.77,14A14.61,14.61,0,0,0,7,36.14L22.7,51.79l6.59,6.56.18.18a1.54,1.54,0,0,0,.46.29l.15,0a1.27,1.27,0,0,0,1.15-.39l6.29-6.3c5.53-5.52,11.24-11.24,16.78-16.93A13.33,13.33,0,0,0,57.75,21.89ZM47.31,37.35c-3.54,3.63-7.18,7.28-10.7,10.8l-4,4a2.87,2.87,0,0,1-2,.86,2.68,2.68,0,0,1-.84-.13l-.2-.07a2.88,2.88,0,0,1-1-.62L28.32,52l-4.51-4.49-9.7-9.66a11.42,11.42,0,0,1-3.45-8.2v-.06a11.08,11.08,0,0,1,9.21-10.89,12.7,12.7,0,0,1,2.1-.16h.11a3.17,3.17,0,0,1,.44,0h.1a.16.16,0,0,0,.07,0H23l.15,0h.11l.3,0,.49.08a5,5,0,0,1,.65.14c.31.08.62.18.92.29l.57.22.49.22.25.13.18.09.05,0,0,0,0,0,.13.07.22.12.14.09.39.25c.23.15.46.32.68.49l0,0,.16.13.16.13c.26.21.51.44.76.68s.41.4.61.61a17,17,0,0,1,1.75-1.61c.22-.17.44-.33.66-.47s.38-.25.58-.36c0,0,0,0,0,0s.2-.12.3-.18h0a5.59,5.59,0,0,1,.65-.32l.38-.17.43-.17.21-.08.23-.08.39-.11.25-.07h0l.11,0,.57-.12.16,0,.2,0,.16,0,.37-.05h.16l.32,0a1.07,1.07,0,0,1,.25,0h1.11a11,11,0,0,1,1.14.12l.57.11a2.42,2.42,0,0,1,.45.1,2.9,2.9,0,0,1,.48.14l.31.09.1,0a5.37,5.37,0,0,1,.56.21,5.17,5.17,0,0,1,.64.28l.55.28.49.29.23.15a9,9,0,0,1,1.06.77c.14.12.28.23.4.35l.39.37.36.38c.12.13.23.26.34.4s.23.28.33.42a11.59,11.59,0,0,1,1.1,1.82c.08.17.15.33.22.5s.12.28.17.43l.06.16c.11.31.2.63.29.95A10.55,10.55,0,0,1,47.31,37.35Z">
                        </path>
                        <path class="corazon-3"
                          d="M47.5,27.5a8.51,8.51,0,0,0-5-5.83l-.52-.19a4.36,4.36,0,0,0-.59-.17l-.56-.13a8.71,8.71,0,0,0-6.94,1.73,16.82,16.82,0,0,0-1.64,1.55l-.59.6a1.52,1.52,0,0,1-1.09.48,1.3,1.3,0,0,1-.41-.07.49.49,0,0,1-.17-.06,1.72,1.72,0,0,1-.61-.41c-.43-.45-.87-.89-1.32-1.33a9.7,9.7,0,0,0-2.47-1.78l-.39-.17a8.09,8.09,0,0,0-1.08-.37,3,3,0,0,0-.5-.11A9,9,0,0,0,22,21.1a10.26,10.26,0,0,0-1.63.14,8.57,8.57,0,0,0-7.12,8.47A9,9,0,0,0,14,33.2a9.25,9.25,0,0,0,2,2.95Q21.13,41.3,26.3,46.43l4,4,.12.09h0a.34.34,0,0,0,.32-.11q2-2,4-4c3.51-3.51,7.14-7.15,10.66-10.76A8.07,8.07,0,0,0,47.5,27.5Zm-8.87,9.55c-1.63,1.67-3.28,3.32-4.93,5l-1.9,1.9a2,2,0,0,1-1.41.6,1.76,1.76,0,0,1-.46-.06,1.31,1.31,0,0,1-.32-.1.82.82,0,0,1-.28-.14,1.5,1.5,0,0,1-.41-.28l-.11-.1-6.58-6.55A6,6,0,0,1,20.43,33v0a5.83,5.83,0,0,1,7.16-5.66,2.79,2.79,0,0,1,.39.1h0a6.32,6.32,0,0,1,.61.22,6.1,6.1,0,0,1,1.69,1.07,4,4,0,0,1,.38-.32,5.84,5.84,0,0,1,4.79-1.13l.35.08.37.11.1,0a5.81,5.81,0,0,1,3.76,4.07A5.6,5.6,0,0,1,38.63,37.05Z">
                        </path>
                        <path class="corazon-4"
                          d="M36.74,35.27c-1.64,1.69-3.3,3.35-5,5l-1.47,1.47-6.22-6.2A3.5,3.5,0,0,1,23,33a3.3,3.3,0,0,1,2.73-3.26,5.14,5.14,0,0,1,.66-.05,3.31,3.31,0,0,1,.95.14l.22.08a3.71,3.71,0,0,1,1.09.76l.6.6a1.28,1.28,0,0,0,.61.38l.05,0a1.34,1.34,0,0,0,1.4-.35l.28-.28a7,7,0,0,1,.7-.66,3.32,3.32,0,0,1,2.89-.62l.18.05c.13.05.27.1.39.16a3.25,3.25,0,0,1,1.76,2.16A3.07,3.07,0,0,1,36.74,35.27Z">
                        </path>
                      </g>
                    </g>
                  </svg>
                </div>
                <div class="keyboard_key gummy gummy-color-rojo" id="gummyKey-9" onclick="addGummy('9')">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 81.67 61.09" class="gummy-color-rojo">
                    <defs>
                      <style>
                        .rainbow-1 {
                          fill: #1e1e1c;
                        }

                        .rainbow-2 {
                          fill: #c798ff;
                        }

                        .rainbow-3 {
                          fill: #00cefb;
                        }

                        .rainbow-4 {
                          fill: #ffeb00;
                        }

                        .rainbow-5 {
                          fill: #f8000c;
                          stroke: #1d1e1c;
                          stroke-miterlimit: 10;
                          stroke-width: 0.25px;
                        }
                      </style>
                    </defs>
                    <g id="Layer_2" data-name="Layer 2">
                      <g id="Layer_1-2" data-name="Layer 1">
                        <path class="rainbow-1"
                          d="M81.42,48.83a40.27,40.27,0,0,0-3.64-15.41c-.22-.47-.44-.94-.68-1.4-.09-.19-.18-.38-.28-.56a2,2,0,0,0-.15-.29l0-.06L76.57,31c-.13-.25-.26-.5-.4-.75l0,0-.06-.11-.3-.52a0,0,0,0,0,0,0l-.38-.64c-.13-.22-.26-.43-.4-.64-.32-.54-.67-1.06-1-1.57l-.38-.54c-.26-.37-.52-.72-.78-1.07l-.35-.45,0,0c-.28-.37-.58-.74-.88-1.09-.09-.11-.18-.22-.28-.32-.34-.42-.71-.83-1.08-1.23l-.28-.3c-.36-.39-.74-.78-1.12-1.15,0,0,0,0,0,0-.44-.44-.9-.86-1.36-1.27l-.12-.11c-.42-.38-.84-.74-1.27-1.09l-.27-.22c-.42-.34-.85-.67-1.28-1l-.31-.23L63.37,16l-.32-.22-.51-.34-1.06-.68-.26-.15c-.4-.25-.81-.48-1.22-.71l-.36-.2c-.36-.2-.72-.39-1.08-.56a2.29,2.29,0,0,0-.31-.16l0,0-.05,0-.62-.29-1.06-.49c-.6-.26-1.21-.51-1.83-.74-1.31-.49-2.64-.91-4-1.27A39,39,0,0,0,44,9l0,0a5.37,5.37,0,1,0-7.8.11l0,0a40.1,40.1,0,0,0-14,4.39C8.9,20.52,1.49,31.67.16,46.7c-.4,4.56.09,9.13,0,13.69,0,.41.1.59.26.67h0a2.82,2.82,0,0,0,.59,0c9.81-.2,19.62-.41,29.43-.58.83,0,.95-.29.92-1-.09-3.1-.18-6.2-.19-9.29,0-5.54,3.93-9.82,9-9.86h.14l.59,0a6.2,6.2,0,0,1,.62.06l.6.1.59.14a7.68,7.68,0,0,1,1.23.4c.19.07.36.15.54.23l.05,0,0,0h0A9.53,9.53,0,0,1,45.8,42a4.06,4.06,0,0,1,.36.26l.38.29a4.15,4.15,0,0,1,.32.27l0,.05c.14.12.27.25.4.38a4,4,0,0,1,.34.38,3.07,3.07,0,0,1,.29.34c.12.15.24.31.35.47s.23.34.33.51l.08.14c.07.12.14.25.2.38a2.53,2.53,0,0,1,.18.37.09.09,0,0,1,0,.06,5.89,5.89,0,0,1,.24.58c0,.1.07.19.1.29a2.46,2.46,0,0,1,.09.29,5.51,5.51,0,0,1,.22.89,4.21,4.21,0,0,1,.09.49h0v0a4.78,4.78,0,0,1,.06.53.57.57,0,0,1,0,.13A7,7,0,0,1,50,50c-.06,3,.13,6,.14,9.06,0,.56.11.85.44,1a1.68,1.68,0,0,0,.53,0c4.92-.14,9.85-.22,14.77-.32s9.85-.21,14.78-.27c.77,0,1.09-.12,1.06-1C81.54,55.27,81.55,52.05,81.42,48.83ZM40,3.72a1.65,1.65,0,1,1-1.65,1.65A1.64,1.64,0,0,1,40,3.72Z">
                        </path>
                        <path class="rainbow-2"
                          d="M57.3,56.15c0,.82-.24,1-1,1-.9-.07-2,.32-2.8.11a1.07,1.07,0,0,1-.4-.26c-.57-.63-.21-2.11-.25-3.22,0-.47,0-1,0-1.68a26.68,26.68,0,0,0-.3-4.85,12.5,12.5,0,0,0-7.36-8.93,10.64,10.64,0,0,0-1.34-.47l-.76-.19-.44-.07-.11,0a3.31,3.31,0,0,0-.55-.07,10.11,10.11,0,0,0-2.46,0c-6.46.67-11.09,5.94-11.13,12.69,0,2.22.06,4.45.14,6.67,0,.65-.1.93-.82.89s-1.83.21-2.55.1h0l-.15,0h-.08a.82.82,0,0,1-.2-.12c-.69-.54-.26-2-.26-3.06,0-3.08-.39-6.17.46-9.23,2.15-7.68,9.78-13,17.35-12.11l.79.11c.53.09,1,.2,1.54.33l.15,0c.45.12.9.26,1.33.41.21.07.43.15.64.24l.6.25h0a16.26,16.26,0,0,1,9.8,14.54C57.2,51.46,57.19,53.81,57.3,56.15Z">
                        </path>
                        <path class="rainbow-3"
                          d="M63.51,57c-.88-.08-2,.3-2.73.09L60.6,57a1.37,1.37,0,0,1-.18-.16c-.55-.58-.2-2-.23-3.09-.12-3.45.07-6.9-1.09-10.25a19.62,19.62,0,0,0-9.84-11.23h0a.09.09,0,0,0-.06,0l-.29-.13-.62-.29-1-.4a20,20,0,0,0-2-.62A19.15,19.15,0,0,0,39,30.3,19.5,19.5,0,0,0,21.62,46.53c-.53,3.27-.14,6.58-.07,9.87,0,1.08-.13,1.6-1.35,1.45-.76-.09-1.75.19-2.39,0l-.1,0a.91.91,0,0,1-.16-.11c-.64-.56-.23-1.86-.25-2.84-.07-3.8-.34-7.6.67-11.36A23.68,23.68,0,0,1,41.56,26a22.6,22.6,0,0,1,3,.26c.61.1,1.23.22,1.83.37.38.09.76.2,1.12.31s.84.26,1.25.41l.24.09.4.16.08,0,.26.1.48.22.22.1A23.86,23.86,0,0,1,63.77,44.69a38,38,0,0,1,.57,7.22c0,1.35,0,2.7.1,4.05C64.48,56.69,64.35,57.05,63.51,57Z">
                        </path>
                        <path class="rainbow-4"
                          d="M71.59,56.22c0,.48-.17.64-.61.59a1.92,1.92,0,0,0-.24,0C70,56.82,69,57,68.3,57a1.26,1.26,0,0,1-.28,0,.6.6,0,0,1-.19-.06,1,1,0,0,1-.22-.13c-.7-.56-.24-2.08-.27-3.17-.09-4.09-.08-8.16-1.38-12.13A26.53,26.53,0,0,0,53.38,26.34l-.08,0c-.39-.21-.78-.41-1.18-.6h0c-.43-.2-.85-.4-1.29-.58-.59-.26-1.2-.48-1.82-.69a26.14,26.14,0,0,0-10.49-1.27A26.56,26.56,0,0,0,14.57,45.4C14,49.2,14.36,53,14.4,56.81c0,.93-.2,1.26-1.14,1.17a25.26,25.26,0,0,1-2.54.1L10.56,58l-.18-.14c-.63-.61-.18-2-.24-3,0-.71,0-1.43-.05-2.14A32.1,32.1,0,0,1,13.9,34.62a30.81,30.81,0,0,1,32-15.38c.79.13,1.57.28,2.33.47q.59.13,1.14.3l1.13.35c.37.12.74.25,1.1.39.7.26,1.38.54,2.06.86A30.93,30.93,0,0,1,70.9,43.86C71.67,48,71.39,52.1,71.59,56.22Z">
                        </path>
                        <path class="rainbow-5"
                          d="M78.29,56.21c-.31.28-1,.23-1.71.19a9.57,9.57,0,0,0-1.31,0,.81.81,0,0,1-.32,0c-.08-.07-.08-.41-.08-.56,0-2.33-.07-4.69-.13-6.91A33.88,33.88,0,0,0,57.47,20c-.69-.39-1.39-.75-2.11-1.09s-1.65-.75-2.51-1.08c-.44-.17-.89-.33-1.34-.48s-.91-.3-1.38-.44-1-.29-1.51-.41A34,34,0,0,0,7.06,44.8a57.46,57.46,0,0,0-.23,9.44c0,.92.06,1.83.07,2.74a1.1,1.1,0,0,1-.13.71q-.13.14-.66.09a12,12,0,0,0-2.33,0,1.13,1.13,0,0,1-.31,0h0s-.09-.16-.09-.53c0-1.06,0-2.13,0-3.37,0-.55,0-1.14,0-1.78v0a36.78,36.78,0,0,1,4.32-20C15,18.57,28.81,11,43.63,12.34c1.47.14,2.91.34,4.3.6q1.24.24,2.46.54c1.17.3,2.31.64,3.42,1,.38.13.76.27,1.13.42.61.24,1.2.49,1.79.76s1.16.56,1.72.85h0q11.83,6.28,17.64,21.3a38.43,38.43,0,0,1,2.21,14.37c0,.17,0,.33,0,.49s0,.39,0,.58a8.6,8.6,0,0,0,.1,1.22C78.51,55.22,78.61,55.94,78.29,56.21Z">
                        </path>
                      </g>
                    </g>
                  </svg>
                </div>
                <div class="keyboard_key gummy gummy-color-rojo" id="gummyKey-0" onclick="addGummy('0')">
                  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 72.61 91.33" id="gummy-0" class="gummy-color-rojo">
                    <defs>
                      <style>
                        .glow-1 {
                          fill: url(#radial-gradient);
                        }

                        .glow2 {
                          fill: #def9c4;
                          stroke: #1d1d1b;
                          stroke-width: 2px;
                        }
                      </style>
                      <radialGradient id="radial-gradient" cx="36.3" cy="45.67" r="36.39"
                        gradientTransform="translate(0 -12.06) scale(1 1.26)" gradientUnits="userSpaceOnUse">
                        <stop offset="0.35" stop-color="#b2fc5a"></stop>
                        <stop offset="1" stop-color="#fff"></stop>
                      </radialGradient>
                    </defs>
                    <g id="Layer_2" data-name="Layer 2">
                      <g id="Layer_1-2" data-name="Layer 1">
                        <ellipse class="glow-1" cx="36.3" cy="45.67" rx="36.3" ry="45.67"></ellipse>
                        <path
                          d="M36.24,10.71a5.37,5.37,0,1,0,5.37,5.37A5.36,5.36,0,0,0,36.24,10.71Zm0,7a1.65,1.65,0,1,1,1.64-1.64A1.64,1.64,0,0,1,36.24,17.72Z">
                        </path>
                        <path class="glow2"
                          d="M57.91,41.86A27.43,27.43,0,0,1,53.6,56.12,56.45,56.45,0,0,1,43.06,68.34c-.78.7-1.58,1.39-2.38,2.07a6.6,6.6,0,0,1-8.63.1,65.2,65.2,0,0,1-11.6-12.16,29.35,29.35,0,0,1-5.39-12.42C13.64,37.17,16.45,30,23.42,24.56a20.51,20.51,0,0,1,12.29-4.51A21,21,0,0,1,50,25.22a21.25,21.25,0,0,1,7.69,13.61A21.82,21.82,0,0,1,57.91,41.86Z">
                        </path>
                        <path
                          d="M29.65,51.81a9.84,9.84,0,0,1-10.16-9.24c0-.48-.09-1-.1-1.43a1.35,1.35,0,0,1,1.22-1.49,10.58,10.58,0,0,1,12.49,9.7c0,.24,0,.48.06.72a1.37,1.37,0,0,1-1.37,1.58Z">
                        </path>
                        <path
                          d="M43.06,51.82l-2.32-.17a1.36,1.36,0,0,1-1.31-1.47A10.57,10.57,0,0,1,50.74,39.57a7.56,7.56,0,0,1,1.42.12,1.29,1.29,0,0,1,1,1.22c.13,5.2-2.59,9.18-7.37,10.57a7,7,0,0,1-1.29.25C44,51.79,43.48,51.79,43.06,51.82Z">
                        </path>
                        <path
                          d="M44.54,58.46A11.09,11.09,0,0,1,37.64,62a13.55,13.55,0,0,1-1.43.09A11.16,11.16,0,0,1,28,58.56a2.08,2.08,0,0,1,.9-3.47,2,2,0,0,1,2.14.58,7.2,7.2,0,0,0,9.89.51c.19-.16.36-.35.54-.53a2.14,2.14,0,0,1,3-.11A2.07,2.07,0,0,1,44.54,58.46Z">
                        </path>
                        <path
                          d="M24.11,83a3.73,3.73,0,0,1-1.5-.31,4,4,0,0,1-1.23-.81,3.68,3.68,0,0,1-.83-1.21,3.49,3.49,0,0,1-.31-1.47,3.7,3.7,0,0,1,.31-1.48,3.77,3.77,0,0,1,.84-1.2,3.84,3.84,0,0,1,1.23-.82,4.08,4.08,0,0,1,3.42.16,3.6,3.6,0,0,1,1.33,1.24.25.25,0,0,1,0,.19.21.21,0,0,1-.1.15l-1.21.77a.22.22,0,0,1-.18,0,.28.28,0,0,1-.17-.1A2.64,2.64,0,0,0,25,77.5a1.82,1.82,0,0,0-.92-.23,1.75,1.75,0,0,0-.72.15,1.93,1.93,0,0,0-1,1,1.79,1.79,0,0,0-.15.72,1.89,1.89,0,0,0,.14.72,1.93,1.93,0,0,0,1,1,1.57,1.57,0,0,0,.71.16,2.12,2.12,0,0,0,.75-.14,1.25,1.25,0,0,0,.6-.46.16.16,0,0,0,0-.15.16.16,0,0,0-.14-.06H24.17a.24.24,0,0,1-.24-.24V78.8a.23.23,0,0,1,.07-.17.24.24,0,0,1,.17-.07h3.45a.27.27,0,0,1,.17.06.28.28,0,0,1,.09.18c0,.11,0,.25,0,.41a4.36,4.36,0,0,1,0,.51,3.41,3.41,0,0,1-.4,1.29,3.55,3.55,0,0,1-.83,1,3.79,3.79,0,0,1-1.16.67A3.72,3.72,0,0,1,24.11,83Z">
                        </path>
                        <path
                          d="M34.51,81.24V82.6a.22.22,0,0,1-.07.17.21.21,0,0,1-.17.07h-5a.21.21,0,0,1-.18-.07.24.24,0,0,1-.06-.17V75.73a.25.25,0,0,1,.06-.17.23.23,0,0,1,.18-.07h1.5a.24.24,0,0,1,.17.07.23.23,0,0,1,.07.17v5a.25.25,0,0,0,.06.17.21.21,0,0,0,.18.07h3a.28.28,0,0,1,.17.07A.29.29,0,0,1,34.51,81.24Z">
                        </path>
                        <path
                          d="M34.47,79.17a3.73,3.73,0,0,1,.3-1.48,3.88,3.88,0,0,1,.82-1.2,3.73,3.73,0,0,1,2.68-1.12,3.49,3.49,0,0,1,1.47.31A3.75,3.75,0,0,1,41,76.5a3.81,3.81,0,0,1,.82,1.21,3.48,3.48,0,0,1,.29,1.47,3.78,3.78,0,0,1-1.12,2.68,3.75,3.75,0,0,1-1.21.82,3.65,3.65,0,0,1-1.47.3,3.51,3.51,0,0,1-1.48-.31,3.71,3.71,0,0,1-1.2-.82,3.78,3.78,0,0,1-.81-1.21A3.65,3.65,0,0,1,34.47,79.17Zm2,0a1.71,1.71,0,0,0,.14.72,2,2,0,0,0,.38.61,1.85,1.85,0,0,0,.58.41,1.53,1.53,0,0,0,.7.16,1.66,1.66,0,0,0,.7-.15,1.88,1.88,0,0,0,.58-.42,1.91,1.91,0,0,0,.4-.6,1.92,1.92,0,0,0,0-1.44,1.88,1.88,0,0,0-.39-.6,2,2,0,0,0-.58-.41,1.56,1.56,0,0,0-.7-.16,1.71,1.71,0,0,0-.71.15,2,2,0,0,0-.57.41,1.68,1.68,0,0,0-.39.61A1.76,1.76,0,0,0,36.46,79.17Z">
                        </path>
                        <path
                          d="M42.25,75.8a.31.31,0,0,1,0-.21.19.19,0,0,1,.16-.08H44a.3.3,0,0,1,.19.07.29.29,0,0,1,.12.15l1.14,3.35c0,.06,0,.1.1.1a.13.13,0,0,0,.11-.1l1.11-3.33a.23.23,0,0,1,.12-.17.34.34,0,0,1,.2-.06h1.33a.36.36,0,0,1,.2.06.33.33,0,0,1,.12.17l1.1,3.35c0,.07.06.1.11.1s.08,0,.11-.1l1.16-3.36a.37.37,0,0,1,.13-.15.31.31,0,0,1,.2-.07h1.63a.15.15,0,0,1,.15.08.28.28,0,0,1,0,.18l-2.44,6.85a.4.4,0,0,1-.13.16.37.37,0,0,1-.2.07h-1.3a.36.36,0,0,1-.2-.06.3.3,0,0,1-.12-.17l-1.1-3.34c0-.07,0-.1-.1-.1s-.09,0-.11.1l-1.11,3.34a.28.28,0,0,1-.12.16.29.29,0,0,1-.2.07H45a.3.3,0,0,1-.2-.08.29.29,0,0,1-.11-.15Z">
                        </path>
                      </g>
                    </g>
                  </svg>
                </div>
                <div class="keyboard_key gummy gummy-color-rojo" id="gummyKey-10" onclick="addGummy('10')">
                  <svg xmlns="http://www.w3.org/2000/svg" width="75.27" height="68.62" viewBox="0 0 75.27 68.62">
                    <defs>
                      <style>
                        .billete {
                          fill: #02d405;
                        }
                      </style>
                    </defs>
                    <g id="6b0f0cef-c612-4c91-b0bb-e7b36eb07c62" data-name="Layer 2">
                      <g id="bfdfb5aa-9bc9-4692-ae54-24efed2fd8cf" data-name="Layer 1">
                        <g>
                          <path class="billete"
                            d="M72.79,19.4a1.71,1.71,0,0,1,0,.32v2.16c-7.7,3.34-17.32,5.78-25.7,4C40.91,24.49,36,19.73,29.79,18.1c-9-2.37-19.47-1.28-27.32,4V19.84a.87.87,0,0,1,.47-.93,35,35,0,0,1,17.73-5.54,25.67,25.67,0,0,1,16.14,5.06,28.69,28.69,0,0,0,10.47,4.71c8.29,2,16.54.73,24.55-3.7l.18-.1.35-.19a.32.32,0,0,1,.3,0A.28.28,0,0,1,72.79,19.4Z" />
                          <path class="billete" d="M1.31,35.5l-.06,0v-.11Z" />
                          <path class="billete"
                            d="M72.79,24.28v3.46C65.14,31,55.64,33.37,47.36,31.57c-6.19-1.34-11.08-6.1-17.3-7.73C20.92,21.45,10.36,22.57,2.48,28V24.77c5.65-4.37,13.27-6,20.3-5.57,8,.48,13.38,4.72,20.41,7.69C52.22,30.71,63.94,27.94,72.79,24.28Z" />
                          <path class="billete"
                            d="M72.81,54.42a1.1,1.1,0,0,0-.36.21,10.15,10.15,0,0,0-3.9,8.7,34.27,34.27,0,0,1-16.26,2.72A32,32,0,0,1,37.7,61.34c-.55-.34-1.08-.7-1.61-1.07a28.43,28.43,0,0,0-3.27-2,26,26,0,0,0-11.68-2.73,30.56,30.56,0,0,0-7.68,1A34.53,34.53,0,0,0,9.18,58a7.31,7.31,0,0,0-6.7-4.34V37.35l.16-.06C4.91,36.17,7,34.8,8,32.41c.6-1.33,1.25-3.75.16-5.07a33.22,33.22,0,0,1,14.85-2.4c8,.48,13.38,4.72,20.41,7.69,6.64,2.81,14.75,2,22.1,0a.94.94,0,0,0,.29.66c1.73,1.75,4.31,4,7,4Q72.79,45.83,72.81,54.42Z" />
                          <path d="M73.79,29.7A1.13,1.13,0,0,1,74,30V29.6ZM1.25,35.44v.11l.06,0Z" />
                          <path
                            d="M75.26,27.89V19.75c0-.17,0-.35,0-.52a2.74,2.74,0,0,0-3.9-2.33,6,6,0,0,0-.56.3l-.16.08c-7.55,4.18-15,5.31-22.78,3.46a26.33,26.33,0,0,1-9.59-4.3A28,28,0,0,0,24.6,11.07a6.38,6.38,0,0,0,2-4.63,6.45,6.45,0,1,0-10.64,4.89A38.75,38.75,0,0,0,1.65,16.81a3.3,3.3,0,0,0-1.65,3q0,7.71,0,15.43v9.48q0,8,0,16a2.78,2.78,0,0,0,4.45,2.4A32.32,32.32,0,0,1,14.08,59a24.45,24.45,0,0,1,17.65,1.53,27.18,27.18,0,0,1,3,1.83c.56.38,1.12.76,1.69,1.11a34.32,34.32,0,0,0,15.71,5.08c1,.07,1.89.11,2.83.11a37.19,37.19,0,0,0,18.49-5,3.35,3.35,0,0,0,1.84-3.15Q75.26,44.21,75.26,27.89Zm-74,7.66v-.11l.06.06ZM74,29.6V30a1.13,1.13,0,0,0-.24-.29ZM20.12,4.47a2,2,0,1,1-2,2A2,2,0,0,1,20.12,4.47ZM2.47,19.84a.87.87,0,0,1,.47-.93,35,35,0,0,1,17.73-5.54,25.67,25.67,0,0,1,16.14,5.06,28.69,28.69,0,0,0,10.47,4.71c8.29,2,16.54.73,24.55-3.7l.18-.1.35-.19a.32.32,0,0,1,.3,0,.28.28,0,0,1,.13.25,1.71,1.71,0,0,1,0,.32v2.16c-7.7,3.34-17.32,5.78-25.7,4C40.91,24.49,36,19.73,29.79,18.1c-9-2.37-19.47-1.28-27.32,4Zm70.32,4.44v3.46C65.14,31,55.64,33.37,47.36,31.57c-6.19-1.34-11.08-6.1-17.3-7.73C20.92,21.45,10.36,22.57,2.48,28V24.77c5.65-4.37,13.27-6,20.3-5.57,8,.48,13.38,4.72,20.41,7.69C52.22,30.71,63.94,27.94,72.79,24.28ZM52.29,66.05A32,32,0,0,1,37.7,61.34c-.55-.34-1.08-.7-1.61-1.07a28.43,28.43,0,0,0-3.27-2,26,26,0,0,0-11.68-2.73,30.56,30.56,0,0,0-7.68,1A34.53,34.53,0,0,0,9.18,58a7.31,7.31,0,0,0-6.7-4.34V37.35l.16-.06C4.91,36.17,7,34.8,8,32.41c.6-1.33,1.25-3.75.16-5.07a33.22,33.22,0,0,1,14.85-2.4c8,.48,13.38,4.72,20.41,7.69,6.64,2.81,14.75,2,22.1,0a.94.94,0,0,0,.29.66c1.73,1.75,4.31,4,7,4q0,8.56,0,17.15a1.1,1.1,0,0,0-.36.21,10.15,10.15,0,0,0-3.9,8.7A34.27,34.27,0,0,1,52.29,66.05Z" />
                          <path
                            d="M36.5,34.74h3.69a.58.58,0,0,1,.43.18.54.54,0,0,1,.17.42V36a.73.73,0,0,0,.18.47.75.75,0,0,0,.42.26,10.62,10.62,0,0,1,4.07,2.09.59.59,0,0,1,.23.4.65.65,0,0,1-.13.45l-2,2.77a.59.59,0,0,1-.4.25.5.5,0,0,1-.44-.1,9.94,9.94,0,0,0-2.38-1.13,6.73,6.73,0,0,0-2-.34h-.63a3.1,3.1,0,0,0-.69.1,1.27,1.27,0,0,0-.54.29.72.72,0,0,0-.21.55c0,.23.18.44.53.62a6.27,6.27,0,0,0,1.19.48c.45.13.89.23,1.3.31l.8.14a15.56,15.56,0,0,1,2,.51,7,7,0,0,1,2,1,5.54,5.54,0,0,1,1.57,1.72,5,5,0,0,1,.64,2.66A5.11,5.11,0,0,1,45,53.31a6.49,6.49,0,0,1-3.58,1.75.69.69,0,0,0-.42.25.64.64,0,0,0-.18.45v.72a.57.57,0,0,1-.17.43.61.61,0,0,1-.43.17H36.5a.57.57,0,0,1-.42-.17.58.58,0,0,1-.18-.43v-1a.79.79,0,0,0-.16-.48.8.8,0,0,0-.41-.3,10.08,10.08,0,0,1-2.2-.92,13,13,0,0,1-1.82-1.25.66.66,0,0,1-.23-.44.69.69,0,0,1,.13-.46l1.92-2.77a.67.67,0,0,1,.4-.25.58.58,0,0,1,.45.08A14.1,14.1,0,0,0,36.65,50a7.1,7.1,0,0,0,2.47.5,3.54,3.54,0,0,0,1.67-.31,1,1,0,0,0,.58-.94.63.63,0,0,0-.25-.51,2.25,2.25,0,0,0-.66-.31,7,7,0,0,0-1-.2c-.37-.05-.74-.12-1.13-.2l-1.28-.24a10,10,0,0,1-1.51-.4A9.78,9.78,0,0,1,34,46.77a5.45,5.45,0,0,1-1.36-1,4.77,4.77,0,0,1-1-1.49,5.22,5.22,0,0,1-.36-2,6.12,6.12,0,0,1,.31-2,5.12,5.12,0,0,1,.86-1.54,5,5,0,0,1,1.26-1.09,8.62,8.62,0,0,1,1.54-.7.82.82,0,0,0,.41-.28.76.76,0,0,0,.16-.47v-.77a.62.62,0,0,1,.6-.6Z" />
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
                <div class="keyboard_key gummy gummy-color-rojo" id="gummyKey-11" onclick="addGummy('11')">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40.18" height="68.62" viewBox="0 0 40.18 68.62">
                    <defs>
                      <style>
                        .anillo-azul {
                          fill: #74d2fd;
                        }

                        .anillo-amarillo {
                          fill: #fde328;
                        }
                      </style>
                    </defs>
                    <g id="1261d92c-87d6-4eb7-af78-87baeb504e73" data-name="Layer 2">
                      <g id="bf0e2e69-f420-40f3-89da-ae8621a1664d" data-name="Layer 1">
                        <g>
                          <path class="anillo-azul" d="M26.41,11.48l-6.69,6.63a.26.26,0,0,1-.38,0L12.7,11.48Z" />
                          <path class="anillo-azul"
                            d="M17.2,18.22,5.68,18.1a4.1,4.1,0,0,1,1-1.49c.47-.48.94-.95,1.42-1.42.85-.85,1.7-1.69,2.53-2.56a3,3,0,0,1,.55-.45Z" />
                          <path class="anillo-azul"
                            d="M33.85,18.39l-12-.12L28.12,12a9.32,9.32,0,0,1,1.59,1.43c.6.64,1.23,1.27,1.85,1.89.44.45.88.89,1.31,1.34A3.7,3.7,0,0,1,33.85,18.39Z" />
                          <path class="anillo-azul"
                            d="M33.82,20a3.71,3.71,0,0,1-1,1.59q-3.78,3.81-7.58,7.6a19.54,19.54,0,0,0-5.1-.67h0a20,20,0,0,0-5.71.83q-3.87-3.82-7.73-7.68a3.76,3.76,0,0,1-1.12-2Z" />
                          <path
                            d="M27.52,29.91q3.42-3.42,6.83-6.85a5.4,5.4,0,0,0,0-7.85c-.44-.46-.89-.91-1.34-1.36-.6-.61-1.21-1.22-1.8-1.85A8.46,8.46,0,0,0,27.5,9.4H24.18a5.53,5.53,0,1,0-7.94,0H11.86l-.25.14L11,9.82a7,7,0,0,0-2,1.35c-.82.85-1.65,1.69-2.49,2.51L5.15,15.12a5.44,5.44,0,0,0,0,8q3.5,3.5,7,7A20,20,0,0,0,20,68.62h0a20,20,0,0,0,14.2-5.88,19.85,19.85,0,0,0,5.93-14.17A20.06,20.06,0,0,0,27.52,29.91Zm2.19-16.46c.6.64,1.23,1.27,1.85,1.89.44.45.88.89,1.31,1.34a3.7,3.7,0,0,1,1,1.71l-12-.12L28.12,12A9.32,9.32,0,0,1,29.71,13.45ZM20.22,3.84a1.7,1.7,0,1,1-1.7,1.69A1.7,1.7,0,0,1,20.22,3.84Zm6.19,7.64-6.69,6.63a.26.26,0,0,1-.38,0L12.7,11.48ZM6.66,16.61c.47-.48.94-.95,1.42-1.42.85-.85,1.7-1.69,2.53-2.56a3,3,0,0,1,.55-.45l6,6L5.68,18.1A4.1,4.1,0,0,1,6.66,16.61Zm0,5a3.76,3.76,0,0,1-1.12-2L33.82,20a3.71,3.71,0,0,1-1,1.59q-3.78,3.81-7.58,7.6a19.54,19.54,0,0,0-5.1-.67h0a20,20,0,0,0-5.71.83Q10.55,25.51,6.69,21.65ZM32.76,61.24A18,18,0,0,1,20.05,66.5h0a18,18,0,0,1-17.9-18A17.94,17.94,0,0,1,13.83,31.74c.37-.14.75-.27,1.13-.38s.79-.22,1.19-.31a18,18,0,0,1,4-.44h0a17.51,17.51,0,0,1,3.34.32c.41.08.82.17,1.22.28s.77.22,1.15.35a17.89,17.89,0,0,1,6.9,29.68Z" />
                          <path class="anillo-amarillo"
                            d="M25.86,31.56c-.38-.13-.76-.25-1.15-.35s-.81-.2-1.22-.28a17.51,17.51,0,0,0-3.34-.32h0a18,18,0,0,0-4,.44c-.4.09-.8.19-1.19.31s-.76.24-1.13.38A17.93,17.93,0,0,0,7.35,61.21,17.76,17.76,0,0,0,20,66.5h0a17.94,17.94,0,0,0,5.81-34.94Zm3.46,26a13.35,13.35,0,0,1-9.27,3.7h0a12.72,12.72,0,1,1,0-25.43,13.48,13.48,0,0,1,5,1,13.3,13.3,0,0,1,4.25,2.76,12.4,12.4,0,0,1,0,18Z" />
                          <path
                            d="M29.33,39.56a13.3,13.3,0,0,0-4.25-2.76,13.48,13.48,0,0,0-5-1,12.72,12.72,0,1,0,0,25.43h0a13.35,13.35,0,0,0,9.27-3.7,12.4,12.4,0,0,0,0-18ZM27.85,56a11.23,11.23,0,0,1-7.8,3.11h0a10.6,10.6,0,1,1,0-21.19,11.14,11.14,0,0,1,7.81,3.13,10.28,10.28,0,0,1,0,14.95Z" />
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
                <div class="keyboard_key gummy gummy-color-rojo" id="gummyKey-12" onclick="addGummy('12')">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                    style="enable-background:new 0 0 512 512" xml:space="preserve">
                    <path
                      d="M356.1 190.2c-.4 28.7-9 55.4-20.9 81.2-11 23.8-24.7 46-42.8 65.2-5.9 6.3-12.4 11.9-19.7 16.5-10.5 6.6-20.9 6.7-31.5.1-13.7-8.5-24.3-20.3-33.7-33.1-24.1-32.8-41.7-68.7-48.2-109.2-5.8-36.6 1.2-70.4 27.2-98.3 45.6-49 139.5-38.7 164.1 40.9 1.7 5.6 3 11.3 3.9 17.1 1.3 6.5 1.9 13.1 1.6 19.6zm-94-83.8c-.7-.1-1.4-.1-2.1-.2-6.9-.4-10.2 1.8-10.6 6.8-.4 5.6 2.4 8 9.6 8.4 10.3.6 20 3.1 28.8 8.6 18.8 11.7 29 28.7 30.1 51 .3 6.4 3.3 9.7 8.5 9.3 4.5-.4 6.9-3.6 6.9-9.2.1-38.5-31-71.1-71.2-74.7z"
                      style="fill:#e98433" />
                    <path
                      d="M262.1 106.4c40.2 3.6 71.3 36.2 71.2 74.7 0 5.6-2.4 8.7-6.9 9.2-5.1.5-8.2-2.9-8.5-9.3-1-22.3-11.2-39.3-30.1-51-8.8-5.5-18.5-8-28.8-8.6-7.2-.4-10-2.8-9.6-8.4.4-5.1 3.7-7.3 10.6-6.8.7 0 1.4.1 2.1.2z"
                      style="fill:#040404" />
                    <path
                      d="M290.5 359.1c7-5.4 13.1-11.7 18.7-18.4 23.1-27.6 39.6-58.9 51.3-92.8 9.8-28.4 14.2-57.1 8.1-87.2-10.2-49.5-48.6-85.5-96.7-91.8 10.9-6.4 18.2-18.2 18.4-31.7.3-20.7-16.2-37.8-37-38.1-20.7-.3-37.8 16.2-38.1 37-.2 14.7 8.1 27.6 20.3 33.9-10.9 2.1-21.4 5.6-30.9 10.6-47.7 24.8-68.3 79.4-60.7 129 4.7 30.8 16 59.3 30.7 86.4 13 24 28.2 46.5 49.7 63.9 2.2 1.7 2 3.7 2 5.9 0 19.6-.2 39.2.1 58.9.1 7.1-2.2 11.2-8.9 14.3-20.2 9.2-27.8 33.3-17.1 52.8 10.5 19 35.1 25.2 53.5 13.4 2.1-1.3 3.5-1.9 5.9-.3 8.4 5.5 17.7 6.9 27.6 4.9 15.7-3.2 28.8-16.7 30.4-31.8 1.9-17.7-6.9-33.3-23-39.8-5.3-2.1-7.3-5.5-7.3-11 .1-20.7.1-41.3 0-62 0-2.8.9-4.5 3-6.1zm-37.6-334c6.3.1 11.4 5.3 11.3 11.7-.1 6.4-5.3 11.4-11.7 11.3-6.3-.1-11.4-5.3-11.3-11.7.1-6.4 5.3-11.4 11.7-11.3zm36.9 427.4c8.9 4.2 13.1 11.9 12.6 21.8-.4 9.5-5.3 16.2-14 19.9-8.8 3.7-16.8 1.7-23.9-4.3-6-5.1-8.7-5.2-14.6.1-7.4 6.6-15.9 8.1-24.8 3.9-8.8-4.1-13.2-11.4-13.1-21.1.1-9.7 4.9-17 13.8-20.5 11.7-4.7 16.5-13.2 16.5-25.2V370c9.5 3.7 18.6 3.8 27.7.7 4-1.3 2.8 1.7 2.8 3.4.1 16.9.3 33.7 0 50.6-.2 13 4.9 22.2 17 27.8zm-17-99.3c-10.5 6.6-20.9 6.7-31.5.1-13.7-8.5-24.3-20.3-33.7-33.1-24.1-32.8-41.7-68.7-48.2-109.2-5.8-36.6 1.2-70.4 27.2-98.3 45.6-49 139.5-38.7 164.1 40.9 1.7 5.6 3 11.3 3.9 17.1 1.1 6.4 1.7 13 1.4 19.6-.4 28.7-9 55.4-20.9 81.2-11 23.8-24.7 46-42.8 65.2-5.7 6.2-12.2 11.9-19.5 16.5z"
                      style="fill:#1d1d1b" />
                  </svg>
                </div>
              </div><!--row-->
              <div class="row">
                <div class="keyboard_key gummy gummy-color-rojo" id="gummyKey-13" onclick="addGummy('13')">
                  <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 512 512"
                    style="enable-background:new 0 0 512 512" xml:space="preserve">
                    <style>
                      .cherry0 {
                        fill: #fc0721
                      }
                    </style>
                    <g id="_x36_LDIwF.tif">
                      <path class="cherry0"
                        d="M133.4 345c4.5.1 9 .1 13.6.2 2.1 0 3.7-.9 5.5-2 5.5-3.3 11.2-6.3 17.6-7.9 7.1.6 14-1.3 21.2-.3 13.4 1.9 23.9 8.4 33 17.7 19.2 19.7 23.5 43.9 20.9 70.1-1.3 12.6-4.2 24.8-9.8 36.4-9.5 19.7-24.5 33.8-43.6 43.8-8.9 4.7-18.6 6.8-28.1 9.6-1.6.5-3.4.3-5.1.3-9.5 0-19-.2-28.5.1-16.9.5-32-5.2-46.3-13.3-33.3-18.9-55.8-62.8-46.4-106.5 3.3-15.5 8.4-30.4 20.2-41.9 9.1-8.9 20-13.9 32.6-16.2 14.5-2.7 27.1 1.5 39.3 8.5 1 1 2 2.6 3.9 1.4zM348.4 336.3c5.7 2.7 11.3 5.9 17 8.5 5.2 2.4 11.1 1.2 16.7.2 1.6.9 2.7-.2 3.9-.9 31.1-19.1 64.3-8.5 82.8 21.7 10.4 16.9 11.7 35.6 10.7 54.7-.7 15.1-4.3 29.5-11.9 42.7-13.7 23.6-33.3 39.5-59.9 47.2-14.2 4.1-28.4 2.4-42.6 2.9-42.8 1.4-83.4-33.7-92-73.3-4.6-21.2-5.2-42.4 2.6-62.9 7.6-19.8 21.4-33.9 42-40.5 9.1-2.9 18.4-2.6 27.7-.6 1.1.2 2.1.2 3 .3z" />
                    </g>
                    <path
                      d="M432.3 141.5c-9.6-17.7-20.2-34.5-35.4-48.2-15-13.6-32-21.9-52.2-23.1-17.4-1-33.8 3.2-49.7 9.7 6.6-8.1 10.6-18.4 10.8-29.6.4-26.7-20.9-48.6-47.5-49-26.7-.4-48.6 20.9-49 47.5-.2 12 4 23 11.1 31.5-14.2-6.3-28.8-10-44-10.2-24.8-.3-45.4 10-62.5 27.2-13.9 14-24.7 30.3-33 48.3-5 10.9-2.1 21.7 7.5 28.5 5.9 4.2 12.2 7.8 18.4 11.4 21.4 12.2 44.1 19.4 69 17.9 1.3-.1 3.1-.9 3.9.6.8 1.4-.7 2.6-1.4 3.8-7.7 13.3-14.6 26.9-20.6 41.1-8.5 20.1-15 40.8-19.5 62.1-2.4 11.2-4.3 22.6-5 34.1 4.5.1 9 .1 13.6.2 2.1 0 3.7-.9 5.5-2 5.5-3.3 11.2-6.3 17.6-7.9 6.3-28.4 15.9-55.7 28.1-82 14.4-31 32.5-59.8 54.1-86.4 2.6-3.2 4-3.2 6.9-.4 12.7 12.3 24.1 25.7 34.5 39.9 11.2 15.4 21.1 31.7 29.3 48.9 7.6 16 13.9 32.6 18.7 49.7 2.9 10.2 5.2 20.6 6.8 31.1 5.7 2.7 11.3 5.9 17 8.5 5.2 2.4 11.1 1.2 16.7.2-.2-1.7-.2-3.4-.5-5.1-2-12.9-3.9-25.8-7.1-38.5-4.1-16.7-9.3-33-15.8-49-6.3-15.7-13.9-30.8-22.6-45.3-.6-1-1.9-2.3-1.1-3.5.9-1.4 2.6-.5 3.9-.3 8.3 1.2 16.5.4 24.6-1.1 21.9-4 41.4-13.5 59.7-25.8 5.9-4 11.5-8.2 13.1-16 1.7-6.8-.7-13-3.9-18.8zM257.8 34.8c8.2.1 14.7 6.8 14.6 15-.1 8.2-6.8 14.7-15 14.6-8.2-.1-14.7-6.8-14.6-15 .1-8.2 6.8-14.7 15-14.6z"
                      style="fill:#10d30c" />
                  </svg>
                </div>
                <div class="keyboard_key gummy gummy-color-rojo" id="gummyKey-14" onclick="addGummy('14')">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                    style="enable-background:new 0 0 512 512" xml:space="preserve">
                    <path
                      d="M370 162.4c5.8 6.4 11.2 13.2 16.2 20.2 7.8 10.9 14.9 22.3 21 34.3 5.9 11.6 11 23.5 15.1 35.9 3.4 10.2 5.6 20.6 8.1 31 1.8 7.2 1.9 14.6 2.8 21.9 2.3 20.1 1.1 40.2-2.5 60.1-3.9 21.3-10.8 41.8-22.5 60.1-7.9 12.4-16.9 23.7-28 33.9-18.7 17.2-40.7 27.1-64.3 34.6-25.3 8.1-51.1 12.3-77.5 10.2-14.7-1.2-29.1-4.5-43-10.3-7.7-3.2-15.1-6.6-22.6-10.3-8.2-4-15.7-9-22.9-14.4-7.2-5.3-15.1-9.4-21.7-15.5-13.5-12.7-26.8-25.4-36.2-41.8-5.3-9.1-9-18.8-11.6-28.8-3.5-13.9-5.1-28-3.9-42.5.7-8.7 1.4-17.3 3.2-25.8 2.5-11.8 5.4-23.5 11.7-34.2 4.6-7.9 8.2-16.3 13.8-23.6 6.2-8 13.5-15 20.8-21.9 1.1-1.1 2.8-2.4 4.2-1.8 1.8.8.7 2.8.5 4.3-1.7 11.2-2.6 22.4-1.8 33.7.5 6.6.8 13.3 2.8 19.5 5.9 18.6 20.2 30.7 42.3 25.2 9.1-2.3 15.8-6.9 20.6-14.1 4.6-6.8 6.6-14.8 8.4-23 2.3-10.5 2-20.9 2.9-31.3.5-6.5.3-13 .4-19.5.1-9 .3-18 0-27-.3-10.5.7-21 2.9-31 3-13.6 6.6-27.1 12.6-39.9 8.1-17.4 22.5-27.1 38.6-35.4.9-.5 1.7-.8 2.8-.6 8.1 1.2 16.2.4 24.1-1.8 1.4-.4 2.9-.5 4.3-.5 2.6 0 4 .2 2.4 3.8-4.5 9.7-9.1 19.4-12.2 29.6-4.4 14.7-5.6 29.9-3 45.4 2.7 15.9 8.8 30.2 17.5 43.4 11.3 17.1 25.9 31.1 43.4 41.7 5.6 3.4 12.2 5.2 19.1 1.8 4.5-2.3 6.7-6.2 8.7-10.3 3.5-7.4 3.8-15.5 4.2-23.4.7-15.2.7-30.4-1.2-45.6-.7-5.3-.9-10.6-1.3-15.8 0-.3.4-.4.8-.5zm-62.6 111.8c.8 10.9 3.9 21.2 5.3 31.7 1.3 9.3 2.1 18.4-.6 27.5-1.3 4.4-3.1 5.4-7.5 3.9-5-1.7-9.3-4.6-13.1-8.2-11.6-10.9-16.7-24.7-17.4-40.3-.8-17.1 4.7-33.4 6.6-50.2.7-6.3 2.4-12.5 5-18.4.6-1.3 1-2.8-.1-4.1-.8-.9-1.8-.5-2.8-.2-10.7 2.7-19.7 8.3-27.4 16-9.4 9.3-16.6 20.3-23.2 31.7-10.7 18.5-16.8 38.1-15 59.6 1 11.9.7 23.7.7 35.6 0 4.3-1 8.4-3.2 12-6.4 10.3-19.3 11.2-26.2 1.1-2.9-4.3-3.8-9-4-13.9-.2-6.5 0-13-.1-19.6-.1-2.8-.9-5.7-3.8-6.8-2.4-1-4.9-.2-6.8 1.8-11 11.9-20.4 24.5-24.8 40.6-5.3 19.3-3.9 38.1 2.1 56.7 3.7 11.4 11.2 20.8 19.8 29 7.3 7 16 12.4 24.4 18 16.6 11 34.8 17 54.6 17.5 16.2.4 31.7-3.4 47.1-8.4 18-5.8 32.4-16.1 44-30.9 6.2-7.9 11.3-16.4 14.9-25.7 3.4-8.7 7-17.6 7.6-27 .5-8.6.8-17.3.3-26-.6-10-2.9-19.4-5.3-28.9-2.5-9.6-6.6-18.5-11-27.3-7.7-15.3-17.3-29.1-30.3-40.3-2.6-2.6-5.5-5.5-9.8-6.5z"
                      style="fill:#f6020f" />
                    <path
                      d="M307.4 274.2c4.3 1 7.2 3.9 10.1 6.4 13 11.2 22.6 25 30.3 40.3 4.4 8.8 8.5 17.7 11 27.3 2.5 9.5 4.8 19 5.3 28.9.5 8.7.2 17.4-.3 26-.6 9.5-4.2 18.3-7.6 27-3.6 9.3-8.8 17.8-14.9 25.7-11.6 14.7-26 25-44 30.9-15.4 5-31 8.8-47.1 8.4-19.8-.4-38-6.4-54.6-17.5-8.4-5.6-17-11-24.4-18-8.6-8.2-16.2-17.6-19.8-29-6-18.6-7.4-37.4-2.1-56.7 4.4-16.1 13.8-28.7 24.8-40.6 1.8-2 4.4-2.8 6.8-1.8 2.8 1.1 3.7 4 3.8 6.8.1 6.5-.1 13.1.1 19.6.2 4.9 1.1 9.6 4 13.9 6.9 10.1 19.7 9.2 26.2-1.1 2.3-3.6 3.2-7.7 3.2-12 0-11.9.3-23.7-.7-35.6-1.8-21.5 4.3-41.1 15-59.6 6.6-11.4 13.8-22.4 23.2-31.7 7.7-7.6 16.7-13.3 27.4-16 1-.3 2.1-.7 2.8.2 1.1 1.3.7 2.8.1 4.1-2.6 5.9-4.3 12.1-5 18.4-1.9 16.8-7.4 33.1-6.6 50.2.7 15.6 5.8 29.4 17.4 40.3 3.8 3.6 8.1 6.5 13.1 8.2 4.4 1.5 6.1.4 7.5-3.9 2.7-9.1 1.9-18.3.6-27.5-1.7-10.4-4.7-20.7-5.6-31.6zm10 16.4c.8 5.6 1.6 10.3 2.2 15.1 1.3 9.9 1.9 19.9-.8 29.7-2.2 8-8.3 11.3-16 8.5-7.7-2.8-14.3-7.7-19.7-13.8-15-16.9-17.2-37.2-14.6-58.3 1.7-14.2 4.8-28.2 7.2-42.2.2-1 .5-2.2-.3-2.9-1.2-.9-2.1.2-3.1.8-4.1 2.3-7.7 5.1-11.1 8.3-13.4 13-22.9 28.6-30.2 45.6-5.3 12.4-8.6 25.3-7.4 38.8 1.1 11.6 1.7 23.1 1.2 34.7-.3 7.2-.6 14.5-5.3 20.7-5.4 7-12.1 11.6-21.1 10.1-11.2-1.8-18.8-11.1-20.2-22.5-.8-6.2-.6-12.4-.7-18.6 0-.9.5-2.3-.6-2.7-1.2-.5-2.2.5-2.9 1.4-7.3 8.3-13.4 17.5-16.9 28.1-4.3 13-5.3 26.2-3.5 39.8 1.8 13.6 6.6 25.6 15.2 36.3 8.6 10.5 19.5 18 30.8 25.1 16.9 10.8 35.2 16.6 55.4 15.8 10.5-.4 20.6-2.3 30.7-5 19.1-5.2 35.8-13.5 48.4-29.3 12.7-16 21.4-33.9 23.2-54.3 3.1-35.4-7.6-67.1-27.8-95.9-3.2-4.8-6.6-9.5-12.1-13.3z"
                      style="fill:#421c10" />
                    <path
                      d="M317.4 290.6c5.5 3.8 8.9 8.5 12.2 13.2 20.3 28.8 31 60.5 27.8 95.9-1.8 20.3-10.5 38.3-23.2 54.3-12.6 15.8-29.4 24.2-48.4 29.3-10.1 2.7-20.2 4.6-30.7 5-20.2.8-38.5-5.1-55.4-15.8-11.3-7.2-22.2-14.6-30.8-25.1-8.7-10.6-13.4-22.7-15.2-36.3-1.8-13.6-.8-26.8 3.5-39.8 3.5-10.6 9.5-19.8 16.9-28.1.7-.8 1.7-1.9 2.9-1.4 1.1.5.6 1.8.6 2.7.2 6.2-.1 12.4.7 18.6 1.5 11.5 9 20.7 20.2 22.5 9 1.5 15.8-3.1 21.1-10.1 4.7-6.2 5-13.5 5.3-20.7.5-11.6-.2-23.1-1.2-34.7-1.2-13.5 2.1-26.5 7.4-38.8 7.3-17 16.8-32.6 30.2-45.6 3.3-3.2 7-6.1 11.1-8.3 1-.5 1.9-1.7 3.1-.8.8.7.5 1.9.3 2.9-2.5 14.1-5.5 28.1-7.2 42.2-2.6 21.1-.5 41.5 14.6 58.3 5.5 6.1 12 11 19.7 13.8 7.7 2.8 13.8-.5 16-8.5 2.7-9.8 2.1-19.8.8-29.7-.7-4.7-1.5-9.5-2.3-15z"
                      style="fill:#ff9f00" />
                    <path
                      d="M425.7 242c-11.8-31.8-29.7-60-51.7-85.8-3.2-3.7-7.1-6.4-11.3-8.7-.9-.5-1.9-.9-2.8-.2-.8.6-.4 1.6-.2 2.5 1 7.7 2 15.5 3.1 23.2 2.9 21.1 4 42.2.6 63.3-2.5 15.1-8.2 22.3-25.3 11-8.1-5.4-15.2-12-22-18.9-13.4-13.7-23.5-29.5-28.4-48-7.6-28.8-2-56 12.4-81.6 1.7-3 2.6-6.9 4.6-9 2.6-2.8 4.1-6.2 6.6-8.8 1.7-1.8 1-3.1-1.3-3.6-.9-.2-1.7-.4-2.6-.3h-.6c7-8 11.4-18.4 11.6-29.9.4-25.5-20-46.5-45.5-46.9-25.5-.4-46.5 20-46.9 45.5-.3 16.1 7.8 30.4 20.2 38.9 1.2 1.2 2.5 2.4 3.9 3.4 4 2.9 2.2 3.5-.6 5.1-10 5.7-19.2 12.3-26.3 21.6-11.9 15.5-17.1 33.7-20.6 52.4-3.5 18.7-3.9 37.7-3.5 56.8 0 10.3.7 20.7-.2 30.9-1.2 13.8-2.1 27.8-8.8 40.4-6.3 11.8-16.3 16.6-29.2 15.2-11.3-1.2-18-8.9-21.1-18.9-6.9-21.9-5-43.8 2-65.4.6-1.8 2.6-3.9 1.1-5.5-1.4-1.6-4.1-.9-6.3-.7-2.1.2-3.9 1.2-5.5 2.4-2.6 1.8-5.1 3.8-7.6 5.8-18.2 14.4-31.9 32.3-40.8 53.7-7.4 18-11 36.8-12.3 56.2-2.8 40.6 8.6 76 37.4 105.4 15.7 16.1 33.2 29.7 52.2 41.6 26.4 16.6 55.1 26.1 86.4 27.1 25.7.8 50.3-4.4 74.7-11.9 19.1-5.9 37.4-13.6 53.1-26 33.1-26.2 53.5-60.7 62-101.7 9.1-44.4 5.3-88.1-10.5-130.6zM272.2 32.2c7.8.1 14.1 6.6 13.9 14.4-.1 7.8-6.6 14.1-14.4 13.9-7.8-.1-14.1-6.6-13.9-14.4.2-7.7 6.6-14 14.4-13.9zm158.4 333.6c-3.9 21.3-10.8 41.8-22.5 60.1-7.9 12.4-16.9 23.7-28 33.9-18.7 17.2-40.7 27.1-64.3 34.6-25.3 8.1-51.1 12.3-77.5 10.2-14.7-1.2-29.1-4.5-43-10.3-7.7-3.2-15.1-6.6-22.6-10.3-8.2-4-15.7-9-22.9-14.4-7.2-5.3-15.1-9.4-21.7-15.5-13.5-12.7-26.8-25.4-36.2-41.8-5.3-9.1-9-18.8-11.6-28.8-3.5-13.9-5.1-28-3.9-42.5.7-8.7 1.4-17.3 3.2-25.8 2.5-11.8 5.4-23.5 11.7-34.2 4.6-7.9 8.2-16.3 13.8-23.6 6.2-8 13.5-15 20.8-21.9 1.1-1.1 2.8-2.4 4.2-1.8 1.8.8.7 2.8.5 4.3-1.7 11.2-2.6 22.4-1.8 33.7.5 6.6.8 13.3 2.8 19.5 5.9 18.6 20.2 30.7 42.3 25.2 9.1-2.3 15.8-6.9 20.6-14.1 4.6-6.8 6.6-14.8 8.4-23 2.3-10.5 2-20.9 2.9-31.3.5-6.5.3-13 .4-19.5.1-9 .3-18 0-27-.3-10.5.7-21 2.9-31 3-13.6 6.6-27.1 12.6-39.9 8.1-17.4 22.5-27.1 38.6-35.4.9-.5 1.7-.8 2.8-.6 8.1 1.2 16.2.4 24.1-1.8 1.4-.4 2.9-.5 4.3-.5 2.6 0 4 .2 2.4 3.8-4.5 9.7-9.1 19.4-12.2 29.6-4.4 14.7-5.6 29.9-3 45.4 2.7 15.9 8.8 30.2 17.5 43.4 11.3 17.1 25.9 31.1 43.4 41.7 5.6 3.4 12.2 5.2 19.1 1.8 4.5-2.3 6.7-6.2 8.7-10.3 3.5-7.4 3.8-15.5 4.2-23.4.7-15.2.7-30.4-1.2-45.6-.7-5.3-.9-10.6-1.3-15.8.4-.1.7-.2 1.1-.4 5.8 6.4 11.2 13.2 16.2 20.2 7.8 10.9 14.9 22.3 21 34.3 5.9 11.6 11 23.5 15.1 35.9 3.4 10.2 5.6 20.6 8.1 31 1.8 7.2 1.9 14.6 2.8 21.9 2 20 .8 40.1-2.8 60z"
                      style="fill:#1d1d1b" />
                  </svg>
                </div>
                <div style="width: calc(10% - 2px)">&nbsp;</div>
                <div style="width: calc(10% - 2px)">&nbsp;</div>
                <div style="width: calc(10% - 2px)">&nbsp;</div>
                <div style="width: calc(10% - 2px)">&nbsp;</div>
                <div style="width: calc(10% - 2px)">&nbsp;</div>
                <div style="width: calc(10% - 2px)">&nbsp;</div>
                <div style="width: calc(10% - 2px)">&nbsp;</div>
                <div style="width: calc(10% - 2px)">&nbsp;</div>
              </div><!-- row-->
            </div> <!--gummies keyboard-->
          </div>
        </div>
      </div>
    </div>

    <div class="collar-container">
      <div id="vaciar-collar" onclick="emptyGummies();$gummiesArray=[]"><svg aria-hidden="true" focusable="false"
          data-prefix="far" data-icon="trash-alt" class="svg-inline--fa fa-trash-alt fa-w-14" role="img"
          xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path fill="#fff"
            d="M268 416h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12zM432 80h-82.41l-34-56.7A48 48 0 0 0 274.41 0H173.59a48 48 0 0 0-41.16 23.3L98.41 80H16A16 16 0 0 0 0 96v16a16 16 0 0 0 16 16h16v336a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128h16a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16zM171.84 50.91A6 6 0 0 1 177 48h94a6 6 0 0 1 5.15 2.91L293.61 80H154.39zM368 464H80V128h288zm-212-48h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12z">
          </path>
        </svg></div>
      <div class="collar-gummy">
        <div class="chaquiron" style="background: rgb(234, 243, 246);">&nbsp;</div>
        <div class="chaquiron" style="background: rgb(116, 204, 244);">&nbsp;</div>
        <div class="chaquiron" style="background: rgb(95, 205, 120);">&nbsp;</div>
        <div class="separador">&nbsp;</div>
        <div class="chaquiron" style="background: rgb(242, 242, 85);">&nbsp;</div>
        <div class="chaquiron" style="background: rgb(255, 165, 21);">&nbsp;</div>
        <div class="chaquiron" style="background: rgb(249, 6, 6);">&nbsp;</div>
        <div class="separador">&nbsp;</div>
        <div class="chaquiron" style="background: rgb(243, 180, 240);">&nbsp;</div>
        <div class="chaquiron" style="background: rgb(217, 124, 223);">&nbsp;</div>
        <div class="chaquiron" style="background: rgb(234, 243, 246);">&nbsp;</div>
        <div class="separador">&nbsp;</div>
        <div class="chaquiron" style="background: rgb(116, 204, 244);">&nbsp;</div>
        <div class="chaquiron" style="background: rgb(95, 205, 120);">&nbsp;</div>
        <div class="chaquiron" style="background: rgb(242, 242, 85);">&nbsp;</div>
        <div class="separador">&nbsp;</div>
        <div class="chaquiron" style="background: rgb(255, 165, 21);">&nbsp;</div>
        <div class="chaquiron" style="background: rgb(249, 6, 6);">&nbsp;</div>
        <div class="chaquiron" style="background: rgb(243, 180, 240);">&nbsp;</div>
        <div class="separador">&nbsp;</div>
        <div class="chaquiron" style="background: rgb(217, 124, 223);">&nbsp;</div>
        <div class="chaquiron" style="background: rgb(234, 243, 246);">&nbsp;</div>
        <div class="chaquiron" style="background: rgb(116, 204, 244);">&nbsp;</div>
        <div class="separador">&nbsp;</div>
        <div class="chaquiron" style="background: rgb(95, 205, 120);">&nbsp;</div>
        <div class="chaquiron" style="background: rgb(242, 242, 85);">&nbsp;</div>
        <div class="chaquiron" style="background: rgb(255, 165, 21);">&nbsp;</div>
        <div class="separador">&nbsp;</div>
        <div class="chaquiron" style="background: rgb(249, 6, 6);">&nbsp;</div>
        <div class="chaquiron" style="background: rgb(243, 180, 240);">&nbsp;</div>
        <div class="chaquiron" style="background: rgb(217, 124, 223);">&nbsp;</div>
      </div>
      <div id="gummies-container">
        <div id="gummy-9" class="gummy gummy-color-rojo" onclick="deleteGummy(0)">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 81.67 61.09" class="gummy-color-rojo">
            <defs>
              <style>
                .rainbow-1 {
                  fill: #1e1e1c;
                }

                .rainbow-2 {
                  fill: #c798ff;
                }

                .rainbow-3 {
                  fill: #00cefb;
                }

                .rainbow-4 {
                  fill: #ffeb00;
                }

                .rainbow-5 {
                  fill: #f8000c;
                  stroke: #1d1e1c;
                  stroke-miterlimit: 10;
                  stroke-width: 0.25px;
                }
              </style>
            </defs>
            <g id="Layer_2" data-name="Layer 2">
              <g id="Layer_1-2" data-name="Layer 1">
                <path class="rainbow-1"
                  d="M81.42,48.83a40.27,40.27,0,0,0-3.64-15.41c-.22-.47-.44-.94-.68-1.4-.09-.19-.18-.38-.28-.56a2,2,0,0,0-.15-.29l0-.06L76.57,31c-.13-.25-.26-.5-.4-.75l0,0-.06-.11-.3-.52a0,0,0,0,0,0,0l-.38-.64c-.13-.22-.26-.43-.4-.64-.32-.54-.67-1.06-1-1.57l-.38-.54c-.26-.37-.52-.72-.78-1.07l-.35-.45,0,0c-.28-.37-.58-.74-.88-1.09-.09-.11-.18-.22-.28-.32-.34-.42-.71-.83-1.08-1.23l-.28-.3c-.36-.39-.74-.78-1.12-1.15,0,0,0,0,0,0-.44-.44-.9-.86-1.36-1.27l-.12-.11c-.42-.38-.84-.74-1.27-1.09l-.27-.22c-.42-.34-.85-.67-1.28-1l-.31-.23L63.37,16l-.32-.22-.51-.34-1.06-.68-.26-.15c-.4-.25-.81-.48-1.22-.71l-.36-.2c-.36-.2-.72-.39-1.08-.56a2.29,2.29,0,0,0-.31-.16l0,0-.05,0-.62-.29-1.06-.49c-.6-.26-1.21-.51-1.83-.74-1.31-.49-2.64-.91-4-1.27A39,39,0,0,0,44,9l0,0a5.37,5.37,0,1,0-7.8.11l0,0a40.1,40.1,0,0,0-14,4.39C8.9,20.52,1.49,31.67.16,46.7c-.4,4.56.09,9.13,0,13.69,0,.41.1.59.26.67h0a2.82,2.82,0,0,0,.59,0c9.81-.2,19.62-.41,29.43-.58.83,0,.95-.29.92-1-.09-3.1-.18-6.2-.19-9.29,0-5.54,3.93-9.82,9-9.86h.14l.59,0a6.2,6.2,0,0,1,.62.06l.6.1.59.14a7.68,7.68,0,0,1,1.23.4c.19.07.36.15.54.23l.05,0,0,0h0A9.53,9.53,0,0,1,45.8,42a4.06,4.06,0,0,1,.36.26l.38.29a4.15,4.15,0,0,1,.32.27l0,.05c.14.12.27.25.4.38a4,4,0,0,1,.34.38,3.07,3.07,0,0,1,.29.34c.12.15.24.31.35.47s.23.34.33.51l.08.14c.07.12.14.25.2.38a2.53,2.53,0,0,1,.18.37.09.09,0,0,1,0,.06,5.89,5.89,0,0,1,.24.58c0,.1.07.19.1.29a2.46,2.46,0,0,1,.09.29,5.51,5.51,0,0,1,.22.89,4.21,4.21,0,0,1,.09.49h0v0a4.78,4.78,0,0,1,.06.53.57.57,0,0,1,0,.13A7,7,0,0,1,50,50c-.06,3,.13,6,.14,9.06,0,.56.11.85.44,1a1.68,1.68,0,0,0,.53,0c4.92-.14,9.85-.22,14.77-.32s9.85-.21,14.78-.27c.77,0,1.09-.12,1.06-1C81.54,55.27,81.55,52.05,81.42,48.83ZM40,3.72a1.65,1.65,0,1,1-1.65,1.65A1.64,1.64,0,0,1,40,3.72Z">
                </path>
                <path class="rainbow-2"
                  d="M57.3,56.15c0,.82-.24,1-1,1-.9-.07-2,.32-2.8.11a1.07,1.07,0,0,1-.4-.26c-.57-.63-.21-2.11-.25-3.22,0-.47,0-1,0-1.68a26.68,26.68,0,0,0-.3-4.85,12.5,12.5,0,0,0-7.36-8.93,10.64,10.64,0,0,0-1.34-.47l-.76-.19-.44-.07-.11,0a3.31,3.31,0,0,0-.55-.07,10.11,10.11,0,0,0-2.46,0c-6.46.67-11.09,5.94-11.13,12.69,0,2.22.06,4.45.14,6.67,0,.65-.1.93-.82.89s-1.83.21-2.55.1h0l-.15,0h-.08a.82.82,0,0,1-.2-.12c-.69-.54-.26-2-.26-3.06,0-3.08-.39-6.17.46-9.23,2.15-7.68,9.78-13,17.35-12.11l.79.11c.53.09,1,.2,1.54.33l.15,0c.45.12.9.26,1.33.41.21.07.43.15.64.24l.6.25h0a16.26,16.26,0,0,1,9.8,14.54C57.2,51.46,57.19,53.81,57.3,56.15Z">
                </path>
                <path class="rainbow-3"
                  d="M63.51,57c-.88-.08-2,.3-2.73.09L60.6,57a1.37,1.37,0,0,1-.18-.16c-.55-.58-.2-2-.23-3.09-.12-3.45.07-6.9-1.09-10.25a19.62,19.62,0,0,0-9.84-11.23h0a.09.09,0,0,0-.06,0l-.29-.13-.62-.29-1-.4a20,20,0,0,0-2-.62A19.15,19.15,0,0,0,39,30.3,19.5,19.5,0,0,0,21.62,46.53c-.53,3.27-.14,6.58-.07,9.87,0,1.08-.13,1.6-1.35,1.45-.76-.09-1.75.19-2.39,0l-.1,0a.91.91,0,0,1-.16-.11c-.64-.56-.23-1.86-.25-2.84-.07-3.8-.34-7.6.67-11.36A23.68,23.68,0,0,1,41.56,26a22.6,22.6,0,0,1,3,.26c.61.1,1.23.22,1.83.37.38.09.76.2,1.12.31s.84.26,1.25.41l.24.09.4.16.08,0,.26.1.48.22.22.1A23.86,23.86,0,0,1,63.77,44.69a38,38,0,0,1,.57,7.22c0,1.35,0,2.7.1,4.05C64.48,56.69,64.35,57.05,63.51,57Z">
                </path>
                <path class="rainbow-4"
                  d="M71.59,56.22c0,.48-.17.64-.61.59a1.92,1.92,0,0,0-.24,0C70,56.82,69,57,68.3,57a1.26,1.26,0,0,1-.28,0,.6.6,0,0,1-.19-.06,1,1,0,0,1-.22-.13c-.7-.56-.24-2.08-.27-3.17-.09-4.09-.08-8.16-1.38-12.13A26.53,26.53,0,0,0,53.38,26.34l-.08,0c-.39-.21-.78-.41-1.18-.6h0c-.43-.2-.85-.4-1.29-.58-.59-.26-1.2-.48-1.82-.69a26.14,26.14,0,0,0-10.49-1.27A26.56,26.56,0,0,0,14.57,45.4C14,49.2,14.36,53,14.4,56.81c0,.93-.2,1.26-1.14,1.17a25.26,25.26,0,0,1-2.54.1L10.56,58l-.18-.14c-.63-.61-.18-2-.24-3,0-.71,0-1.43-.05-2.14A32.1,32.1,0,0,1,13.9,34.62a30.81,30.81,0,0,1,32-15.38c.79.13,1.57.28,2.33.47q.59.13,1.14.3l1.13.35c.37.12.74.25,1.1.39.7.26,1.38.54,2.06.86A30.93,30.93,0,0,1,70.9,43.86C71.67,48,71.39,52.1,71.59,56.22Z">
                </path>
                <path class="rainbow-5"
                  d="M78.29,56.21c-.31.28-1,.23-1.71.19a9.57,9.57,0,0,0-1.31,0,.81.81,0,0,1-.32,0c-.08-.07-.08-.41-.08-.56,0-2.33-.07-4.69-.13-6.91A33.88,33.88,0,0,0,57.47,20c-.69-.39-1.39-.75-2.11-1.09s-1.65-.75-2.51-1.08c-.44-.17-.89-.33-1.34-.48s-.91-.3-1.38-.44-1-.29-1.51-.41A34,34,0,0,0,7.06,44.8a57.46,57.46,0,0,0-.23,9.44c0,.92.06,1.83.07,2.74a1.1,1.1,0,0,1-.13.71q-.13.14-.66.09a12,12,0,0,0-2.33,0,1.13,1.13,0,0,1-.31,0h0s-.09-.16-.09-.53c0-1.06,0-2.13,0-3.37,0-.55,0-1.14,0-1.78v0a36.78,36.78,0,0,1,4.32-20C15,18.57,28.81,11,43.63,12.34c1.47.14,2.91.34,4.3.6q1.24.24,2.46.54c1.17.3,2.31.64,3.42,1,.38.13.76.27,1.13.42.61.24,1.2.49,1.79.76s1.16.56,1.72.85h0q11.83,6.28,17.64,21.3a38.43,38.43,0,0,1,2.21,14.37c0,.17,0,.33,0,.49s0,.39,0,.58a8.6,8.6,0,0,0,.1,1.22C78.51,55.22,78.61,55.94,78.29,56.21Z">
                </path>
              </g>
            </g>
          </svg>
        </div>
        <div id="gummy-G" class="gummy gummy-color-rojo" onclick="deleteGummy(1)">G</div>
        <div id="gummy-U" class="gummy gummy-color-rosa-fuerte" onclick="deleteGummy(2)">U</div>
        <div id="gummy-M" class="gummy gummy-color-rosa-pastel" onclick="deleteGummy(3)">M</div>
        <div id="gummy-M" class="gummy gummy-color-lila" onclick="deleteGummy(4)">M</div>
        <div id="gummy-Y" class="gummy gummy-color-morado" onclick="deleteGummy(5)">Y</div>
        <div id="gummy-8" class="gummy gummy-color-morado" onclick="deleteGummy(6)">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60.77 61.38" class="gummy-color-rojo">
            <defs>
              <style>
                .corazon-1 {
                  fill: #1e1e1c;
                }

                .corazon-2 {
                  fill: #ff0d1a;
                }

                .corazon-3 {
                  fill: #ffa0f0;
                }

                .corazon-4 {
                  fill: #fc0f7d;
                }
              </style>
            </defs>
            <g id="Layer_2" data-name="Layer 2">
              <g id="Layer_1-2" data-name="Layer 1">
                <path class="corazon-1"
                  d="M60.17,21.27A16.65,16.65,0,0,0,49.74,9.72l-.11,0h0a5.35,5.35,0,0,0-1-9.28,4.58,4.58,0,0,0-.91-.28A5.49,5.49,0,0,0,46.6,0a5.36,5.36,0,0,0-5.37,5.37,5.43,5.43,0,0,0,1.21,3.41,16.74,16.74,0,0,0-8.86,3.53A29.19,29.19,0,0,0,30.67,15l-.31.32-.07-.07,0,0-1.59-1.56c-.18-.18-.37-.35-.56-.52s-.37-.33-.56-.49-.57-.46-.86-.68l-.49-.36c-.33-.23-.66-.44-1-.64l-.6-.36L24,10.38l-.73-.33a15.28,15.28,0,0,0-1.6-.58,17.26,17.26,0,0,0-7.78-.42A16.69,16.69,0,0,0,0,25.46v.08A17.31,17.31,0,0,0,5.21,37.91L20.94,53.57l6.58,6.55.26.25a4.35,4.35,0,0,0,.92.64l.33.14.24.08a3.68,3.68,0,0,0,1,.15A3.78,3.78,0,0,0,33,60.25L39.29,54c5.53-5.53,11.25-11.25,16.8-17A15.87,15.87,0,0,0,60.17,21.27ZM46.5,3.69a1.42,1.42,0,0,1,.42.06l.22.07A1.64,1.64,0,0,1,46.6,7,1.42,1.42,0,0,1,46.18,7L46,6.88a1.61,1.61,0,0,1-1.11-1.54A1.65,1.65,0,0,1,46.5,3.69Z">
                </path>
                <path class="corazon-2"
                  d="M57.75,21.89c-.06-.24-.13-.47-.2-.7a7,7,0,0,0-.24-.69c-.05-.15-.11-.29-.17-.43a4.87,4.87,0,0,0-.24-.57c-.11-.23-.21-.45-.33-.67a0,0,0,0,0,0,0s0,0,0,0-.14-.27-.22-.4-.21-.36-.32-.54-.22-.35-.34-.52l-.42-.58c-.14-.18-.29-.37-.45-.55a4.48,4.48,0,0,0-.36-.4l-.1-.11c-.16-.18-.33-.36-.51-.53l-.45-.42-.2-.17-.47-.4-.51-.37c-.39-.27-.8-.53-1.22-.77a13,13,0,0,0-1.5-.73l-.26-.1L48.64,12l-.1,0c-.35-.12-.7-.22-1-.31s-.58-.14-.87-.19L46,11.33l-.65-.08-.66,0h-.33a.22.22,0,0,1-.08,0H44c-.3,0-.6,0-.89,0s-.6,0-.89.08a13.15,13.15,0,0,0-1.75.33l-.57.16-.42.13a3.66,3.66,0,0,0-.43.15l-.53.2a14.1,14.1,0,0,0-1.9,1c-.17.1-.34.2-.5.31l-.05,0-.46.32c-.17.12-.34.24-.5.37a27.08,27.08,0,0,0-2.66,2.51l-.92.93a1.7,1.7,0,0,1-1.19.55h0a1.5,1.5,0,0,1-.44-.07h0a1.75,1.75,0,0,1-.83-.54c-.68-.71-1.39-1.41-2.1-2.1a16.46,16.46,0,0,0-3.48-2.62,14,14,0,0,0-1.77-.81c-.19-.07-.37-.14-.56-.19l-.57-.17h0A14.29,14.29,0,0,0,17,11.29a18.21,18.21,0,0,0-2.71.22,14.19,14.19,0,0,0-11.77,14A14.61,14.61,0,0,0,7,36.14L22.7,51.79l6.59,6.56.18.18a1.54,1.54,0,0,0,.46.29l.15,0a1.27,1.27,0,0,0,1.15-.39l6.29-6.3c5.53-5.52,11.24-11.24,16.78-16.93A13.33,13.33,0,0,0,57.75,21.89ZM47.31,37.35c-3.54,3.63-7.18,7.28-10.7,10.8l-4,4a2.87,2.87,0,0,1-2,.86,2.68,2.68,0,0,1-.84-.13l-.2-.07a2.88,2.88,0,0,1-1-.62L28.32,52l-4.51-4.49-9.7-9.66a11.42,11.42,0,0,1-3.45-8.2v-.06a11.08,11.08,0,0,1,9.21-10.89,12.7,12.7,0,0,1,2.1-.16h.11a3.17,3.17,0,0,1,.44,0h.1a.16.16,0,0,0,.07,0H23l.15,0h.11l.3,0,.49.08a5,5,0,0,1,.65.14c.31.08.62.18.92.29l.57.22.49.22.25.13.18.09.05,0,0,0,0,0,.13.07.22.12.14.09.39.25c.23.15.46.32.68.49l0,0,.16.13.16.13c.26.21.51.44.76.68s.41.4.61.61a17,17,0,0,1,1.75-1.61c.22-.17.44-.33.66-.47s.38-.25.58-.36c0,0,0,0,0,0s.2-.12.3-.18h0a5.59,5.59,0,0,1,.65-.32l.38-.17.43-.17.21-.08.23-.08.39-.11.25-.07h0l.11,0,.57-.12.16,0,.2,0,.16,0,.37-.05h.16l.32,0a1.07,1.07,0,0,1,.25,0h1.11a11,11,0,0,1,1.14.12l.57.11a2.42,2.42,0,0,1,.45.1,2.9,2.9,0,0,1,.48.14l.31.09.1,0a5.37,5.37,0,0,1,.56.21,5.17,5.17,0,0,1,.64.28l.55.28.49.29.23.15a9,9,0,0,1,1.06.77c.14.12.28.23.4.35l.39.37.36.38c.12.13.23.26.34.4s.23.28.33.42a11.59,11.59,0,0,1,1.1,1.82c.08.17.15.33.22.5s.12.28.17.43l.06.16c.11.31.2.63.29.95A10.55,10.55,0,0,1,47.31,37.35Z">
                </path>
                <path class="corazon-3"
                  d="M47.5,27.5a8.51,8.51,0,0,0-5-5.83l-.52-.19a4.36,4.36,0,0,0-.59-.17l-.56-.13a8.71,8.71,0,0,0-6.94,1.73,16.82,16.82,0,0,0-1.64,1.55l-.59.6a1.52,1.52,0,0,1-1.09.48,1.3,1.3,0,0,1-.41-.07.49.49,0,0,1-.17-.06,1.72,1.72,0,0,1-.61-.41c-.43-.45-.87-.89-1.32-1.33a9.7,9.7,0,0,0-2.47-1.78l-.39-.17a8.09,8.09,0,0,0-1.08-.37,3,3,0,0,0-.5-.11A9,9,0,0,0,22,21.1a10.26,10.26,0,0,0-1.63.14,8.57,8.57,0,0,0-7.12,8.47A9,9,0,0,0,14,33.2a9.25,9.25,0,0,0,2,2.95Q21.13,41.3,26.3,46.43l4,4,.12.09h0a.34.34,0,0,0,.32-.11q2-2,4-4c3.51-3.51,7.14-7.15,10.66-10.76A8.07,8.07,0,0,0,47.5,27.5Zm-8.87,9.55c-1.63,1.67-3.28,3.32-4.93,5l-1.9,1.9a2,2,0,0,1-1.41.6,1.76,1.76,0,0,1-.46-.06,1.31,1.31,0,0,1-.32-.1.82.82,0,0,1-.28-.14,1.5,1.5,0,0,1-.41-.28l-.11-.1-6.58-6.55A6,6,0,0,1,20.43,33v0a5.83,5.83,0,0,1,7.16-5.66,2.79,2.79,0,0,1,.39.1h0a6.32,6.32,0,0,1,.61.22,6.1,6.1,0,0,1,1.69,1.07,4,4,0,0,1,.38-.32,5.84,5.84,0,0,1,4.79-1.13l.35.08.37.11.1,0a5.81,5.81,0,0,1,3.76,4.07A5.6,5.6,0,0,1,38.63,37.05Z">
                </path>
                <path class="corazon-4"
                  d="M36.74,35.27c-1.64,1.69-3.3,3.35-5,5l-1.47,1.47-6.22-6.2A3.5,3.5,0,0,1,23,33a3.3,3.3,0,0,1,2.73-3.26,5.14,5.14,0,0,1,.66-.05,3.31,3.31,0,0,1,.95.14l.22.08a3.71,3.71,0,0,1,1.09.76l.6.6a1.28,1.28,0,0,0,.61.38l.05,0a1.34,1.34,0,0,0,1.4-.35l.28-.28a7,7,0,0,1,.7-.66,3.32,3.32,0,0,1,2.89-.62l.18.05c.13.05.27.1.39.16a3.25,3.25,0,0,1,1.76,2.16A3.07,3.07,0,0,1,36.74,35.27Z">
                </path>
              </g>
            </g>
          </svg>
        </div>
      </div>
    </div>



    <!-- <h4 id="phone-title">TelÃ©fono (10 digitos)</h4>
  <input type="phone" id="phone"> -->
    <div id="general-values" class="invisible">
      <label for="values-collar-size">TamaÃ±o Collar</label><br>
      <input type="text" id="values-collar-size" value="default"><br>
      <label for="values-collar-color">Color Gummys</label><br>
      <input type="text" id="values-gummys-color" value="default"><br>
      <label for="values-gummys-number">NÃºmero de gummys</label><br>
      <input type="number" id="values-gummys-number" value="0"><br>
    </div>`


const packKeyboard = `
<div class="pack-container">

  <!-- PACK HEADER -->
  <h2 class="pack-title">Pack Collar + Llavero</h2>

  <!-- PERSONALIZADOR 1 -->
  <div class="customizer">
    <h3>Personaliza el Collar</h3>
    <div class="customizer-body">
      ${charmsKeyboardHTML}
    </div>
  </div>

  <!-- SEPARADOR -->
  <hr class="separator">

  <!-- PERSONALIZADOR 2 -->
  <div class="customizer">
    <h3>Personaliza el Llavero</h3>
    <div class="customizer-body">
      ${gummysKeyboardHTML}
    </div>
  </div>
</div>
`


function enableAccordion() {
  const headers = document.querySelectorAll('.accordion-header');
  if (!headers.length) return; // todavía no existe el acordeón en el DOM

  headers.forEach(header => {
    header.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();

      const item = header.parentElement;
      const accordion = item.parentElement;

      accordion.querySelectorAll('.accordion-item').forEach(i => {
        if (i !== item) i.classList.remove('active');
      });

      item.classList.toggle('active');
    });
  });
}



//Start customization

function customizer(id) {
  //adjuntar hoja de estilos
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.type = 'text/css';
  link.href = 'https://sergiovarelab.github.io/wawas/styleWawas.css';
  document.head.appendChild(link);
  //adjuntar html2canvas 
  let scriptDom = document.createElement('script')
  scriptDom.src = "https://cdn.jsdelivr.net/npm/dom-to-image-more@2.8.0/dist/dom-to-image-more.min.js"
  scriptDom.crossorigin = "anonymous"
  scriptDom.referrerpolicy = "no-referrer"
  document.head.appendChild(scriptDom)

  //activar la captura si se activa el personalizador
  document.querySelector("button[id^='ProductSubmitButton']").addEventListener('click', capture)

  //crear el contenedor del personalizador
  wawasContainer = createWawasContainer(quantityInput)

  //ocultar variantes originales de la plantilla    
  quantityInput.style.visibility = "hidden"
  quantityInput.style.maxHeight = "0"

  //deshabilitar compras
  enableBuyButton(false);

  //agregar campos para enviar personalizador
  addCartPropertiesField()
  document.querySelector('#charmsForm').value = ""

  //cargar teclado personalizado segun id
  switch (id) {
    case 7340949438614: //collar-de-charms
      myLog(currentSlug)
      $charmsArray = [['C', 11], ['H', 12], ['A', 13], ['R', 14], ['M', 15], ['S', 16], ['1', 17], ['2', 18], ['#', 19]]
      wawasContainer.innerHTML = charmsKeyboardHTML
      document.querySelector('#charm-container').innerHTML = renderCharms($charmsArray)
      document.querySelector('.size-xs').style.display = "none"
      document.querySelector('.size-sml').style.display = "none"
      document.querySelector('#color20').classList.remove('hidden')/*Activar charms glitter */
      document.querySelector('#color21').classList.remove('hidden')/*Activar charms glitter */
      changeCollarSize('s', false)
      changeCollarColor('collar1', 'Naranja Neon', false)
      changeKeysColor('color11')
      // document.querySelector(`input[value='5']+label`).click()
      //detectar el numero de digitos del telefono
      document.querySelector('#phone').addEventListener('input', updateCharms)
      enableBuyButton(false)
      document.querySelector('#charmsForm').value = ""
      break;
    case 9117785129193: //collar-de-charms-mini
      myLog(currentSlug)
      $charmsArray = [['C', 11], ['H', 12], ['A', 13], ['R', 14], ['M', 15], ['S', 16], ['1', 17], ['2', 18], ['#', 19]]
      wawasContainer.innerHTML = charmsKeyboardHTML
      document.querySelector('#charm-container').innerHTML = renderCharms($charmsArray)
      document.querySelector('.color-keyboard').style.display = "none"
      document.querySelector('.new-color-keyboard').style.display = "flex"
      document.querySelector('#keyboard-container').classList.replace('charms-sml', 'charms-xs')
      document.querySelector('#color20').classList.remove('hidden')/*Activar charms glitter */
      document.querySelector('.size-s').style.display = "none"
      document.querySelector('.size-m').style.display = "none"
      document.querySelector('.size-l').style.display = "none"
      document.querySelector('.size-xl').style.display = "none"
      document.querySelector('.size-sml').style.display = "none"
      displayCharms($charmsArray)
      changeCollarSize('xs', false)
      changeCollarColor('collar1', 'Naranja Neon', false)
      // document.querySelector(`input[value='5']+label`).click()
      //detectar el numero de digitos del telefono
      document.querySelector('#phone').addEventListener('input', updateCharms)
      changeKeysColor('color11')
      enableBuyButton(false)
      break;
    case 7820838174870: //charms-extra-xs
      myLog(currentSlug)
      $charmsArray = [['C', 11], ['H', 12], ['A', 13], ['R', 14], ['M', 15], ['S', 16], ['1', 17], ['2', 18], ['#', 19]]
      wawasContainer.innerHTML = charmsKeyboardHTML
      document.querySelector('#charm-container').innerHTML = renderCharms($charmsArray)
      document.querySelector('.size-s').style.display = "none"
      document.querySelector('.size-m').style.display = "none"
      document.querySelector('.size-l').style.display = "none"
      document.querySelector('.size-xl').style.display = "none"
      document.querySelector('#size-title').style.display = "none"
      document.querySelector('#size-container').style.display = "none"
      document.querySelector('.collar-title').style.display = "none"
      document.querySelector('.color-collar').style.display = "none"
      document.querySelector('.collar').style.display = "none"
      document.querySelector('.elije-charms').style.display = "none"
      document.querySelector('.new-color-keyboard').style.display = "none"
      document.querySelector('.color-keyboard').style.display = "flex"
      document.querySelector('#charm-container').classList.add('charms-sueltos')
      changeCollarSize('xs', false)
      enableBuyButton(false)
      changeKeysColor('color1')
      minCharms = 1
      maxCharms = 100
      break;
    case 7319719280790: //charms-extra
      myLog(currentSlug)
      $charmsArray = [['C', 11], ['H', 12], ['A', 13], ['R', 14], ['M', 15], ['S', 16], ['1', 17], ['2', 18], ['#', 19]]
      wawasContainer.innerHTML = charmsKeyboardHTML
      document.querySelector('#charm-container').innerHTML = renderCharms($charmsArray)
      document.querySelector('.size-s').style.display = "none"
      document.querySelector('.size-m').style.display = "none"
      document.querySelector('.size-l').style.display = "none"
      document.querySelector('.size-xl').style.display = "none"
      /*document.querySelector('#size-title').style.display="none"          
      document.querySelector('#size-container').style.display="none"          */
      document.querySelector('.collar-title').style.display = "none"
      document.querySelector('.color-collar').style.display = "none"
      document.querySelector('.collar').style.display = "none"
      document.querySelector('.elije-charms').style.display = "none"
      document.querySelector('#charm-container').classList.add('charms-sueltos')
      document.querySelector('#color20').classList.remove('hidden')/*Activar charms glitter */
      document.querySelector('#color21').classList.remove('hidden')/*Activar charms glitter */
      changeCollarSize('sml', false)
      enableBuyButton(false)
      changeKeysColor('color11')
      minCharms = 1
      maxCharms = 100
      break;
    case 7804532261014: //pechera-y-correa-para-mascota-de-charms
      myLog(currentSlug)
      $charmsArray = [['P', 11], ['E', 12], ['C', 13], ['H', 14], ['E', 15], ['R', 16], ['A', 17], ['2', 18], ['8', 19]]
      wawasContainer.innerHTML = charmsKeyboardHTML
      document.querySelector('#charm-container').innerHTML = renderCharms($charmsArray)
      document.querySelector('#color20').classList.remove('hidden')/*Activar charms glitter */
      document.querySelector('#color21').classList.remove('hidden')/*Activar charms glitter */
      document.querySelector('#charm-container').innerHTML = renderCharms($charmsArray)
      document.querySelector('#size-title').innerHTML = "Elije el tamaÃ±o de tu pechera y los 15 charms"
      document.querySelector('#charm-key-phone').style.pointerEvents = "none"
      document.querySelector('#charm-key-phone').innerHTML = "&nbsp;"
      document.querySelector('.size-sml').style.display = "none"
      document.querySelector('.size-xs').style.display = "none"
      document.querySelector('.size-xl').style.display = "none"
      document.querySelector('.collar-title').style.display = "none"
      document.querySelector('.color-collar').style.display = "none"
      document.querySelector('.collar').style.display = "none"
      document.querySelector('.elije-charms').style.display = "none"
      document.querySelector('#charm-container').classList.add('charms-sueltos')
      changeCollarSize('s', false)
      enableBuyButton(false)
      changeKeysColor('color11')
      minCharms = 15
      maxCharms = 15
      break;
    case 7923429998742: //correa-de-charms
      myLog(currentSlug)
      $charmsArray = [['C', 11], ['O', 12], ['R', 13], ['R', 14], ['E', 15], ['A', 16], ['1', 17], ['2', 18], ['8', 19]]
      wawasContainer.innerHTML = charmsKeyboardHTML
      document.querySelector('#charm-container').innerHTML = renderCharms($charmsArray)
      document.querySelector('#color20').classList.remove('hidden')/*Activar charms glitter */
      document.querySelector('#color21').classList.remove('hidden')/*Activar charms glitter */
      document.querySelector('#charm-container').innerHTML = renderCharms($charmsArray)
      document.querySelector('#size-container').style.display = 'none'
      document.querySelector('#size-title').innerHTML = "Elije tus 15 charms"
      document.querySelector('#charm-key-phone').style.pointerEvents = "none"
      document.querySelector('#charm-key-phone').innerHTML = "&nbsp;"
      document.querySelector('.size-sml').style.display = "none"
      document.querySelector('.size-xs').style.display = "none"
      document.querySelector('.size-xl').style.display = "none"
      document.querySelector('.collar-title').style.display = "none"
      document.querySelector('.color-collar').style.display = "none"
      document.querySelector('.collar').style.display = "none"
      document.querySelector('.elije-charms').style.display = "none"
      document.querySelector('#charm-container').classList.add('charms-sueltos')
      changeCollarSize('s', false)
      enableBuyButton(false)
      changeKeysColor('color11')
      minCharms = 15
      maxCharms = 15
      break;
    case 8247523573910: //correa-para-gato-y-razas-chicas
      myLog(currentSlug)
      $charmsArray = [['C', 11], ['O', 12], ['R', 13], ['R', 14], ['E', 15], ['A', 16], ['1', 17], ['2', 18], ['8', 19]]
      wawasContainer.innerHTML = charmsKeyboardHTML
      document.querySelector('#charm-container').innerHTML = renderCharms($charmsArray)
      document.querySelector('#color20').classList.remove('hidden')/*Activar charms glitter */
      document.querySelector('#color21').classList.remove('hidden')/*Activar charms glitter */
      document.querySelector('#charm-container').innerHTML = renderCharms($charmsArray)
      document.querySelector('#size-container').style.display = 'none'
      document.querySelector('#size-title').innerHTML = "Elije tus 15 charms"
      document.querySelector('#charm-key-phone').style.pointerEvents = "none"
      document.querySelector('#charm-key-phone').innerHTML = "&nbsp;"
      document.querySelector('.size-sml').style.display = "none"
      document.querySelector('.size-xs').style.display = "none"
      document.querySelector('.size-xl').style.display = "none"
      document.querySelector('.collar-title').style.display = "none"
      document.querySelector('.color-collar').style.display = "none"
      document.querySelector('.collar').style.display = "none"
      document.querySelector('.elije-charms').style.display = "none"
      document.querySelector('#charm-container').classList.add('charms-sueltos')
      changeCollarSize('s', false)
      enableBuyButton(false)
      changeKeysColor('color11')
      minCharms = 15
      maxCharms = 15
      break;
    case 8289135952022: //llavero-de-charms
      myLog(currentSlug)
      $charmsArray = [['W', 11], ['A', 12], ['W', 13], ['A', 14], ['S', 15], ['1', 21]]
      wawasContainer.innerHTML = charmsKeyboardHTML
      document.querySelector('#charm-container').innerHTML = renderCharms($charmsArray)
      document.querySelector('#color20').classList.remove('hidden')/*Activar charms glitter */
      document.querySelector('#color21').classList.remove('hidden')/*Activar charms glitter */
      document.querySelector('#charm-container').innerHTML = renderCharms($charmsArray)
      document.querySelector('#size-container').style.display = 'none'
      document.querySelector('#size-title').innerHTML = "Elije tus 6 charms"
      document.querySelector('#charm-key-phone').style.pointerEvents = "none"
      document.querySelector('#charm-key-phone').innerHTML = "&nbsp;"
      document.querySelector('.size-sml').style.display = "none"
      document.querySelector('.size-xs').style.display = "none"
      document.querySelector('.size-xl').style.display = "none"
      document.querySelector('.collar-title').style.display = "none"
      document.querySelector('.color-collar').style.display = "none"
      document.querySelector('.collar').style.display = "none"
      document.querySelector('.elije-charms').style.display = "none"
      document.querySelector('#charm-container').classList.add('charms-sueltos')
      changeCollarSize('s', false)
      enableBuyButton(false)
      changeKeysColor('color11')
      minCharms = 6
      maxCharms = 6
      break;
    case 9120268222697: //llavero-de- testttttttt
      myLog(currentSlug)
      $charmsArray = [['C', 11], ['H', 12], ['A', 13], ['R', 14], ['M', 15], ['S', 16], ['1', 17], ['2', 18], ['#', 19]]
      wawasContainer.innerHTML = packKeyboard
      document.querySelector('#charm-container').innerHTML = renderCharms($charmsArray)
      document.querySelector('.size-xs').style.display = "none"
      document.querySelector('.size-sml').style.display = "none"
      document.querySelector('#color20').classList.remove('hidden')/*Activar charms glitter */
      document.querySelector('#color21').classList.remove('hidden')/*Activar charms glitter */
      changeCollarSize('s', false)
      changeCollarColor('collar1', 'Naranja Neon', false)
      changeKeysColor('color11')
      // document.querySelector(`input[value='5']+label`).click()
      //detectar el numero de digitos del telefono
      document.querySelector('#phone').addEventListener('input', updateCharms)
      enableBuyButton(false)
      document.querySelector('#charmsForm').value = ""
      window.$gummyColor = document.querySelector('#values-gummys-color')
      window.$qtyGummies = document.querySelector('#values-gummys-number')
      $gummyColor.value = 'rojo'
      changeGummysCollarSize('xs')
      break;
    case 7484253372566: //collar-de-charms-glow-in-the-dark
      myLog(currentSlug)
      $charmsArray = [['C', 10], ['H', 10], ['A', 10], ['R', 10], ['M', 10], ['S', 10], ['1', 10], ['2', 10], ['#', 10]]
      wawasContainer.innerHTML = charmsKeyboardHTML
      document.querySelector('#charm-container').innerHTML = renderCharms($charmsArray)
      document.querySelector('#charm-container').innerHTML = renderCharms($charmsArray)
      document.querySelector('.size-sml').style.display = "none"
      document.querySelector('.size-xl').style.display = "none"
      document.querySelector('.color-keyboard').style.display = "none"
      document.querySelector('.new-color-keyboard').style.display = "none"
      changeCollarSize('xs', false)
      changeCollarColor('collar1', 'Naranja Neon', false)
      changeKeysColor('color10')
      // document.querySelector(`input[value='5']+label`).click()
      enableBuyButton(false)
      break;
    case 9117784867049: //collar-de-gummies
      myLog('Inicializando collar de gummys')
      wawasContainer.innerHTML = gummysKeyboardHTML
      window.$gummyColor = document.querySelector('#values-gummys-color')
      window.$qtyGummies = document.querySelector('#values-gummys-number')
      $gummyColor.value = 'rojo'
      changeGummysCollarSize('xs')
      break;
    default:
      break;
  }
  enableAccordion();
}

//Shared functions
function enableBuyButton(enabled) {
  enabled ? buyButton.removeAttribute('disabled') : buyButton.setAttribute('disabled', true)
}

function myLog(message) {
  verbose ? console.log(message) : verbose = false
}

function createWawasContainer(node) {
  const $node = document.createElement('div')
  $node.innerHTML = 'ðŸ’œ'
  $node.setAttribute('id', 'pixelemos-variations')
  $node.setAttribute('class', currentSlug)
  node.parentElement.insertBefore($node, node.nextSibling)
  return $node
}


function enableAccordion() {
  const headers = document.querySelectorAll('.accordion-header');
  if (!headers.length) return; // todavía no existe el acordeón en el DOM

  headers.forEach(header => {
    header.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();

      const item = header.parentElement;
      const accordion = item.parentElement;

      accordion.querySelectorAll('.accordion-item').forEach(i => {
        if (i !== item) i.classList.remove('active');
      });

      item.classList.toggle('active');
    });
  });
}

function selectCollar(el) {
  document.querySelectorAll('.collar-option').forEach(c => c.classList.remove('active'));
  el.classList.add('active');
}


function removeActive() {
  let sizeButtons = document.querySelectorAll('.size-button')
  for (let sizeButton of sizeButtons) {
    sizeButton.classList.remove('active')
  }
}


function addCartPropertiesField() {
  let field = document.createElement('input')
  field.setAttribute('type', 'hidden')
  field.setAttribute('name', 'properties[_chars]')
  field.setAttribute('id', 'charmsForm')
  document.querySelector("form[id^='product-form-template-'] .product-form__buttons").parentElement.insertBefore(field, document.querySelector("form[id^='product-form-template-'] .product-form__buttons"))
  let idfield = document.createElement('input')
  idfield.setAttribute('type', 'hidden')
  idfield.setAttribute('name', 'properties[_id_pixelemos]')
  idfield.setAttribute('id', 'idPixelemos')
  document.querySelector("form[id^='product-form-template-'] .product-form__buttons").parentElement.insertBefore(idfield, document.querySelector("form[id^='product-form-template-'] .product-form__buttons"))
  let idfieldImg = document.createElement('input')
  idfieldImg.setAttribute('type', 'hidden')
  idfieldImg.setAttribute('name', 'properties[preview_image]')
  idfieldImg.setAttribute('id', 'imageProduct')
  document.querySelector("form[id^='product-form-template-'] .product-form__buttons").parentElement.insertBefore(idfieldImg, document.querySelector("form[id^='product-form-template-'] .product-form__buttons"))

}


async function getCart() {
  let x = await fetch('/cart.js')
  let y = await x.json()
  return y
}

//Charms functions
function updateCharms(caller) {
  myLog('Updated by: ' + caller)
  document.querySelector('#values-charms-number').value = $charmsArray.length
  if (currentSlug == 'charms-extra' || currentSlug == 'charms-extra-xs') {
    document.querySelector('.quantity__input').value = $charmsArray.length
  } else {
    if ($charmsArray.length >= minCharms && $charmsArray.length <= maxCharms && document.querySelector(`input[value='${$charmsArray.length}']+label`))
      document.querySelector(`input[value='${$charmsArray.length}']+label`).click()
  }
  //avanzar el termometro del telefono
  let phoneDigits = document.querySelector('#phone').value.length
  document.querySelector('#phone-level').style.width = phoneDigits * 10 + '%'
  document.querySelector('#phone-level').style.background = phoneDigits == 10 ? 'green' : 'red'
  myLog('Update: #charms: ' + $charmsArray.length + ' digitos: ' + phoneDigits)
  document.querySelector('#charmsForm').value = displayCharms($charmsArray)
  let telefono = (document.querySelector('#phone')) ? document.querySelector('#phone').value : ' No aplica'
  let general = `<div style="padding:16px">TamaÃ±o del collar: ${document.querySelector('#values-collar-size').value}<br>Color del collar: ${document.querySelector('#values-collar-color').value}<br>TelÃ©fono: ${telefono}</div>`
  if ($gummiesArray.length !== 0) {
    document.querySelector('#charmsForm').value = general + displayCharms($charmsArray) + displayGummies($gummiesArray)
  } else {
    document.querySelector('#charmsForm').value = general + displayCharms($charmsArray)
  }
  //desbloquear compras si los charms son >= que el minimo, <= maximo, si los digitos del telefono son 10 
  if (($charmsArray.length >= minCharms && $charmsArray.length <= maxCharms) && ((phoneDigits == 10 && phonecharm) || !phonecharm)) {
    myLog('Compras desbloqueadas')
    enableBuyButton(true)
  } else {
    myLog('Compras bloqueadas')
    enableBuyButton(false)
  }
}
function emptyCharms() {
  $charmsArray = [];
  document.querySelector('#values-charms-number').value = 0
  document.querySelector('#phone').value = ''
  phonecharm = false
  document.querySelector('#phone').style.display = 'none'
  document.querySelector('#phone-title').style.display = 'none'
  document.querySelector('#phone-level').style.display = 'none'
  document.querySelector('#charm-container').innerHTML = ''
  updateCharms('emptyCharms')
}

function addCharm(charm) {
  if ($charmsArray.length < maxCharms) {
    $charmsArray.push([charm, currentColor])
    document.querySelector('#charm-container').innerHTML = renderCharms($charmsArray)
    if (charm == '#') {
      phonecharm = true
      phoneNumber = document.querySelector('#phone').value
      document.querySelector('#phone').style.display = ''
      document.querySelector('#phone-title').style.display = ''
      document.querySelector('#phone-level').style.display = ''
      //document.querySelector(`input[value='Con']+label`).click()
    }
  }
  updateCharms('addCharm')
}
function renderCharms(array) {
  let html = ''
  let phone = false
  for (let j = 0; j < array.length; j++) {
    if (array[j][0] != '#') {
      html = html + '<span class="color' + (array[j][1]) + '" onclick="deleteCharm(' + j + ')">' + array[j][0] + '</span>'
    } else {
      phone = true
    }
  }
  if (phone) {
    html = html + '<span onclick="deletePhone()"><img class="phone-charm" src="https://cdn.shopify.com/s/files/1/0500/2946/1654/t/3/assets/phonecharm.png?v=2" alt="phone charm"></span>'
  }

  return html
}

function changeCollarColor(clave, color, update = true) {
  const $collar = document.querySelector('.collar')
  $collar.classList.remove('collar1', 'collar2', 'collar3', 'collar4', 'collar5', 'collar6')
  $collar.classList.add(clave)
  document.querySelector('#values-collar-color').value = color
  if (document.querySelector(`input[value='${color}']+label`)) document.querySelector(`input[value='${color}']+label`).click()
  if (update) updateCharms('changeCollarColor')
}

function changeKeysColor(color) {
  const $keys = document.querySelectorAll('.charms-keyboard .keyboard_key')

  for (const key of $keys) {
    key.setAttribute('class', '')
    key.classList.add('keyboard_key', color)
  }
  currentColor = parseInt(color.slice(5))
  myLog('Color actual: ' + currentColor)
}

function deleteCharm(charm) {
  $charmsArray.splice(charm, 1)
  document.querySelector('#charm-container').innerHTML = renderCharms($charmsArray)
  myLog(charm + ' eliminado')
  updateCharms('deleteCharm')
}

function deletePhone() {
  for (let x = 0; x < $charmsArray.length; x++) {
    if ($charmsArray[x].includes('#')) {
      charm = x
      break
    }
  }
  $charmsArray.splice(charm, 1)
  document.querySelector('#charm-container').innerHTML = renderCharms($charmsArray)
  document.querySelector('#phone').value = ''
  document.querySelector('#phone').style.display = 'none'
  document.querySelector('#phone-title').style.display = 'none'
  //document.querySelector(`input[value='Sin']+label`).click()
  console.log('telefono eliminado')
  phonecharm = false
  updateCharms('deletePhone')
}
function changeCollarSize(size, update = true) {
  console.log(size)
  document.querySelector('#values-collar-size').value = size;
  removeActive();
  document.querySelector('.size-' + size).classList.add('active')
  if (size == 'sml') document.querySelector(`input[value='normal']+label`).click()
  try {
    document.querySelector(`input[value='${size.toUpperCase()}']+label`).click()
  } catch (error) {
    console.warn('No existe el collar xs por el limite de variaciones o son charms sueltos');
    // Expected output: ReferenceError: nonExistentFunction is not defined
    // (Note: the exact output may be browser-dependent)
  }
  if (update) updateCharms('changeCollarSize')
  //desaparecer color dorado en charms xs
  if (currentSlug == "charms-extra" && size == 'xs') {
    document.querySelector('#color21').style.display = "none"
  } else if (currentSlug == "charms-extra" && size == 'sml') {
    document.querySelector('#color21').style.display = "block"
  }
}

function displayCharms(array) {
  let html = ''
  var phone = false
  for (let j = 0; j < array.length; j++) {
    if (array[j][0] != '#') {
      html = html + '<span class="color' + array[j][1] + '" style="color:' + numberToHex(array[j][1]) + '">' + array[j][0] + '</span>'
    } else {
      phone = true
    }
  }
  if (phone) {
    html = html + '<span><img class="phone-charm" src="https://cdn.shopify.com/s/files/1/0500/2946/1654/t/3/assets/phonecharm.png?v=2" alt="phone charm"></span>'
  }
  return `<div style="padding:16px">${html}</div><div>Captura:<br><img src="https://imagedelivery.net/vXE13JhqlXIbFcsT7hu9vQ/${getIdPixelemos()}/public"></div>`
}
function numberToHex(num) {
  num = parseInt(num)
  switch (num) {
    case 1:
      return '#702F6E'
    case 2:
      return '#94E1EE'
    case 3:
      return '#ffd10e'
    case 4:
      return '#0341AD'
    case 5:
      return '#52B33F'
    case 6:
      return '#FF952B'
    case 7:
      return '#E43C27'
    case 8:
      return '#FF1363'
    case 9:
      return '#FFD7E0'
    case 10:
      return '#18FB93'
    case 11:
      return '#ff015b'
    case 12:
      return '#ff64dc'
    case 13:
      return '#ba0000'
    case 14:
      return '#ff5a00'
    case 15:
      return '#e1ff00'
    case 16:
      return '#00ff51'
    case 17:
      return '#00d6ff'
    case 18:
      return '#1900fa'
    case 19:
      return '#a080ff'
  }
}
//Gummys functions

function changeGummysCollarSize(size, update = true) {
  document.querySelector('#values-collar-size').value = size;
  removeActive();
  document.querySelector('.size-' + size).classList.add('active')
  updateGummys('changeGummysCollarSize')
}
function emptyGummies() {
  document.querySelector('#gummies-container').innerHTML = ''
}

function addGummy(letter) {
  if ($gummiesArray.length < maxGummys) {
    myLog('addGummy:' + letter + ' ' + $gummyColor.value)
    $gummiesArray.push([letter, $gummyColor.value])
    renderGummies($gummiesArray)
    $qtyGummies.value = $gummiesArray.length
    updateGummys('addGummy')
  } else {
    myLog('demasiados gummies')
  }
  ($gummiesArray.length >= maxGummys && $gummiesArray.length <= minGummys) ? enableBuyButton(true) : enableBuyButton(false)
}

function renderGummies(gummiesArray) {
  emptyGummies()
  for (let [index, gummyElement] of gummiesArray.entries()) {
    gummy = document.createElement('div')
    gummy.setAttribute('id', 'gummy-' + gummyElement[0])
    gummy.setAttribute('class', 'gummy')
    gummy.classList.add('gummy-color-' + gummyElement[1])
    document.querySelector('#gummies-container').appendChild(gummy)
    gummy.innerHTML = document.querySelector('#gummyKey-' + gummyElement[0]).innerHTML
    /*gummy.querySelector('svg').removeAttribute('class')
    gummy.querySelector('svg').classList.add('gummy-color-'+gummyElement[1])*/
    gummy.setAttribute('onclick', 'deleteGummy(' + index + ')')
  }
}

function deleteGummy(index) {
  $gummiesArray.splice(index, 1)
  renderGummies($gummiesArray)
  myLog(index + ' eliminado')
  $qtyGummies.value = $gummiesArray.length
  updateGummys('deleteGummy')
  enableBuyButton(true)
}
function updateGummys(caller) {
  myLog(caller)
  document.querySelector('#charmsForm').value = `<div style="padding:16px">TamaÃ±o del collar: ${document.querySelector('#values-collar-size').value.toUpperCase()}</div>` + displayGummies($gummiesArray)
}

function changeGummiesColor(color) {
  $gummyColor.value = color
  const $keys = document.querySelectorAll('.keyboard .gummy svg')
  for (let x = 0; x < $keys.length; x++) {
    $keys[x].classList.remove('gummy-color-naranja', 'gummy-color-rojo', 'gummy-color-rosa-fuerte', 'gummy-color-rosa-pastel', 'gummy-color-lila', 'gummy-color-morado', 'gummy-color-azul-cielo', 'gummy-color-azul-fuerte', 'gummy-color-verde', 'gummy-color-verde-limon', 'gummy-color-amarillo')
    $keys[x].classList.add('gummy-color-' + color)
  }
  const $gkeys = document.querySelectorAll('.keyboard_key.gummy')
  for (let x = 0; x < $gkeys.length; x++) {
    $gkeys[x].className = ''//remover todas las clases
    $gkeys[x].classList.add('keyboard_key', 'gummy', 'gummy-color-' + color,)
  }
  currentGummyColor = color
  console.log('Color de Gummies: ' + currentGummyColor)
}

function displayGummies(array) {
  let html = ''
  for (let j = 0; j < array.length; j++) {
    if (array[j][0] != '#') {
      html = html + '<span class="gummy-color-' + array[j][1] + ' gummy-' + array[j][0] + '">' + array[j][0] + '</span>'
    } else {
      phone = true
    }
  }
  return `<div id="gummies" style="padding:16px">${html}</div><div>Captura:<br><img src="https://imagedelivery.net/vXE13JhqlXIbFcsT7hu9vQ/${getIdPixelemos()}/public"></div>`

}
function getIdPixelemos() {
  document.querySelector('#idPixelemos').value = currentSlug + '-' + Date.now();
  return document.querySelector('#idPixelemos').value;
}
/*Capturar pantalla y enviarla */
async function capture(event) {
  // Seleccionar el elemento que deseas capturar
  event.preventDefault();

  const productForm = event.target.closest('form');

  const finalImage = await getFinalCaptureImage();
  const idPixelemosInput = document.querySelector('#idPixelemos');
  // Obtener el valor del input #idPixelemos
  const idPixelemosValue = idPixelemosInput.value.trim();

  // Utilizar html2canvas para capturar el elemento como una imagen
  try {
    // html2canvas(elementToCapture).then(canvas => {
      // Obtener la URL de la imagen en formato base64
      // const imageData = canvas.toDataURL('image/webp');
      const imageBlob = dataURLtoBlob(finalImage);
      // Preparar los datos a enviar al servidor
      const formData = new FormData();
      formData.append('image_data', imageBlob, 'uploaded_image.webp');
      formData.append('idPixelemos', idPixelemosValue);
      console.log(formData)

      // Realizar la solicitud POST utilizando fetch
          fetch('https://shopify-image-uploader.sergioalberto-varelab.workers.dev', {
              method: 'POST',
              body: formData,
           })
          .then(response => {
              if (!response.ok) {
                  throw new Error('Error al enviar la imagen al servidor.');
              }
              return response.json(); // Convertir la respuesta a JSON
          })
          .then(data => {
              console.log(data)
              // Manejar la respuesta del servidor
              if (data.success && data.publicUrl) {
                  console.log('URL de la imagen generada:', data.publicUrl);
                  document.querySelector('#imageProduct').value = data.publicUrl
                  productForm.submit();
              } else {
                  throw new Error('Error al procesar la respuesta del servidor.');
              }
          })
          .catch(error => {
              console.error('Error en la solicitud fetch:', error);
          });

    // });
  } catch (error) {
    console.warn('Errores de captura: ' + error)
  }
}


async function getFinalCaptureImage() {
  // Obtiene todos los elementos marcados para capturar
  const elements = document.querySelectorAll(".collar-container");

  if (elements.length === 0) {
    console.error("No hay elementos para capturar.");
    return null;
  }

  // Capturar cada elemento como PNG usando tu librería actual (dom-to-image)
  const images = [];
  for (const el of elements) {
    const dataUrl = await domtoimage.toPng(el, { quality: 1 });
    images.push(dataUrl);
  }

  // Cargar las imágenes en objetos <img> para unirlas
  const loadedImages = await Promise.all(
    images.map(src => new Promise(resolve => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.src = src;
    }))
  );

  // Crear el canvas final (vertical stacking)
  const totalHeight = loadedImages.reduce((acc, img) => acc + img.height, 0);
  const maxWidth = Math.max(...loadedImages.map(img => img.width));

  const finalCanvas = document.createElement("canvas");
  finalCanvas.width = maxWidth;
  finalCanvas.height = totalHeight;

  const ctx = finalCanvas.getContext("2d");

  // Dibujar imágenes una debajo de otra
  let y = 0;
  loadedImages.forEach(img => {
    ctx.drawImage(img, 0, y);
    y += img.height;
  });

  // Retornar la imagen final como PNG
  return finalCanvas.toDataURL("image/webp");
}


/**
 * Convierte una cadena Data URI (ej: data:image/webp;base64,...) a un objeto Blob binario.
 * @param {string} dataurl - La cadena Base64 Data URI.
 * @returns {Blob} - El objeto Blob listo para FormData.
 */
function dataURLtoBlob(dataurl) {
    const arr = dataurl.split(',');
    const mime = arr[0].match(/:(.*?);/)[1]; // Obtiene 'image/webp'
    const bstr = atob(arr[1]); // Decodifica Base64 a cadena binaria
    let n = bstr.length;
    const u8arr = new Uint8Array(n);

    // Crea un array binario de bytes
    while(n--){
        u8arr[n] = bstr.charCodeAt(n);
    }
    
    return new Blob([u8arr], {type: mime});
}

