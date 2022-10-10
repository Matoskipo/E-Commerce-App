export const formatPrice = (money) => {
  return new Intl.NumberFormat('en-NG',{
    style:'currency',
    currency:'NGN',
  }).format(money)

}

export const getUniqueValues = (data, type) => {
  let unique = data.map((item)=>item[type])
  if(type === 'colors'){
    unique = unique.flat()
  }
  return ['all',...new Set(unique)]
}
