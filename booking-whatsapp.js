const BRANCH_NUMBERS = {
  Kumbakonam: '917380478047',
  Karikulam: '916380453804'
};

export function formatTime12Hour(time24, { padHour = true } = {}) {
  if (!time24) return '';
  const parts = time24.split(':');
  const hours = parseInt(parts[0], 10);
  const minutes = parts[1] || '00';
  if (Number.isNaN(hours)) return time24;
  const period = hours >= 12 ? 'PM' : 'AM';
  const hour12 = hours % 12 || 12;
  const hourStr = padHour ? String(hour12).padStart(2, '0') : String(hour12);
  return hourStr + ':' + minutes + ' ' + period;
}

function formatBookingDate(dateValue) {
  if (!dateValue) return '';
  const [year, month, day] = dateValue.split('-').map(Number);
  if (!year || !month || !day) return dateValue;
  const date = new Date(year, month - 1, day);
  const dayLabel = String(day).padStart(2, '0');
  const monthLabel = date.toLocaleString('en-IN', { month: 'long' });
  return dayLabel + ' ' + monthLabel + ' ' + year;
}

function formatBookedAt() {
  const now = new Date();
  const day = now.getDate();
  const month = now.toLocaleString('en-IN', { month: 'short' });
  const year = now.getFullYear();
  const hours = now.getHours();
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const period = hours >= 12 ? 'PM' : 'AM';
  const hour12 = hours % 12 || 12;
  return day + ' ' + month + ' ' + year + ', ' + hour12 + ':' + minutes + ' ' + period;
}

function formatLabelLine(label, value) {
  return label.padEnd(9, ' ') + ': ' + value;
}

export function buildWhatsAppMessage({
  name,
  phone,
  branch,
  service,
  date,
  time,
  description,
  email
}) {
  const messageLines = [
    '🗓 New Appointment Booking',
    '',
    formatLabelLine('Name', name),
    formatLabelLine('Mobile', phone),
    formatLabelLine('Branch', branch),
    formatLabelLine('Service', service),
    formatLabelLine('Date', formatBookingDate(date)),
    formatLabelLine('Time', formatTime12Hour(time))
  ];

  if (description) messageLines.push(formatLabelLine('Notes', description));
  if (email) messageLines.push(formatLabelLine('Email', email));

  messageLines.push('', '✅ Booked at ' + formatBookedAt());

  return messageLines.join('\n');
}

export function openWhatsAppBooking(branchKey, message) {
  const number = BRANCH_NUMBERS[branchKey];
  if (!number) return false;
  const whatsappUrl = 'https://wa.me/' + number + '?text=' + encodeURIComponent(message);
  window.open(whatsappUrl, '_blank', 'noopener');
  return true;
}

export function validateBookingForm(fields) {
  const errors = [];

  if (!fields.name) {
    errors.push({ field: fields.nameField, message: 'Please enter your name.' });
  }
  if (!fields.phone) {
    errors.push({ field: fields.phoneField, message: 'Please enter your mobile number.' });
  } else if (!/^[0-9]{10}$/.test(fields.phone)) {
    errors.push({ field: fields.phoneField, message: 'Please enter a valid 10 digit mobile number.' });
  }
  if (!fields.branch) {
    errors.push({ field: fields.branchField, message: 'Please choose an outlet.' });
  }
  if (!fields.service) {
    errors.push({ field: fields.serviceField, message: 'Please choose a service.' });
  }
  if (!fields.date) {
    errors.push({ field: fields.dateField, message: 'Please choose your preferred date.' });
  }
  if (!fields.time) {
    errors.push({ field: fields.timeField, message: 'Please choose your preferred time.' });
  }

  return errors;
}
