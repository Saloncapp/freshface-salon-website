export const BOOKING_SERVICE_OPTIONS_HTML = `
  <option value="" disabled selected>What would you like to book?</option>
  <optgroup label="Hair">
    <option>Haircut &amp; Styling</option>
    <option>Coloring</option>
    <option>Chemical Treatment</option>
    <option>Hair Spa</option>
    <option>Scalp Treatment</option>
    <option>Head Massage</option>
    <option>Shave &amp; Beard</option>
  </optgroup>
  <optgroup label="Skin &amp; Facial">
    <option>Facial</option>
    <option>Cleanup</option>
    <option>De-Tan</option>
    <option>Waxing</option>
    <option>Threading</option>
    <option>Bleaching</option>
    <option>Hydra Facial</option>
    <option>Manicure</option>
    <option>Pedicure</option>
  </optgroup>
  <optgroup label="Makeup">
    <option>Bridal Makeup</option>
    <option>Party Makeup</option>
    <option>Mehendi</option>
    <option>Draping &amp; Styling</option>
  </optgroup>
  <optgroup label="FreshFace Herbals">
    <option>Herbal Hair Treatment</option>
    <option>Herbal Skin Treatment</option>
    <option>Herbal Shave</option>
  </optgroup>
  <optgroup label="Others">
    <option>Reflexology</option>
    <option>Piercing &amp; Mole Removal</option>
    <option>Grooming</option>
  </optgroup>
`;

export function initBookingServiceSelects(root) {
  const scope = root || document;
  scope.querySelectorAll('[data-service-select]').forEach(select => {
    select.innerHTML = BOOKING_SERVICE_OPTIONS_HTML;
  });
}
