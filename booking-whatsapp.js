const BRANCH_BOOKING_URLS = {
  Karikulam: 'https://saloncapp.com/book/SCP000021/OhhEkJ8qaufPg49OtaORkYrjmTeDf6wq',
  Kumbakonam: 'https://saloncapp.com/book/SCP000022/sdIeCchyDe7oqafnjfQFVfybqPIjfyyb'
};

export function openBranchBooking(branchKey) {
  const bookingUrl = BRANCH_BOOKING_URLS[branchKey];
  if (!bookingUrl) return false;
  window.open(bookingUrl, '_blank', 'noopener');
  return true;
}
