// Placeholder details. Replace with the real ones.
export const CFG = {
  phone: '919876543210',        // digits only, with country code, for wa.me
  phoneShow: '+91 98765 43210',
  ig: 'candl.esbysisters',
  email: 'hello@candlesbysisters.example',
}
export const wa = (text) => `https://wa.me/${CFG.phone}?text=${encodeURIComponent(text)}`
export const igUrl = `https://instagram.com/${CFG.ig}`
