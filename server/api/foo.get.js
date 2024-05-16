export default defineEventHandler((event) => {
  return sendRedirect(event, 'https://topmate.io/henry_okonkwo/', 301);
});