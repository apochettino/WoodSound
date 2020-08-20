

let nombreClte = '';
let email = '';
let direccion = '';
let cantidadPallets;
let valorKm = 300;
let descPorCant;

object provincia(nombreProv, distancia) {
    this.pviaDestino = nombreProv;
    this.kmsDdeBsAs = distancia;
}
const BUENOSAIRES = new provincia('buenosAires', 700);
const CAPI = new provincia('caba', 40);
const CATAMARCA = new provincia('catamarca', 800);
const CHACO = new provincia('chaco', 600);
const CHUBUT = new provincia('chubut', 1000);
const CORDOBA = new provincia('cordoba', 400);
const CORRIENTES = new provincia('corrientes', 700);
const ENTRERIOS = new provincia('entreRios', 270);
const FORMOSA = new provincia('formosa', 1000);
const GRANBUENOSAIRESS = new provincia('gba', 60);
const JUJUY = new provincia('jujuy', 1300);
const LARIOJA = new provincia('laRioja', 1100);
const MENDOZA = new provincia('mendoza', 1200);
const MISIONES = new provincia('misiones', 1000);
const NQN = new provincia('neuquen', 1500);
const LAPAMPA = new provincia('laPampa', 400);
const RIONEGRO = new provincia('rioNegro', 850);
const SALTA = new provincia('salta', 1200);
const SANJUAN = new provincia('sanJuan', 1200);
const SANLUIS = new provincia('sanLuis', 700);
const SANTACRUZ = new provincia('santaCruz', 2500);
const SANTAFE = new provincia('santaFe', 500);
const SANTIAGOESTERO = new provincia('sgoDelEstero', 1000);
const USUAHIA = new provincia('tierraDelFuego', 3200);
const TUCUMAN = new provincia('tucuman', 1300);