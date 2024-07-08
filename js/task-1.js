const categoriesList = document.querySelector('#categories');
const items = categoriesList.querySelectorAll('.item');

console.log(`Total categories: ${items.length}`);

items.forEach(item => {
  const categoryName = item.querySelector('h2').textContent;
  const categoryItemsCount = item.querySelectorAll('ul li').length;
  
  console.log(`Category: ${categoryName}`);
  console.log(`Items count: ${categoryItemsCount}`);
});